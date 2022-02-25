import addressModule from "../../http/module/address";
import loginModule from "../../http/module/login";
import userModule from "../../http/module/user";
import { getFirstNameAndLastName, getIdFromString } from "../../utils/util";

const chooseLocation = requirePlugin('chooseLocation');

type inputKeyType = 'name' | 'phone' | 'region' | 'address'

// pages/addressDetail/addressDetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      name: { focus: false, error: false, value: '', errorMsg: '请输入正确的收货人姓名' },
      phone: { focus: false, error: false, value: '', errorMsg: '请输入正确的手机号码' },
      region: { focus: false, error: false, value: '', errorMsg: '请输入正确的中国地区' },
      address: { focus: false, error: false, value: '', errorMsg: '请输入正确的地址' },
      postcode: { focus: false, error: false, value: '', errorMsg: '请输入正确的邮政编码' },
    },
    firstName: '',
    lastName: '',
    region: [] as string[],
    id: null as unknown as number,
    commitBtnDisabled: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const { id } = this.options
    if (!!id) {
      wx.setNavigationBarTitle({ title: '修改地址' })
      const { id, lastName, firstName, provinceName, city, street, postcode, mobileNumber, county } = this.options as unknown as addressDesign.address
      this.setData({
        'form.phone.value': mobileNumber,
        'form.name.value': lastName + firstName,
        'form.postcode.value': postcode,
        'form.region.value': provinceName + ' ' + city + ' ' + county,
        'form.address.value': street,
        id,
        region: [provinceName, city, county],
      })
      
    } else {
      wx.setNavigationBarTitle({ title: '新增地址' })
      this.queryUserName()
    }
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
    const location: RSSDesign.txMapLocation = chooseLocation.getLocation();
    console.log(location)
    if (location) {
      const { province, city, district, name } = location
      this.setData({
        region: [province, city, district],
        'form.region.value': province + city + district,
        'form.address.value': name
      })
    }

  },

  handleInput(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    const { value } = event.detail
    this.setData({
      [`form.${key}.value`]: value
    })
  },

  handleFocus(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    this.setData({
      [`form.${key}.focus`]: true
    })
  },

  handleBlur(event: WechatMiniprogram.TouchEvent) {
    const { key } = event.currentTarget.dataset as { key: inputKeyType }
    this.setData({
      [`form.${key}.focus`]: false
    })
  },

  handleRegionChange(event: WechatMiniprogram.TouchEvent) {
    console.log(event)
    const { value } = event.detail as { value: string[] }
    this.setData({
      region: value,
      'form.region.value': value.reduce((a, b) => a + b)
    })
  },

  handleShowMap() {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const key = '66MBZ-3PZWF-OCGJC-NXKSG-DUQ3O-WVFZL'; //使用在腾讯位置服务申请的key
        const referer = 'agogify'; //调用插件的app的名称
        const location = JSON.stringify({
          latitude: res.latitude,
          longitude: res.longitude
        });
        const category = '生活服务,娱乐休闲';

        wx.navigateTo({
          url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
        });
      }
    })
  },

  async handleSubmit() {
    const { name, phone, address, region, postcode } = this.data.form
    const phoneReg = /^[1][3-8][0-9]{9}/
    // TODO 优化判断
    if (name.value.trim() === '') {
      this.setData({
        'form.name.error': true
      })
      return
    } else {
      this.setData({
        'form.name.error': false
      })
    }
    if (!phoneReg.test(phone.value)) {
      this.setData({
        'form.phone.error': true
      })
      return
    } else {
      this.setData({
        'form.phone.error': false
      })
    }
    if (address.value.trim() === '') {
      this.setData({
        'form.address.error': true
      })
      return
    } else {
      this.setData({
        'form.address.error': false
      })
    }
    if (region.value.trim() === '') {
      this.setData({
        'form.region.error': true
      })
      return
    } else {
      this.setData({
        'form.region.error': false,
      })
    }
    if (postcode.value.trim() === '') {
      this.setData({
        'form.postcode.error': true
      })
      return
    } else {
      this.setData({
        'form.postcode.error': false
      })
    }
    this.setData({
      commitBtnDisabled: true
    })
    const userInfo = wx.getStorageSync('oauth.data')
    const { customer } = userInfo
    let cityName = '';
    const cityData = this.data.region[1];
    if (cityData.includes('自治州')) {
      cityName = cityData.substr(0, cityData.length - 3)
    } else {
      cityName = cityData.substr(0, cityData.length - 1)
    }
    const {firstName, lastName} = this.data
    try {
      const params = {
        type: 'customer',
        customer: customer,
        firstName,
        lastName,
        mobileNumber: phone.value,
        countryCode: 'CN',
        provinceCode: 'CN-sh',
        provinceName: this.data.region[0],
        street: address.value,
        city: cityName,
        county: this.data.region[2],
        postcode: postcode.value,
      } as addressDesign.createAddressParams
      if (this.data.id) {
        await addressModule.replaceAddress(this.data.id, params)
      } else {
        await addressModule.createAddress(params);
      }
      wx.showToast({
        title: 'success',
        icon: 'success'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    } catch {
      wx.showToast({
        title: '创建地址错误，请稍后重试',
        icon: 'error'
      })
      this.setData({
        commitBtnDisabled: false
      })
    }
  },

  async queryUserName() {
    try {
      const wxUserInfo = wx.getStorageSync('oauth.data')

      const res = await loginModule.getUserInfo(getIdFromString(wxUserInfo.customer))

      const { firstName, lastName } = res.data
       if (!firstName || !lastName) {
      wx.showModal({
        title: '添加地址前需要完善个人信息',
        confirmText: '立即前往',
        cancelText: '确定',
        success(res) {
          if (res.confirm) {

            wx.navigateTo({ url: '../ocr/ocr' })
          } else {
            wx.navigateBack()

          }
        },
        fail() {
          wx.navigateBack()
        }
      })
       }
      this.setData({
        'form.name.value': lastName + firstName,
        firstName,
        lastName,
      })
    } catch (err) {
      wx.showToast({ title: '网络异常' })
    }
  },

  async queryAddress(addressId: string) {
    try {
      const res = await addressModule.queryAddress(addressId)
      console.log(res)
      const { id, lastName, firstName, provinceName, city, street, postcode, mobileNumber } = res.data
      this.setData({
        'form.phone.value': mobileNumber,
        'form.name.value': lastName + firstName,
        'form.postcode.value': postcode,
        'form.region.value': provinceName + ' ' + city,
        'form.address.value': street,
        id,
        region: [provinceName, city],
      })
    } catch {
      wx.showToast({
        title: '查询失败',
        icon: 'error'
      })
    }
  }
})