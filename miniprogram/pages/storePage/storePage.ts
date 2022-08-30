import storeModule from "../../http/module/store"
import { IMAGEBASEURL, IMAGEPATHS } from '../../http/index'
import { checkloginAndRealNameCertifiedAsync } from "../../utils/checkLogin";
const DEFAULT_IMAGE = '../../assets/image/avatar.jpg'

interface PageStore extends storeDesign.QueryStoreDetailRes {
  address: string
}

interface PageProduct extends storeDesign.product {
  localPrice: string
}

// pages/storePage/storePage.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: {} as PageStore,
    products: [] as PageProduct[],
    storeId: '',
    btns: [
      {
        label: '私聊',
        icon: 'my_xiaoxi',
        size: 32,
        class: 'line-btn',
        color: "#353535",
        event: 'handleChat',
      },
      {
        label: '呼叫',
        icon: 'a-call2',
        size: 32,
        class: 'line-btn',
        color: "#353535",
        event: 'handleCall',
      }, {
        label: "预约",
        icon: "my_reserve",
        size: 32,
        class: 'fill-btn',
        color: "#fff",
        event: 'handleReserve',
      }],
    pageInfo: {
      page: 1,
      itemsPerPage: 10,
    },
    reachBottomSearch: true,
    brandOptions: [
      { value: 'all', text: '品牌' }
    ],
    brand: 'all',
    sexOptions: [
      { value: 'all', text: '适用性别' },
      { value: 'women', text: '女士' },
      { value: 'men', text: '男士' },
      { value: 'baby/Boy/Girl', text: '儿童' },
    ],
    sex: 'all',
    taxonOptions: [
      { value: 'all', text: '品类' }
    ],
    taxon: 'all',
    hasParams: false,
    showAllBtn: {
      label: '显示全部',
      class: 'line-btn',
      color: "#353535",
      event: 'handleShowAll',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    const { storeId, storeName, brand, taxon, sex } = options;
    await this.queryTaxon()
    this.setData({
      storeId: storeId,
    })
    wx.setNavigationBarTitle({ title: storeName! })
    console.log(options)
    await this.queryDetails()
    this.setData({
      brand: brand || 'all',
      sex: sex || 'all',
      taxon: taxon || 'all',
    })
    await this.queryProducts(0)
  },

  onReachBottom() {
    if (this.data.reachBottomSearch) {
      this.queryProducts(1)
    }
  },

  handleScreenMove() {
    this.selectComponent('#brand').toggle(false);
    this.selectComponent('#taxon').toggle(false);
    this.selectComponent('#sex').toggle(false);
  },

  async queryBrand() {
    this.setData({
      brandOptions: [
        { value: 'all', text: '品牌' },
      ]
    })
  },
  async queryTaxon() {
    this.setData({
      taxonOptions: [
        { value: 'all', text: '品类' },
        { value: 'clothing', text: '服饰' },
        { value: 'shoes', text: '鞋履' },
        { value: 'bags', text: '包袋' },
        { value: 'accessories', text: '配饰' },
      ]
    })
  },

  async handleBrandChange({ detail }: WechatMiniprogram.TouchEvent) {
    this.setData({
      brand: detail as unknown as string
    })
    this.changeShowAll()
    await this.queryProducts(0)
  },
  async handleSexChange({ detail }: WechatMiniprogram.TouchEvent) {
    this.setData({
      sex: detail as unknown as string
    })
    this.changeShowAll()
    await this.queryProducts(0)
  },
  async handleTaxonChange({ detail }: WechatMiniprogram.TouchEvent) {
    this.setData({
      taxon: detail as unknown as string
    })
    this.changeShowAll()
    await this.queryProducts(0)
  },
  changeShowAll() {
    const { brand, sex, taxon } = this.data
    this.setData({
      hasParams: brand !== 'all' || sex !== 'all' || taxon !== 'all'
    })
  },
  async handleShowAll() {
    this.setData({
      taxon: 'all',
      brand: 'all',
      sex: 'all',
      hasParams: false
    })
    await this.queryProducts(0)
    this.handleScreenMove()
  },

  handleIconButtonTap(ev: WechatMiniprogram.TouchEvent) {
    console.log(ev)
    const { event } = ev.currentTarget.dataset as { event: keyof WechatMiniprogram.Page.Constructor }
      ; (this[event] as Function)()
  },
  handleCollect() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
  },
  handleCall() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({ url: '../salesChoose/salesChoose?type=call' })
  },
  handleChat() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({ url: '../salesChoose/salesChoose?type=chat' })
  },
  handleReserve() {
    if (!checkloginAndRealNameCertifiedAsync()) {
      return
    }
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({ url: '../reservePage/reservePage' })
  },

  handleProductTap(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
    const { code, name } = event.currentTarget.dataset
    wx.setStorageSync('reserveStores', [this.data.details]);
    wx.navigateTo({
      url: `../productPage/productPage?code=${code}&name=${name}`
    })
  },

  async queryDetails() {
    const resData = await storeModule.queryStoreDetails(this.data.storeId)
    if (resData.data.logo)
      resData.data.logo.path = IMAGEBASEURL + IMAGEPATHS.storeNormal2x + resData.data?.logo?.path
    if (resData.data.images.length > 0) {
      resData.data.images[0].path = IMAGEBASEURL + IMAGEPATHS.storeMain2x + resData.data.images[0].path
    }
    const { country, city } = resData.data.billingData
    const address = `${country?.name} ${city?.name}`
    this.setData({
      details: { ...resData.data, address },
      brandOptions: [...this.data.brandOptions, ...resData.data.brands.map(e => { return { text: e.name, value: e.code } })]
    })
  },

  async queryProducts(type: number) {
    if (type === 1 && !this.data.reachBottomSearch) return
    if (type === 0) {
      this.setData({
        pageInfo: {...this.data.pageInfo, page: 1}
      })
    }
    const { page, itemsPerPage } = this.data.pageInfo
    const { storeId, brand, taxon, sex } = this.data
    let params = `page=${page}&itemsPerPage=${itemsPerPage}&store.code=${storeId}`
    if (brand !== 'all') {
      params += `&brand.code=${brand}`
    }
    if (sex === 'baby/Boy/Girl') {
      let sexs = sex.split('/')
      if (taxon !== 'all') {
        params += sexs.map(e => `&productTaxons.taxon.code[]=${e}-${taxon}`).join('')
      } else {
        params += sexs.map(e => [this.data.taxonOptions.map(t => t.value === 'all' ? '' : `&productTaxons.taxon.code[]=${e}-${t.value}`).join('')]).join('')
      }
    } else if (sex !== 'all') {
      if (taxon !== 'all') {
        params += `&productTaxons.taxon.code[]=${sex}-${taxon}`
      } else {
        params += this.data.taxonOptions.map(e => e.value === 'all' ? '' : `&productTaxons.taxon.code[]=${sex}-${e.value}`).join('')
      }
    } else {
      if (taxon !== 'all') {
        params += this.data.sexOptions.map(e => {
          if (e.value === 'baby/Boy/Girl') {
            let sexs = e.value.split('/')
            return sexs.map(e => `&productTaxons.taxon.code[]=${e}-${taxon}`).join('')
          } else {
            return `&productTaxons.taxon.code[]=${e.value}-${taxon}`
          }
        }).join('')
      }
    }
    const resData = await storeModule.queryProductsWithStringParams(params)
    const { 'hydra:member': list } = resData.data
    const temp: PageProduct[] = list.map(e => {
      let price = (e.enabledVariants[0].price / 100).toLocaleString()
      if (!price.includes('.')) {
        price += '.00'
      }
      let originalPrice = (e.enabledVariants[0].originalPrice / 100).toLocaleString()
      if (!originalPrice.includes('.')) {
        originalPrice += '.00'
      }
      return {
        ...e,
        images: e.images.map(im => { im.path = IMAGEBASEURL + IMAGEPATHS.productMain2x + im?.path; return im }),
        localPrice: price,
        originalPrice: originalPrice,
        off: e.enabledVariants[0].originalPrice > e.enabledVariants[0].price
        // off: true
      }
    })
    this.setData({
      pageInfo: {...this.data.pageInfo, page: this.data.pageInfo.page + 1}
    })
    if (type === 0) {
      this.setData({
        products: temp,
        reachBottomSearch: true
      })
    } else {
      if (list.length < this.data.pageInfo.itemsPerPage || list[list.length - 1].code === this.data.products[this.data.products.length - 1].code) {
        this.setData({
          reachBottomSearch: false
        })
        return
      }
      this.setData({
        products: this.data.products.concat(temp),
      })
    }
  },

  imageError() {
    this.setData({
      'details.logo.path': DEFAULT_IMAGE
    })
    console.log(this.data.details)
  }
})