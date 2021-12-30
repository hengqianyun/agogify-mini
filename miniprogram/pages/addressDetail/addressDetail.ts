import addressModule from "../../http/module/address";

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
    region: [] as string[],
    id: null as unknown as number
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const {id} = this.options
    if (!!id) {
      this.queryAddress(id)
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
    const userInfo = wx.getStorageSync('oauth.data')
    const { customer } = userInfo
    try {
      const params = {
        type: 'customer',
        customer: customer,
        // firstName: name.value.substr(0, 1),
        // lastName: name.value.substr(1),
        firstName: name.value.substr(0, 1),
        lastName: name.value.substr(1),
        mobileNumber: phone.value,
        countryCode: 'CN',
        provinceCode: 'CN-sh',
        provinceName: this.data.region[0],
        street: address.value,
        city: this.data.region[1],
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
    }
  },

  async queryAddress(addressId: string) {
    try {
      const res = await addressModule.queryAddress(addressId)
      console.log(res)
      const {id, lastName, firstName, provinceName, city, street, postcode, mobileNumber} = res.data
      this.setData({
        'form.phone.value': mobileNumber,
        'form.name.value': firstName + lastName,
        'form.postcode.value': postcode,
        'form.region.value': provinceName + ' ' + city,
        'form.address.value': street,
        id,
      })
    } catch {
      wx.showToast({
        title: '查询失败',
        icon: 'error'
      })
    }
  }
})