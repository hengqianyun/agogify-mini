// pages/search/search.ts

import storeModule from "../../http/module/store"

const _placeholder = '搜索品牌、类目或商品'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    placeholder: _placeholder,
    showClearIcon: false,
    storeList: [] as storeDesign.storeItem[],
    classification: 'pnpl',
    showClassification: false,
    classificationList: [
      {name: '品牌', id: 'pnpl'},
      {name: '品类', id: 'pnlz'},
      {name: '位置', id: 'wzvi'},
      {name: '专柜', id: 'vrgv'},
    ] as storeDesign.searchBars[],
    pageInfo: {
      page: 1,
      itemsPerPage: 8,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.queryNewStore(0)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  handleInput(event: WechatMiniprogram.TouchEvent) {
    this.data.keyword = event.detail.value
    if (this.data.keyword.length > 0 && !this.data.showClearIcon) {
      this.setData({
        showClearIcon: true
      })
    } else if (this.data.keyword.length === 0 && this.data.showClearIcon) {
      this.setData({
        showClearIcon: false
      })
    }
  },

  async handleSearch() {
    await this.queryNewStore(1)
  },

  handleClassifictionChange({detail}: WechatMiniprogram.TouchEvent) {
    const {index, name, title} = detail as unknown as {index: number, name: string, title: string}
    console.log(index, name, title)
    this.setData({
      classification: name
    })
    this.queryNewStore(1)
    // this.queryStore()
  },

  async queryNewStore(type: number) {
    if (type === 1) {
      this.setData({
        'pageInfo.page': 1
      })
    }
    if (!this.data.showClassification) {
      this.setData({
        showClassification: true
      })
    }
    const params = {...this.data.pageInfo}  as storeDesign.QueryStoresParams
    if (this.data.classification === 'pnpl') {
      params["brands.translations.name"] = this.data.keyword;
    } else if (this.data.classification === 'vrgv') {
      params["translations.name"] = this.data.keyword
    }
    const resData = await storeModule.queryStore(params)
    // const {data: newList} = resData.data
    if (type === 1)  {
      this.setData({
        storeList: resData.data["hydra:member"],
        'pageInfo.page': this.data.pageInfo.page + 1
      })
    } else {
      this.setData({
        storeList: this.data.storeList.concat(resData.data["hydra:member"]),
        'pageInfo.page': this.data.pageInfo.page + 1
      })
    }
  }
})