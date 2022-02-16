Component({
  properties: {
    // xiugaishoujihao | shuaxinerweimadianjizhuangtai | shuaxinerweima | fuzhi | maikefengguanbizhuangtai | yuyin2 | xiugaimima | shimingrenzheng | guaduan | zuo | you | huoqujifen_jifenicon | call_g | shang | xia | tishi | dingdanxiangqing-wuliuhui | dingdanxiangqing-wuliuhei | dingdanxiangqing-saomiao | zhibojian_jiashihong | zhibojian_jiashihei | dingdanxiangqing-jinduicon | shanchuwenzineirongicon | zhibojian_fasongtupianicon | zhibojian_shurukuangicon | share | my_dizhibu | jiantou | dingwei_zhibojian | zhibojian_yuyin_bai | store_hujiao | zhibojian_tuichu | zhibojian_yaoqing | my_youhuiquan | zhibojian_yuyin_hei | a-call2 | collection | call | my_collection | collection_g | my_reserve | my_xiaoxi | my_jifen | my_order | my_bianjiziliao | my_kefu | store_yishoucang | store_shoucang | my_shezhi | store_yuyue | dingwei_g | search12x12_b | my_g | my | classification_g | index_g | classification | activities_g | activities | index | icon_demo
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size + 'r',
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: '18r',
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
