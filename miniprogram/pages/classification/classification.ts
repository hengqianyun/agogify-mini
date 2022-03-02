import storeModule from "../../http/module/store";
import { checkloginAndRealNameCertifiedAsync } from "../../utils/checkLogin";

interface categoryInPage {
  name: string
  code: string[]
  id: number
}

type categoryChildrenMapInPage = {
  [key: string]: categoryInPage[]
}

// pages/classification/classification.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnDisabled: true,
    location: 'all',
    locationList: [] as storeDesign.dropdownOption[],
    shopClassification: 'all',
    shopClassificationList: [
      { text: '店铺类型', value: 'all' },
      { text: '专卖店', value: 'specialty_store' },
      { text: '百货商店', value: 'department_store' },
      { text: '买手店', value: 'buyer_store' },
      { text: '中古店', value: 'vintage_store' },
    ],
    classification: '全部',
    classificationList: [] as categoryInPage[],
    classificationChild: '全部',
    classificationChildList: [] as categoryInPage[],
    brandActiveKey: 0,
    brandList: [] as storeDesign.brand[],
    shopList: [] as storeDesign.checkboxStoreItem[],
    shopCheckStatusList: [] as number[],
    result: [] as number[],
    max: 5,
    loading: true,
    sortList: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    sortValue: 0,
    showSort: false,
    pageInfo: {
      page: 1,
      itemsPerPage: 6,
    },
    brandAndCategoryPageInfo: {
      page: 1,
      itemsPerPage: 1000,
    },
    showDialog: false,
    categoryChildrenMap: {} as categoryChildrenMapInPage
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    await Promise.all([this.queryBrand(), this.queryCities(), this.queryCategory()])
    await this.queryStore(1)
  },

  formateParams(type: number) {
    const params = { ...this.data.pageInfo } as storeDesign.QueryStoresParams
    if (type === 1) {
      params.page = 1
    }
    if (this.data.location !== 'all') {
      params['billingData.city.code'] = this.data.location
    }
    if (this.data.shopClassification !== 'all') {
      params["storeTaxons.taxon.code"] = this.data.shopClassification
    }
    if (this.data.brandActiveKey !== 0) {
      params["brands.translations.name"] = this.data.brandList[this.data.brandActiveKey].name
    }
    let strParamsList = []
    if (this.data.classification !== '全部') {
      if (this.data.classificationChild !== '全部') {
        const child = this.data.classificationChildList.find(e => e.name === this.data.classificationChild)
        strParamsList.push(child?.code.toString())
      } else {
        const category = this.data.classificationList.find(e => e.name === this.data.classification)
        strParamsList.push(category?.code.toString())
      }
      return strParamsList.join().split(',').map(e => 'storeTaxons.taxon.code[]=' + e).join('&')
    } else if (this.data.classificationChild !== '全部') {
      strParamsList.push(this.data.classificationList[0].code.toString())
      const child = this.data.classificationChildList.find(e => e.name === this.data.classificationChild)
      strParamsList.push(child?.code.toString())
      return strParamsList.join().split(',').map(e => 'storeTaxons.taxon.code[]=' + e).join('&')
    } else {
      return params
    }
  },

  handleCallClick() {
    wx.navigateTo({
      url: '/pages/waitingRoom/waitingRoom',
    })
  },

  handleCityChange({ detail }: WechatMiniprogram.TouchEvent) {
    this.setData({
      location: detail as unknown as string
    })
    this.queryStore(1)
  },

  handleShopClassificationChange({ detail }: WechatMiniprogram.TouchEvent) {
    this.setData({
      shopClassification: detail as unknown as string
    })
    this.queryStore(1)
  },

  handleClassifictionChange({ detail }: WechatMiniprogram.TouchEvent) {
    const { index, title } = detail as unknown as { index: number, name: string, title: string }
    this.setData({
      classification: title
    })
    const childList = this.data.categoryChildrenMap[this.data.classificationList[index].code.toString()]
    this.setData({
      classificationChildList: childList,
      classificationChild: childList[0].name
    })
    this.queryStore(1)
  },

  handleChildCategoryChange({ target }: WechatMiniprogram.TouchEvent) {
    const { name } = target.dataset as unknown as { index: number, name: string }
    this.setData({
      classificationChild: name
    })
    this.queryStore(1)
  },

  handleBrandChange({ detail }: WechatMiniprogram.TouchEvent) {
    const index = detail as unknown as number
    this.setData({
      brandActiveKey: index
    })
    this.queryStore(1)
  },

  handleCheckboxChange(e: WechatMiniprogram.TouchEvent) {
    const { detail } = e
    const { index } = e.currentTarget.dataset as { index: number }
    const status: storeDesign.checkBoxStatus = detail as unknown as storeDesign.checkBoxStatus
    if (status === 1 && this.data.result.length + 1 === this.data.max) {
      let list = this.data.shopList.map((item, i) => {
        if (item.status === 0) item.status = 2
        if (i === index) item.status = 1
        return item
      })
      this.setData({
        result: this.data.result.concat([index]),
        shopList: list
      })
    } else if (status === 0 && this.data.result.length === this.data.max) {
      let list = this.data.shopList.map((item, i) => {
        if (item.status === 2) item.status = 0
        if (i === index) item.status = 0
        return item
      })
      let resList = this.data.result.filter(e => e !== index)
      this.setData({
        result: resList,
        shopList: list
      })
    } else {
      let resList = this.data.result.filter(e => e !== index)
      if (resList.length === this.data.result.length) resList.push(index)
      this.setData({
        result: resList,
        ['shopList[' + index + '].status']: status
      })
    }
  },

  handleChatTap() {
    const ids = this.data.result.map(e => this.data.shopList[e])
    if (ids.length === 0) {
      return
    }
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.setStorageSync('reserveStores', ids);
    wx.navigateTo({
      url: '../salesChoose/salesChoose'
    })
  },

  handleReserveTap() {
    const ids = this.data.result.map(e => this.data.shopList[e])
    if (ids.length === 0) {
      return
    }
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.setStorageSync('reserveStores', ids);
    wx.navigateTo({
      url: '../reservePage/reservePage'
    })
  },

  handleSortBtnTap() {
    this.setData({
      showSort: !this.data.showSort
    })
  },

  handleHideSortList() {
    this.setData({
      showSort: false
    })
  },

  handleSortTap(event: WechatMiniprogram.TouchEvent) {

    const { index } = event.currentTarget.dataset as { index: number }
    this.setData({
      sortValue: index,
    })
  },

  async queryBrand() {
    const resData = await storeModule.queryBrand(this.data.brandAndCategoryPageInfo)
    const { 'hydra:member': list } = resData.data
    list.unshift({ name: '全部品牌', '@id': 'all', '@type': 'brand', 'code': 'all' })
    this.setData({
      brandList: list
    })
  },

  async queryCities() {
    const resData = await storeModule.queryCities({ page: 1, itemsPerPage: 999 })
    const { "hydra:member": list } = resData.data
    const optionList = list.map(item => {
      return {
        text: item.name,
        value: item.code
      }
    })
    optionList.push({ value: 'all', text: '全部城市' })
    this.setData({
      locationList: optionList
    })
  },

  async queryCategory() {
    const category = wx.getStorageSync<categoryInPage[]>('category')
    if (category) {
      this.setData({
        classificationList: category
      })
      const categoryMap = wx.getStorageSync<categoryChildrenMapInPage>('categoryMap')
      if (categoryMap) {
        this.setData({
          categoryChildrenMap: categoryMap,
          classificationChildList: categoryMap['all']
        })
      } else {
        this.queryCategoryChild()
      }
    } else {
      const resData = await storeModule.queryCategory(this.data.brandAndCategoryPageInfo)
      const { 'hydra:member': list } = resData.data
      const resList = [] as categoryInPage[], kid = []
      for (let c of list) {
        const item = { name: c.name, id: c.id, code: [c.code] } as categoryInPage
        if (c.code === 'men' || c.code === 'women') {
          resList.push(item)
        } else {
          kid.push(item)
        }
      }

      resList.unshift({ name: '全部', code: ['all'], id: -1 })
      resList.push({ name: '儿童', id: -2, code: kid.map(k => k.code[0]) })
      this.setData({
        classificationList: resList
      })
      wx.setStorageSync('category', resList)
      this.queryCategoryChild()
    }
  },
  async queryCategoryChild() {
    let childRes = {} as storeDesign.QueryCategorys, children = [] as storeDesign.category[]
    const code = this.data.classificationList[1].code
    /* men 分类子集的查询 */
    childRes = (await storeModule.queryCategoryChild({ parentCode: code[0] })).data
    children = childRes["hydra:member"]
    const resList = children.map(c => { return { name: c.name, code: [c.code], id: -1 } })
    resList.unshift({ name: '全部', id: -0, code: resList.map(e => e.code).join().split(',') })
    this.setData({
      [`categoryChildrenMap.${code.toString()}`]: resList,
    })
    /* 其余分类子集的查询 */
    for (let i = 2; i < this.data.classificationList.length; i++) {
      const cCode = this.data.classificationList[i].code
      if (cCode.length === 1) {
        childRes = (await storeModule.queryCategoryChild({ parentCode: cCode[0] })).data
        children = childRes["hydra:member"]
        const resList = children.map(c => { return { name: c.name, code: [c.code], id: -1 } })
        resList.unshift({ name: '全部', id: -0, code: resList.map(e => e.code).join().split(',') })
        this.setData({
          [`categoryChildrenMap.${cCode.toString()}`]: resList
        })
      } else {
        const list = [] as categoryInPage[]
        for (let code of cCode) {
          childRes = (await storeModule.queryCategoryChild({ parentCode: code })).data
          children = childRes["hydra:member"]
          for (let child of children) {
            let item = list.find(e => e.name === child.name)
            if (item) {
              item.code.push(child.code)
            } else {
              list.push({ name: child.name, code: [child.code], id: -1 })
            }
          }
        }
        list.unshift({ name: '全部', id: -0, code: list.map(e => e.code).join().split(',') })
        this.setData({
          [`categoryChildrenMap.${cCode.toString()}`]: list
        })
      }
    }
    /* 合并为 all 分类 */
    const keys = Object.keys(this.data.categoryChildrenMap)
    const allList = [] as categoryInPage[]
    for (let key of keys) {
      const list = this.data.categoryChildrenMap[key]
      for (const tag of list) {
        const item = allList.find(e => e.name === tag.name)
        if (item) {
          item.code = [...item.code, ...tag.code]
        } else {
          allList.push({ name: tag.name, code: [...tag.code], id: -0 })
        }
      }
    }
    this.setData({
      [`categoryChildrenMap.all`]: allList,
      classificationChildList: allList,
    })
    wx.setStorageSync('categoryMap', this.data.categoryChildrenMap)
  },



  async queryStore(type: number) {
    const params = this.formateParams(type)
    // this.setData({
    //   loading: true
    // })
    wx.showLoading({ title: "加载中" })
    try {
      let resData = {} as WechatMiniprogram.RequestSuccessCallbackResult<storeDesign.QueryStoresRes>
      if (typeof params === 'string') {
        resData = await storeModule.queryStoreWhitString(params)
      } else {
        resData = await storeModule.queryStore(params)
      }
      const list = resData.data["hydra:member"]
      this.setData({
        shopList: list.map(item => Object.assign(item, { status: 0 as storeDesign.checkBoxStatus, address: `${item.billingData.country?.name} ${item.billingData.city?.name}` })),
        shopCheckStatusList: (new Array(list.length)).fill(1),
        loading: false
      })
    } catch { }
    finally {
      wx.hideLoading()
    }

  },

  handleDialogCommit() {
    this.setData({
      showDialog: false,
      showChat: true
    })
  },
  handleDialogCancel() {
    this.setData({
      showDialog: false,
    })
    wx.navigateBack()
  }
})