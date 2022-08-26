interface TabbarItem {
  pagePath: string
  iconPath: string
  selectedIconPath: string
  text: string
}

Component({
  data: {
    selected: 0,
    color: "#C5C5C5",
    selectedColor: "#353535",
    list: [] as TabbarItem[]
  },
  attached() {
    const height = wx.getStorageSync<number | undefined>('tabbarHeight')
    if (!height) {
      const query = this.createSelectorQuery()
      const tabBar = query.select('.tab-bar')
      tabBar.boundingClientRect((rect) => {
        console.log(rect.height)
        wx.setStorageSync('tabbarHeight', rect.height)
      }).exec()
    }

    this.setData({
      list: [
        {
          "pagePath": "/pages/homepage/homepage",
          "iconPath": "/assets/tabBarIcon/static/homepage.png",
          "selectedIconPath": "/assets/tabBarIcon/selected/homepage.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/classification/classification",
          "iconPath": "/assets/tabBarIcon/static/classification.png",
          "selectedIconPath": "/assets/tabBarIcon/selected/classification.png",
          "text": "分类"
        },
        {
          "pagePath": "/pages/activities/activities",
          "iconPath": "/assets/tabBarIcon/static/activities.png",
          "selectedIconPath": "/assets/tabBarIcon/selected/activities.png",
          "text": "私享"
        },
        {
          "pagePath": "/pages/person/person",
          "iconPath": "/assets/tabBarIcon/static/person.png",
          "selectedIconPath": "/assets/tabBarIcon/selected/person.png",
          "text": "我的"
        }
      ]
    })
  },
  methods: {
    switchTab(e: WechatMiniprogram.TouchEvent) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})