var event= {} ;

export const $on = function(params) {
  
  if (!params) {
    return false;
  }
  if (!params.name) {
    console.error("事件监听未设置名称 属性key=name");
    return false;
  }
  if (!params.success) {
    console.error("事件监听未设置回调函数 属性key=success");
    return false;
  }
  if (!params.tg) {
    console.error("事件监听未设置目标对象   属性key=tg");
    return false;
  }
  if (event[params.name]) {
    var list = event[params.name];
    list.push([params.tg, params.success]);
  } else {
    event[params.name] = [
      [params.tg, params.success]
    ];
  }
  console.log(event)
  pageStatus(params.tg);
}

export const $emit = function(params) {
  if (!params) {
    return false;
  }
  if (!params.name) {
    console.error("事件发送未设置名称 属性key=name");
    return false;
  }
  if (event[params.name]) {
    var list = event[params.name];
    list.forEach(item => {
      item[1].call(item[0], params.data);
    })
  }
  return true
}

export const $remove = function(params) {
  if (!params) {
    return false;
  }
  if (!params.tg) {
    console.error("事件监听未设置目标对象   属性key=tg");
    return false;
  }

  if (params.name && event[params.name]) {
    event[params.name] = event[params.name].filter(a => {
      return a[0] != params.tg;
    })
  } else {
    for (let key in event) {
      event[key] = event[key].filter((a) => {
        return a[0] != params.tg;
      })
    }
  }
  return true
}

const pageStatus = function(self) {
  if (self["onUnload"]) {
    var s = self["onUnload"];
    self["onUnload"] = function() {
      s.call(this, a);
      $remove({
        tg: this
      });
    }
  } else {
    self["onUnload"] = function() {
      $remove({
        tg: this
      });
    }
  }
}

// exports.$on = $on;
// exports.$emit = $emit;
// exports.$remove = $remove;