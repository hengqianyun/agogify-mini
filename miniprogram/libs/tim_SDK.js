! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIM = t()
}(this, (function() {
  function e(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
      }
      return n
  }

  function t(t) {
      for (var n = 1; n < arguments.length; n++) {
          var o = null != arguments[n] ? arguments[n] : {};
          n % 2 ? e(Object(o), !0).forEach((function(e) {
              r(t, e, o[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
          }))
      }
      return t
  }

  function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
      for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
      }
  }

  function s(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e
  }

  function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
      }) : e[t] = n, e
  }

  function i(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }), t && c(e, t)
  }

  function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }

  function c(e, t) {
      return (c = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
      })(e, t)
  }

  function l() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
      } catch (e) {
          return !1
      }
  }

  function d(e, t, n) {
      return (d = l() ? Reflect.construct : function(e, t, n) {
          var o = [null];
          o.push.apply(o, t);
          var a = new(Function.bind.apply(e, o));
          return n && c(a, n.prototype), a
      }).apply(null, arguments)
  }

  function p(e) {
      var t = "function" == typeof Map ? new Map : void 0;
      return (p = function(e) {
          if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
          var n;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, o)
          }

          function o() {
              return d(e, arguments, u(this).constructor)
          }
          return o.prototype = Object.create(e.prototype, {
              constructor: {
                  value: o,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
              }
          }), c(o, e)
      })(e)
  }

  function g(e, t) {
      if (null == e) return {};
      var n, o, a = function(e, t) {
          if (null == e) return {};
          var n, o, a = {},
              s = Object.keys(e);
          for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (o = 0; o < s.length; o++) n = s[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
  }

  function h(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e
  }

  function _(e, t) {
      return !t || "object" != typeof t && "function" != typeof t ? h(e) : t
  }

  function f(e) {
      var t = l();
      return function() {
          var n, o = u(e);
          if (t) {
              var a = u(this).constructor;
              n = Reflect.construct(o, arguments, a)
          } else n = o.apply(this, arguments);
          return _(this, n)
      }
  }

  function m(e, t) {
      return v(e) || function(e, t) {
          var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null == n) return;
          var o, a, s = [],
              r = !0,
              i = !1;
          try {
              for (n = n.call(e); !(r = (o = n.next()).done) && (s.push(o.value), !t || s.length !== t); r = !0);
          } catch (u) {
              i = !0, a = u
          } finally {
              try {
                  r || null == n.return || n.return()
              } finally {
                  if (i) throw a
              }
          }
          return s
      }(e, t) || I(e, t) || D()
  }

  function M(e) {
      return function(e) {
          if (Array.isArray(e)) return T(e)
      }(e) || y(e) || I(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }

  function v(e) {
      if (Array.isArray(e)) return e
  }

  function y(e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
  }

  function I(e, t) {
      if (e) {
          if ("string" == typeof e) return T(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0
      }
  }

  function T(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o
  }

  function D() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }

  function C(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
          if (Array.isArray(e) || (n = I(e)) || t && e && "number" == typeof e.length) {
              n && (e = n);
              var o = 0,
                  a = function() {};
              return {
                  s: a,
                  n: function() {
                      return o >= e.length ? {
                          done: !0
                      } : {
                          done: !1,
                          value: e[o++]
                      }
                  },
                  e: function(e) {
                      throw e
                  },
                  f: a
              }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var s, r = !0,
          i = !1;
      return {
          s: function() {
              n = n.call(e)
          },
          n: function() {
              var e = n.next();
              return r = e.done, e
          },
          e: function(e) {
              i = !0, s = e
          },
          f: function() {
              try {
                  r || null == n.return || n.return()
              } finally {
                  if (i) throw s
              }
          }
      }
  }
  var S = {
          SDK_READY: "sdkStateReady",
          SDK_NOT_READY: "sdkStateNotReady",
          SDK_DESTROY: "sdkDestroy",
          MESSAGE_RECEIVED: "onMessageReceived",
          MESSAGE_MODIFIED: "onMessageModified",
          MESSAGE_REVOKED: "onMessageRevoked",
          MESSAGE_READ_BY_PEER: "onMessageReadByPeer",
          CONVERSATION_LIST_UPDATED: "onConversationListUpdated",
          GROUP_LIST_UPDATED: "onGroupListUpdated",
          GROUP_SYSTEM_NOTICE_RECEIVED: "receiveGroupSystemNotice",
          GROUP_ATTRIBUTES_UPDATED: "groupAttributesUpdated",
          PROFILE_UPDATED: "onProfileUpdated",
          BLACKLIST_UPDATED: "blacklistUpdated",
          FRIEND_LIST_UPDATED: "onFriendListUpdated",
          FRIEND_GROUP_LIST_UPDATED: "onFriendGroupListUpdated",
          FRIEND_APPLICATION_LIST_UPDATED: "onFriendApplicationListUpdated",
          KICKED_OUT: "kickedOut",
          ERROR: "error",
          NET_STATE_CHANGE: "netStateChange",
          SDK_RELOAD: "sdkReload"
      },
      E = {
          MSG_TEXT: "TIMTextElem",
          MSG_IMAGE: "TIMImageElem",
          MSG_SOUND: "TIMSoundElem",
          MSG_AUDIO: "TIMSoundElem",
          MSG_FILE: "TIMFileElem",
          MSG_FACE: "TIMFaceElem",
          MSG_VIDEO: "TIMVideoFileElem",
          MSG_GEO: "TIMLocationElem",
          MSG_GRP_TIP: "TIMGroupTipElem",
          MSG_GRP_SYS_NOTICE: "TIMGroupSystemNoticeElem",
          MSG_CUSTOM: "TIMCustomElem",
          MSG_MERGER: "TIMRelayElem",
          MSG_PRIORITY_HIGH: "High",
          MSG_PRIORITY_NORMAL: "Normal",
          MSG_PRIORITY_LOW: "Low",
          MSG_PRIORITY_LOWEST: "Lowest",
          CONV_C2C: "C2C",
          CONV_GROUP: "GROUP",
          CONV_SYSTEM: "@TIM#SYSTEM",
          CONV_AT_ME: 1,
          CONV_AT_ALL: 2,
          CONV_AT_ALL_AT_ME: 3,
          GRP_PRIVATE: "Private",
          GRP_WORK: "Private",
          GRP_PUBLIC: "Public",
          GRP_CHATROOM: "ChatRoom",
          GRP_MEETING: "ChatRoom",
          GRP_AVCHATROOM: "AVChatRoom",
          GRP_MBR_ROLE_OWNER: "Owner",
          GRP_MBR_ROLE_ADMIN: "Admin",
          GRP_MBR_ROLE_MEMBER: "Member",
          GRP_TIP_MBR_JOIN: 1,
          GRP_TIP_MBR_QUIT: 2,
          GRP_TIP_MBR_KICKED_OUT: 3,
          GRP_TIP_MBR_SET_ADMIN: 4,
          GRP_TIP_MBR_CANCELED_ADMIN: 5,
          GRP_TIP_GRP_PROFILE_UPDATED: 6,
          GRP_TIP_MBR_PROFILE_UPDATED: 7,
          MSG_REMIND_ACPT_AND_NOTE: "AcceptAndNotify",
          MSG_REMIND_ACPT_NOT_NOTE: "AcceptNotNotify",
          MSG_REMIND_DISCARD: "Discard",
          GENDER_UNKNOWN: "Gender_Type_Unknown",
          GENDER_FEMALE: "Gender_Type_Female",
          GENDER_MALE: "Gender_Type_Male",
          KICKED_OUT_MULT_ACCOUNT: "multipleAccount",
          KICKED_OUT_MULT_DEVICE: "multipleDevice",
          KICKED_OUT_USERSIG_EXPIRED: "userSigExpired",
          ALLOW_TYPE_ALLOW_ANY: "AllowType_Type_AllowAny",
          ALLOW_TYPE_NEED_CONFIRM: "AllowType_Type_NeedConfirm",
          ALLOW_TYPE_DENY_ANY: "AllowType_Type_DenyAny",
          FORBID_TYPE_NONE: "AdminForbid_Type_None",
          FORBID_TYPE_SEND_OUT: "AdminForbid_Type_SendOut",
          JOIN_OPTIONS_FREE_ACCESS: "FreeAccess",
          JOIN_OPTIONS_NEED_PERMISSION: "NeedPermission",
          JOIN_OPTIONS_DISABLE_APPLY: "DisableApply",
          JOIN_STATUS_SUCCESS: "JoinedSuccess",
          JOIN_STATUS_ALREADY_IN_GROUP: "AlreadyInGroup",
          JOIN_STATUS_WAIT_APPROVAL: "WaitAdminApproval",
          GRP_PROFILE_OWNER_ID: "ownerID",
          GRP_PROFILE_CREATE_TIME: "createTime",
          GRP_PROFILE_LAST_INFO_TIME: "lastInfoTime",
          GRP_PROFILE_MEMBER_NUM: "memberNum",
          GRP_PROFILE_MAX_MEMBER_NUM: "maxMemberNum",
          GRP_PROFILE_JOIN_OPTION: "joinOption",
          GRP_PROFILE_INTRODUCTION: "introduction",
          GRP_PROFILE_NOTIFICATION: "notification",
          GRP_PROFILE_MUTE_ALL_MBRS: "muteAllMembers",
          SNS_ADD_TYPE_SINGLE: "Add_Type_Single",
          SNS_ADD_TYPE_BOTH: "Add_Type_Both",
          SNS_DELETE_TYPE_SINGLE: "Delete_Type_Single",
          SNS_DELETE_TYPE_BOTH: "Delete_Type_Both",
          SNS_APPLICATION_TYPE_BOTH: "Pendency_Type_Both",
          SNS_APPLICATION_SENT_TO_ME: "Pendency_Type_ComeIn",
          SNS_APPLICATION_SENT_BY_ME: "Pendency_Type_SendOut",
          SNS_APPLICATION_AGREE: "Response_Action_Agree",
          SNS_APPLICATION_AGREE_AND_ADD: "Response_Action_AgreeAndAdd",
          SNS_CHECK_TYPE_BOTH: "CheckResult_Type_Both",
          SNS_CHECK_TYPE_SINGLE: "CheckResult_Type_Single",
          SNS_TYPE_NO_RELATION: "CheckResult_Type_NoRelation",
          SNS_TYPE_A_WITH_B: "CheckResult_Type_AWithB",
          SNS_TYPE_B_WITH_A: "CheckResult_Type_BWithA",
          SNS_TYPE_BOTH_WAY: "CheckResult_Type_BothWay",
          NET_STATE_CONNECTED: "connected",
          NET_STATE_CONNECTING: "connecting",
          NET_STATE_DISCONNECTED: "disconnected",
          MSG_AT_ALL: "__kImSDK_MesssageAtALL__"
      },
      k = function() {
          function e() {
              o(this, e), this.cache = [], this.options = null
          }
          return s(e, [{
              key: "use",
              value: function(e) {
                  if ("function" != typeof e) throw "middleware must be a function";
                  return this.cache.push(e), this
              }
          }, {
              key: "next",
              value: function(e) {
                  if (this.middlewares && this.middlewares.length > 0) return this.middlewares.shift().call(this, this.options, this.next.bind(this))
              }
          }, {
              key: "run",
              value: function(e) {
                  return this.middlewares = this.cache.map((function(e) {
                      return e
                  })), this.options = e, this.next()
              }
          }]), e
      }(),
      A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function N(e, t) {
      return e(t = {
          exports: {}
      }, t.exports), t.exports
  }
  var O = N((function(e, t) {
          var n, o, a, s, r, i, u, c, l, d, p, g, h, _, f, m, M, v;
          e.exports = (n = "function" == typeof Promise, o = "object" == typeof self ? self : A, a = "undefined" != typeof Symbol, s = "undefined" != typeof Map, r = "undefined" != typeof Set, i = "undefined" != typeof WeakMap, u = "undefined" != typeof WeakSet, c = "undefined" != typeof DataView, l = a && void 0 !== Symbol.iterator, d = a && void 0 !== Symbol.toStringTag, p = r && "function" == typeof Set.prototype.entries, g = s && "function" == typeof Map.prototype.entries, h = p && Object.getPrototypeOf((new Set).entries()), _ = g && Object.getPrototypeOf((new Map).entries()), f = l && "function" == typeof Array.prototype[Symbol.iterator], m = f && Object.getPrototypeOf([][Symbol.iterator]()), M = l && "function" == typeof String.prototype[Symbol.iterator], v = M && Object.getPrototypeOf("" [Symbol.iterator]()), function(e) {
              var t = typeof e;
              if ("object" !== t) return t;
              if (null === e) return "null";
              if (e === o) return "global";
              if (Array.isArray(e) && (!1 === d || !(Symbol.toStringTag in e))) return "Array";
              if ("object" == typeof window && null !== window) {
                  if ("object" == typeof window.location && e === window.location) return "Location";
                  if ("object" == typeof window.document && e === window.document) return "Document";
                  if ("object" == typeof window.navigator) {
                      if ("object" == typeof window.navigator.mimeTypes && e === window.navigator.mimeTypes) return "MimeTypeArray";
                      if ("object" == typeof window.navigator.plugins && e === window.navigator.plugins) return "PluginArray"
                  }
                  if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && e instanceof window.HTMLElement) {
                      if ("BLOCKQUOTE" === e.tagName) return "HTMLQuoteElement";
                      if ("TD" === e.tagName) return "HTMLTableDataCellElement";
                      if ("TH" === e.tagName) return "HTMLTableHeaderCellElement"
                  }
              }
              var a = d && e[Symbol.toStringTag];
              if ("string" == typeof a) return a;
              var l = Object.getPrototypeOf(e);
              return l === RegExp.prototype ? "RegExp" : l === Date.prototype ? "Date" : n && l === Promise.prototype ? "Promise" : r && l === Set.prototype ? "Set" : s && l === Map.prototype ? "Map" : u && l === WeakSet.prototype ? "WeakSet" : i && l === WeakMap.prototype ? "WeakMap" : c && l === DataView.prototype ? "DataView" : s && l === _ ? "Map Iterator" : r && l === h ? "Set Iterator" : f && l === m ? "Array Iterator" : M && l === v ? "String Iterator" : null === l ? "Object" : Object.prototype.toString.call(e).slice(8, -1)
          })
      })),
      L = {
          WEB: 7,
          WX_MP: 8,
          QQ_MP: 9,
          TT_MP: 10,
          BAIDU_MP: 11,
          ALI_MP: 12,
          UNI_NATIVE_APP: 14
      },
      R = "1.7.3",
      G = 537048168,
      P = 1,
      b = 2,
      w = 3,
      U = {
          HOST: {
              CURRENT: {
                  DEFAULT: "",
                  BACKUP: ""
              },
              TEST: {
                  DEFAULT: "wss://wss-dev.tim.qq.com",
                  BACKUP: "wss://wss-dev.tim.qq.com"
              },
              PRODUCTION: {
                  DEFAULT: "wss://wss.im.qcloud.com",
                  BACKUP: "wss://wss.tim.qq.com"
              },
              OVERSEA_PRODUCTION: {
                  DEFAULT: "wss://wss.im.qcloud.com",
                  BACKUP: "wss://wss.im.qcloud.com"
              },
              setCurrent: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                  e === P ? this.CURRENT = this.TEST : e === b ? this.CURRENT = this.PRODUCTION : e === w && (this.CURRENT = this.OVERSEA_PRODUCTION)
              }
          },
          NAME: {
              OPEN_IM: "openim",
              GROUP: "group_open_http_svc",
              GROUP_ATTR: "group_open_attr_http_svc",
              FRIEND: "sns",
              PROFILE: "profile",
              RECENT_CONTACT: "recentcontact",
              PIC: "openpic",
              BIG_GROUP_NO_AUTH: "group_open_http_noauth_svc",
              BIG_GROUP_LONG_POLLING: "group_open_long_polling_http_svc",
              BIG_GROUP_LONG_POLLING_NO_AUTH: "group_open_long_polling_http_noauth_svc",
              IM_OPEN_STAT: "imopenstat",
              WEB_IM: "webim",
              IM_COS_SIGN: "im_cos_sign_svr",
              CUSTOM_UPLOAD: "im_cos_msg",
              HEARTBEAT: "heartbeat",
              IM_OPEN_PUSH: "im_open_push",
              IM_OPEN_STATUS: "im_open_status",
              IM_LONG_MESSAGE: "im_long_msg",
              CLOUD_CONTROL: "im_sdk_config_mgr"
          },
          CMD: {
              ACCESS_LAYER: "accesslayer",
              LOGIN: "wslogin",
              LOGOUT_LONG_POLL: "longpollinglogout",
              LOGOUT: "wslogout",
              HELLO: "wshello",
              PORTRAIT_GET: "portrait_get_all",
              PORTRAIT_SET: "portrait_set",
              GET_LONG_POLL_ID: "getlongpollingid",
              LONG_POLL: "longpolling",
              AVCHATROOM_LONG_POLL: "get_msg",
              ADD_FRIEND: "friend_add",
              UPDATE_FRIEND: "friend_update",
              GET_FRIEND_LIST: "friend_get",
              GET_FRIEND_PROFILE: "friend_get_list",
              DELETE_FRIEND: "friend_delete",
              CHECK_FRIEND: "friend_check",
              GET_FRIEND_GROUP_LIST: "group_get",
              RESPOND_FRIEND_APPLICATION: "friend_response",
              GET_FRIEND_APPLICATION_LIST: "pendency_get",
              DELETE_FRIEND_APPLICATION: "pendency_delete",
              REPORT_FRIEND_APPLICATION: "pendency_report",
              GET_GROUP_APPLICATION: "get_pendency",
              CREATE_FRIEND_GROUP: "group_add",
              DELETE_FRIEND_GROUP: "group_delete",
              UPDATE_FRIEND_GROUP: "group_update",
              GET_BLACKLIST: "black_list_get",
              ADD_BLACKLIST: "black_list_add",
              DELETE_BLACKLIST: "black_list_delete",
              CREATE_GROUP: "create_group",
              GET_JOINED_GROUPS: "get_joined_group_list",
              SET_GROUP_ATTRIBUTES: "set_group_attr",
              MODIFY_GROUP_ATTRIBUTES: "modify_group_attr",
              DELETE_GROUP_ATTRIBUTES: "delete_group_attr",
              CLEAR_GROUP_ATTRIBUTES: "clear_group_attr",
              GET_GROUP_ATTRIBUTES: "get_group_attr",
              SEND_MESSAGE: "sendmsg",
              REVOKE_C2C_MESSAGE: "msgwithdraw",
              DELETE_C2C_MESSAGE: "delete_c2c_msg_ramble",
              SEND_GROUP_MESSAGE: "send_group_msg",
              REVOKE_GROUP_MESSAGE: "group_msg_recall",
              DELETE_GROUP_MESSAGE: "delete_group_ramble_msg_by_seq",
              GET_GROUP_INFO: "get_group_info",
              GET_GROUP_MEMBER_INFO: "get_specified_group_member_info",
              GET_GROUP_MEMBER_LIST: "get_group_member_info",
              QUIT_GROUP: "quit_group",
              CHANGE_GROUP_OWNER: "change_group_owner",
              DESTROY_GROUP: "destroy_group",
              ADD_GROUP_MEMBER: "add_group_member",
              DELETE_GROUP_MEMBER: "delete_group_member",
              SEARCH_GROUP_BY_ID: "get_group_public_info",
              APPLY_JOIN_GROUP: "apply_join_group",
              HANDLE_APPLY_JOIN_GROUP: "handle_apply_join_group",
              HANDLE_GROUP_INVITATION: "handle_invite_join_group",
              MODIFY_GROUP_INFO: "modify_group_base_info",
              MODIFY_GROUP_MEMBER_INFO: "modify_group_member_info",
              DELETE_GROUP_SYSTEM_MESSAGE: "deletemsg",
              DELETE_GROUP_AT_TIPS: "deletemsg",
              GET_CONVERSATION_LIST: "get",
              PAGING_GET_CONVERSATION_LIST: "page_get",
              DELETE_CONVERSATION: "delete",
              PIN_CONVERSATION: "top",
              GET_MESSAGES: "getmsg",
              GET_C2C_ROAM_MESSAGES: "getroammsg",
              GET_GROUP_ROAM_MESSAGES: "group_msg_get",
              SET_C2C_MESSAGE_READ: "msgreaded",
              GET_PEER_READ_TIME: "get_peer_read_time",
              SET_GROUP_MESSAGE_READ: "msg_read_report",
              FILE_READ_AND_WRITE_AUTHKEY: "authkey",
              FILE_UPLOAD: "pic_up",
              COS_SIGN: "cos",
              COS_PRE_SIG: "pre_sig",
              TIM_WEB_REPORT_V2: "tim_web_report_v2",
              BIG_DATA_HALLWAY_AUTH_KEY: "authkey",
              GET_ONLINE_MEMBER_NUM: "get_online_member_num",
              ALIVE: "alive",
              MESSAGE_PUSH: "msg_push",
              MESSAGE_PUSH_ACK: "ws_msg_push_ack",
              STATUS_FORCEOFFLINE: "stat_forceoffline",
              DOWNLOAD_MERGER_MESSAGE: "get_relay_json_msg",
              UPLOAD_MERGER_MESSAGE: "save_relay_json_msg",
              FETCH_CLOUD_CONTROL_CONFIG: "fetch_config",
              PUSHED_CLOUD_CONTROL_CONFIG: "push_configv2"
          },
          CHANNEL: {
              SOCKET: 1,
              XHR: 2,
              AUTO: 0
          },
          NAME_VERSION: {
              openim: "v4",
              group_open_http_svc: "v4",
              sns: "v4",
              profile: "v4",
              recentcontact: "v4",
              openpic: "v4",
              group_open_http_noauth_svc: "v4",
              group_open_long_polling_http_svc: "v4",
              group_open_long_polling_http_noauth_svc: "v4",
              imopenstat: "v4",
              im_cos_sign_svr: "v4",
              im_cos_msg: "v4",
              webim: "v4",
              im_open_push: "v4",
              im_open_status: "v4"
          }
      };
  U.HOST.setCurrent(b);
  var F, q, V, K, x = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting),
      B = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting),
      H = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting),
      j = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting),
      Y = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting),
      $ = "undefined" != typeof uni && "undefined" == typeof window,
      z = x || B || H || j || Y || $,
      W = ("undefined" != typeof uni || "undefined" != typeof window) && !z,
      J = B ? qq : H ? tt : j ? swan : Y ? my : x ? wx : $ ? uni : {},
      X = (F = "WEB", de ? F = "WEB" : B ? F = "QQ_MP" : H ? F = "TT_MP" : j ? F = "BAIDU_MP" : Y ? F = "ALI_MP" : x ? F = "WX_MP" : $ && (F = "UNI_NATIVE_APP"), L[F]),
      Q = W && window && window.navigator && window.navigator.userAgent || "",
      Z = /AppleWebKit\/([\d.]+)/i.exec(Q),
      ee = (Z && parseFloat(Z.pop()), /iPad/i.test(Q)),
      te = /iPhone/i.test(Q) && !ee,
      ne = /iPod/i.test(Q),
      oe = te || ee || ne,
      ae = ((q = Q.match(/OS (\d+)_/i)) && q[1] && q[1], /Android/i.test(Q)),
      se = function() {
          var e = Q.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
          if (!e) return null;
          var t = e[1] && parseFloat(e[1]),
              n = e[2] && parseFloat(e[2]);
          return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
      }(),
      re = (ae && /webkit/i.test(Q), /Firefox/i.test(Q), /Edge/i.test(Q)),
      ie = !re && /Chrome/i.test(Q),
      ue = (function() {
          var e = Q.match(/Chrome\/(\d+)/);
          e && e[1] && parseFloat(e[1])
      }(), /MSIE/.test(Q)),
      ce = (/MSIE\s8\.0/.test(Q), function() {
          var e = /MSIE\s(\d+)\.\d/.exec(Q),
              t = e && parseFloat(e[1]);
          return !t && /Trident\/7.0/i.test(Q) && /rv:11.0/.test(Q) && (t = 11), t
      }()),
      le = (/Safari/i.test(Q), /TBS\/\d+/i.test(Q)),
      de = (function() {
          var e = Q.match(/TBS\/(\d+)/i);
          if (e && e[1]) e[1]
      }(), !le && /MQQBrowser\/\d+/i.test(Q), !le && / QQBrowser\/\d+/i.test(Q), /(micromessenger|webbrowser)/i.test(Q)),
      pe = /Windows/i.test(Q),
      ge = /MAC OS X/i.test(Q),
      he = (/MicroMessenger/i.test(Q), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  V = "undefined" != typeof console ? console : void 0 !== he && he.console ? he.console : "undefined" != typeof window && window.console ? window.console : {};
  for (var _e = function() {}, fe = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], me = fe.length; me--;) K = fe[me], console[K] || (V[K] = _e);
  V.methods = fe;
  var Me = V,
      ve = 0,
      ye = function() {
          return (new Date).getTime() + ve
      },
      Ie = function() {
          ve = 0
      },
      Te = 0,
      De = new Map;

  function Ce() {
      var e, t = ((e = new Date).setTime(ye()), e);
      return "TIM " + t.toLocaleTimeString("en-US", {
          hour12: !1
      }) + "." + function(e) {
          var t;
          switch (e.toString().length) {
              case 1:
                  t = "00" + e;
                  break;
              case 2:
                  t = "0" + e;
                  break;
              default:
                  t = e
          }
          return t
      }(t.getMilliseconds()) + ":"
  }
  var Se = {
          arguments2String: function(e) {
              var t;
              if (1 === e.length) t = Ce() + e[0];
              else {
                  t = Ce();
                  for (var n = 0, o = e.length; n < o; n++) Pe(e[n]) ? we(e[n]) ? t += xe(e[n]) : t += JSON.stringify(e[n]) : t += e[n], t += " "
              }
              return t
          },
          debug: function() {
              if (Te <= -1) {
                  var e = this.arguments2String(arguments);
                  Me.debug(e)
              }
          },
          log: function() {
              if (Te <= 0) {
                  var e = this.arguments2String(arguments);
                  Me.log(e)
              }
          },
          info: function() {
              if (Te <= 1) {
                  var e = this.arguments2String(arguments);
                  Me.info(e)
              }
          },
          warn: function() {
              if (Te <= 2) {
                  var e = this.arguments2String(arguments);
                  Me.warn(e)
              }
          },
          error: function() {
              if (Te <= 3) {
                  var e = this.arguments2String(arguments);
                  Me.error(e)
              }
          },
          time: function(e) {
              De.set(e, Ve.now())
          },
          timeEnd: function(e) {
              if (De.has(e)) {
                  var t = Ve.now() - De.get(e);
                  return De.delete(e), t
              }
              return Me.warn("未找到对应label: ".concat(e, ", 请在调用 logger.timeEnd 前，调用 logger.time")), 0
          },
          setLevel: function(e) {
              e < 4 && Me.log(Ce() + "set level from " + Te + " to " + e), Te = e
          },
          getLevel: function() {
              return Te
          }
      },
      Ee = ["url"],
      ke = function(e) {
          return "file" === Ue(e)
      },
      Ae = function(e) {
          return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" === n(e) && e.constructor === Number)
      },
      Ne = function(e) {
          return "string" == typeof e
      },
      Oe = function(e) {
          return null !== e && "object" === n(e)
      },
      Le = function(e) {
          if ("object" !== n(e) || null === e) return !1;
          var t = Object.getPrototypeOf(e);
          if (null === t) return !0;
          for (var o = t; null !== Object.getPrototypeOf(o);) o = Object.getPrototypeOf(o);
          return t === o
      },
      Re = function(e) {
          return "function" == typeof Array.isArray ? Array.isArray(e) : "array" === Ue(e)
      },
      Ge = function(e) {
          return void 0 === e
      },
      Pe = function(e) {
          return Re(e) || Oe(e)
      },
      be = function(e) {
          return "function" == typeof e
      },
      we = function(e) {
          return e instanceof Error
      },
      Ue = function(e) {
          return Object.prototype.toString.call(e).match(/^\[object (.*)\]$/)[1].toLowerCase()
      },
      Fe = function(e) {
          if ("string" != typeof e) return !1;
          var t = e[0];
          return !/[^a-zA-Z0-9]/.test(t)
      },
      qe = 0;
  Date.now || (Date.now = function() {
      return (new Date).getTime()
  });
  var Ve = {
          now: function() {
              0 === qe && (qe = Date.now() - 1);
              var e = Date.now() - qe;
              return e > 4294967295 ? (qe += 4294967295, Date.now() - qe) : e
          },
          utc: function() {
              return Math.round(Date.now() / 1e3)
          }
      },
      Ke = function e(t, n, o, a) {
          if (!Pe(t) || !Pe(n)) return 0;
          for (var s, r = 0, i = Object.keys(n), u = 0, c = i.length; u < c; u++)
              if (s = i[u], !(Ge(n[s]) || o && o.includes(s)))
                  if (Pe(t[s]) && Pe(n[s])) r += e(t[s], n[s], o, a);
                  else {
                      if (a && a.includes(n[s])) continue;
                      t[s] !== n[s] && (t[s] = n[s], r += 1)
                  } return r
      },
      xe = function(e) {
          return JSON.stringify(e, ["message", "code"])
      },
      Be = function(e) {
          if (0 === e.length) return 0;
          for (var t = 0, n = 0, o = "undefined" != typeof document && void 0 !== document.characterSet ? document.characterSet : "UTF-8"; void 0 !== e[t];) n += e[t++].charCodeAt[t] <= 255 ? 1 : !1 === o ? 3 : 2;
          return n
      },
      He = function(e) {
          var t = e || 99999999;
          return Math.round(Math.random() * t)
      },
      je = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      Ye = je.length,
      $e = function(e, t) {
          for (var n in e)
              if (e[n] === t) return !0;
          return !1
      },
      ze = {},
      We = function() {
          if (z) return "https:";
          if (W && "undefined" == typeof window) return "https:";
          var e = window.location.protocol;
          return ["http:", "https:"].indexOf(e) < 0 && (e = "http:"), e
      },
      Je = function(e) {
          return -1 === e.indexOf("http://") || -1 === e.indexOf("https://") ? "https://" + e : e.replace(/https|http/, "https")
      },
      Xe = function e(t) {
          if (0 === Object.getOwnPropertyNames(t).length) return Object.create(null);
          var o = Array.isArray(t) ? [] : Object.create(null),
              a = "";
          for (var s in t) null !== t[s] ? void 0 !== t[s] ? (a = n(t[s]), ["string", "number", "function", "boolean"].indexOf(a) >= 0 ? o[s] = t[s] : o[s] = e(t[s])) : o[s] = void 0 : o[s] = null;
          return o
      };

  function Qe(e, t) {
      Re(e) && Re(t) ? t.forEach((function(t) {
          var n = t.key,
              o = t.value,
              a = e.find((function(e) {
                  return e.key === n
              }));
          a ? a.value = o : e.push({
              key: n,
              value: o
          })
      })) : Se.warn("updateCustomField target 或 source 不是数组，忽略此次更新。")
  }
  var Ze = function(e) {
          return e === E.GRP_PUBLIC
      },
      et = function(e) {
          return e === E.GRP_AVCHATROOM
      },
      nt = function(e) {
          return Ne(e) && e.slice(0, 3) === E.CONV_C2C
      },
      ot = function(e) {
          return Ne(e) && e.slice(0, 5) === E.CONV_GROUP
      },
      at = function(e) {
          return Ne(e) && e === E.CONV_SYSTEM
      };

  function st(e, t) {
      var n = {};
      return Object.keys(e).forEach((function(o) {
          n[o] = t(e[o], o)
      })), n
  }

  function rt() {
      function e() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
      }
      return "".concat(e() + e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e()).concat(e())
  }

  function it() {
      var e = "unknown";
      if (ge && (e = "mac"), pe && (e = "windows"), oe && (e = "ios"), ae && (e = "android"), z) try {
          var t = J.getSystemInfoSync().platform;
          void 0 !== t && (e = t)
      } catch (n) {}
      return e
  }

  function ut(e) {
      var t = e.originUrl,
          n = void 0 === t ? void 0 : t,
          o = e.originWidth,
          a = e.originHeight,
          s = e.min,
          r = void 0 === s ? 198 : s,
          i = parseInt(o),
          u = parseInt(a),
          c = {
              url: void 0,
              width: 0,
              height: 0
          };
      return (i <= u ? i : u) <= r ? (c.url = n, c.width = i, c.height = u) : (u <= i ? (c.width = Math.ceil(i * r / u), c.height = r) : (c.width = r, c.height = Math.ceil(u * r / i)), c.url = "".concat(n, 198 === r ? "?imageView2/3/w/198/h/198" : "?imageView2/3/w/720/h/720")), Ge(n) ? g(c, Ee) : c
  }

  function ct(e) {
      var t = e[2];
      e[2] = e[1], e[1] = t;
      for (var n = 0; n < e.length; n++) e[n].setType(n)
  }

  function lt(e) {
      var t = e.servcmd;
      return t.slice(t.indexOf(".") + 1)
  }

  function dt(e, t) {
      return Math.round(Number(e) * Math.pow(10, t)) / Math.pow(10, t)
  }

  function pt(e, t) {
      return e.includes(t)
  }

  function gt(e, t) {
      return e.includes(t)
  }
  var ht = Object.prototype.hasOwnProperty;

  function _t(e) {
      if (null == e) return !0;
      if ("boolean" == typeof e) return !1;
      if ("number" == typeof e) return 0 === e;
      if ("string" == typeof e) return 0 === e.length;
      if ("function" == typeof e) return 0 === e.length;
      if (Array.isArray(e)) return 0 === e.length;
      if (e instanceof Error) return "" === e.message;
      if (Le(e)) {
          for (var t in e)
              if (ht.call(e, t)) return !1;
          return !0
      }
      return !("map" !== Ue(e) && ! function(e) {
          return "set" === Ue(e)
      }(e) && !ke(e)) && 0 === e.size
  }

  function ft(e, t, n) {
      if (void 0 === t) return !0;
      var o = !0;
      if ("object" === O(t).toLowerCase()) Object.keys(t).forEach((function(a) {
          var s = 1 === e.length ? e[0][a] : void 0;
          o = !!mt(s, t[a], n, a) && o
      }));
      else if ("array" === O(t).toLowerCase())
          for (var a = 0; a < t.length; a++) o = !!mt(e[a], t[a], n, t[a].name) && o;
      if (o) return o;
      throw new Error("Params validate failed.")
  }

  function mt(e, t, n, o) {
      if (void 0 === t) return !0;
      var a = !0;
      return t.required && _t(e) && (Me.error("TIM [".concat(n, '] Missing required params: "').concat(o, '".')), a = !1), _t(e) || O(e).toLowerCase() === t.type.toLowerCase() || (Me.error("TIM [".concat(n, '] Invalid params: type check failed for "').concat(o, '".Expected ').concat(t.type, ".")), a = !1), t.validator && !t.validator(e) && (Me.error("TIM [".concat(n, "] Invalid params: custom validator check failed for params.")), a = !1), a
  }
  var Mt, vt = {
          UNSEND: "unSend",
          SUCCESS: "success",
          FAIL: "fail"
      },
      yt = {
          NOT_START: "notStart",
          PENDING: "pengding",
          RESOLVED: "resolved",
          REJECTED: "rejected"
      },
      It = function(e) {
          return !!e && (!!(nt(e) || ot(e) || at(e)) || (console.warn("非法的会话 ID:".concat(e, "。会话 ID 组成方式：C2C + userID（单聊）GROUP + groupID（群聊）@TIM#SYSTEM（系统通知会话）")), !1))
      },
      Tt = "请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#",
      Dt = function(e) {
          return e.param ? "".concat(e.api, " ").concat(e.param, " ").concat(e.desc, "。").concat(Tt).concat(e.api) : "".concat(e.api, " ").concat(e.desc, "。").concat(Tt).concat(e.api)
      },
      Ct = {
          type: "String",
          required: !0
      },
      St = {
          type: "Array",
          required: !0
      },
      Et = {
          type: "Object",
          required: !0
      },
      kt = {
          login: {
              userID: Ct,
              userSig: Ct
          },
          addToBlacklist: {
              userIDList: St
          },
          on: [{
              name: "eventName",
              type: "String",
              validator: function(e) {
                  return "string" == typeof e && 0 !== e.length || (console.warn(Dt({
                      api: "on",
                      param: "eventName",
                      desc: "类型必须为 String，且不能为空"
                  })), !1)
              }
          }, {
              name: "handler",
              type: "Function",
              validator: function(e) {
                  return "function" != typeof e ? (console.warn(Dt({
                      api: "on",
                      param: "handler",
                      desc: "参数必须为 Function"
                  })), !1) : ("" === e.name && console.warn("on 接口的 handler 参数推荐使用具名函数。具名函数可以使用 off 接口取消订阅，匿名函数无法取消订阅。"), !0)
              }
          }],
          once: [{
              name: "eventName",
              type: "String",
              validator: function(e) {
                  return "string" == typeof e && 0 !== e.length || (console.warn(Dt({
                      api: "once",
                      param: "eventName",
                      desc: "类型必须为 String，且不能为空"
                  })), !1)
              }
          }, {
              name: "handler",
              type: "Function",
              validator: function(e) {
                  return "function" != typeof e ? (console.warn(Dt({
                      api: "once",
                      param: "handler",
                      desc: "参数必须为 Function"
                  })), !1) : ("" === e.name && console.warn("once 接口的 handler 参数推荐使用具名函数。"), !0)
              }
          }],
          off: [{
              name: "eventName",
              type: "String",
              validator: function(e) {
                  return "string" == typeof e && 0 !== e.length || (console.warn(Dt({
                      api: "off",
                      param: "eventName",
                      desc: "类型必须为 String，且不能为空"
                  })), !1)
              }
          }, {
              name: "handler",
              type: "Function",
              validator: function(e) {
                  return "function" != typeof e ? (console.warn(Dt({
                      api: "off",
                      param: "handler",
                      desc: "参数必须为 Function"
                  })), !1) : ("" === e.name && console.warn("off 接口无法为匿名函数取消监听事件。"), !0)
              }
          }],
          sendMessage: [t({
              name: "message"
          }, Et)],
          getMessageList: {
              conversationID: t(t({}, Ct), {}, {
                  validator: function(e) {
                      return It(e)
                  }
              }),
              nextReqMessageID: {
                  type: "String"
              },
              count: {
                  type: "Number",
                  validator: function(e) {
                      return !(!Ge(e) && !/^[1-9][0-9]*$/.test(e)) || (console.warn(Dt({
                          api: "getMessageList",
                          param: "count",
                          desc: "必须为正整数"
                      })), !1)
                  }
              }
          },
          setMessageRead: {
              conversationID: t(t({}, Ct), {}, {
                  validator: function(e) {
                      return It(e)
                  }
              })
          },
          getConversationProfile: [t(t({
              name: "conversationID"
          }, Ct), {}, {
              validator: function(e) {
                  return It(e)
              }
          })],
          deleteConversation: [t(t({
              name: "conversationID"
          }, Ct), {}, {
              validator: function(e) {
                  return It(e)
              }
          })],
          pinConversation: {
              conversationID: t(t({}, Ct), {}, {
                  validator: function(e) {
                      return It(e)
                  }
              }),
              isPinned: t({}, {
                  type: "Boolean",
                  required: !0
              })
          },
          getGroupList: {
              groupProfileFilter: {
                  type: "Array"
              }
          },
          getGroupProfile: {
              groupID: Ct,
              groupCustomFieldFilter: {
                  type: "Array"
              },
              memberCustomFieldFilter: {
                  type: "Array"
              }
          },
          getGroupProfileAdvance: {
              groupIDList: St
          },
          createGroup: {
              name: Ct
          },
          joinGroup: {
              groupID: Ct,
              type: {
                  type: "String"
              },
              applyMessage: {
                  type: "String"
              }
          },
          quitGroup: [t({
              name: "groupID"
          }, Ct)],
          handleApplication: {
              message: Et,
              handleAction: Ct,
              handleMessage: {
                  type: "String"
              }
          },
          changeGroupOwner: {
              groupID: Ct,
              newOwnerID: Ct
          },
          updateGroupProfile: {
              groupID: Ct,
              muteAllMembers: {
                  type: "Boolean"
              }
          },
          dismissGroup: [t({
              name: "groupID"
          }, Ct)],
          searchGroupByID: [t({
              name: "groupID"
          }, Ct)],
          initGroupAttributes: {
              groupID: Ct,
              groupAttributes: t(t({}, Et), {}, {
                  validator: function(e) {
                      var t = !0;
                      return Object.keys(e).forEach((function(n) {
                          if (!Ne(e[n])) return console.warn(Dt({
                              api: "initGroupAttributes",
                              desc: "群属性 value 必须是字符串"
                          })), t = !1
                      })), t
                  }
              })
          },
          setGroupAttributes: {
              groupID: Ct,
              groupAttributes: t(t({}, Et), {}, {
                  validator: function(e) {
                      var t = !0;
                      return Object.keys(e).forEach((function(n) {
                          if (!Ne(e[n])) return console.warn(Dt({
                              api: "setGroupAttributes",
                              desc: "群属性 value 必须是字符串"
                          })), t = !1
                      })), t
                  }
              })
          },
          deleteGroupAttributes: {
              groupID: Ct,
              keyList: {
                  type: "Array",
                  validator: function(e) {
                      if (Ge(e)) return console.warn(Dt({
                          api: "deleteGroupAttributes",
                          desc: "缺少必填参数：keyList"
                      })), !1;
                      if (!Re(e)) return !1;
                      if (!_t(e)) {
                          var t = !0;
                          return e.forEach((function(e) {
                              if (!Ne(e)) return console.warn(Dt({
                                  api: "deleteGroupAttributes",
                                  desc: "群属性 key 必须是字符串"
                              })), t = !1
                          })), t
                      }
                      return !0
                  }
              }
          },
          getGroupAttributes: {
              groupID: Ct,
              keyList: {
                  type: "Array",
                  validator: function(e) {
                      if (Ge(e)) return console.warn(Dt({
                          api: "getGroupAttributes",
                          desc: "缺少必填参数：keyList"
                      })), !1;
                      if (!Re(e)) return !1;
                      if (!_t(e)) {
                          var t = !0;
                          return e.forEach((function(e) {
                              if (!Ne(e)) return console.warn(Dt({
                                  api: "getGroupAttributes",
                                  desc: "群属性 key 必须是字符串"
                              })), t = !1
                          })), t
                      }
                      return !0
                  }
              }
          },
          getGroupMemberList: {
              groupID: Ct,
              offset: {
                  type: "Number"
              },
              count: {
                  type: "Number"
              }
          },
          getGroupMemberProfile: {
              groupID: Ct,
              userIDList: St,
              memberCustomFieldFilter: {
                  type: "Array"
              }
          },
          addGroupMember: {
              groupID: Ct,
              userIDList: St
          },
          setGroupMemberRole: {
              groupID: Ct,
              userID: Ct,
              role: Ct
          },
          setGroupMemberMuteTime: {
              groupID: Ct,
              userID: Ct,
              muteTime: {
                  type: "Number",
                  validator: function(e) {
                      return e >= 0
                  }
              }
          },
          setGroupMemberNameCard: {
              groupID: Ct,
              userID: {
                  type: "String"
              },
              nameCard: {
                  type: "String",
                  validator: function(e) {
                      return Ne(e) ? (e.length, !0) : (console.warn(Dt({
                          api: "setGroupMemberNameCard",
                          param: "nameCard",
                          desc: "类型必须为 String"
                      })), !1)
                  }
              }
          },
          setMessageRemindType: {
              groupID: Ct,
              messageRemindType: Ct
          },
          setGroupMemberCustomField: {
              groupID: Ct,
              userID: {
                  type: "String"
              },
              memberCustomField: St
          },
          deleteGroupMember: {
              groupID: Ct
          },
          createTextMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      return Le(e) ? Ne(e.text) ? 0 !== e.text.length || (console.warn(Dt({
                          api: "createTextMessage",
                          desc: "消息内容不能为空"
                      })), !1) : (console.warn(Dt({
                          api: "createTextMessage",
                          param: "payload.text",
                          desc: "类型必须为 String"
                      })), !1) : (console.warn(Dt({
                          api: "createTextMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1)
                  }
              })
          },
          createTextAtMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      return Le(e) ? Ne(e.text) ? 0 === e.text.length ? (console.warn(Dt({
                          api: "createTextAtMessage",
                          desc: "消息内容不能为空"
                      })), !1) : !(e.atUserList && !Re(e.atUserList)) || (console.warn(Dt({
                          api: "createTextAtMessage",
                          desc: "payload.atUserList 类型必须为数组"
                      })), !1) : (console.warn(Dt({
                          api: "createTextAtMessage",
                          param: "payload.text",
                          desc: "类型必须为 String"
                      })), !1) : (console.warn(Dt({
                          api: "createTextAtMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1)
                  }
              })
          },
          createCustomMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      return Le(e) ? e.data && !Ne(e.data) ? (console.warn(Dt({
                          api: "createCustomMessage",
                          param: "payload.data",
                          desc: "类型必须为 String"
                      })), !1) : e.description && !Ne(e.description) ? (console.warn(Dt({
                          api: "createCustomMessage",
                          param: "payload.description",
                          desc: "类型必须为 String"
                      })), !1) : !(e.extension && !Ne(e.extension)) || (console.warn(Dt({
                          api: "createCustomMessage",
                          param: "payload.extension",
                          desc: "类型必须为 String"
                      })), !1) : (console.warn(Dt({
                          api: "createCustomMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1)
                  }
              })
          },
          createImageMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      if (!Le(e)) return console.warn(Dt({
                          api: "createImageMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1;
                      if (Ge(e.file)) return console.warn(Dt({
                          api: "createImageMessage",
                          param: "payload.file",
                          desc: "不能为 undefined"
                      })), !1;
                      if (W) {
                          if (!(e.file instanceof HTMLInputElement || ke(e.file))) return Le(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(Dt({
                              api: "createImageMessage",
                              param: "payload.file",
                              desc: "您没有选择文件，无法发送"
                          })), !1) : (console.warn(Dt({
                              api: "createImageMessage",
                              param: "payload.file",
                              desc: "类型必须是 HTMLInputElement 或 File"
                          })), !1);
                          if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(Dt({
                              api: "createImageMessage",
                              param: "payload.file",
                              desc: "您没有选择文件，无法发送"
                          })), !1
                      }
                      return !0
                  },
                  onProgress: {
                      type: "Function",
                      required: !1,
                      validator: function(e) {
                          return Ge(e) && console.warn(Dt({
                              api: "createImageMessage",
                              desc: "没有 onProgress 回调，您将无法获取上传进度"
                          })), !0
                      }
                  }
              })
          },
          createAudioMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      return !!Le(e) || (console.warn(Dt({
                          api: "createAudioMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1)
                  }
              }),
              onProgress: {
                  type: "Function",
                  required: !1,
                  validator: function(e) {
                      return Ge(e) && console.warn(Dt({
                          api: "createAudioMessage",
                          desc: "没有 onProgress 回调，您将无法获取上传进度"
                      })), !0
                  }
              }
          },
          createVideoMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      if (!Le(e)) return console.warn(Dt({
                          api: "createVideoMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1;
                      if (Ge(e.file)) return console.warn(Dt({
                          api: "createVideoMessage",
                          param: "payload.file",
                          desc: "不能为 undefined"
                      })), !1;
                      if (W) {
                          if (!(e.file instanceof HTMLInputElement || ke(e.file))) return Le(e.file) && "undefined" != typeof uni ? !!ke(e.file.tempFile) || (console.warn(Dt({
                              api: "createVideoMessage",
                              param: "payload.file",
                              desc: "您没有选择文件，无法发送"
                          })), !1) : (console.warn(Dt({
                              api: "createVideoMessage",
                              param: "payload.file",
                              desc: "类型必须是 HTMLInputElement 或 File"
                          })), !1);
                          if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(Dt({
                              api: "createVideoMessage",
                              param: "payload.file",
                              desc: "您没有选择文件，无法发送"
                          })), !1
                      }
                      return !0
                  }
              }),
              onProgress: {
                  type: "Function",
                  required: !1,
                  validator: function(e) {
                      return Ge(e) && console.warn(Dt({
                          api: "createVideoMessage",
                          desc: "没有 onProgress 回调，您将无法获取上传进度"
                      })), !0
                  }
              }
          },
          createFaceMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      return Le(e) ? Ae(e.index) ? !!Ne(e.data) || (console.warn(Dt({
                          api: "createFaceMessage",
                          param: "payload.data",
                          desc: "类型必须为 String"
                      })), !1) : (console.warn(Dt({
                          api: "createFaceMessage",
                          param: "payload.index",
                          desc: "类型必须为 Number"
                      })), !1) : (console.warn(Dt({
                          api: "createFaceMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1)
                  }
              })
          },
          createFileMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      if (!Le(e)) return console.warn(Dt({
                          api: "createFileMessage",
                          param: "payload",
                          desc: "类型必须为 plain object"
                      })), !1;
                      if (Ge(e.file)) return console.warn(Dt({
                          api: "createFileMessage",
                          param: "payload.file",
                          desc: "不能为 undefined"
                      })), !1;
                      if (W) {
                          if (!(e.file instanceof HTMLInputElement || ke(e.file))) return Le(e.file) && "undefined" != typeof uni ? 0 !== e.file.tempFilePaths.length && 0 !== e.file.tempFiles.length || (console.warn(Dt({
                              api: "createFileMessage",
                              param: "payload.file",
                              desc: "您没有选择文件，无法发送"
                          })), !1) : (console.warn(Dt({
                              api: "createFileMessage",
                              param: "payload.file",
                              desc: "类型必须是 HTMLInputElement 或 File"
                          })), !1);
                          if (e.file instanceof HTMLInputElement && 0 === e.file.files.length) return console.warn(Dt({
                              api: "createFileMessage",
                              desc: "您没有选择文件，无法发送"
                          })), !1
                      }
                      return !0
                  }
              }),
              onProgress: {
                  type: "Function",
                  required: !1,
                  validator: function(e) {
                      return Ge(e) && console.warn(Dt({
                          api: "createFileMessage",
                          desc: "没有 onProgress 回调，您将无法获取上传进度"
                      })), !0
                  }
              }
          },
          createMergerMessage: {
              to: Ct,
              conversationType: Ct,
              payload: t(t({}, Et), {}, {
                  validator: function(e) {
                      if (_t(e.messageList)) return console.warn(Dt({
                          api: "createMergerMessage",
                          desc: "不能为空数组"
                      })), !1;
                      if (_t(e.compatibleText)) return console.warn(Dt({
                          api: "createMergerMessage",
                          desc: "类型必须为 String，且不能为空"
                      })), !1;
                      var t = !1;
                      return e.messageList.forEach((function(e) {
                          e.status === vt.FAIL && (t = !0)
                      })), !t || (console.warn(Dt({
                          api: "createMergerMessage",
                          desc: "不支持合并已发送失败的消息"
                      })), !1)
                  }
              })
          },
          revokeMessage: [t(t({
              name: "message"
          }, Et), {}, {
              validator: function(e) {
                  return _t(e) ? (console.warn("revokeMessage 请传入消息（Message）实例"), !1) : e.conversationType === E.CONV_SYSTEM ? (console.warn("revokeMessage 不能撤回系统会话消息，只能撤回单聊消息或群消息"), !1) : !0 !== e.isRevoked || (console.warn("revokeMessage 消息已经被撤回，请勿重复操作"), !1)
              }
          })],
          deleteMessage: [t(t({
              name: "messageList"
          }, St), {}, {
              validator: function(e) {
                  return !_t(e) || (console.warn(Dt({
                      api: "deleteMessage",
                      param: "messageList",
                      desc: "不能为空数组"
                  })), !1)
              }
          })],
          getUserProfile: {
              userIDList: {
                  type: "Array",
                  validator: function(e) {
                      return Re(e) ? (0 === e.length && console.warn(Dt({
                          api: "getUserProfile",
                          param: "userIDList",
                          desc: "不能为空数组"
                      })), !0) : (console.warn(Dt({
                          api: "getUserProfile",
                          param: "userIDList",
                          desc: "必须为数组"
                      })), !1)
                  }
              }
          },
          updateMyProfile: {
              profileCustomField: {
                  type: "Array",
                  validator: function(e) {
                      return !!Ge(e) || (!!Re(e) || (console.warn(Dt({
                          api: "updateMyProfile",
                          param: "profileCustomField",
                          desc: "必须为数组"
                      })), !1))
                  }
              }
          },
          addFriend: {
              to: Ct,
              source: {
                  type: "String",
                  required: !0,
                  validator: function(e) {
                      return !!e && (e.startsWith("AddSource_Type_") ? !(e.replace("AddSource_Type_", "").length > 8) || (console.warn(Dt({
                          api: "addFriend",
                          desc: "加好友来源字段的关键字长度不得超过8字节"
                      })), !1) : (console.warn(Dt({
                          api: "addFriend",
                          desc: "加好友来源字段的前缀必须是：AddSource_Type_"
                      })), !1))
                  }
              },
              remark: {
                  type: "String",
                  required: !1,
                  validator: function(e) {
                      return !(Ne(e) && e.length > 96) || (console.warn(Dt({
                          api: "updateFriend",
                          desc: " 备注长度最长不得超过 96 个字节"
                      })), !1)
                  }
              }
          },
          deleteFriend: {
              userIDList: St
          },
          checkFriend: {
              userIDList: St
          },
          getFriendProfile: {
              userIDList: St
          },
          updateFriend: {
              userID: Ct,
              remark: {
                  type: "String",
                  required: !1,
                  validator: function(e) {
                      return !(Ne(e) && e.length > 96) || (console.warn(Dt({
                          api: "updateFriend",
                          desc: " 备注长度最长不得超过 96 个字节"
                      })), !1)
                  }
              },
              friendCustomField: {
                  type: "Array",
                  required: !1,
                  validator: function(e) {
                      if (e) {
                          if (!Re(e)) return console.warn(Dt({
                              api: "updateFriend",
                              param: "friendCustomField",
                              desc: "必须为数组"
                          })), !1;
                          var t = !0;
                          return e.forEach((function(e) {
                              return Ne(e.key) && -1 !== e.key.indexOf("Tag_SNS_Custom") ? Ne(e.value) ? e.value.length > 8 ? (console.warn(Dt({
                                  api: "updateFriend",
                                  desc: "好友自定义字段的关键字长度不得超过8字节"
                              })), t = !1) : void 0 : (console.warn(Dt({
                                  api: "updateFriend",
                                  desc: "类型必须为 String"
                              })), t = !1) : (console.warn(Dt({
                                  api: "updateFriend",
                                  desc: "好友自定义字段的前缀必须是 Tag_SNS_Custom"
                              })), t = !1)
                          })), t
                      }
                      return !0
                  }
              }
          },
          acceptFriendApplication: {
              userID: Ct
          },
          refuseFriendApplication: {
              userID: Ct
          },
          deleteFriendApplication: {
              userID: Ct
          },
          createFriendGroup: {
              name: Ct
          },
          deleteFriendGroup: {
              name: Ct
          },
          addToFriendGroup: {
              name: Ct,
              userIDList: St
          },
          removeFromFriendGroup: {
              name: Ct,
              userIDList: St
          },
          renameFriendGroup: {
              oldName: Ct,
              newName: Ct
          }
      },
      At = {
          login: "login",
          logout: "logout",
          on: "on",
          once: "once",
          off: "off",
          setLogLevel: "setLogLevel",
          registerPlugin: "registerPlugin",
          destroy: "destroy",
          createTextMessage: "createTextMessage",
          createTextAtMessage: "createTextAtMessage",
          createImageMessage: "createImageMessage",
          createAudioMessage: "createAudioMessage",
          createVideoMessage: "createVideoMessage",
          createCustomMessage: "createCustomMessage",
          createFaceMessage: "createFaceMessage",
          createFileMessage: "createFileMessage",
          createMergerMessage: "createMergerMessage",
          downloadMergerMessage: "downloadMergerMessage",
          createForwardMessage: "createForwardMessage",
          sendMessage: "sendMessage",
          resendMessage: "resendMessage",
          revokeMessage: "revokeMessage",
          deleteMessage: "deleteMessage",
          getMessageList: "getMessageList",
          setMessageRead: "setMessageRead",
          getConversationList: "getConversationList",
          getConversationProfile: "getConversationProfile",
          deleteConversation: "deleteConversation",
          pinConversation: "pinConversation",
          getGroupList: "getGroupList",
          getGroupProfile: "getGroupProfile",
          createGroup: "createGroup",
          joinGroup: "joinGroup",
          updateGroupProfile: "updateGroupProfile",
          quitGroup: "quitGroup",
          dismissGroup: "dismissGroup",
          changeGroupOwner: "changeGroupOwner",
          searchGroupByID: "searchGroupByID",
          setMessageRemindType: "setMessageRemindType",
          handleGroupApplication: "handleGroupApplication",
          initGroupAttributes: "initGroupAttributes",
          setGroupAttributes: "setGroupAttributes",
          deleteGroupAttributes: "deleteGroupAttributes",
          getGroupAttributes: "getGroupAttributes",
          getGroupMemberProfile: "getGroupMemberProfile",
          getGroupMemberList: "getGroupMemberList",
          addGroupMember: "addGroupMember",
          deleteGroupMember: "deleteGroupMember",
          setGroupMemberNameCard: "setGroupMemberNameCard",
          setGroupMemberMuteTime: "setGroupMemberMuteTime",
          setGroupMemberRole: "setGroupMemberRole",
          setGroupMemberCustomField: "setGroupMemberCustomField",
          getGroupOnlineMemberCount: "getGroupOnlineMemberCount",
          getMyProfile: "getMyProfile",
          getUserProfile: "getUserProfile",
          updateMyProfile: "updateMyProfile",
          getBlacklist: "getBlacklist",
          addToBlacklist: "addToBlacklist",
          removeFromBlacklist: "removeFromBlacklist",
          getFriendList: "getFriendList",
          addFriend: "addFriend",
          deleteFriend: "deleteFriend",
          checkFriend: "checkFriend",
          updateFriend: "updateFriend",
          getFriendProfile: "getFriendProfile",
          getFriendApplicationList: "getFriendApplicationList",
          refuseFriendApplication: "refuseFriendApplication",
          deleteFriendApplication: "deleteFriendApplication",
          acceptFriendApplication: "acceptFriendApplication",
          setFriendApplicationRead: "setFriendApplicationRead",
          getFriendGroupList: "getFriendGroupList",
          createFriendGroup: "createFriendGroup",
          renameFriendGroup: "renameFriendGroup",
          deleteFriendGroup: "deleteFriendGroup",
          addToFriendGroup: "addToFriendGroup",
          removeFromFriendGroup: "removeFromFriendGroup",
          callExperimentalAPI: "callExperimentalAPI"
      },
      Nt = "sign",
      Ot = "message",
      Lt = "user",
      Rt = "c2c",
      Gt = "group",
      Pt = "sns",
      bt = "groupMember",
      wt = "conversation",
      Ut = "context",
      Ft = "storage",
      qt = "eventStat",
      Vt = "netMonitor",
      Kt = "bigDataChannel",
      xt = "upload",
      Bt = "plugin",
      Ht = "syncUnreadMessage",
      jt = "session",
      Yt = "channel",
      $t = "message_loss_detection",
      zt = "cloudControl",
      Wt = "pullGroupMessage",
      Jt = "qualityStat",
      Xt = function() {
          function e(t) {
              o(this, e), this._moduleManager = t, this._className = ""
          }
          return s(e, [{
              key: "isLoggedIn",
              value: function() {
                  return this._moduleManager.getModule(Ut).isLoggedIn()
              }
          }, {
              key: "isOversea",
              value: function() {
                  return this._moduleManager.getModule(Ut).isOversea()
              }
          }, {
              key: "getMyUserID",
              value: function() {
                  return this._moduleManager.getModule(Ut).getUserID()
              }
          }, {
              key: "getModule",
              value: function(e) {
                  return this._moduleManager.getModule(e)
              }
          }, {
              key: "getPlatform",
              value: function() {
                  return X
              }
          }, {
              key: "getNetworkType",
              value: function() {
                  return this._moduleManager.getModule(Vt).getNetworkType()
              }
          }, {
              key: "probeNetwork",
              value: function() {
                  return this._moduleManager.getModule(Vt).probe()
              }
          }, {
              key: "getCloudConfig",
              value: function(e) {
                  return this._moduleManager.getModule(zt).getCloudConfig(e)
              }
          }, {
              key: "emitOuterEvent",
              value: function(e, t) {
                  this._moduleManager.getOuterEmitterInstance().emit(e, t)
              }
          }, {
              key: "emitInnerEvent",
              value: function(e, t) {
                  this._moduleManager.getInnerEmitterInstance().emit(e, t)
              }
          }, {
              key: "getInnerEmitterInstance",
              value: function() {
                  return this._moduleManager.getInnerEmitterInstance()
              }
          }, {
              key: "generateTjgID",
              value: function(e) {
                  return this._moduleManager.getModule(Ut).getTinyID() + "-" + e.random
              }
          }, {
              key: "filterModifiedMessage",
              value: function(e) {
                  if (!_t(e)) {
                      var t = e.filter((function(e) {
                          return !0 === e.isModified
                      }));
                      t.length > 0 && this.emitOuterEvent(S.MESSAGE_MODIFIED, t)
                  }
              }
          }, {
              key: "filterUnmodifiedMessage",
              value: function(e) {
                  return _t(e) ? [] : e.filter((function(e) {
                      return !1 === e.isModified
                  }))
              }
          }, {
              key: "request",
              value: function(e) {
                  return this._moduleManager.getModule(jt).request(e)
              }
          }]), e
      }(),
      Qt = "wslogin",
      Zt = "wslogout",
      en = "wshello",
      tn = "getmsg",
      nn = "authkey",
      on = "sendmsg",
      an = "send_group_msg",
      sn = "portrait_get_all",
      rn = "portrait_set",
      un = "black_list_get",
      cn = "black_list_add",
      ln = "black_list_delete",
      dn = "msgwithdraw",
      pn = "msgreaded",
      gn = "getroammsg",
      hn = "get_peer_read_time",
      _n = "delete_c2c_msg_ramble",
      fn = "page_get",
      mn = "get",
      Mn = "delete",
      vn = "top",
      yn = "deletemsg",
      In = "get_joined_group_list",
      Tn = "get_group_info",
      Dn = "create_group",
      Cn = "destroy_group",
      Sn = "modify_group_base_info",
      En = "apply_join_group",
      kn = "apply_join_group_noauth",
      An = "quit_group",
      Nn = "get_group_public_info",
      On = "change_group_owner",
      Ln = "handle_apply_join_group",
      Rn = "handle_invite_join_group",
      Gn = "group_msg_recall",
      Pn = "msg_read_report",
      bn = "group_msg_get",
      wn = "get_pendency",
      Un = "deletemsg",
      Fn = "get_msg",
      qn = "get_msg_noauth",
      Vn = "get_online_member_num",
      Kn = "delete_group_ramble_msg_by_seq",
      xn = "set_group_attr",
      Bn = "modify_group_attr",
      Hn = "delete_group_attr",
      jn = "clear_group_attr",
      Yn = "get_group_attr",
      $n = "get_group_member_info",
      zn = "get_specified_group_member_info",
      Wn = "add_group_member",
      Jn = "delete_group_member",
      Xn = "modify_group_member_info",
      Qn = "cos",
      Zn = "pre_sig",
      eo = "tim_web_report_v2",
      to = "alive",
      no = "msg_push",
      oo = "ws_msg_push_ack",
      ao = "stat_forceoffline",
      so = "save_relay_json_msg",
      ro = "get_relay_json_msg",
      io = "fetch_config",
      uo = "push_configv2",
      co = {
          NO_SDKAPPID: 2e3,
          NO_ACCOUNT_TYPE: 2001,
          NO_IDENTIFIER: 2002,
          NO_USERSIG: 2003,
          NO_TINYID: 2022,
          NO_A2KEY: 2023,
          USER_NOT_LOGGED_IN: 2024,
          REPEAT_LOGIN: 2025,
          COS_UNDETECTED: 2040,
          COS_GET_SIG_FAIL: 2041,
          MESSAGE_SEND_FAIL: 2100,
          MESSAGE_LIST_CONSTRUCTOR_NEED_OPTIONS: 2103,
          MESSAGE_SEND_NEED_MESSAGE_INSTANCE: 2105,
          MESSAGE_SEND_INVALID_CONVERSATION_TYPE: 2106,
          MESSAGE_FILE_IS_EMPTY: 2108,
          MESSAGE_ONPROGRESS_FUNCTION_ERROR: 2109,
          MESSAGE_REVOKE_FAIL: 2110,
          MESSAGE_DELETE_FAIL: 2111,
          MESSAGE_IMAGE_SELECT_FILE_FIRST: 2251,
          MESSAGE_IMAGE_TYPES_LIMIT: 2252,
          MESSAGE_IMAGE_SIZE_LIMIT: 2253,
          MESSAGE_AUDIO_UPLOAD_FAIL: 2300,
          MESSAGE_AUDIO_SIZE_LIMIT: 2301,
          MESSAGE_VIDEO_UPLOAD_FAIL: 2350,
          MESSAGE_VIDEO_SIZE_LIMIT: 2351,
          MESSAGE_VIDEO_TYPES_LIMIT: 2352,
          MESSAGE_FILE_UPLOAD_FAIL: 2400,
          MESSAGE_FILE_SELECT_FILE_FIRST: 2401,
          MESSAGE_FILE_SIZE_LIMIT: 2402,
          MESSAGE_FILE_URL_IS_EMPTY: 2403,
          MESSAGE_MERGER_TYPE_INVALID: 2450,
          MESSAGE_MERGER_KEY_INVALID: 2451,
          MESSAGE_MERGER_DOWNLOAD_FAIL: 2452,
          MESSAGE_FORWARD_TYPE_INVALID: 2453,
          CONVERSATION_NOT_FOUND: 2500,
          USER_OR_GROUP_NOT_FOUND: 2501,
          CONVERSATION_UN_RECORDED_TYPE: 2502,
          ILLEGAL_GROUP_TYPE: 2600,
          CANNOT_JOIN_WORK: 2601,
          CANNOT_CHANGE_OWNER_IN_AVCHATROOM: 2620,
          CANNOT_CHANGE_OWNER_TO_SELF: 2621,
          CANNOT_DISMISS_Work: 2622,
          MEMBER_NOT_IN_GROUP: 2623,
          CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM: 2641,
          CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN: 2642,
          JOIN_GROUP_FAIL: 2660,
          CANNOT_ADD_MEMBER_IN_AVCHATROOM: 2661,
          CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN: 2662,
          CANNOT_KICK_MEMBER_IN_AVCHATROOM: 2680,
          NOT_OWNER: 2681,
          CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM: 2682,
          INVALID_MEMBER_ROLE: 2683,
          CANNOT_SET_SELF_MEMBER_ROLE: 2684,
          CANNOT_MUTE_SELF: 2685,
          NOT_MY_FRIEND: 2700,
          ALREADY_MY_FRIEND: 2701,
          FRIEND_GROUP_EXISTED: 2710,
          FRIEND_GROUP_NOT_EXIST: 2711,
          FRIEND_APPLICATION_NOT_EXIST: 2716,
          UPDATE_PROFILE_INVALID_PARAM: 2721,
          UPDATE_PROFILE_NO_KEY: 2722,
          ADD_BLACKLIST_INVALID_PARAM: 2740,
          DEL_BLACKLIST_INVALID_PARAM: 2741,
          CANNOT_ADD_SELF_TO_BLACKLIST: 2742,
          ADD_FRIEND_INVALID_PARAM: 2760,
          NETWORK_ERROR: 2800,
          NETWORK_TIMEOUT: 2801,
          NETWORK_BASE_OPTIONS_NO_URL: 2802,
          NETWORK_UNDEFINED_SERVER_NAME: 2803,
          NETWORK_PACKAGE_UNDEFINED: 2804,
          NO_NETWORK: 2805,
          CONVERTOR_IRREGULAR_PARAMS: 2900,
          NOTICE_RUNLOOP_UNEXPECTED_CONDITION: 2901,
          NOTICE_RUNLOOP_OFFSET_LOST: 2902,
          UNCAUGHT_ERROR: 2903,
          GET_LONGPOLL_ID_FAILED: 2904,
          INVALID_OPERATION: 2905,
          CANNOT_FIND_PROTOCOL: 2997,
          CANNOT_FIND_MODULE: 2998,
          SDK_IS_NOT_READY: 2999,
          LONG_POLL_KICK_OUT: 91101,
          MESSAGE_A2KEY_EXPIRED: 20002,
          ACCOUNT_A2KEY_EXPIRED: 70001,
          LONG_POLL_API_PARAM_ERROR: 90001,
          HELLO_ANSWER_KICKED_OUT: 1002
      },
      lo = "无 SDKAppID",
      po = "无 userID",
      go = "无 userSig",
      ho = "无 tinyID",
      _o = "无 a2key",
      fo = "用户未登录",
      mo = "重复登录",
      Mo = "未检测到 COS 上传插件",
      vo = "获取 COS 预签名 URL 失败",
      yo = "消息发送失败",
      Io = "需要 Message 的实例",
      To = 'Message.conversationType 只能为 "C2C" 或 "GROUP"',
      Do = "无法发送空文件",
      Co = "回调函数运行时遇到错误，请检查接入侧代码",
      So = "消息撤回失败",
      Eo = "消息删除失败",
      ko = "请先选择一个图片",
      Ao = "只允许上传 jpg png jpeg gif bmp格式的图片",
      No = "图片大小超过20M，无法发送",
      Oo = "语音上传失败",
      Lo = "语音大小大于20M，无法发送",
      Ro = "视频上传失败",
      Go = "视频大小超过100M，无法发送",
      Po = "只允许上传 mp4 格式的视频",
      bo = "文件上传失败",
      wo = "请先选择一个文件",
      Uo = "文件大小超过100M，无法发送 ",
      Fo = "缺少必要的参数文件 URL",
      qo = "非合并消息",
      Vo = "合并消息的 messageKey 无效",
      Ko = "下载合并消息失败",
      xo = "选择的消息类型（如群提示消息）不可以转发",
      Bo = "没有找到相应的会话，请检查传入参数",
      Ho = "没有找到相应的用户或群组，请检查传入参数",
      jo = "未记录的会话类型",
      Yo = "非法的群类型，请检查传入参数",
      $o = "不能加入 Work 类型的群组",
      zo = "AVChatRoom 类型的群组不能转让群主",
      Wo = "不能把群主转让给自己",
      Jo = "不能解散 Work 类型的群组",
      Xo = "用户不在该群组内",
      Qo = "加群失败，请检查传入参数或重试",
      Zo = "AVChatRoom 类型的群不支持邀请群成员",
      ea = "非 AVChatRoom 类型的群组不允许匿名加群，请先登录后再加群",
      ta = "不能在 AVChatRoom 类型的群组踢人",
      na = "你不是群主，只有群主才有权限操作",
      oa = "不能在 Work / AVChatRoom 类型的群中设置群成员身份",
      aa = "不合法的群成员身份，请检查传入参数",
      sa = "不能设置自己的群成员身份，请检查传入参数",
      ra = "不能将自己禁言，请检查传入参数",
      ia = "传入 updateMyProfile 接口的参数无效",
      ua = "updateMyProfile 无标配资料字段或自定义资料字段",
      ca = "传入 addToBlacklist 接口的参数无效",
      la = "传入 removeFromBlacklist 接口的参数无效",
      da = "不能拉黑自己",
      pa = "网络错误",
      ga = "请求超时",
      ha = "未连接到网络",
      _a = "无效操作，如调用了未定义或者未实现的方法等",
      fa = "无法找到协议",
      ma = "无法找到模块",
      Ma = "接口需要 SDK 处于 ready 状态后才能调用",
      va = "upload",
      ya = "networkRTT",
      Ia = "messageE2EDelay",
      Ta = "sendMessageC2C",
      Da = "sendMessageGroup",
      Ca = "sendMessageGroupAV",
      Sa = "sendMessageRichMedia",
      Ea = "cosUpload",
      ka = "messageReceivedGroup",
      Aa = "messageReceivedGroupAVPush",
      Na = "messageReceivedGroupAVPull",
      Oa = (r(Mt = {}, ya, 2), r(Mt, Ia, 3), r(Mt, Ta, 4), r(Mt, Da, 5), r(Mt, Ca, 6), r(Mt, Sa, 7), r(Mt, ka, 8), r(Mt, Aa, 9), r(Mt, Na, 10), r(Mt, Ea, 11), Mt),
      La = {
          info: 4,
          warning: 5,
          error: 6
      },
      Ra = {
          wifi: 1,
          "2g": 2,
          "3g": 3,
          "4g": 4,
          "5g": 5,
          unknown: 6,
          none: 7,
          online: 8
      },
      Ga = function() {
          function e(t) {
              o(this, e), this.eventType = 0, this.timestamp = 0, this.networkType = 8, this.code = 0, this.message = "", this.moreMessage = "", this.extension = t, this.costTime = 0, this.duplicate = !1, this.level = 4, this._sentFlag = !1, this._startts = ye()
          }
          return s(e, [{
              key: "updateTimeStamp",
              value: function() {
                  this.timestamp = ye()
              }
          }, {
              key: "start",
              value: function(e) {
                  return this._startts = e, this
              }
          }, {
              key: "end",
              value: function() {
                  var e = this,
                      t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  if (!this._sentFlag) {
                      var n = ye();
                      this.costTime = n - this._startts, this.setMoreMessage("host:".concat(it(), " startts:").concat(this._startts, " endts:").concat(n)), t ? (this._sentFlag = !0, this._eventStatModule && this._eventStatModule.pushIn(this)) : setTimeout((function() {
                          e._sentFlag = !0, e._eventStatModule && e._eventStatModule.pushIn(e)
                      }), 0)
                  }
              }
          }, {
              key: "setError",
              value: function(e, t, n) {
                  return e instanceof Error ? (this._sentFlag || (this.setNetworkType(n), t ? (e.code && this.setCode(e.code), e.message && this.setMoreMessage(e.message)) : (this.setCode(co.NO_NETWORK), this.setMoreMessage(ha)), this.setLevel("error")), this) : (Se.warn("SSOLogData.setError value not instanceof Error, please check!"), this)
              }
          }, {
              key: "setCode",
              value: function(e) {
                  return Ge(e) || this._sentFlag || ("ECONNABORTED" === e && (this.code = 103), Ae(e) ? this.code = e : Se.warn("SSOLogData.setCode value not a number, please check!", e, n(e))), this
              }
          }, {
              key: "setMessage",
              value: function(e) {
                  return Ge(e) || this._sentFlag || (Ae(e) && (this.message = e.toString()), Ne(e) && (this.message = e)), this
              }
          }, {
              key: "setLevel",
              value: function(e) {
                  return Ge(e) || this._sentFlag || (this.level = La[e]), this
              }
          }, {
              key: "setMoreMessage",
              value: function(e) {
                  return _t(this.moreMessage) ? this.moreMessage = "".concat(e) : this.moreMessage += " ".concat(e), this
              }
          }, {
              key: "setNetworkType",
              value: function(e) {
                  return Ge(e) || Ge(Ra[e]) ? Se.warn("SSOLogData.setNetworkType value is undefined, please check!") : this.networkType = Ra[e], this
              }
          }, {
              key: "getStartTs",
              value: function() {
                  return this._startts
              }
          }], [{
              key: "bindEventStatModule",
              value: function(t) {
                  e.prototype._eventStatModule = t
              }
          }]), e
      }(),
      Pa = "sdkConstruct",
      ba = "sdkReady",
      wa = "login",
      Ua = "logout",
      Fa = "kickedOut",
      qa = "registerPlugin",
      Va = "wsConnect",
      Ka = "wsOnOpen",
      xa = "wsOnClose",
      Ba = "wsOnError",
      Ha = "getCosAuthKey",
      ja = "getCosPreSigUrl",
      Ya = "upload",
      $a = "sendMessage",
      za = "getC2CRoamingMessages",
      Wa = "getGroupRoamingMessages",
      Ja = "revokeMessage",
      Xa = "deleteMessage",
      Qa = "setC2CMessageRead",
      Za = "setGroupMessageRead",
      es = "emptyMessageBody",
      ts = "getPeerReadTime",
      ns = "uploadMergerMessage",
      os = "downloadMergerMessage",
      as = "jsonParseError",
      ss = "messageE2EDelayException",
      rs = "getConversationList",
      is = "getConversationProfile",
      us = "deleteConversation",
      cs = "pinConversation",
      ls = "getConversationListInStorage",
      ds = "syncConversationList",
      ps = "createGroup",
      gs = "applyJoinGroup",
      hs = "quitGroup",
      _s = "searchGroupByID",
      fs = "changeGroupOwner",
      ms = "handleGroupApplication",
      Ms = "handleGroupInvitation",
      vs = "setMessageRemindType",
      ys = "dismissGroup",
      Is = "updateGroupProfile",
      Ts = "getGroupList",
      Ds = "getGroupProfile",
      Cs = "getGroupListInStorage",
      Ss = "getGroupLastSequence",
      Es = "getGroupMissingMessage",
      ks = "pagingGetGroupList",
      As = "getGroupSimplifiedInfo",
      Ns = "joinWithoutAuth",
      Os = "initGroupAttributes",
      Ls = "setGroupAttributes",
      Rs = "deleteGroupAttributes",
      Gs = "getGroupAttributes",
      Ps = "getGroupMemberList",
      bs = "getGroupMemberProfile",
      ws = "addGroupMember",
      Us = "deleteGroupMember",
      Fs = "setGroupMemberMuteTime",
      qs = "setGroupMemberNameCard",
      Vs = "setGroupMemberRole",
      Ks = "setGroupMemberCustomField",
      xs = "getGroupOnlineMemberCount",
      Bs = "longPollingAVError",
      Hs = "messageLoss",
      js = "messageStacked",
      Ys = "getUserProfile",
      $s = "updateMyProfile",
      zs = "getBlacklist",
      Ws = "addToBlacklist",
      Js = "removeFromBlacklist",
      Xs = "callbackFunctionError",
      Qs = "fetchCloudControlConfig",
      Zs = "pushedCloudControlConfig",
      er = "error",
      tr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_TEXT, this.content = {
                  text: t.text || ""
              }
          }
          return s(e, [{
              key: "setText",
              value: function(e) {
                  this.content.text = e
              }
          }, {
              key: "sendable",
              value: function() {
                  return 0 !== this.content.text.length
              }
          }]), e
      }(),
      nr = {
          JSON: {
              TYPE: {
                  C2C: {
                      NOTICE: 1,
                      COMMON: 9,
                      EVENT: 10
                  },
                  GROUP: {
                      COMMON: 3,
                      TIP: 4,
                      SYSTEM: 5,
                      TIP2: 6
                  },
                  FRIEND: {
                      NOTICE: 7
                  },
                  PROFILE: {
                      NOTICE: 8
                  }
              },
              SUBTYPE: {
                  C2C: {
                      COMMON: 0,
                      READED: 92,
                      KICKEDOUT: 96
                  },
                  GROUP: {
                      COMMON: 0,
                      LOVEMESSAGE: 1,
                      TIP: 2,
                      REDPACKET: 3
                  }
              },
              OPTIONS: {
                  GROUP: {
                      JOIN: 1,
                      QUIT: 2,
                      KICK: 3,
                      SET_ADMIN: 4,
                      CANCEL_ADMIN: 5,
                      MODIFY_GROUP_INFO: 6,
                      MODIFY_MEMBER_INFO: 7
                  }
              }
          },
          PROTOBUF: {},
          IMAGE_TYPES: {
              ORIGIN: 1,
              LARGE: 2,
              SMALL: 3
          },
          IMAGE_FORMAT: {
              JPG: 1,
              JPEG: 1,
              GIF: 2,
              PNG: 3,
              BMP: 4,
              UNKNOWN: 255
          }
      },
      or = {
          NICK: "Tag_Profile_IM_Nick",
          GENDER: "Tag_Profile_IM_Gender",
          BIRTHDAY: "Tag_Profile_IM_BirthDay",
          LOCATION: "Tag_Profile_IM_Location",
          SELFSIGNATURE: "Tag_Profile_IM_SelfSignature",
          ALLOWTYPE: "Tag_Profile_IM_AllowType",
          LANGUAGE: "Tag_Profile_IM_Language",
          AVATAR: "Tag_Profile_IM_Image",
          MESSAGESETTINGS: "Tag_Profile_IM_MsgSettings",
          ADMINFORBIDTYPE: "Tag_Profile_IM_AdminForbidType",
          LEVEL: "Tag_Profile_IM_Level",
          ROLE: "Tag_Profile_IM_Role"
      },
      ar = {
          UNKNOWN: "Gender_Type_Unknown",
          FEMALE: "Gender_Type_Female",
          MALE: "Gender_Type_Male"
      },
      sr = {
          NONE: "AdminForbid_Type_None",
          SEND_OUT: "AdminForbid_Type_SendOut"
      },
      rr = {
          NEED_CONFIRM: "AllowType_Type_NeedConfirm",
          ALLOW_ANY: "AllowType_Type_AllowAny",
          DENY_ANY: "AllowType_Type_DenyAny"
      },
      ir = "JoinedSuccess",
      ur = "WaitAdminApproval",
      cr = function() {
          function e(t) {
              o(this, e), this._imageMemoryURL = "", z ? this.createImageDataASURLInWXMiniApp(t.file) : this.createImageDataASURLInWeb(t.file), this._initImageInfoModel(), this.type = E.MSG_IMAGE, this._percent = 0, this.content = {
                  imageFormat: t.imageFormat || nr.IMAGE_FORMAT.UNKNOWN,
                  uuid: t.uuid,
                  imageInfoArray: []
              }, this.initImageInfoArray(t.imageInfoArray), this._defaultImage = "http://imgcache.qq.com/open/qcloud/video/act/webim-images/default.jpg", this._autoFixUrl()
          }
          return s(e, [{
              key: "_initImageInfoModel",
              value: function() {
                  var e = this;
                  this._ImageInfoModel = function(t) {
                      this.instanceID = He(9999999), this.sizeType = t.type || 0, this.type = 0, this.size = t.size || 0, this.width = t.width || 0, this.height = t.height || 0, this.imageUrl = t.url || "", this.url = t.url || e._imageMemoryURL || e._defaultImage
                  }, this._ImageInfoModel.prototype = {
                      setSizeType: function(e) {
                          this.sizeType = e
                      },
                      setType: function(e) {
                          this.type = e
                      },
                      setImageUrl: function(e) {
                          e && (this.imageUrl = e)
                      },
                      getImageUrl: function() {
                          return this.imageUrl
                      }
                  }
              }
          }, {
              key: "initImageInfoArray",
              value: function(e) {
                  for (var t = 0, n = null, o = null; t <= 2;) o = Ge(e) || Ge(e[t]) ? {
                      type: 0,
                      size: 0,
                      width: 0,
                      height: 0,
                      url: ""
                  } : e[t], (n = new this._ImageInfoModel(o)).setSizeType(t + 1), n.setType(t), this.addImageInfo(n), t++;
                  this.updateAccessSideImageInfoArray()
              }
          }, {
              key: "updateImageInfoArray",
              value: function(e) {
                  for (var t, n = this.content.imageInfoArray.length, o = 0; o < n; o++) t = this.content.imageInfoArray[o], e[o].size && (t.size = e[o].size), e[o].url && t.setImageUrl(e[o].url), e[o].width && (t.width = e[o].width), e[o].height && (t.height = e[o].height)
              }
          }, {
              key: "_autoFixUrl",
              value: function() {
                  for (var e = this.content.imageInfoArray.length, t = "", n = "", o = ["http", "https"], a = null, s = 0; s < e; s++) this.content.imageInfoArray[s].url && "" !== (a = this.content.imageInfoArray[s]).imageUrl && (n = a.imageUrl.slice(0, a.imageUrl.indexOf("://") + 1), t = a.imageUrl.slice(a.imageUrl.indexOf("://") + 1), o.indexOf(n) < 0 && (n = "https:"), this.content.imageInfoArray[s].setImageUrl([n, t].join("")))
              }
          }, {
              key: "updatePercent",
              value: function(e) {
                  this._percent = e, this._percent > 1 && (this._percent = 1)
              }
          }, {
              key: "updateImageFormat",
              value: function(e) {
                  this.content.imageFormat = nr.IMAGE_FORMAT[e.toUpperCase()] || nr.IMAGE_FORMAT.UNKNOWN
              }
          }, {
              key: "createImageDataASURLInWeb",
              value: function(e) {
                  void 0 !== e && e.files.length > 0 && (this._imageMemoryURL = window.URL.createObjectURL(e.files[0]))
              }
          }, {
              key: "createImageDataASURLInWXMiniApp",
              value: function(e) {
                  e && e.url && (this._imageMemoryURL = e.url)
              }
          }, {
              key: "replaceImageInfo",
              value: function(e, t) {
                  this.content.imageInfoArray[t] instanceof this._ImageInfoModel || (this.content.imageInfoArray[t] = e)
              }
          }, {
              key: "addImageInfo",
              value: function(e) {
                  this.content.imageInfoArray.length >= 3 || this.content.imageInfoArray.push(e)
              }
          }, {
              key: "updateAccessSideImageInfoArray",
              value: function() {
                  var e = this.content.imageInfoArray,
                      t = e[0],
                      n = t.width,
                      o = void 0 === n ? 0 : n,
                      a = t.height,
                      s = void 0 === a ? 0 : a;
                  0 !== o && 0 !== s && (ct(e), Object.assign(e[2], ut({
                      originWidth: o,
                      originHeight: s,
                      min: 720
                  })))
              }
          }, {
              key: "sendable",
              value: function() {
                  return 0 !== this.content.imageInfoArray.length && ("" !== this.content.imageInfoArray[0].imageUrl && 0 !== this.content.imageInfoArray[0].size)
              }
          }]), e
      }(),
      lr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_FACE, this.content = t || null
          }
          return s(e, [{
              key: "sendable",
              value: function() {
                  return null !== this.content
              }
          }]), e
      }(),
      dr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_AUDIO, this._percent = 0, this.content = {
                  downloadFlag: 2,
                  second: t.second,
                  size: t.size,
                  url: t.url,
                  remoteAudioUrl: t.url || "",
                  uuid: t.uuid
              }
          }
          return s(e, [{
              key: "updatePercent",
              value: function(e) {
                  this._percent = e, this._percent > 1 && (this._percent = 1)
              }
          }, {
              key: "updateAudioUrl",
              value: function(e) {
                  this.content.remoteAudioUrl = e
              }
          }, {
              key: "sendable",
              value: function() {
                  return "" !== this.content.remoteAudioUrl
              }
          }]), e
      }(),
      pr = {
          from: !0,
          groupID: !0,
          groupName: !0,
          to: !0
      },
      gr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_GRP_TIP, this.content = {}, this._initContent(t)
          }
          return s(e, [{
              key: "_initContent",
              value: function(e) {
                  var t = this;
                  Object.keys(e).forEach((function(n) {
                      switch (n) {
                          case "remarkInfo":
                              break;
                          case "groupProfile":
                              t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                              break;
                          case "operatorInfo":
                          case "memberInfoList":
                              break;
                          case "msgMemberInfo":
                              t.content.memberList = e[n], Object.defineProperty(t.content, "msgMemberInfo", {
                                  get: function() {
                                      return Se.warn("!!! 禁言的群提示消息中的 payload.msgMemberInfo 属性即将废弃，请使用 payload.memberList 属性替代。 \n", "msgMemberInfo 中的 shutupTime 属性对应更改为 memberList 中的 muteTime 属性，表示禁言时长。 \n", "参考：群提示消息 https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupTipPayload"), t.content.memberList.map((function(e) {
                                          return {
                                              userID: e.userID,
                                              shutupTime: e.muteTime
                                          }
                                      }))
                                  }
                              });
                              break;
                          case "onlineMemberInfo":
                              break;
                          case "memberNum":
                              t.content[n] = e[n], t.content.memberCount = e[n];
                              break;
                          default:
                              t.content[n] = e[n]
                      }
                  })), this.content.userIDList || (this.content.userIDList = [this.content.operatorID])
              }
          }, {
              key: "_initGroupProfile",
              value: function(e) {
                  for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                      var o = t[n];
                      pr[o] && (this.content.groupProfile[o] = e[o])
                  }
              }
          }]), e
      }(),
      hr = {
          from: !0,
          groupID: !0,
          groupName: !0,
          to: !0
      },
      _r = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_GRP_SYS_NOTICE, this.content = {}, this._initContent(t)
          }
          return s(e, [{
              key: "_initContent",
              value: function(e) {
                  var t = this;
                  Object.keys(e).forEach((function(n) {
                      switch (n) {
                          case "memberInfoList":
                              break;
                          case "remarkInfo":
                              t.content.handleMessage = e[n];
                              break;
                          case "groupProfile":
                              t.content.groupProfile = {}, t._initGroupProfile(e[n]);
                              break;
                          default:
                              t.content[n] = e[n]
                      }
                  }))
              }
          }, {
              key: "_initGroupProfile",
              value: function(e) {
                  for (var t = Object.keys(e), n = 0; n < t.length; n++) {
                      var o = t[n];
                      hr[o] && ("groupName" === o ? this.content.groupProfile.name = e[o] : this.content.groupProfile[o] = e[o])
                  }
              }
          }]), e
      }(),
      fr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_FILE, this._percent = 0;
              var n = this._getFileInfo(t);
              this.content = {
                  downloadFlag: 2,
                  fileUrl: t.url || "",
                  uuid: t.uuid,
                  fileName: n.name || "",
                  fileSize: n.size || 0
              }
          }
          return s(e, [{
              key: "_getFileInfo",
              value: function(e) {
                  if (e.fileName && e.fileSize) return {
                      size: e.fileSize,
                      name: e.fileName
                  };
                  if (z) return {};
                  var t = e.file.files[0];
                  return {
                      size: t.size,
                      name: t.name,
                      type: t.type.slice(t.type.lastIndexOf("/") + 1).toLowerCase()
                  }
              }
          }, {
              key: "updatePercent",
              value: function(e) {
                  this._percent = e, this._percent > 1 && (this._percent = 1)
              }
          }, {
              key: "updateFileUrl",
              value: function(e) {
                  this.content.fileUrl = e
              }
          }, {
              key: "sendable",
              value: function() {
                  return "" !== this.content.fileUrl && ("" !== this.content.fileName && 0 !== this.content.fileSize)
              }
          }]), e
      }(),
      mr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_CUSTOM, this.content = {
                  data: t.data || "",
                  description: t.description || "",
                  extension: t.extension || ""
              }
          }
          return s(e, [{
              key: "setData",
              value: function(e) {
                  return this.content.data = e, this
              }
          }, {
              key: "setDescription",
              value: function(e) {
                  return this.content.description = e, this
              }
          }, {
              key: "setExtension",
              value: function(e) {
                  return this.content.extension = e, this
              }
          }, {
              key: "sendable",
              value: function() {
                  return 0 !== this.content.data.length || 0 !== this.content.description.length || 0 !== this.content.extension.length
              }
          }]), e
      }(),
      Mr = function() {
          function e(t) {
              o(this, e), this.type = E.MSG_VIDEO, this._percent = 0, this.content = {
                  remoteVideoUrl: t.remoteVideoUrl || t.videoUrl || "",
                  videoFormat: t.videoFormat,
                  videoSecond: parseInt(t.videoSecond, 10),
                  videoSize: t.videoSize,
                  videoUrl: t.videoUrl,
                  videoDownloadFlag: 2,
                  videoUUID: t.videoUUID,
                  thumbUUID: t.thumbUUID,
                  thumbFormat: t.thumbFormat,
                  thumbWidth: t.thumbWidth,
                  thumbHeight: t.thumbHeight,
                  thumbSize: t.thumbSize,
                  thumbDownloadFlag: 2,
                  thumbUrl: t.thumbUrl
              }
          }
          return s(e, [{
              key: "updatePercent",
              value: function(e) {
                  this._percent = e, this._percent > 1 && (this._percent = 1)
              }
          }, {
              key: "updateVideoUrl",
              value: function(e) {
                  e && (this.content.remoteVideoUrl = e)
              }
          }, {
              key: "sendable",
              value: function() {
                  return "" !== this.content.remoteVideoUrl
              }
          }]), e
      }(),
      vr = function e(t) {
          o(this, e), this.type = E.MSG_GEO, this.content = t
      },
      yr = function() {
          function e(t) {
              if (o(this, e), this.from = t.from, this.messageSender = t.from, this.time = t.time, this.messageSequence = t.sequence, this.clientSequence = t.clientSequence || t.sequence, this.messageRandom = t.random, this.cloudCustomData = t.cloudCustomData || "", t.ID) this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [{
                  type: t.type,
                  payload: t.payload
              }], t.conversationType.startsWith(E.CONV_C2C) ? this.receiverUserID = t.to : t.conversationType.startsWith(E.CONV_GROUP) && (this.receiverGroupID = t.to), this.messageReceiver = t.to;
              else {
                  this.nick = t.nick || "", this.avatar = t.avatar || "", this.messageBody = [];
                  var n = t.elements[0].type,
                      a = t.elements[0].content;
                  this._patchRichMediaPayload(n, a), n === E.MSG_MERGER ? this.messageBody.push({
                      type: n,
                      payload: new Ir(a).content
                  }) : this.messageBody.push({
                      type: n,
                      payload: a
                  }), t.groupID && (this.receiverGroupID = t.groupID, this.messageReceiver = t.groupID), t.to && (this.receiverUserID = t.to, this.messageReceiver = t.to)
              }
          }
          return s(e, [{
              key: "_patchRichMediaPayload",
              value: function(e, t) {
                  e === E.MSG_IMAGE ? t.imageInfoArray.forEach((function(e) {
                      !e.imageUrl && e.url && (e.imageUrl = e.url, e.sizeType = e.type, 1 === e.type ? e.type = 0 : 3 === e.type && (e.type = 1))
                  })) : e === E.MSG_VIDEO ? !t.remoteVideoUrl && t.videoUrl && (t.remoteVideoUrl = t.videoUrl) : e === E.MSG_AUDIO ? !t.remoteAudioUrl && t.url && (t.remoteAudioUrl = t.url) : e === E.MSG_FILE && !t.fileUrl && t.url && (t.fileUrl = t.url, t.url = void 0)
              }
          }]), e
      }(),
      Ir = function() {
          function e(t) {
              if (o(this, e), this.type = E.MSG_MERGER, this.content = {
                      downloadKey: "",
                      pbDownloadKey: "",
                      messageList: [],
                      title: "",
                      abstractList: [],
                      compatibleText: "",
                      version: 0,
                      layersOverLimit: !1
                  }, t.downloadKey) {
                  var n = t.downloadKey,
                      a = t.pbDownloadKey,
                      s = t.title,
                      r = t.abstractList,
                      i = t.compatibleText,
                      u = t.version;
                  this.content.downloadKey = n, this.content.pbDownloadKey = a, this.content.title = s, this.content.abstractList = r, this.content.compatibleText = i, this.content.version = u || 0
              } else if (_t(t.messageList)) 1 === t.layersOverLimit && (this.content.layersOverLimit = !0);
              else {
                  var c = t.messageList,
                      l = t.title,
                      d = t.abstractList,
                      p = t.compatibleText,
                      g = t.version,
                      h = [];
                  c.forEach((function(e) {
                      if (!_t(e)) {
                          var t = new yr(e);
                          h.push(t)
                      }
                  })), this.content.messageList = h, this.content.title = l, this.content.abstractList = d, this.content.compatibleText = p, this.content.version = g || 0
              }
              Se.debug("MergerElement.content:", this.content)
          }
          return s(e, [{
              key: "sendable",
              value: function() {
                  return !_t(this.content.messageList) || !_t(this.content.downloadKey)
              }
          }]), e
      }(),
      Tr = {
          1: E.MSG_PRIORITY_HIGH,
          2: E.MSG_PRIORITY_NORMAL,
          3: E.MSG_PRIORITY_LOW,
          4: E.MSG_PRIORITY_LOWEST
      },
      Dr = function() {
          function e(t) {
              o(this, e), this.ID = "", this.conversationID = t.conversationID || null, this.conversationType = t.conversationType || E.CONV_C2C, this.conversationSubType = t.conversationSubType, this.time = t.time || Math.ceil(Date.now() / 1e3), this.sequence = t.sequence || 0, this.clientSequence = t.clientSequence || t.sequence || 0, this.random = t.random || 0 === t.random ? t.random : He(), this.priority = this._computePriority(t.priority), this.nick = t.nick || "", this.avatar = t.avatar || "", this.isPeerRead = !1, this.nameCard = "", this._elements = [], this.isPlaceMessage = t.isPlaceMessage || 0, this.isRevoked = 2 === t.isPlaceMessage || 8 === t.msgFlagBits, this.geo = {}, this.from = t.from || null, this.to = t.to || null, this.flow = "", this.isSystemMessage = t.isSystemMessage || !1, this.protocol = t.protocol || "JSON", this.isResend = !1, this.isRead = !1, this.status = t.status || vt.SUCCESS, this._onlineOnlyFlag = !1, this._groupAtInfoList = [], this._relayFlag = !1, this.atUserList = [], this.cloudCustomData = t.cloudCustomData || "", this.isDeleted = !1, this.isModified = !1, this.reInitialize(t.currentUser), this.extractGroupInfo(t.groupProfile || null), this.handleGroupAtInfo(t)
          }
          return s(e, [{
              key: "elements",
              get: function() {
                  return Se.warn("！！！Message 实例的 elements 属性即将废弃，请尽快修改。使用 type 和 payload 属性处理单条消息，兼容组合消息使用 _elements 属性！！！"), this._elements
              }
          }, {
              key: "getElements",
              value: function() {
                  return this._elements
              }
          }, {
              key: "extractGroupInfo",
              value: function(e) {
                  if (null !== e) {
                      Ne(e.nick) && (this.nick = e.nick), Ne(e.avatar) && (this.avatar = e.avatar);
                      var t = e.messageFromAccountExtraInformation;
                      Le(t) && Ne(t.nameCard) && (this.nameCard = t.nameCard)
                  }
              }
          }, {
              key: "handleGroupAtInfo",
              value: function(e) {
                  var t = this;
                  e.payload && e.payload.atUserList && e.payload.atUserList.forEach((function(e) {
                      e !== E.MSG_AT_ALL ? (t._groupAtInfoList.push({
                          groupAtAllFlag: 0,
                          groupAtUserID: e
                      }), t.atUserList.push(e)) : (t._groupAtInfoList.push({
                          groupAtAllFlag: 1
                      }), t.atUserList.push(E.MSG_AT_ALL))
                  })), Re(e.groupAtInfo) && e.groupAtInfo.forEach((function(e) {
                      1 === e.groupAtAllFlag ? t.atUserList.push(e.groupAtUserID) : 2 === e.groupAtAllFlag && t.atUserList.push(E.MSG_AT_ALL)
                  }))
              }
          }, {
              key: "getGroupAtInfoList",
              value: function() {
                  return this._groupAtInfoList
              }
          }, {
              key: "_initProxy",
              value: function() {
                  this._elements[0] && (this.payload = this._elements[0].content, this.type = this._elements[0].type)
              }
          }, {
              key: "reInitialize",
              value: function(e) {
                  e && (this.status = this.from ? vt.SUCCESS : vt.UNSEND, !this.from && (this.from = e)), this._initFlow(e), this._initSequence(e), this._concatConversationID(e), this.generateMessageID(e)
              }
          }, {
              key: "isSendable",
              value: function() {
                  return 0 !== this._elements.length && ("function" != typeof this._elements[0].sendable ? (Se.warn("".concat(this._elements[0].type, ' need "boolean : sendable()" method')), !1) : this._elements[0].sendable())
              }
          }, {
              key: "_initTo",
              value: function(e) {
                  this.conversationType === E.CONV_GROUP && (this.to = e.groupID)
              }
          }, {
              key: "_initSequence",
              value: function(e) {
                  0 === this.clientSequence && e && (this.clientSequence = function(e) {
                      if (!e) return Se.error("autoIncrementIndex(string: key) need key parameter"), !1;
                      if (void 0 === ze[e]) {
                          var t = new Date,
                              n = "3".concat(t.getHours()).slice(-2),
                              o = "0".concat(t.getMinutes()).slice(-2),
                              a = "0".concat(t.getSeconds()).slice(-2);
                          ze[e] = parseInt([n, o, a, "0001"].join("")), n = null, o = null, a = null, Se.log("autoIncrementIndex start index:".concat(ze[e]))
                      }
                      return ze[e]++
                  }(e)), 0 === this.sequence && this.conversationType === E.CONV_C2C && (this.sequence = this.clientSequence)
              }
          }, {
              key: "generateMessageID",
              value: function(e) {
                  var t = e === this.from ? 1 : 0,
                      n = this.sequence > 0 ? this.sequence : this.clientSequence;
                  this.ID = "".concat(this.conversationID, "-").concat(n, "-").concat(this.random, "-").concat(t)
              }
          }, {
              key: "_initFlow",
              value: function(e) {
                  "" !== e && (e === this.from ? (this.flow = "out", this.isRead = !0) : this.flow = "in")
              }
          }, {
              key: "_concatConversationID",
              value: function(e) {
                  var t = this.to,
                      n = "",
                      o = this.conversationType;
                  o !== E.CONV_SYSTEM ? (n = o === E.CONV_C2C ? e === this.from ? t : this.from : this.to, this.conversationID = "".concat(o).concat(n)) : this.conversationID = E.CONV_SYSTEM
              }
          }, {
              key: "isElement",
              value: function(e) {
                  return e instanceof tr || e instanceof cr || e instanceof lr || e instanceof dr || e instanceof fr || e instanceof Mr || e instanceof gr || e instanceof _r || e instanceof mr || e instanceof vr || e instanceof Ir
              }
          }, {
              key: "setElement",
              value: function(e) {
                  var t = this;
                  if (this.isElement(e)) return this._elements = [e], void this._initProxy();
                  var n = function(e) {
                      if (e.type && e.content) switch (e.type) {
                          case E.MSG_TEXT:
                              t.setTextElement(e.content);
                              break;
                          case E.MSG_IMAGE:
                              t.setImageElement(e.content);
                              break;
                          case E.MSG_AUDIO:
                              t.setAudioElement(e.content);
                              break;
                          case E.MSG_FILE:
                              t.setFileElement(e.content);
                              break;
                          case E.MSG_VIDEO:
                              t.setVideoElement(e.content);
                              break;
                          case E.MSG_CUSTOM:
                              t.setCustomElement(e.content);
                              break;
                          case E.MSG_GEO:
                              t.setGEOElement(e.content);
                              break;
                          case E.MSG_GRP_TIP:
                              t.setGroupTipElement(e.content);
                              break;
                          case E.MSG_GRP_SYS_NOTICE:
                              t.setGroupSystemNoticeElement(e.content);
                              break;
                          case E.MSG_FACE:
                              t.setFaceElement(e.content);
                              break;
                          case E.MSG_MERGER:
                              t.setMergerElement(e.content);
                              break;
                          default:
                              Se.warn(e.type, e.content, "no operation......")
                      }
                  };
                  if (Re(e))
                      for (var o = 0; o < e.length; o++) n(e[o]);
                  else n(e);
                  this._initProxy()
              }
          }, {
              key: "clearElement",
              value: function() {
                  this._elements.length = 0
              }
          }, {
              key: "setTextElement",
              value: function(e) {
                  var t = "string" == typeof e ? e : e.text,
                      n = new tr({
                          text: t
                      });
                  this._elements.push(n)
              }
          }, {
              key: "setImageElement",
              value: function(e) {
                  var t = new cr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setAudioElement",
              value: function(e) {
                  var t = new dr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setFileElement",
              value: function(e) {
                  var t = new fr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setVideoElement",
              value: function(e) {
                  var t = new Mr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setGEOElement",
              value: function(e) {
                  var t = new vr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setCustomElement",
              value: function(e) {
                  var t = new mr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setGroupTipElement",
              value: function(e) {
                  var t = {},
                      n = e.operationType;
                  _t(e.memberInfoList) ? e.operatorInfo && (t = e.operatorInfo) : n !== E.GRP_TIP_MBR_JOIN && n !== E.GRP_TIP_MBR_KICKED_OUT && n !== E.GRP_TIP_MBR_SET_ADMIN && n !== E.GRP_TIP_MBR_CANCELED_ADMIN || (t = e.memberInfoList[0]);
                  var o = t,
                      a = o.nick,
                      s = o.avatar;
                  Ne(a) && (this.nick = a), Ne(s) && (this.avatar = s);
                  var r = new gr(e);
                  this._elements.push(r)
              }
          }, {
              key: "setGroupSystemNoticeElement",
              value: function(e) {
                  var t = new _r(e);
                  this._elements.push(t)
              }
          }, {
              key: "setFaceElement",
              value: function(e) {
                  var t = new lr(e);
                  this._elements.push(t)
              }
          }, {
              key: "setMergerElement",
              value: function(e) {
                  var t = new Ir(e);
                  this._elements.push(t)
              }
          }, {
              key: "setIsRead",
              value: function(e) {
                  this.isRead = e
              }
          }, {
              key: "setRelayFlag",
              value: function(e) {
                  this._relayFlag = e
              }
          }, {
              key: "getRelayFlag",
              value: function() {
                  return this._relayFlag
              }
          }, {
              key: "setOnlineOnlyFlag",
              value: function(e) {
                  this._onlineOnlyFlag = e
              }
          }, {
              key: "getOnlineOnlyFlag",
              value: function() {
                  return this._onlineOnlyFlag
              }
          }, {
              key: "_computePriority",
              value: function(e) {
                  if (Ge(e)) return E.MSG_PRIORITY_NORMAL;
                  if (Ne(e) && -1 !== Object.values(Tr).indexOf(e)) return e;
                  if (Ae(e)) {
                      var t = "" + e;
                      if (-1 !== Object.keys(Tr).indexOf(t)) return Tr[t]
                  }
                  return E.MSG_PRIORITY_NORMAL
              }
          }, {
              key: "setNickAndAvatar",
              value: function(e) {
                  var t = e.nick,
                      n = e.avatar;
                  Ne(t) && (this.nick = t), Ne(n) && (this.avatar = n)
              }
          }, {
              key: "setNameCard",
              value: function(e) {
                  Ne(e) && (this.nameCard = e)
              }
          }]), e
      }(),
      Cr = function(e) {
          return {
              code: 0,
              data: e || {}
          }
      },
      Sr = "https://cloud.tencent.com/document/product/",
      Er = "您可以在即时通信 IM 控制台的【开发辅助工具(https://console.cloud.tencent.com/im-detail/tool-usersig)】页面校验 UserSig。",
      kr = "UserSig 非法，请使用官网提供的 API 重新生成 UserSig(".concat(Sr, "269/32688)。"),
      Ar = "#.E6.B6.88.E6.81.AF.E5.85.83.E7.B4.A0-timmsgelement",
      Nr = {
          70001: "UserSig 已过期，请重新生成。建议 UserSig 有效期设置不小于24小时。",
          70002: "UserSig 长度为0，请检查传入的 UserSig 是否正确。",
          70003: kr,
          70005: kr,
          70009: "UserSig 验证失败，可能因为生成 UserSig 时混用了其他 SDKAppID 的私钥或密钥导致，请使用对应 SDKAppID 下的私钥或密钥重新生成 UserSig(".concat(Sr, "269/32688)。"),
          70013: "请求中的 UserID 与生成 UserSig 时使用的 UserID 不匹配。".concat(Er),
          70014: "请求中的 SDKAppID 与生成 UserSig 时使用的 SDKAppID 不匹配。".concat(Er),
          70016: "密钥不存在，UserSig 验证失败，请在即时通信 IM 控制台获取密钥(".concat(Sr, "269/32578#.E8.8E.B7.E5.8F.96.E5.AF.86.E9.92.A5)。"),
          70020: "SDKAppID 未找到，请在即时通信 IM 控制台确认应用信息。",
          70050: "UserSig 验证次数过于频繁。请检查 UserSig 是否正确，并于1分钟后重新验证。".concat(Er),
          70051: "帐号被拉入黑名单。",
          70052: "UserSig 已经失效，请重新生成，再次尝试。",
          70107: "因安全原因被限制登录，请不要频繁登录。",
          70169: "请求的用户帐号不存在。",
          70114: "".concat("服务端内部超时，请稍后重试。"),
          70202: "".concat("服务端内部超时，请稍后重试。"),
          70206: "请求中批量数量不合法。",
          70402: "参数非法，请检查必填字段是否填充，或者字段的填充是否满足协议要求。",
          70403: "请求失败，需要 App 管理员权限。",
          70398: "帐号数超限。如需创建多于100个帐号，请将应用升级为专业版，具体操作指引请参见购买指引(".concat(Sr, "269/32458)。"),
          70500: "".concat("服务端内部错误，请重试。"),
          71e3: "删除帐号失败。仅支持删除体验版帐号，您当前应用为专业版，暂不支持帐号删除。",
          20001: "请求包非法。",
          20002: "UserSig 或 A2 失效。",
          20003: "消息发送方或接收方 UserID 无效或不存在，请检查 UserID 是否已导入即时通信 IM。",
          20004: "网络异常，请重试。",
          20005: "".concat("服务端内部错误，请重试。"),
          20006: "触发发送".concat("单聊消息", "之前回调，App 后台返回禁止下发该消息。"),
          20007: "发送".concat("单聊消息", "，被对方拉黑，禁止发送。消息发送状态默认展示为失败，您可以登录控制台修改该场景下的消息发送状态展示结果，具体操作请参见消息保留设置(").concat(Sr, "269/38656)。"),
          20009: "消息发送双方互相不是好友，禁止发送（配置".concat("单聊消息", "校验好友关系才会出现）。"),
          20010: "发送".concat("单聊消息", "，自己不是对方的好友（单向关系），禁止发送。"),
          20011: "发送".concat("单聊消息", "，对方不是自己的好友（单向关系），禁止发送。"),
          20012: "发送方被禁言，该条消息被禁止发送。",
          20016: "消息撤回超过了时间限制（默认2分钟）。",
          20018: "删除漫游内部错误。",
          90001: "JSON 格式解析失败，请检查请求包是否符合 JSON 规范。",
          90002: "".concat("JSON 格式请求包体", "中 MsgBody 不符合消息格式描述，或者 MsgBody 不是 Array 类型，请参考 TIMMsgElement 对象的定义(").concat(Sr, "269/2720").concat(Ar, ")。"),
          90003: "".concat("JSON 格式请求包体", "中缺少 To_Account 字段或者 To_Account 帐号不存在。"),
          90005: "".concat("JSON 格式请求包体", "中缺少 MsgRandom 字段或者 MsgRandom 字段不是 Integer 类型。"),
          90006: "".concat("JSON 格式请求包体", "中缺少 MsgTimeStamp 字段或者 MsgTimeStamp 字段不是 Integer 类型。"),
          90007: "".concat("JSON 格式请求包体", "中 MsgBody 类型不是 Array 类型，请将其修改为 Array 类型。"),
          90008: "".concat("JSON 格式请求包体", "中缺少 From_Account 字段或者 From_Account 帐号不存在。"),
          90009: "请求需要 App 管理员权限。",
          90010: "".concat("JSON 格式请求包体", "不符合消息格式描述，请参考 TIMMsgElement 对象的定义(").concat(Sr, "269/2720").concat(Ar, ")。"),
          90011: "批量发消息目标帐号超过500，请减少 To_Account 中目标帐号数量。",
          90012: "To_Account 没有注册或不存在，请确认 To_Account 是否导入即时通信 IM 或者是否拼写错误。",
          90026: "消息离线存储时间错误（最多不能超过7天）。",
          90031: "".concat("JSON 格式请求包体", "中 SyncOtherMachine 字段不是 Integer 类型。"),
          90044: "".concat("JSON 格式请求包体", "中 MsgLifeTime 字段不是 Integer 类型。"),
          90048: "请求的用户帐号不存在。",
          90054: "撤回请求中的 MsgKey 不合法。",
          90994: "".concat("服务端内部错误，请重试。"),
          90995: "".concat("服务端内部错误，请重试。"),
          91e3: "".concat("服务端内部错误，请重试。"),
          90992: "".concat("服务端内部错误，请重试。", "如果所有请求都返回该错误码，且 App 配置了第三方回调，请检查 App 服务端是否正常向即时通信 IM 后台服务端返回回调结果。"),
          93e3: "JSON 数据包超长，消息包体请不要超过8k。",
          91101: "Web 端长轮询被踢（Web 端同时在线实例个数超出限制）。",
          10002: "".concat("服务端内部错误，请重试。"),
          10003: "请求中的接口名称错误，请核对接口名称并重试。",
          10004: "参数非法，请根据错误描述检查请求是否正确。",
          10005: "请求包体中携带的帐号数量过多。",
          10006: "操作频率限制，请尝试降低调用的频率。",
          10007: "操作权限不足，例如 Work ".concat("群组", "中普通成员尝试执行踢人操作，但只有 App 管理员才有权限。"),
          10008: "请求非法，可能是请求中携带的签名信息验证不正确，请再次尝试。",
          10009: "该群不允许群主主动退出。",
          10010: "".concat("群组", "不存在，或者曾经存在过，但是目前已经被解散。"),
          10011: "解析 JSON 包体失败，请检查包体的格式是否符合 JSON 格式。",
          10012: "发起操作的 UserID 非法，请检查发起操作的用户 UserID 是否填写正确。",
          10013: "被邀请加入的用户已经是群成员。",
          10014: "群已满员，无法将请求中的用户加入".concat("群组", "，如果是批量加人，可以尝试减少加入用户的数量。"),
          10015: "找不到指定 ID 的".concat("群组", "。"),
          10016: "App 后台通过第三方回调拒绝本次操作。",
          10017: "因被禁言而不能发送消息，请检查发送者是否被设置禁言。",
          10018: "应答包长度超过最大包长（1MB），请求的内容过多，请尝试减少单次请求的数据量。",
          10019: "请求的用户帐号不存在。",
          10021: "".concat("群组", " ID 已被使用，请选择其他的").concat("群组", " ID。"),
          10023: "发消息的频率超限，请延长两次发消息时间的间隔。",
          10024: "此邀请或者申请请求已经被处理。",
          10025: "".concat("群组", " ID 已被使用，并且操作者为群主，可以直接使用。"),
          10026: "该 SDKAppID 请求的命令字已被禁用。",
          10030: "请求撤回的消息不存在。",
          10031: "消息撤回超过了时间限制（默认2分钟）。",
          10032: "请求撤回的消息不支持撤回操作。",
          10033: "".concat("群组", "类型不支持消息撤回操作。"),
          10034: "该消息类型不支持删除操作。",
          10035: "直播群和在线成员广播大群不支持删除消息。",
          10036: "直播群创建数量超过了限制，请参考价格说明(".concat(Sr, "269/11673)购买预付费套餐“IM直播群”。"),
          10037: "单个用户可创建和加入的".concat("群组", "数量超过了限制，请参考价格说明(").concat(Sr, "269/11673)购买或升级预付费套餐“单人可创建与加入").concat("群组", "数”。"),
          10038: "群成员数量超过限制，请参考价格说明(".concat(Sr, "269/11673)购买或升级预付费套餐“扩展群人数上限”。"),
          10041: "该应用（SDKAppID）已配置不支持群消息撤回。",
          10050: "群属性 key 不存在",
          10056: "请在写入群属性前先使用 getGroupAttributes 接口更新本地群属性，避免冲突。",
          30001: "请求参数错误，请根据错误描述检查请求参数",
          30002: "SDKAppID 不匹配",
          30003: "请求的用户帐号不存在",
          30004: "请求需要 App 管理员权限",
          30005: "关系链字段中包含敏感词",
          30006: "".concat("服务端内部错误，请重试。"),
          30007: "".concat("网络超时，请稍后重试. "),
          30008: "并发写导致写冲突，建议使用批量方式",
          30009: "后台禁止该用户发起加好友请求",
          30010: "自己的好友数已达系统上限",
          30011: "分组已达系统上限",
          30012: "未决数已达系统上限",
          30014: "对方的好友数已达系统上限",
          30515: "请求添加好友时，对方在自己的黑名单中，不允许加好友",
          30516: "请求添加好友时，对方的加好友验证方式是不允许任何人添加自己为好友",
          30525: "请求添加好友时，自己在对方的黑名单中，不允许加好友",
          30539: "等待对方同意",
          30540: "添加好友请求被安全策略打击，请勿频繁发起添加好友请求",
          31704: "与请求删除的帐号之间不存在好友关系",
          31707: "删除好友请求被安全策略打击，请勿频繁发起删除好友请求"
      },
      Or = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this)).code = e.code, a.message = Nr[e.code] || e.message, a.data = e.data || {}, a
          }
          return n
      }(p(Error)),
      Lr = null,
      Rr = function(e) {
          Lr = e
      },
      Gr = function(e) {
          return Promise.resolve(Cr(e))
      },
      Pr = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (e instanceof Or) return t && null !== Lr && Lr.emit(S.ERROR, e), Promise.reject(e);
          if (e instanceof Error) {
              var n = new Or({
                  code: co.UNCAUGHT_ERROR,
                  message: e.message
              });
              return t && null !== Lr && Lr.emit(S.ERROR, n), Promise.reject(n)
          }
          if (Ge(e) || Ge(e.code) || Ge(e.message)) Se.error("IMPromise.reject 必须指定code(错误码)和message(错误信息)!!!");
          else {
              if (Ae(e.code) && Ne(e.message)) {
                  var o = new Or(e);
                  return t && null !== Lr && Lr.emit(S.ERROR, o), Promise.reject(o)
              }
              Se.error("IMPromise.reject code(错误码)必须为数字，message(错误信息)必须为字符串!!!")
          }
      },
      br = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "C2CModule", a
          }
          return s(n, [{
              key: "onNewC2CMessage",
              value: function(e) {
                  var t = e.dataList,
                      n = e.isInstantMessage,
                      o = e.C2CRemainingUnreadList;
                  Se.debug("".concat(this._className, ".onNewC2CMessage count:").concat(t.length, " isInstantMessage:").concat(n));
                  var a = this._newC2CMessageStoredAndSummary({
                          dataList: t,
                          C2CRemainingUnreadList: o,
                          isInstantMessage: n
                      }),
                      s = a.conversationOptionsList,
                      r = a.messageList;
                  (this.filterModifiedMessage(r), s.length > 0) && this.getModule(wt).onNewMessage({
                      conversationOptionsList: s,
                      isInstantMessage: n
                  });
                  var i = this.filterUnmodifiedMessage(r);
                  n && i.length > 0 && this.emitOuterEvent(S.MESSAGE_RECEIVED, i), r.length = 0
              }
          }, {
              key: "_newC2CMessageStoredAndSummary",
              value: function(e) {
                  for (var t = e.dataList, n = e.C2CRemainingUnreadList, o = e.isInstantMessage, a = null, s = [], r = [], i = {}, u = this.getModule(Kt), c = 0, l = t.length; c < l; c++) {
                      var d = t[c];
                      d.currentUser = this.getMyUserID(), d.conversationType = E.CONV_C2C, d.isSystemMessage = !!d.isSystemMessage, a = new Dr(d), d.elements = u.parseElements(d.elements, d.from), a.setElement(d.elements), a.setNickAndAvatar({
                          nick: d.nick,
                          avatar: d.avatar
                      });
                      var p = a.conversationID;
                      if (o) {
                          var g = !1,
                              h = this.getModule(wt);
                          if (a.from !== this.getMyUserID()) {
                              var _ = h.getLatestMessageSentByPeer(p);
                              if (_) {
                                  var f = _.nick,
                                      m = _.avatar;
                                  f === a.nick && m === a.avatar || (g = !0)
                              }
                          } else {
                              var M = h.getLatestMessageSentByMe(p);
                              if (M) {
                                  var v = M.nick,
                                      y = M.avatar;
                                  v === a.nick && y === a.avatar || h.modifyMessageSentByMe({
                                      conversationID: p,
                                      latestNick: a.nick,
                                      latestAvatar: a.avatar
                                  })
                              }
                          }
                          var I = 1 === t[c].isModified;
                          if (h.isMessageSentByCurrentInstance(a) ? a.isModified = I : I = !1, 0 === d.msgLifeTime) a.setOnlineOnlyFlag(!0), r.push(a);
                          else {
                              if (!h.pushIntoMessageList(r, a, I)) continue;
                              g && (h.modifyMessageSentByPeer(p), h.updateUserProfileSpecifiedKey({
                                  conversationID: p,
                                  nick: a.nick,
                                  avatar: a.avatar
                              }))
                          }
                          this.getModule(Jt).addMessageDelay({
                              currentTime: Date.now(),
                              time: a.time
                          })
                      }
                      if (0 !== d.msgLifeTime) {
                          if (!1 === a.getOnlineOnlyFlag())
                              if (Ge(i[p])) i[p] = s.push({
                                  conversationID: p,
                                  unreadCount: "out" === a.flow ? 0 : 1,
                                  type: a.conversationType,
                                  subType: a.conversationSubType,
                                  lastMessage: a
                              }) - 1;
                              else {
                                  var T = i[p];
                                  s[T].type = a.conversationType, s[T].subType = a.conversationSubType, s[T].lastMessage = a, "in" === a.flow && s[T].unreadCount++
                              }
                      } else a.setOnlineOnlyFlag(!0)
                  }
                  if (Re(n))
                      for (var D = function(e, t) {
                              var o = s.find((function(t) {
                                  return t.conversationID === "C2C".concat(n[e].from)
                              }));
                              o ? o.unreadCount += n[e].count : s.push({
                                  conversationID: "C2C".concat(n[e].from),
                                  unreadCount: n[e].count,
                                  type: E.CONV_C2C,
                                  lastMsgTime: n[e].lastMsgTime
                              })
                          }, C = 0, S = n.length; C < S; C++) D(C);
                  return {
                      conversationOptionsList: s,
                      messageList: r
                  }
              }
          }, {
              key: "onC2CMessageRevoked",
              value: function(e) {
                  var t = this;
                  Se.debug("".concat(this._className, ".onC2CMessageRevoked count:").concat(e.dataList.length));
                  var n = this.getModule(wt),
                      o = [],
                      a = null;
                  e.dataList.forEach((function(e) {
                      if (e.c2cMessageRevokedNotify) {
                          var s = e.c2cMessageRevokedNotify.revokedInfos;
                          Ge(s) || s.forEach((function(e) {
                              var s = t.getMyUserID() === e.from ? "".concat(E.CONV_C2C).concat(e.to) : "".concat(E.CONV_C2C).concat(e.from);
                              (a = n.revoke(s, e.sequence, e.random)) && o.push(a)
                          }))
                      }
                  })), 0 !== o.length && (n.onMessageRevoked(o), this.emitOuterEvent(S.MESSAGE_REVOKED, o))
              }
          }, {
              key: "onC2CMessageReadReceipt",
              value: function(e) {
                  var t = this;
                  e.dataList.forEach((function(e) {
                      if (!_t(e.c2cMessageReadReceipt)) {
                          var n = e.c2cMessageReadReceipt.to;
                          e.c2cMessageReadReceipt.uinPairReadArray.forEach((function(e) {
                              var o = e.peerReadTime;
                              Se.debug("".concat(t._className, "._onC2CMessageReadReceipt to:").concat(n, " peerReadTime:").concat(o));
                              var a = "".concat(E.CONV_C2C).concat(n),
                                  s = t.getModule(wt);
                              s.recordPeerReadTime(a, o), s.updateMessageIsPeerReadProperty(a, o)
                          }))
                      }
                  }))
              }
          }, {
              key: "onC2CMessageReadNotice",
              value: function(e) {
                  var t = this;
                  e.dataList.forEach((function(e) {
                      if (!_t(e.c2cMessageReadNotice)) {
                          var n = t.getModule(wt);
                          e.c2cMessageReadNotice.uinPairReadArray.forEach((function(e) {
                              var o = e.from,
                                  a = e.peerReadTime;
                              Se.debug("".concat(t._className, ".onC2CMessageReadNotice from:").concat(o, " lastReadTime:").concat(a));
                              var s = "".concat(E.CONV_C2C).concat(o);
                              n.updateIsReadAfterReadReport({
                                  conversationID: s,
                                  lastMessageTime: a
                              }), n.updateUnreadCount(s)
                          }))
                      }
                  }))
              }
          }, {
              key: "sendMessage",
              value: function(e, t) {
                  var n = this._createC2CMessagePack(e, t);
                  return this.request(n)
              }
          }, {
              key: "_createC2CMessagePack",
              value: function(e, t) {
                  var n = null;
                  t && (t.offlinePushInfo && (n = t.offlinePushInfo), !0 === t.onlineUserOnly && (n ? n.disablePush = !0 : n = {
                      disablePush: !0
                  }));
                  var o = "";
                  return Ne(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData), {
                      protocolName: on,
                      tjgID: this.generateTjgID(e),
                      requestData: {
                          fromAccount: this.getMyUserID(),
                          toAccount: e.to,
                          msgTimeStamp: Math.ceil(Date.now() / 1e3),
                          msgBody: e.getElements(),
                          cloudCustomData: o,
                          msgSeq: e.sequence,
                          msgRandom: e.random,
                          msgLifeTime: this.isOnlineMessage(e, t) ? 0 : void 0,
                          nick: e.nick,
                          avatar: e.avatar,
                          offlinePushInfo: n ? {
                              pushFlag: !0 === n.disablePush ? 1 : 0,
                              title: n.title || "",
                              desc: n.description || "",
                              ext: n.extension || "",
                              apnsInfo: {
                                  badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                              },
                              androidInfo: {
                                  OPPOChannelID: n.androidOPPOChannelID || ""
                              }
                          } : void 0
                      }
                  }
              }
          }, {
              key: "isOnlineMessage",
              value: function(e, t) {
                  return !(!t || !0 !== t.onlineUserOnly)
              }
          }, {
              key: "revokeMessage",
              value: function(e) {
                  return this.request({
                      protocolName: dn,
                      requestData: {
                          msgInfo: {
                              fromAccount: e.from,
                              toAccount: e.to,
                              msgSeq: e.sequence,
                              msgRandom: e.random,
                              msgTimeStamp: e.time
                          }
                      }
                  })
              }
          }, {
              key: "deleteMessage",
              value: function(e) {
                  var t = e.to,
                      n = e.keyList;
                  return Se.log("".concat(this._className, ".deleteMessage toAccount:").concat(t, " count:").concat(n.length)), this.request({
                      protocolName: _n,
                      requestData: {
                          fromAccount: this.getMyUserID(),
                          to: t,
                          keyList: n
                      }
                  })
              }
          }, {
              key: "setMessageRead",
              value: function(e) {
                  var t = this,
                      n = e.conversationID,
                      o = e.lastMessageTime,
                      a = "".concat(this._className, ".setMessageRead");
                  Se.log("".concat(a, " conversationID:").concat(n, " lastMessageTime:").concat(o)), Ae(o) || Se.warn("".concat(a, " 请勿修改 Conversation.lastMessage.lastTime，否则可能会导致已读上报结果不准确"));
                  var s = new Ga(Qa);
                  return s.setMessage("conversationID:".concat(n, " lastMessageTime:").concat(o)), this.request({
                      protocolName: pn,
                      requestData: {
                          C2CMsgReaded: {
                              cookie: "",
                              C2CMsgReadedItem: [{
                                  toAccount: n.replace("C2C", ""),
                                  lastMessageTime: o,
                                  receipt: 1
                              }]
                          }
                      }
                  }).then((function() {
                      s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(a, " ok"));
                      var e = t.getModule(wt);
                      return e.updateIsReadAfterReadReport({
                          conversationID: n,
                          lastMessageTime: o
                      }), e.updateUnreadCount(n), Cr()
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.log("".concat(a, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "getRoamingMessage",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".getRoamingMessage"),
                      o = e.peerAccount,
                      a = e.conversationID,
                      s = e.count,
                      r = e.lastMessageTime,
                      i = e.messageKey,
                      u = "peerAccount:".concat(o, " count:").concat(s || 15, " lastMessageTime:").concat(r || 0, " messageKey:").concat(i);
                  Se.log("".concat(n, " ").concat(u));
                  var c = new Ga(za);
                  return this.request({
                      protocolName: gn,
                      requestData: {
                          peerAccount: o,
                          count: s || 15,
                          lastMessageTime: r || 0,
                          messageKey: i
                      }
                  }).then((function(e) {
                      var o = e.data,
                          s = o.complete,
                          r = o.messageList,
                          i = o.messageKey;
                      Ge(r) ? Se.log("".concat(n, " ok. complete:").concat(s, " but messageList is undefined!")) : Se.log("".concat(n, " ok. complete:").concat(s, " count:").concat(r.length)), c.setNetworkType(t.getNetworkType()).setMessage("".concat(u, " complete:").concat(s, " length:").concat(r.length)).end();
                      var l = t.getModule(wt);
                      1 === s && l.setCompleted(a);
                      var d = l.storeRoamingMessage(r, a);
                      l.modifyMessageList(a), l.updateIsRead(a), l.updateRoamingMessageKey(a, i);
                      var p = l.getPeerReadTime(a);
                      if (Se.log("".concat(n, " update isPeerRead property. conversationID:").concat(a, " peerReadTime:").concat(p)), p) l.updateMessageIsPeerReadProperty(a, p);
                      else {
                          var g = a.replace(E.CONV_C2C, "");
                          t.getRemotePeerReadTime([g]).then((function() {
                              l.updateMessageIsPeerReadProperty(a, l.getPeerReadTime(a))
                          }))
                      }
                      return d
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          c.setMessage(u).setError(e, o, a).end()
                      })), Se.warn("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "getRemotePeerReadTime",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".getRemotePeerReadTime");
                  if (_t(e)) return Se.warn("".concat(n, " userIDList is empty!")), Promise.resolve();
                  var o = new Ga(ts);
                  return Se.log("".concat(n, " userIDList:").concat(e)), this.request({
                      protocolName: hn,
                      requestData: {
                          userIDList: e
                      }
                  }).then((function(a) {
                      var s = a.data.peerReadTimeList;
                      Se.log("".concat(n, " ok. peerReadTimeList:").concat(s));
                      for (var r = "", i = t.getModule(wt), u = 0; u < e.length; u++) r += "".concat(e[u], "-").concat(s[u], " "), s[u] > 0 && i.recordPeerReadTime("C2C".concat(e[u]), s[u]);
                      o.setNetworkType(t.getNetworkType()).setMessage(r).end()
                  })).catch((function(e) {
                      t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.warn("".concat(n, " failed. error:"), e)
                  }))
              }
          }]), n
      }(Xt),
      wr = function() {
          function e(t) {
              o(this, e), this.list = new Map, this._className = "MessageListHandler", this._latestMessageSentByPeerMap = new Map, this._latestMessageSentByMeMap = new Map, this._groupLocalLastMessageSequenceMap = new Map
          }
          return s(e, [{
              key: "getLocalOldestMessageByConversationID",
              value: function(e) {
                  if (!e) return null;
                  if (!this.list.has(e)) return null;
                  var t = this.list.get(e).values();
                  return t ? t.next().value : null
              }
          }, {
              key: "pushIn",
              value: function(e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      n = e.conversationID,
                      o = e.ID,
                      a = !0;
                  this.list.has(n) || this.list.set(n, new Map);
                  var s = this.list.get(n).has(o);
                  if (s) {
                      var r = this.list.get(n).get(o);
                      if (!t || !0 === r.isModified) return a = !1
                  }
                  return this.list.get(n).set(o, e), this._setLatestMessageSentByPeer(n, e), this._setLatestMessageSentByMe(n, e), this._setGroupLocalLastMessageSequence(n, e), a
              }
          }, {
              key: "unshift",
              value: function(e) {
                  var t;
                  if (Re(e)) {
                      if (e.length > 0) {
                          t = e[0].conversationID;
                          var n = e.length;
                          this._unshiftMultipleMessages(e), this._setGroupLocalLastMessageSequence(t, e[n - 1])
                      }
                  } else t = e.conversationID, this._unshiftSingleMessage(e), this._setGroupLocalLastMessageSequence(t, e);
                  if (t && t.startsWith(E.CONV_C2C)) {
                      var o = Array.from(this.list.get(t).values()),
                          a = o.length;
                      if (0 === a) return;
                      for (var s = a - 1; s >= 0; s--)
                          if ("out" === o[s].flow) {
                              this._setLatestMessageSentByMe(t, o[s]);
                              break
                          } for (var r = a - 1; r >= 0; r--)
                          if ("in" === o[r].flow) {
                              this._setLatestMessageSentByPeer(t, o[r]);
                              break
                          }
                  }
              }
          }, {
              key: "_unshiftSingleMessage",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.ID;
                  if (!this.list.has(t)) return this.list.set(t, new Map), void this.list.get(t).set(n, e);
                  var o = Array.from(this.list.get(t));
                  o.unshift([n, e]), this.list.set(t, new Map(o))
              }
          }, {
              key: "_unshiftMultipleMessages",
              value: function(e) {
                  for (var t = e.length, n = [], o = e[0].conversationID, a = this.list.has(o) ? Array.from(this.list.get(o)) : [], s = 0; s < t; s++) n.push([e[s].ID, e[s]]);
                  this.list.set(o, new Map(n.concat(a)))
              }
          }, {
              key: "remove",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.ID;
                  this.list.has(t) && this.list.get(t).delete(n)
              }
          }, {
              key: "revoke",
              value: function(e, t, n) {
                  if (Se.debug("revoke message", e, t, n), this.list.has(e)) {
                      var o, a = C(this.list.get(e));
                      try {
                          for (a.s(); !(o = a.n()).done;) {
                              var s = m(o.value, 2)[1];
                              if (s.sequence === t && !s.isRevoked && (Ge(n) || s.random === n)) return s.isRevoked = !0, s
                          }
                      } catch (r) {
                          a.e(r)
                      } finally {
                          a.f()
                      }
                  }
                  return null
              }
          }, {
              key: "removeByConversationID",
              value: function(e) {
                  this.list.has(e) && (this.list.delete(e), this._latestMessageSentByPeerMap.delete(e), this._latestMessageSentByMeMap.delete(e))
              }
          }, {
              key: "updateMessageIsPeerReadProperty",
              value: function(e, t) {
                  var n = [];
                  if (this.list.has(e)) {
                      var o, a = C(this.list.get(e));
                      try {
                          for (a.s(); !(o = a.n()).done;) {
                              var s = m(o.value, 2)[1];
                              s.time <= t && !s.isPeerRead && "out" === s.flow && (s.isPeerRead = !0, n.push(s))
                          }
                      } catch (r) {
                          a.e(r)
                      } finally {
                          a.f()
                      }
                      Se.log("".concat(this._className, ".updateMessageIsPeerReadProperty conversationID:").concat(e, " peerReadTime:").concat(t, " count:").concat(n.length))
                  }
                  return n
              }
          }, {
              key: "updateMessageIsModifiedProperty",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.ID;
                  if (this.list.has(t)) {
                      var o = this.list.get(t).get(n);
                      o && (o.isModified = !0)
                  }
              }
          }, {
              key: "hasLocalMessageList",
              value: function(e) {
                  return this.list.has(e)
              }
          }, {
              key: "getLocalMessageList",
              value: function(e) {
                  return this.hasLocalMessageList(e) ? M(this.list.get(e).values()) : []
              }
          }, {
              key: "hasLocalMessage",
              value: function(e, t) {
                  return !!this.hasLocalMessageList(e) && this.list.get(e).has(t)
              }
          }, {
              key: "getLocalMessage",
              value: function(e, t) {
                  return this.hasLocalMessage(e, t) ? this.list.get(e).get(t) : null
              }
          }, {
              key: "_setLatestMessageSentByPeer",
              value: function(e, t) {
                  e.startsWith(E.CONV_C2C) && "in" === t.flow && this._latestMessageSentByPeerMap.set(e, t)
              }
          }, {
              key: "_setLatestMessageSentByMe",
              value: function(e, t) {
                  e.startsWith(E.CONV_C2C) && "out" === t.flow && this._latestMessageSentByMeMap.set(e, t)
              }
          }, {
              key: "_setGroupLocalLastMessageSequence",
              value: function(e, t) {
                  e.startsWith(E.CONV_GROUP) && this._groupLocalLastMessageSequenceMap.set(e, t.sequence)
              }
          }, {
              key: "getLatestMessageSentByPeer",
              value: function(e) {
                  return this._latestMessageSentByPeerMap.get(e)
              }
          }, {
              key: "getLatestMessageSentByMe",
              value: function(e) {
                  return this._latestMessageSentByMeMap.get(e)
              }
          }, {
              key: "getGroupLocalLastMessageSequence",
              value: function(e) {
                  return this._groupLocalLastMessageSequenceMap.get(e) || 0
              }
          }, {
              key: "modifyMessageSentByPeer",
              value: function(e, t) {
                  var n = this.list.get(e);
                  if (!_t(n)) {
                      var o = Array.from(n.values()),
                          a = o.length;
                      if (0 !== a) {
                          var s = null,
                              r = null;
                          t && (r = t);
                          for (var i = 0, u = !1, c = a - 1; c >= 0; c--) "in" === o[c].flow && (null === r ? r = o[c] : ((s = o[c]).nick !== r.nick && (s.setNickAndAvatar({
                              nick: r.nick
                          }), u = !0), s.avatar !== r.avatar && (s.setNickAndAvatar({
                              avatar: r.avatar
                          }), u = !0), u && (i += 1)));
                          Se.log("".concat(this._className, ".modifyMessageSentByPeer conversationID:").concat(e, " count:").concat(i))
                      }
                  }
              }
          }, {
              key: "modifyMessageSentByMe",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.latestNick,
                      o = e.latestAvatar,
                      a = this.list.get(t);
                  if (!_t(a)) {
                      var s = Array.from(a.values()),
                          r = s.length;
                      if (0 !== r) {
                          for (var i = null, u = 0, c = !1, l = r - 1; l >= 0; l--) "out" === s[l].flow && ((i = s[l]).nick !== n && (i.setNickAndAvatar({
                              nick: n
                          }), c = !0), i.avatar !== o && (i.setNickAndAvatar({
                              avatar: o
                          }), c = !0), c && (u += 1));
                          Se.log("".concat(this._className, ".modifyMessageSentByMe conversationID:").concat(t, " count:").concat(u))
                      }
                  }
              }
          }, {
              key: "traversal",
              value: function() {
                  if (0 !== this.list.size && -1 === Se.getLevel()) {
                      console.group("conversationID-messageCount");
                      var e, t = C(this.list);
                      try {
                          for (t.s(); !(e = t.n()).done;) {
                              var n = m(e.value, 2),
                                  o = n[0],
                                  a = n[1];
                              console.log("".concat(o, "-").concat(a.size))
                          }
                      } catch (s) {
                          t.e(s)
                      } finally {
                          t.f()
                      }
                      console.groupEnd()
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  this.list.clear(), this._latestMessageSentByPeerMap.clear(), this._latestMessageSentByMeMap.clear(), this._groupLocalLastMessageSequenceMap.clear()
              }
          }]), e
      }(),
      Ur = {
          CONTEXT_A2KEY_AND_TINYID_UPDATED: "_a2KeyAndTinyIDUpdated",
          CLOUD_CONFIG_UPDATED: "_cloudConfigUpdated"
      };

  function Fr(e) {
      this.mixin(e)
  }
  Fr.mixin = function(e) {
      var t = e.prototype || e;
      t._isReady = !1, t.ready = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (e) return this._isReady ? void(t ? e.call(this) : setTimeout(e, 1)) : (this._readyQueue = this._readyQueue || [], void this._readyQueue.push(e))
      }, t.triggerReady = function() {
          var e = this;
          this._isReady = !0, setTimeout((function() {
              var t = e._readyQueue;
              e._readyQueue = [], t && t.length > 0 && t.forEach((function(e) {
                  e.call(this)
              }), e)
          }), 1)
      }, t.resetReady = function() {
          this._isReady = !1, this._readyQueue = []
      }, t.isReady = function() {
          return this._isReady
      }
  };
  var qr = ["jpg", "jpeg", "gif", "png", "bmp"],
      Vr = ["mp4"],
      Kr = 1,
      xr = 2,
      Br = 3,
      Hr = 255,
      jr = function() {
          function e(t) {
              var n = this;
              o(this, e), _t(t) || (this.userID = t.userID || "", this.nick = t.nick || "", this.gender = t.gender || "", this.birthday = t.birthday || 0, this.location = t.location || "", this.selfSignature = t.selfSignature || "", this.allowType = t.allowType || E.ALLOW_TYPE_ALLOW_ANY, this.language = t.language || 0, this.avatar = t.avatar || "", this.messageSettings = t.messageSettings || 0, this.adminForbidType = t.adminForbidType || E.FORBID_TYPE_NONE, this.level = t.level || 0, this.role = t.role || 0, this.lastUpdatedTime = 0, this.profileCustomField = [], _t(t.profileCustomField) || t.profileCustomField.forEach((function(e) {
                  n.profileCustomField.push({
                      key: e.key,
                      value: e.value
                  })
              })))
          }
          return s(e, [{
              key: "validate",
              value: function(e) {
                  var t = !0,
                      n = "";
                  if (_t(e)) return {
                      valid: !1,
                      tips: "empty options"
                  };
                  if (e.profileCustomField)
                      for (var o = e.profileCustomField.length, a = null, s = 0; s < o; s++) {
                          if (a = e.profileCustomField[s], !Ne(a.key) || -1 === a.key.indexOf("Tag_Profile_Custom")) return {
                              valid: !1,
                              tips: "自定义资料字段的前缀必须是 Tag_Profile_Custom"
                          };
                          if (!Ne(a.value)) return {
                              valid: !1,
                              tips: "自定义资料字段的 value 必须是字符串"
                          }
                      }
                  for (var r in e)
                      if (Object.prototype.hasOwnProperty.call(e, r)) {
                          if ("profileCustomField" === r) continue;
                          if (_t(e[r]) && !Ne(e[r]) && !Ae(e[r])) {
                              n = "key:" + r + ", invalid value:" + e[r], t = !1;
                              continue
                          }
                          switch (r) {
                              case "nick":
                                  Ne(e[r]) || (n = "nick should be a string", t = !1), Be(e[r]) > 500 && (n = "nick name limited: must less than or equal to ".concat(500, " bytes, current size: ").concat(Be(e[r]), " bytes"), t = !1);
                                  break;
                              case "gender":
                                  $e(ar, e.gender) || (n = "key:gender, invalid value:" + e.gender, t = !1);
                                  break;
                              case "birthday":
                                  Ae(e.birthday) || (n = "birthday should be a number", t = !1);
                                  break;
                              case "location":
                                  Ne(e.location) || (n = "location should be a string", t = !1);
                                  break;
                              case "selfSignature":
                                  Ne(e.selfSignature) || (n = "selfSignature should be a string", t = !1);
                                  break;
                              case "allowType":
                                  $e(rr, e.allowType) || (n = "key:allowType, invalid value:" + e.allowType, t = !1);
                                  break;
                              case "language":
                                  Ae(e.language) || (n = "language should be a number", t = !1);
                                  break;
                              case "avatar":
                                  Ne(e.avatar) || (n = "avatar should be a string", t = !1);
                                  break;
                              case "messageSettings":
                                  0 !== e.messageSettings && 1 !== e.messageSettings && (n = "messageSettings should be 0 or 1", t = !1);
                                  break;
                              case "adminForbidType":
                                  $e(sr, e.adminForbidType) || (n = "key:adminForbidType, invalid value:" + e.adminForbidType, t = !1);
                                  break;
                              case "level":
                                  Ae(e.level) || (n = "level should be a number", t = !1);
                                  break;
                              case "role":
                                  Ae(e.role) || (n = "role should be a number", t = !1);
                                  break;
                              default:
                                  n = "unknown key:" + r + "  " + e[r], t = !1
                          }
                      } return {
                      valid: t,
                      tips: n
                  }
              }
          }]), e
      }(),
      Yr = function e(t) {
          o(this, e), this.value = t, this.next = null
      },
      $r = function() {
          function e(t) {
              o(this, e), this.MAX_LENGTH = t, this.pTail = null, this.pNodeToDel = null, this.map = new Map, Se.debug("SinglyLinkedList init MAX_LENGTH:".concat(this.MAX_LENGTH))
          }
          return s(e, [{
              key: "set",
              value: function(e) {
                  var t = new Yr(e);
                  if (this.map.size < this.MAX_LENGTH) null === this.pTail ? (this.pTail = t, this.pNodeToDel = t) : (this.pTail.next = t, this.pTail = t), this.map.set(e, 1);
                  else {
                      var n = this.pNodeToDel;
                      this.pNodeToDel = this.pNodeToDel.next, this.map.delete(n.value), n.next = null, n = null, this.pTail.next = t, this.pTail = t, this.map.set(e, 1)
                  }
              }
          }, {
              key: "has",
              value: function(e) {
                  return this.map.has(e)
              }
          }, {
              key: "delete",
              value: function(e) {
                  this.has(e) && this.map.delete(e)
              }
          }, {
              key: "tail",
              value: function() {
                  return this.pTail
              }
          }, {
              key: "size",
              value: function() {
                  return this.map.size
              }
          }, {
              key: "data",
              value: function() {
                  return Array.from(this.map.keys())
              }
          }, {
              key: "reset",
              value: function() {
                  for (var e; null !== this.pNodeToDel;) e = this.pNodeToDel, this.pNodeToDel = this.pNodeToDel.next, e.next = null, e = null;
                  this.pTail = null, this.map.clear()
              }
          }]), e
      }(),
      zr = ["groupID", "name", "avatar", "type", "introduction", "notification", "ownerID", "selfInfo", "createTime", "infoSequence", "lastInfoTime", "lastMessage", "nextMessageSeq", "memberNum", "maxMemberNum", "memberList", "joinOption", "groupCustomField", "muteAllMembers"],
      Wr = function() {
          function e(t) {
              o(this, e), this.groupID = "", this.name = "", this.avatar = "", this.type = "", this.introduction = "", this.notification = "", this.ownerID = "", this.createTime = "", this.infoSequence = "", this.lastInfoTime = "", this.selfInfo = {
                  messageRemindType: "",
                  joinTime: "",
                  nameCard: "",
                  role: ""
              }, this.lastMessage = {
                  lastTime: "",
                  lastSequence: "",
                  fromAccount: "",
                  messageForShow: ""
              }, this.nextMessageSeq = "", this.memberNum = "", this.memberCount = "", this.maxMemberNum = "", this.maxMemberCount = "", this.joinOption = "", this.groupCustomField = [], this.muteAllMembers = void 0, this._initGroup(t)
          }
          return s(e, [{
              key: "memberNum",
              get: function() {
                  return Se.warn("！！！v2.8.0起弃用memberNum，请使用 memberCount"), this.memberCount
              },
              set: function(e) {}
          }, {
              key: "maxMemberNum",
              get: function() {
                  return Se.warn("！！！v2.8.0起弃用maxMemberNum，请使用 maxMemberCount"), this.maxMemberCount
              },
              set: function(e) {}
          }, {
              key: "_initGroup",
              value: function(e) {
                  for (var t in e) zr.indexOf(t) < 0 || ("selfInfo" !== t ? ("memberNum" === t && (this.memberCount = e[t]), "maxMemberNum" === t && (this.maxMemberCount = e[t]), this[t] = e[t]) : this.updateSelfInfo(e[t]))
              }
          }, {
              key: "updateGroup",
              value: function(e) {
                  var t = JSON.parse(JSON.stringify(e));
                  t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), Ge(t.muteAllMembers) || ("On" === t.muteAllMembers ? t.muteAllMembers = !0 : t.muteAllMembers = !1), t.groupCustomField && Qe(this.groupCustomField, t.groupCustomField), Ge(t.memberNum) || (this.memberCount = t.memberNum), Ge(t.maxMemberNum) || (this.maxMemberCount = t.maxMemberNum), Ke(this, t, ["members", "errorCode", "lastMsgTime", "groupCustomField", "memberNum", "maxMemberNum"])
              }
          }, {
              key: "updateSelfInfo",
              value: function(e) {
                  var t = e.nameCard,
                      n = e.joinTime,
                      o = e.role,
                      a = e.messageRemindType;
                  Ke(this.selfInfo, {
                      nameCard: t,
                      joinTime: n,
                      role: o,
                      messageRemindType: a
                  }, [], ["", null, void 0, 0, NaN])
              }
          }, {
              key: "setSelfNameCard",
              value: function(e) {
                  this.selfInfo.nameCard = e
              }
          }]), e
      }(),
      Jr = function(e, t) {
          if (Ge(t)) return "";
          switch (e) {
              case E.MSG_TEXT:
                  return t.text;
              case E.MSG_IMAGE:
                  return "[图片]";
              case E.MSG_GEO:
                  return "[位置]";
              case E.MSG_AUDIO:
                  return "[语音]";
              case E.MSG_VIDEO:
                  return "[视频]";
              case E.MSG_FILE:
                  return "[文件]";
              case E.MSG_CUSTOM:
                  return "[自定义消息]";
              case E.MSG_GRP_TIP:
                  return "[群提示消息]";
              case E.MSG_GRP_SYS_NOTICE:
                  return "[群系统通知]";
              case E.MSG_FACE:
                  return "[动画表情]";
              case E.MSG_MERGER:
                  return "[聊天记录]";
              default:
                  return ""
          }
      },
      Xr = function(e) {
          return Ge(e) ? {
              lastTime: 0,
              lastSequence: 0,
              fromAccount: 0,
              messageForShow: "",
              payload: null,
              type: "",
              isRevoked: !1,
              cloudCustomData: "",
              onlineOnlyFlag: !1
          } : e instanceof Dr ? {
              lastTime: e.time || 0,
              lastSequence: e.sequence || 0,
              fromAccount: e.from || "",
              messageForShow: Jr(e.type, e.payload),
              payload: e.payload || null,
              type: e.type || null,
              isRevoked: e.isRevoked || !1,
              cloudCustomData: e.cloudCustomData || "",
              onlineOnlyFlag: !!be(e.getOnlineOnlyFlag) && e.getOnlineOnlyFlag()
          } : t(t({}, e), {}, {
              messageForShow: Jr(e.type, e.payload)
          })
      },
      Qr = function() {
          function e(t) {
              o(this, e), this.conversationID = t.conversationID || "", this.unreadCount = t.unreadCount || 0, this.type = t.type || "", this.lastMessage = Xr(t.lastMessage), t.lastMsgTime && (this.lastMessage.lastTime = t.lastMsgTime), this._isInfoCompleted = !1, this.peerReadTime = t.peerReadTime || 0, this.groupAtInfoList = [], this.remark = "", this.isPinned = t.isPinned || !1, this._initProfile(t)
          }
          return s(e, [{
              key: "toAccount",
              get: function() {
                  return this.conversationID.startsWith(E.CONV_C2C) ? this.conversationID.replace(E.CONV_C2C, "") : this.conversationID.startsWith(E.CONV_GROUP) ? this.conversationID.replace(E.CONV_GROUP, "") : ""
              }
          }, {
              key: "subType",
              get: function() {
                  return this.groupProfile ? this.groupProfile.type : ""
              }
          }, {
              key: "_initProfile",
              value: function(e) {
                  var t = this;
                  Object.keys(e).forEach((function(n) {
                      switch (n) {
                          case "userProfile":
                              t.userProfile = e.userProfile;
                              break;
                          case "groupProfile":
                              t.groupProfile = e.groupProfile
                      }
                  })), Ge(this.userProfile) && this.type === E.CONV_C2C ? this.userProfile = new jr({
                      userID: e.conversationID.replace("C2C", "")
                  }) : Ge(this.groupProfile) && this.type === E.CONV_GROUP && (this.groupProfile = new Wr({
                      groupID: e.conversationID.replace("GROUP", "")
                  }))
              }
          }, {
              key: "updateUnreadCount",
              value: function(e, t) {
                  Ge(e) || (et(this.subType) ? this.unreadCount = 0 : t && this.type === E.CONV_GROUP ? this.unreadCount = e : this.unreadCount = this.unreadCount + e)
              }
          }, {
              key: "updateLastMessage",
              value: function(e) {
                  this.lastMessage = Xr(e)
              }
          }, {
              key: "updateGroupAtInfoList",
              value: function(e) {
                  var t, n = (v(t = e.groupAtType) || y(t) || I(t) || D()).slice(0); - 1 !== n.indexOf(E.CONV_AT_ME) && -1 !== n.indexOf(E.CONV_AT_ALL) && (n = [E.CONV_AT_ALL_AT_ME]);
                  var o = {
                      from: e.from,
                      groupID: e.groupID,
                      messageSequence: e.sequence,
                      atTypeArray: n,
                      __random: e.__random,
                      __sequence: e.__sequence
                  };
                  this.groupAtInfoList.push(o), Se.debug("Conversation.updateGroupAtInfoList conversationID:".concat(this.conversationID), this.groupAtInfoList)
              }
          }, {
              key: "clearGroupAtInfoList",
              value: function() {
                  this.groupAtInfoList.length = 0
              }
          }, {
              key: "reduceUnreadCount",
              value: function() {
                  this.unreadCount >= 1 && (this.unreadCount -= 1)
              }
          }, {
              key: "isLastMessageRevoked",
              value: function(e) {
                  var t = e.sequence,
                      n = e.time;
                  return this.type === E.CONV_C2C && t === this.lastMessage.lastSequence && n === this.lastMessage.lastTime || this.type === E.CONV_GROUP && t === this.lastMessage.lastSequence
              }
          }, {
              key: "setLastMessageRevoked",
              value: function(e) {
                  this.lastMessage.isRevoked = e
              }
          }]), e
      }(),
      Zr = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              return o(this, a), (t = n.call(this, e))._className = "ConversationModule", Fr.mixin(h(t)), t._messageListHandler = new wr, t.singlyLinkedList = new $r(100), t._pagingStatus = yt.NOT_START, t._pagingTimeStamp = 0, t._pagingStartIndex = 0, t._pagingPinnedTimeStamp = 0, t._pagingPinnedStartIndex = 0, t._conversationMap = new Map, t._tmpGroupList = [], t._tmpGroupAtTipsList = [], t._peerReadTimeMap = new Map, t._completedMap = new Map, t._roamingMessageKeyMap = new Map, t._initListeners(), t
          }
          return s(a, [{
              key: "_initListeners",
              value: function() {
                  this.getInnerEmitterInstance().on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initLocalConversationList, this)
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  e % 60 == 0 && this._messageListHandler.traversal()
              }
          }, {
              key: "_initLocalConversationList",
              value: function() {
                  var e = this,
                      t = new Ga(ls);
                  Se.log("".concat(this._className, "._initLocalConversationList."));
                  var n = "",
                      o = this._getStorageConversationList();
                  if (o) {
                      for (var a = o.length, s = 0; s < a; s++) {
                          var r = o[s];
                          if (r && r.groupProfile) {
                              var i = r.groupProfile.type;
                              if (et(i)) continue
                          }
                          this._conversationMap.set(o[s].conversationID, new Qr(o[s]))
                      }
                      this._emitConversationUpdate(!0, !1), n = "count:".concat(a)
                  } else n = "count:0";
                  t.setNetworkType(this.getNetworkType()).setMessage(n).end(), this.getModule(Rt) || this.triggerReady(), this.ready((function() {
                      e._tmpGroupList.length > 0 && (e.updateConversationGroupProfile(e._tmpGroupList), e._tmpGroupList.length = 0)
                  })), this._syncConversationList()
              }
          }, {
              key: "onMessageSent",
              value: function(e) {
                  this._onSendOrReceiveMessage(e.conversationOptionsList, !0)
              }
          }, {
              key: "onNewMessage",
              value: function(e) {
                  this._onSendOrReceiveMessage(e.conversationOptionsList, e.isInstantMessage)
              }
          }, {
              key: "_onSendOrReceiveMessage",
              value: function(e) {
                  var t = this,
                      n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  this._isReady ? 0 !== e.length && (this._getC2CPeerReadTime(e), this._updateLocalConversationList(e, !1, n), this._setStorageConversationList(), this._emitConversationUpdate()) : this.ready((function() {
                      t._onSendOrReceiveMessage(e, n)
                  }))
              }
          }, {
              key: "updateConversationGroupProfile",
              value: function(e) {
                  var t = this;
                  Re(e) && 0 === e.length || (0 !== this._conversationMap.size ? (e.forEach((function(e) {
                      var n = "GROUP".concat(e.groupID);
                      if (t._conversationMap.has(n)) {
                          var o = t._conversationMap.get(n);
                          o.groupProfile = e, o.lastMessage.lastSequence < e.nextMessageSeq && (o.lastMessage.lastSequence = e.nextMessageSeq - 1), o.subType || (o.subType = e.type)
                      }
                  })), this._emitConversationUpdate(!0, !1)) : this._tmpGroupList = e)
              }
          }, {
              key: "_updateConversationUserProfile",
              value: function(e) {
                  var t = this;
                  e.data.forEach((function(e) {
                      var n = "C2C".concat(e.userID);
                      t._conversationMap.has(n) && (t._conversationMap.get(n).userProfile = e)
                  })), this._emitConversationUpdate(!0, !1)
              }
          }, {
              key: "onMessageRevoked",
              value: function(e) {
                  var t = this;
                  if (0 !== e.length) {
                      var n = null,
                          o = !1;
                      e.forEach((function(e) {
                          (n = t._conversationMap.get(e.conversationID)) && n.isLastMessageRevoked(e) && (o = !0, n.setLastMessageRevoked(!0))
                      })), o && this._emitConversationUpdate(!0, !1)
                  }
              }
          }, {
              key: "onMessageDeleted",
              value: function(e) {
                  if (0 !== e.length) {
                      e.forEach((function(e) {
                          e.isDeleted = !0
                      }));
                      for (var t = e[0].conversationID, n = this._messageListHandler.getLocalMessageList(t), o = {}, a = n.length - 1; a > 0; a--)
                          if (!n[a].isDeleted) {
                              o = n[a];
                              break
                          } var s = this._conversationMap.get(t);
                      if (s) {
                          var r = !1;
                          s.lastMessage.lastSequence !== o.sequence && s.lastMessage.lastTime !== o.time && (s.updateLastMessage(o), r = !0, Se.log("".concat(this._className, ".onMessageDeleted. update conversationID:").concat(t, " with lastMessage:"), s.lastMessage)), t.startsWith(E.CONV_C2C) && this.updateUnreadCount(t), r && this._emitConversationUpdate(!0, !1)
                      }
                  }
              }
          }, {
              key: "onNewGroupAtTips",
              value: function(e) {
                  var t = this,
                      n = e.dataList,
                      o = null;
                  n.forEach((function(e) {
                      e.groupAtTips ? o = e.groupAtTips : e.elements && (o = e.elements), o.__random = e.random, o.__sequence = e.clientSequence, t._tmpGroupAtTipsList.push(o)
                  })), Se.debug("".concat(this._className, ".onNewGroupAtTips isReady:").concat(this._isReady), this._tmpGroupAtTipsList), this._isReady && this._handleGroupAtTipsList()
              }
          }, {
              key: "_handleGroupAtTipsList",
              value: function() {
                  var e = this;
                  if (0 !== this._tmpGroupAtTipsList.length) {
                      var t = !1;
                      this._tmpGroupAtTipsList.forEach((function(n) {
                          var o = n.groupID;
                          if (n.from !== e.getMyUserID()) {
                              var a = e._conversationMap.get("".concat(E.CONV_GROUP).concat(o));
                              a && (a.updateGroupAtInfoList(n), t = !0)
                          }
                      })), t && this._emitConversationUpdate(!0, !1), this._tmpGroupAtTipsList.length = 0
                  }
              }
          }, {
              key: "_getC2CPeerReadTime",
              value: function(e) {
                  var t = this,
                      n = [];
                  if (e.forEach((function(e) {
                          t._conversationMap.has(e.conversationID) || e.type !== E.CONV_C2C || n.push(e.conversationID.replace(E.CONV_C2C, ""))
                      })), n.length > 0) {
                      Se.debug("".concat(this._className, "._getC2CPeerReadTime userIDList:").concat(n));
                      var o = this.getModule(Rt);
                      o && o.getRemotePeerReadTime(n)
                  }
              }
          }, {
              key: "_getStorageConversationList",
              value: function() {
                  return this.getModule(Ft).getItem("conversationMap")
              }
          }, {
              key: "_setStorageConversationList",
              value: function() {
                  var e = this.getLocalConversationList().slice(0, 20).map((function(e) {
                      return {
                          conversationID: e.conversationID,
                          type: e.type,
                          subType: e.subType,
                          lastMessage: e.lastMessage,
                          groupProfile: e.groupProfile,
                          userProfile: e.userProfile
                      }
                  }));
                  this.getModule(Ft).setItem("conversationMap", e)
              }
          }, {
              key: "_emitConversationUpdate",
              value: function() {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                      t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      n = M(this._conversationMap.values());
                  if (t) {
                      var o = this.getModule(Gt);
                      o && o.updateGroupLastMessage(n)
                  }
                  e && this.emitOuterEvent(S.CONVERSATION_LIST_UPDATED, n)
              }
          }, {
              key: "getLocalConversationList",
              value: function() {
                  return M(this._conversationMap.values())
              }
          }, {
              key: "getLocalConversation",
              value: function(e) {
                  return this._conversationMap.get(e)
              }
          }, {
              key: "_syncConversationList",
              value: function() {
                  var e = this,
                      t = new Ga(ds);
                  return this._pagingStatus === yt.NOT_START && this._conversationMap.clear(), this._pagingGetConversationList().then((function(n) {
                      return e._pagingStatus = yt.RESOLVED, e._setStorageConversationList(), e._handleC2CPeerReadTime(), e.checkAndPatchRemark(), t.setMessage(e._conversationMap.size).setNetworkType(e.getNetworkType()).end(), n
                  })).catch((function(n) {
                      return e._pagingStatus = yt.REJECTED, t.setMessage(e._pagingTimeStamp), e.probeNetwork().then((function(e) {
                          var o = m(e, 2),
                              a = o[0],
                              s = o[1];
                          t.setError(n, a, s).end()
                      })), Pr(n)
                  }))
              }
          }, {
              key: "_pagingGetConversationList",
              value: function() {
                  var e = this,
                      t = "".concat(this._className, "._pagingGetConversationList");
                  return Se.log("".concat(t, " timeStamp:").concat(this._pagingTimeStamp, " startIndex:").concat(this._pagingStartIndex) + " pinnedTimeStamp:".concat(this._pagingPinnedTimeStamp, " pinnedStartIndex:").concat(this._pagingPinnedStartIndex)), this._pagingStatus = yt.PENDING, this.request({
                      protocolName: fn,
                      requestData: {
                          fromAccount: this.getMyUserID(),
                          timeStamp: this._pagingTimeStamp,
                          startIndex: this._pagingStartIndex,
                          pinnedTimeStamp: this._pagingPinnedTimeStamp,
                          pinnedStartIndex: this._pagingStartIndex,
                          orderType: 1
                      }
                  }).then((function(n) {
                      var o = n.data,
                          a = o.completeFlag,
                          s = o.conversations,
                          r = void 0 === s ? [] : s,
                          i = o.timeStamp,
                          u = o.startIndex,
                          c = o.pinnedTimeStamp,
                          l = o.pinnedStartIndex;
                      if (Se.log("".concat(t, " ok. completeFlag:").concat(a, " count:").concat(r.length)), r.length > 0) {
                          var d = e._getConversationOptions(r);
                          e._updateLocalConversationList(d, !0)
                      }
                      if (e._isReady) e._emitConversationUpdate();
                      else {
                          if (!e.isLoggedIn()) return Gr();
                          e.triggerReady()
                      }
                      return e._pagingTimeStamp = i, e._pagingStartIndex = u, e._pagingPinnedTimeStamp = c, e._pagingPinnedStartIndex = l, 1 !== a ? e._pagingGetConversationList() : (e._handleGroupAtTipsList(), Gr())
                  })).catch((function(n) {
                      throw e.isLoggedIn() && (e._isReady || (Se.warn("".concat(t, " failed. error:"), n), e.triggerReady())), n
                  }))
              }
          }, {
              key: "_updateLocalConversationList",
              value: function(e, t, n) {
                  var o, a = Date.now();
                  o = this._getTmpConversationListMapping(e, t, n), this._conversationMap = new Map(this._sortConversationList([].concat(M(o.toBeUpdatedConversationList), M(this._conversationMap)))), t || this._updateUserOrGroupProfile(o.newConversationList), Se.debug("".concat(this._className, "._updateLocalConversationList cost ").concat(Date.now() - a, " ms"))
              }
          }, {
              key: "_getTmpConversationListMapping",
              value: function(e, t, n) {
                  for (var o = [], a = [], s = this.getModule(Gt), r = this.getModule(Pt), i = 0, u = e.length; i < u; i++) {
                      var c = new Qr(e[i]),
                          l = c.conversationID;
                      if (this._conversationMap.has(l)) {
                          var d = this._conversationMap.get(l),
                              p = ["unreadCount", "allowType", "adminForbidType", "payload", "isPinned"];
                          n || p.push("lastMessage"), Ke(d, c, p, [null, void 0, "", 0, NaN]), d.updateUnreadCount(c.unreadCount, t), n && (d.lastMessage.payload = e[i].lastMessage.payload), e[i].lastMessage && d.lastMessage.cloudCustomData !== e[i].lastMessage.cloudCustomData && (d.lastMessage.cloudCustomData = e[i].lastMessage.cloudCustomData || ""), this._conversationMap.delete(l), o.push([l, d])
                      } else {
                          if (c.type === E.CONV_GROUP && s) {
                              var g = c.groupProfile.groupID,
                                  h = s.getLocalGroupProfile(g);
                              h && (c.groupProfile = h, c.updateUnreadCount(0))
                          } else if (c.type === E.CONV_C2C) {
                              var _ = l.replace(E.CONV_C2C, "");
                              r && r.isMyFriend(_) && (c.remark = r.getFriendRemark(_))
                          }
                          a.push(c), o.push([l, c])
                      }
                  }
                  return {
                      toBeUpdatedConversationList: o,
                      newConversationList: a
                  }
              }
          }, {
              key: "_sortConversationList",
              value: function(e) {
                  var t = [],
                      n = [];
                  return e.forEach((function(e) {
                      !0 === e[1].isPinned ? t.push(e) : n.push(e)
                  })), t.sort((function(e, t) {
                      return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                  })).concat(n.sort((function(e, t) {
                      return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                  })))
              }
          }, {
              key: "_sortConversationListAndEmitEvent",
              value: function() {
                  this._conversationMap = new Map(this._sortConversationList(M(this._conversationMap))), this._emitConversationUpdate(!0, !1)
              }
          }, {
              key: "_updateUserOrGroupProfile",
              value: function(e) {
                  var t = this;
                  if (0 !== e.length) {
                      var n = [],
                          o = [],
                          a = this.getModule(Lt),
                          s = this.getModule(Gt);
                      e.forEach((function(e) {
                          if (e.type === E.CONV_C2C) n.push(e.toAccount);
                          else if (e.type === E.CONV_GROUP) {
                              var t = e.toAccount;
                              s.hasLocalGroup(t) ? e.groupProfile = s.getLocalGroupProfile(t) : o.push(t)
                          }
                      })), Se.log("".concat(this._className, "._updateUserOrGroupProfile c2cUserIDList:").concat(n, " groupIDList:").concat(o)), n.length > 0 && a.getUserProfile({
                          userIDList: n
                      }).then((function(e) {
                          var n = e.data;
                          Re(n) ? n.forEach((function(e) {
                              t._conversationMap.get("C2C".concat(e.userID)).userProfile = e
                          })) : t._conversationMap.get("C2C".concat(n.userID)).userProfile = n
                      })), o.length > 0 && s.getGroupProfileAdvance({
                          groupIDList: o,
                          responseFilter: {
                              groupBaseInfoFilter: ["Type", "Name", "FaceUrl"]
                          }
                      }).then((function(e) {
                          e.data.successGroupList.forEach((function(e) {
                              var n = "GROUP".concat(e.groupID);
                              if (t._conversationMap.has(n)) {
                                  var o = t._conversationMap.get(n);
                                  Ke(o.groupProfile, e, [], [null, void 0, "", 0, NaN]), !o.subType && e.type && (o.subType = e.type)
                              }
                          }))
                      }))
                  }
              }
          }, {
              key: "_getConversationOptions",
              value: function(e) {
                  var t = [],
                      n = e.filter((function(e) {
                          var t = e.lastMsg;
                          return Le(t)
                      })).map((function(e) {
                          if (1 === e.type) {
                              var n = {
                                  userID: e.userID,
                                  nick: e.c2CNick,
                                  avatar: e.c2CImage
                              };
                              return t.push(n), {
                                  conversationID: "C2C".concat(e.userID),
                                  type: "C2C",
                                  lastMessage: {
                                      lastTime: e.time,
                                      lastSequence: e.sequence,
                                      fromAccount: e.lastC2CMsgFromAccount,
                                      messageForShow: e.messageShow,
                                      type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                      payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null,
                                      cloudCustomData: e.cloudCustomData || "",
                                      isRevoked: 8 === e.lastMessageFlag,
                                      onlineOnlyFlag: !1
                                  },
                                  userProfile: new jr(n),
                                  peerReadTime: e.c2cPeerReadTime,
                                  isPinned: 1 === e.isPinned
                              }
                          }
                          return {
                              conversationID: "GROUP".concat(e.groupID),
                              type: "GROUP",
                              lastMessage: {
                                  lastTime: e.time,
                                  lastSequence: e.messageReadSeq + e.unreadCount,
                                  fromAccount: e.msgGroupFromAccount,
                                  messageForShow: e.messageShow,
                                  type: e.lastMsg.elements[0] ? e.lastMsg.elements[0].type : null,
                                  payload: e.lastMsg.elements[0] ? e.lastMsg.elements[0].content : null,
                                  cloudCustomData: e.cloudCustomData || "",
                                  isRevoked: 2 === e.lastMessageFlag,
                                  onlineOnlyFlag: !1
                              },
                              groupProfile: new Wr({
                                  groupID: e.groupID,
                                  name: e.groupNick,
                                  avatar: e.groupImage
                              }),
                              unreadCount: e.unreadCount,
                              peerReadTime: 0,
                              isPinned: 1 === e.isPinned
                          }
                      }));
                  t.length > 0 && this.getModule(Lt).onConversationsProfileUpdated(t);
                  return n
              }
          }, {
              key: "getLocalMessageList",
              value: function(e) {
                  return this._messageListHandler.getLocalMessageList(e)
              }
          }, {
              key: "deleteLocalMessage",
              value: function(e) {
                  e instanceof Dr && this._messageListHandler.remove(e)
              }
          }, {
              key: "onConversationDeleted",
              value: function(e) {
                  var t = this;
                  Se.log("".concat(this._className, ".onConversationDeleted")), Re(e) && e.forEach((function(e) {
                      var n = e.type,
                          o = e.userID,
                          a = e.groupID,
                          s = "";
                      1 === n ? s = "".concat(E.CONV_C2C).concat(o) : 2 === n && (s = "".concat(E.CONV_GROUP).concat(a)), t.deleteLocalConversation(s)
                  }))
              }
          }, {
              key: "onConversationPinned",
              value: function(e) {
                  var t = this;
                  if (Re(e)) {
                      var n = !1;
                      e.forEach((function(e) {
                          var o, a = e.type,
                              s = e.userID,
                              r = e.groupID;
                          1 === a ? o = t.getLocalConversation("".concat(E.CONV_C2C).concat(s)) : 2 === a && (o = t.getLocalConversation("".concat(E.CONV_GROUP).concat(r))), o && (Se.log("".concat(t._className, ".onConversationPinned conversationID:").concat(o.conversationID, " isPinned:").concat(o.isPinned)), o.isPinned || (o.isPinned = !0, n = !0))
                      })), n && this._sortConversationListAndEmitEvent()
                  }
              }
          }, {
              key: "onConversationUnpinned",
              value: function(e) {
                  var t = this;
                  if (Re(e)) {
                      var n = !1;
                      e.forEach((function(e) {
                          var o, a = e.type,
                              s = e.userID,
                              r = e.groupID;
                          1 === a ? o = t.getLocalConversation("".concat(E.CONV_C2C).concat(s)) : 2 === a && (o = t.getLocalConversation("".concat(E.CONV_GROUP).concat(r))), o && (Se.log("".concat(t._className, ".onConversationUnpinned conversationID:").concat(o.conversationID, " isPinned:").concat(o.isPinned)), o.isPinned && (o.isPinned = !1, n = !0))
                      })), n && this._sortConversationListAndEmitEvent()
                  }
              }
          }, {
              key: "getMessageList",
              value: function(e) {
                  var t = this,
                      n = e.conversationID,
                      o = e.nextReqMessageID,
                      a = e.count,
                      s = "".concat(this._className, ".getMessageList"),
                      r = this.getLocalConversation(n),
                      i = "";
                  if (r && r.groupProfile && (i = r.groupProfile.type), et(i)) return Se.log("".concat(s, " not available in avchatroom. conversationID:").concat(n)), Gr({
                      messageList: [],
                      nextReqMessageID: "",
                      isCompleted: !0
                  });
                  (Ge(a) || a > 15) && (a = 15);
                  var u = this._computeLeftCount({
                      conversationID: n,
                      nextReqMessageID: o
                  });
                  return Se.log("".concat(s, " conversationID:").concat(n, " leftCount:").concat(u, " count:").concat(a, " nextReqMessageID:").concat(o)), this._needGetHistory({
                      conversationID: n,
                      leftCount: u,
                      count: a
                  }) ? this.getHistoryMessages({
                      conversationID: n,
                      nextReqMessageID: o,
                      count: 20
                  }).then((function() {
                      return u = t._computeLeftCount({
                          conversationID: n,
                          nextReqMessageID: o
                      }), Cr(t._computeResult({
                          conversationID: n,
                          nextReqMessageID: o,
                          count: a,
                          leftCount: u
                      }))
                  })) : (Se.log("".concat(s, ".getMessageList get message list from memory")), this.modifyMessageList(n), Gr(this._computeResult({
                      conversationID: n,
                      nextReqMessageID: o,
                      count: a,
                      leftCount: u
                  })))
              }
          }, {
              key: "_computeLeftCount",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.nextReqMessageID;
                  return n ? this._messageListHandler.getLocalMessageList(t).findIndex((function(e) {
                      return e.ID === n
                  })) : this._getMessageListSize(t)
              }
          }, {
              key: "_getMessageListSize",
              value: function(e) {
                  return this._messageListHandler.getLocalMessageList(e).length
              }
          }, {
              key: "_needGetHistory",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.leftCount,
                      o = e.count,
                      a = this.getLocalConversation(t),
                      s = "";
                  return a && a.groupProfile && (s = a.groupProfile.type), !at(t) && !et(s) && (n < o && !this._completedMap.has(t))
              }
          }, {
              key: "_computeResult",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.nextReqMessageID,
                      o = e.count,
                      a = e.leftCount,
                      s = this._computeMessageList({
                          conversationID: t,
                          nextReqMessageID: n,
                          count: o
                      }),
                      r = this._computeIsCompleted({
                          conversationID: t,
                          leftCount: a,
                          count: o
                      }),
                      i = this._computeNextReqMessageID({
                          messageList: s,
                          isCompleted: r,
                          conversationID: t
                      }),
                      u = "".concat(this._className, "._computeResult. conversationID:").concat(t);
                  return Se.log("".concat(u, " leftCount:").concat(a, " count:").concat(o, " nextReqMessageID:").concat(i, " isCompleted:").concat(r)), {
                      messageList: s,
                      nextReqMessageID: i,
                      isCompleted: r
                  }
              }
          }, {
              key: "_computeMessageList",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.nextReqMessageID,
                      o = e.count,
                      a = this._messageListHandler.getLocalMessageList(t),
                      s = this._computeIndexEnd({
                          nextReqMessageID: n,
                          messageList: a
                      }),
                      r = this._computeIndexStart({
                          indexEnd: s,
                          count: o
                      });
                  return a.slice(r, s)
              }
          }, {
              key: "_computeNextReqMessageID",
              value: function(e) {
                  var t = e.messageList,
                      n = e.isCompleted,
                      o = e.conversationID;
                  if (!n) return 0 === t.length ? "" : t[0].ID;
                  var a = this._messageListHandler.getLocalMessageList(o);
                  return 0 === a.length ? "" : a[0].ID
              }
          }, {
              key: "_computeIndexEnd",
              value: function(e) {
                  var t = e.messageList,
                      n = void 0 === t ? [] : t,
                      o = e.nextReqMessageID;
                  return o ? n.findIndex((function(e) {
                      return e.ID === o
                  })) : n.length
              }
          }, {
              key: "_computeIndexStart",
              value: function(e) {
                  var t = e.indexEnd,
                      n = e.count;
                  return t > n ? t - n : 0
              }
          }, {
              key: "_computeIsCompleted",
              value: function(e) {
                  var t = e.conversationID;
                  return !!(e.leftCount <= e.count && this._completedMap.has(t))
              }
          }, {
              key: "getHistoryMessages",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.nextReqMessageID;
                  if (t === E.CONV_SYSTEM) return Gr();
                  e.count ? e.count > 20 && (e.count = 20) : e.count = 15;
                  var o = this._messageListHandler.getLocalOldestMessageByConversationID(t);
                  o || ((o = {}).time = 0, o.sequence = 0, 0 === t.indexOf(E.CONV_C2C) ? (o.to = t.replace(E.CONV_C2C, ""), o.conversationType = E.CONV_C2C) : 0 === t.indexOf(E.CONV_GROUP) && (o.to = t.replace(E.CONV_GROUP, ""), o.conversationType = E.CONV_GROUP));
                  var a = "",
                      s = null;
                  switch (o.conversationType) {
                      case E.CONV_C2C:
                          return a = t.replace(E.CONV_C2C, ""), (s = this.getModule(Rt)) ? s.getRoamingMessage({
                              conversationID: e.conversationID,
                              peerAccount: a,
                              count: e.count,
                              lastMessageTime: this._roamingMessageKeyMap.has(t) ? o.time : 0,
                              messageKey: this._roamingMessageKeyMap.get(t)
                          }) : Pr({
                              code: co.CANNOT_FIND_MODULE,
                              message: ma
                          });
                      case E.CONV_GROUP:
                          return (s = this.getModule(Gt)) ? s.getRoamingMessage({
                              conversationID: e.conversationID,
                              groupID: o.to,
                              count: e.count,
                              sequence: n && !1 === o.getOnlineOnlyFlag() ? o.sequence - 1 : o.sequence
                          }) : Pr({
                              code: co.CANNOT_FIND_MODULE,
                              message: ma
                          });
                      default:
                          return Gr()
                  }
              }
          }, {
              key: "patchConversationLastMessage",
              value: function(e) {
                  var t = this.getLocalConversation(e);
                  if (t) {
                      var n = t.lastMessage,
                          o = n.messageForShow,
                          a = n.payload;
                      if (_t(o) || _t(a)) {
                          var s = this._messageListHandler.getLocalMessageList(e);
                          if (0 === s.length) return;
                          var r = s[s.length - 1];
                          Se.log("".concat(this._className, ".patchConversationLastMessage conversationID:").concat(e, " payload:"), r.payload), t.updateLastMessage(r)
                      }
                  }
              }
          }, {
              key: "storeRoamingMessage",
              value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                      n = arguments.length > 1 ? arguments[1] : void 0,
                      o = n.startsWith(E.CONV_C2C) ? E.CONV_C2C : E.CONV_GROUP,
                      a = null,
                      s = [],
                      r = 0,
                      i = e.length,
                      u = null,
                      c = o === E.CONV_GROUP,
                      l = this.getModule(Kt),
                      d = function() {
                          r = c ? e.length - 1 : 0, i = c ? 0 : e.length
                      },
                      p = function() {
                          c ? --r : ++r
                      },
                      g = function() {
                          return c ? r >= i : r < i
                      };
                  for (d(); g(); p())
                      if (c && 1 === e[r].sequence && this.setCompleted(n), 1 !== e[r].isPlaceMessage)
                          if ((a = new Dr(e[r])).to = e[r].to, a.isSystemMessage = !!e[r].isSystemMessage, a.conversationType = o, 4 === e[r].event ? u = {
                                  type: E.MSG_GRP_TIP,
                                  content: t(t({}, e[r].elements), {}, {
                                      groupProfile: e[r].groupProfile
                                  })
                              } : (e[r].elements = l.parseElements(e[r].elements, e[r].from), u = e[r].elements), c || a.setNickAndAvatar({
                                  nick: e[r].nick,
                                  avatar: e[r].avatar
                              }), _t(u)) {
                              var h = new Ga(es);
                              h.setMessage("from:".concat(a.from, " to:").concat(a.to, " sequence:").concat(a.sequence, " event:").concat(e[r].event)), h.setNetworkType(this.getNetworkType()).setLevel("warning").end()
                          } else a.setElement(u), a.reInitialize(this.getMyUserID()), s.push(a);
                  return this._messageListHandler.unshift(s), d = p = g = null, s
              }
          }, {
              key: "setMessageRead",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.messageID,
                      o = this.getLocalConversation(t);
                  if (Se.log("".concat(this._className, ".setMessageRead conversationID:").concat(t, " unreadCount:").concat(o ? o.unreadCount : 0)), !o) return Gr();
                  if (o.type !== E.CONV_GROUP || _t(o.groupAtInfoList) || this.deleteGroupAtTips(t), 0 === o.unreadCount) return Gr();
                  var a = this._messageListHandler.getLocalMessage(t, n),
                      s = null;
                  switch (o.type) {
                      case E.CONV_C2C:
                          return (s = this.getModule(Rt)) ? s.setMessageRead({
                              conversationID: t,
                              lastMessageTime: a ? a.time : o.lastMessage.lastTime
                          }) : Pr({
                              code: co.CANNOT_FIND_MODULE,
                              message: ma
                          });
                      case E.CONV_GROUP:
                          return (s = this._moduleManager.getModule(Gt)) ? s.setMessageRead({
                              conversationID: t,
                              lastMessageSeq: a ? a.sequence : o.lastMessage.lastSequence
                          }) : Pr({
                              code: co.CANNOT_FIND_MODULE,
                              message: ma
                          });
                      case E.CONV_SYSTEM:
                          return o.unreadCount = 0, this._emitConversationUpdate(!0, !1), Gr();
                      default:
                          return Gr()
                  }
              }
          }, {
              key: "updateIsReadAfterReadReport",
              value: function(e) {
                  var t = e.conversationID,
                      n = e.lastMessageSeq,
                      o = e.lastMessageTime,
                      a = this._messageListHandler.getLocalMessageList(t);
                  if (0 !== a.length)
                      for (var s, r = a.length - 1; r >= 0; r--)
                          if (s = a[r], !(o && s.time > o || n && s.sequence > n)) {
                              if ("in" === s.flow && s.isRead) break;
                              s.setIsRead(!0)
                          }
              }
          }, {
              key: "updateUnreadCount",
              value: function(e) {
                  var t = this.getLocalConversation(e),
                      n = this._messageListHandler.getLocalMessageList(e);
                  if (t) {
                      var o = t.unreadCount,
                          a = n.filter((function(e) {
                              return !e.isRead && !e.getOnlineOnlyFlag() && !e.isDeleted
                          })).length;
                      o !== a && (t.unreadCount = a, Se.log("".concat(this._className, ".updateUnreadCount from ").concat(o, " to ").concat(a, ", conversationID:").concat(e)), this._emitConversationUpdate(!0, !1))
                  }
              }
          }, {
              key: "updateIsRead",
              value: function(e) {
                  var t = this.getLocalConversation(e),
                      n = this.getLocalMessageList(e);
                  if (t && 0 !== n.length && !at(t.type)) {
                      for (var o = [], a = 0, s = n.length; a < s; a++) "in" !== n[a].flow ? "out" !== n[a].flow || n[a].isRead || n[a].setIsRead(!0) : o.push(n[a]);
                      var r = 0;
                      if (t.type === E.CONV_C2C) {
                          var i = o.slice(-t.unreadCount).filter((function(e) {
                              return e.isRevoked
                          })).length;
                          r = o.length - t.unreadCount - i
                      } else r = o.length - t.unreadCount;
                      for (var u = 0; u < r && !o[u].isRead; u++) o[u].setIsRead(!0)
                  }
              }
          }, {
              key: "deleteGroupAtTips",
              value: function(e) {
                  var t = "".concat(this._className, ".deleteGroupAtTips");
                  Se.log("".concat(t));
                  var n = this._conversationMap.get(e);
                  if (!n) return Promise.resolve();
                  var o = n.groupAtInfoList;
                  if (0 === o.length) return Promise.resolve();
                  var a = this.getMyUserID();
                  return this.request({
                      protocolName: yn,
                      requestData: {
                          messageListToDelete: o.map((function(e) {
                              return {
                                  from: e.from,
                                  to: a,
                                  messageSeq: e.__sequence,
                                  messageRandom: e.__random,
                                  groupID: e.groupID
                              }
                          }))
                      }
                  }).then((function() {
                      return Se.log("".concat(t, " ok. count:").concat(o.length)), n.clearGroupAtInfoList(), Promise.resolve()
                  })).catch((function(e) {
                      return Se.error("".concat(t, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "appendToMessageList",
              value: function(e) {
                  this._messageListHandler.pushIn(e)
              }
          }, {
              key: "setMessageRandom",
              value: function(e) {
                  this.singlyLinkedList.set(e.random)
              }
          }, {
              key: "deleteMessageRandom",
              value: function(e) {
                  this.singlyLinkedList.delete(e.random)
              }
          }, {
              key: "pushIntoMessageList",
              value: function(e, t, n) {
                  return !(!this._messageListHandler.pushIn(t, n) || this._isMessageFromCurrentInstance(t) && !n) && (e.push(t), !0)
              }
          }, {
              key: "_isMessageFromCurrentInstance",
              value: function(e) {
                  return this.singlyLinkedList.has(e.random)
              }
          }, {
              key: "revoke",
              value: function(e, t, n) {
                  return this._messageListHandler.revoke(e, t, n)
              }
          }, {
              key: "getPeerReadTime",
              value: function(e) {
                  return this._peerReadTimeMap.get(e)
              }
          }, {
              key: "recordPeerReadTime",
              value: function(e, t) {
                  this._peerReadTimeMap.has(e) ? this._peerReadTimeMap.get(e) < t && this._peerReadTimeMap.set(e, t) : this._peerReadTimeMap.set(e, t)
              }
          }, {
              key: "updateMessageIsPeerReadProperty",
              value: function(e, t) {
                  if (e.startsWith(E.CONV_C2C) && t > 0) {
                      var n = this._messageListHandler.updateMessageIsPeerReadProperty(e, t);
                      n.length > 0 && this.emitOuterEvent(S.MESSAGE_READ_BY_PEER, n)
                  }
              }
          }, {
              key: "updateMessageIsReadProperty",
              value: function(e) {
                  var t = this.getLocalConversation(e),
                      n = this._messageListHandler.getLocalMessageList(e);
                  if (t && 0 !== n.length && !at(t.type)) {
                      for (var o = [], a = 0; a < n.length; a++) "in" !== n[a].flow ? "out" !== n[a].flow || n[a].isRead || n[a].setIsRead(!0) : o.push(n[a]);
                      var s = 0;
                      if (t.type === E.CONV_C2C) {
                          var r = o.slice(-t.unreadCount).filter((function(e) {
                              return e.isRevoked
                          })).length;
                          s = o.length - t.unreadCount - r
                      } else s = o.length - t.unreadCount;
                      for (var i = 0; i < s && !o[i].isRead; i++) o[i].setIsRead(!0)
                  }
              }
          }, {
              key: "updateMessageIsModifiedProperty",
              value: function(e) {
                  this._messageListHandler.updateMessageIsModifiedProperty(e)
              }
          }, {
              key: "setCompleted",
              value: function(e) {
                  Se.log("".concat(this._className, ".setCompleted. conversationID:").concat(e)), this._completedMap.set(e, !0)
              }
          }, {
              key: "updateRoamingMessageKey",
              value: function(e, t) {
                  this._roamingMessageKeyMap.set(e, t)
              }
          }, {
              key: "getConversationList",
              value: function() {
                  var e = this,
                      t = "".concat(this._className, ".getConversationList");
                  Se.log(t), this._pagingStatus === yt.REJECTED && (Se.log("".concat(t, ". continue to sync conversationList")), this._syncConversationList());
                  var n = new Ga(rs);
                  return this.request({
                      protocolName: mn,
                      requestData: {
                          fromAccount: this.getMyUserID()
                      }
                  }).then((function(o) {
                      var a = o.data.conversations,
                          s = void 0 === a ? [] : a,
                          r = e._getConversationOptions(s);
                      return e._updateLocalConversationList(r, !0), e._setStorageConversationList(), e._handleC2CPeerReadTime(), n.setMessage("conversation count: ".concat(s.length)).setNetworkType(e.getNetworkType()).end(), Se.log("".concat(t, " ok")), Gr({
                          conversationList: e.getLocalConversationList()
                      })
                  })).catch((function(o) {
                      return e.probeNetwork().then((function(e) {
                          var t = m(e, 2),
                              a = t[0],
                              s = t[1];
                          n.setError(o, a, s).end()
                      })), Se.error("".concat(t, " failed. error:"), o), Pr(o)
                  }))
              }
          }, {
              key: "_handleC2CPeerReadTime",
              value: function() {
                  var e, t = C(this._conversationMap);
                  try {
                      for (t.s(); !(e = t.n()).done;) {
                          var n = m(e.value, 2),
                              o = n[0],
                              a = n[1];
                          a.type === E.CONV_C2C && (Se.debug("".concat(this._className, "._handleC2CPeerReadTime conversationID:").concat(o, " peerReadTime:").concat(a.peerReadTime)), this.recordPeerReadTime(o, a.peerReadTime))
                      }
                  } catch (s) {
                      t.e(s)
                  } finally {
                      t.f()
                  }
              }
          }, {
              key: "getConversationProfile",
              value: function(e) {
                  var t, n = this;
                  if ((t = this._conversationMap.has(e) ? this._conversationMap.get(e) : new Qr({
                          conversationID: e,
                          type: e.slice(0, 3) === E.CONV_C2C ? E.CONV_C2C : E.CONV_GROUP
                      }))._isInfoCompleted || t.type === E.CONV_SYSTEM) return Gr({
                      conversation: t
                  });
                  var o = new Ga(is),
                      a = "".concat(this._className, ".getConversationProfile");
                  return Se.log("".concat(a, ". conversationID:").concat(e, " remark:").concat(t.remark, " lastMessage:"), t.lastMessage), this._updateUserOrGroupProfileCompletely(t).then((function(s) {
                      o.setNetworkType(n.getNetworkType()).setMessage("conversationID:".concat(e, " unreadCount:").concat(s.data.conversation.unreadCount)).end();
                      var r = n.getModule(Pt);
                      if (r && t.type === E.CONV_C2C) {
                          var i = e.replace(E.CONV_C2C, "");
                          if (r.isMyFriend(i)) {
                              var u = r.getFriendRemark(i);
                              t.remark !== u && (t.remark = u, Se.log("".concat(a, ". conversationID:").concat(e, " patch remark:").concat(t.remark)))
                          }
                      }
                      return Se.log("".concat(a, " ok. conversationID:").concat(e)), s
                  })).catch((function(t) {
                      return n.probeNetwork().then((function(n) {
                          var a = m(n, 2),
                              s = a[0],
                              r = a[1];
                          o.setError(t, s, r).setMessage("conversationID:".concat(e)).end()
                      })), Se.error("".concat(a, " failed. error:"), t), Pr(t)
                  }))
              }
          }, {
              key: "_updateUserOrGroupProfileCompletely",
              value: function(e) {
                  var t = this;
                  return e.type === E.CONV_C2C ? this.getModule(Lt).getUserProfile({
                      userIDList: [e.toAccount]
                  }).then((function(n) {
                      var o = n.data;
                      return 0 === o.length ? Pr(new Or({
                          code: co.USER_OR_GROUP_NOT_FOUND,
                          message: Ho
                      })) : (e.userProfile = o[0], e._isInfoCompleted = !0, t._unshiftConversation(e), Gr({
                          conversation: e
                      }))
                  })) : this.getModule(Gt).getGroupProfile({
                      groupID: e.toAccount
                  }).then((function(n) {
                      return e.groupProfile = n.data.group, e._isInfoCompleted = !0, t._unshiftConversation(e), Gr({
                          conversation: e
                      })
                  }))
              }
          }, {
              key: "_unshiftConversation",
              value: function(e) {
                  e instanceof Qr && !this._conversationMap.has(e.conversationID) && (this._conversationMap = new Map([
                      [e.conversationID, e]
                  ].concat(M(this._conversationMap))), this._setStorageConversationList(), this._emitConversationUpdate(!0, !1))
              }
          }, {
              key: "deleteConversation",
              value: function(e) {
                  var t = this,
                      n = {
                          fromAccount: this.getMyUserID(),
                          toAccount: void 0,
                          type: void 0
                      };
                  if (!this._conversationMap.has(e)) {
                      var o = new Or({
                          code: co.CONVERSATION_NOT_FOUND,
                          message: Bo
                      });
                      return Pr(o)
                  }
                  switch (this._conversationMap.get(e).type) {
                      case E.CONV_C2C:
                          n.type = 1, n.toAccount = e.replace(E.CONV_C2C, "");
                          break;
                      case E.CONV_GROUP:
                          n.type = 2, n.toGroupID = e.replace(E.CONV_GROUP, "");
                          break;
                      case E.CONV_SYSTEM:
                          return this.getModule(Gt).deleteGroupSystemNotice({
                              messageList: this._messageListHandler.getLocalMessageList(e)
                          }), this.deleteLocalConversation(e), Gr({
                              conversationID: e
                          });
                      default:
                          var a = new Or({
                              code: co.CONVERSATION_UN_RECORDED_TYPE,
                              message: jo
                          });
                          return Pr(a)
                  }
                  var s = new Ga(us);
                  s.setMessage("conversationID:".concat(e));
                  var r = "".concat(this._className, ".deleteConversation");
                  return Se.log("".concat(r, ". conversationID:").concat(e)), this.setMessageRead({
                      conversationID: e
                  }).then((function() {
                      return t.request({
                          protocolName: Mn,
                          requestData: n
                      })
                  })).then((function() {
                      return s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(r, " ok")), t.deleteLocalConversation(e), Gr({
                          conversationID: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.error("".concat(r, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "pinConversation",
              value: function(e) {
                  var t = this,
                      n = e.conversationID,
                      o = e.isPinned;
                  if (!this._conversationMap.has(n)) return Pr({
                      code: co.CONVERSATION_NOT_FOUND,
                      message: Bo
                  });
                  var a = this.getLocalConversation(n);
                  if (a.isPinned === o) return Gr({
                      conversationID: n
                  });
                  var s = new Ga(cs);
                  s.setMessage("conversationID:".concat(n, " isPinned:").concat(o));
                  var r = "".concat(this._className, ".pinConversation");
                  Se.log("".concat(r, ". conversationID:").concat(n, " isPinned:").concat(o));
                  var i = null;
                  return nt(n) ? i = {
                      type: 1,
                      toAccount: n.replace(E.CONV_C2C, "")
                  } : ot(n) && (i = {
                      type: 2,
                      groupID: n.replace(E.CONV_GROUP, "")
                  }), this.request({
                      protocolName: vn,
                      requestData: {
                          fromAccount: this.getMyUserID(),
                          operationType: !0 === o ? 1 : 2,
                          itemList: [i]
                      }
                  }).then((function() {
                      return s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(r, " ok")), a.isPinned !== o && (a.isPinned = o, t._sortConversationListAndEmitEvent()), Cr({
                          conversationID: n
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.error("".concat(r, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "deleteLocalConversation",
              value: function(e) {
                  var t = this._conversationMap.has(e);
                  Se.log("".concat(this._className, ".deleteLocalConversation conversationID:").concat(e, " has:").concat(t)), t && (this._conversationMap.delete(e), this._roamingMessageKeyMap.delete(e), this._setStorageConversationList(), this._messageListHandler.removeByConversationID(e), this._completedMap.delete(e), this._emitConversationUpdate(!0, !1))
              }
          }, {
              key: "isMessageSentByCurrentInstance",
              value: function(e) {
                  return !(!this._messageListHandler.hasLocalMessage(e.conversationID, e.ID) && !this.singlyLinkedList.has(e.random))
              }
          }, {
              key: "modifyMessageList",
              value: function(e) {
                  if (e.startsWith(E.CONV_C2C)) {
                      var t = Date.now();
                      this._messageListHandler.modifyMessageSentByPeer(e);
                      var n = this.getModule(Lt).getNickAndAvatarByUserID(this.getMyUserID());
                      this._messageListHandler.modifyMessageSentByMe({
                          conversationID: e,
                          latestNick: n.nick,
                          latestAvatar: n.avatar
                      }), Se.log("".concat(this._className, ".modifyMessageList conversationID:").concat(e, " cost ").concat(Date.now() - t, " ms"))
                  }
              }
          }, {
              key: "updateUserProfileSpecifiedKey",
              value: function(e) {
                  Se.log("".concat(this._className, ".updateUserProfileSpecifiedKey options:"), e);
                  var t = e.conversationID,
                      n = e.nick,
                      o = e.avatar;
                  if (this._conversationMap.has(t)) {
                      var a = this._conversationMap.get(t).userProfile;
                      Ne(n) && a.nick !== n && (a.nick = n), Ne(o) && a.avatar !== o && (a.avatar = o), this._emitConversationUpdate(!0, !1)
                  }
              }
          }, {
              key: "onMyProfileModified",
              value: function(e) {
                  var n = this,
                      o = this.getLocalConversationList(),
                      a = Date.now();
                  o.forEach((function(o) {
                      n.modifyMessageSentByMe(t({
                          conversationID: o.conversationID
                      }, e))
                  })), Se.log("".concat(this._className, ".onMyProfileModified. modify all messages sent by me, cost ").concat(Date.now() - a, " ms"))
              }
          }, {
              key: "modifyMessageSentByMe",
              value: function(e) {
                  this._messageListHandler.modifyMessageSentByMe(e)
              }
          }, {
              key: "getLatestMessageSentByMe",
              value: function(e) {
                  return this._messageListHandler.getLatestMessageSentByMe(e)
              }
          }, {
              key: "modifyMessageSentByPeer",
              value: function(e, t) {
                  this._messageListHandler.modifyMessageSentByPeer(e, t)
              }
          }, {
              key: "getLatestMessageSentByPeer",
              value: function(e) {
                  return this._messageListHandler.getLatestMessageSentByPeer(e)
              }
          }, {
              key: "pushIntoNoticeResult",
              value: function(e, t) {
                  return !(!this._messageListHandler.pushIn(t) || this.singlyLinkedList.has(t.random)) && (e.push(t), !0)
              }
          }, {
              key: "getGroupLocalLastMessageSequence",
              value: function(e) {
                  return this._messageListHandler.getGroupLocalLastMessageSequence(e)
              }
          }, {
              key: "checkAndPatchRemark",
              value: function() {
                  if (0 !== this._conversationMap.size) {
                      var e = this.getModule(Pt);
                      if (e) {
                          var t = M(this._conversationMap.values()).filter((function(e) {
                              return e.type === E.CONV_C2C
                          }));
                          if (0 !== t.length) {
                              var n = !1,
                                  o = 0;
                              t.forEach((function(t) {
                                  var a = t.conversationID.replace(E.CONV_C2C, "");
                                  if (e.isMyFriend(a)) {
                                      var s = e.getFriendRemark(a);
                                      t.remark !== s && (t.remark = s, o += 1, n = !0)
                                  }
                              })), Se.log("".concat(this._className, ".checkAndPatchRemark. c2c conversation count:").concat(t.length, ", patched count:").concat(o)), n && this._emitConversationUpdate(!0, !1)
                          }
                      }
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._pagingStatus = yt.NOT_START, this._messageListHandler.reset(), this._roamingMessageKeyMap.clear(), this.singlyLinkedList.reset(), this._peerReadTimeMap.clear(), this._completedMap.clear(), this._conversationMap.clear(), this._pagingTimeStamp = 0, this._pagingStartIndex = 0, this._pagingPinnedTimeStamp = 0, this._pagingPinnedStartIndex = 0, this.resetReady()
              }
          }]), a
      }(Xt),
      ei = function() {
          function e(t) {
              o(this, e), this._groupModule = t, this._className = "GroupTipsHandler", this._cachedGroupTipsMap = new Map, this._checkCountMap = new Map, this.MAX_CHECK_COUNT = 4
          }
          return s(e, [{
              key: "onCheckTimer",
              value: function(e) {
                  e % 1 == 0 && this._cachedGroupTipsMap.size > 0 && this._checkCachedGroupTips()
              }
          }, {
              key: "_checkCachedGroupTips",
              value: function() {
                  var e = this;
                  this._cachedGroupTipsMap.forEach((function(t, n) {
                      var o = e._checkCountMap.get(n),
                          a = e._groupModule.hasLocalGroup(n);
                      Se.log("".concat(e._className, "._checkCachedGroupTips groupID:").concat(n, " hasLocalGroup:").concat(a, " checkCount:").concat(o)), a ? (e._notifyCachedGroupTips(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupTips(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o))
                  }))
              }
          }, {
              key: "onNewGroupTips",
              value: function(e) {
                  Se.debug("".concat(this._className, ".onReceiveGroupTips count:").concat(e.dataList.length));
                  var t = this.newGroupTipsStoredAndSummary(e),
                      n = t.eventDataList,
                      o = t.result,
                      a = t.AVChatRoomMessageList;
                  (a.length > 0 && this._groupModule.onAVChatRoomMessage(a), n.length > 0) && (this._groupModule.getModule(wt).onNewMessage({
                      conversationOptionsList: n,
                      isInstantMessage: !0
                  }), this._groupModule.updateNextMessageSeq(n));
                  o.length > 0 && (this._groupModule.emitOuterEvent(S.MESSAGE_RECEIVED, o), this.handleMessageList(o))
              }
          }, {
              key: "newGroupTipsStoredAndSummary",
              value: function(e) {
                  for (var n = e.event, o = e.dataList, a = null, s = [], r = [], i = {}, u = [], c = 0, l = o.length; c < l; c++) {
                      var d = o[c],
                          p = d.groupProfile.groupID,
                          g = this._groupModule.hasLocalGroup(p);
                      if (g || !this._groupModule.isUnjoinedAVChatRoom(p))
                          if (g)
                              if (this._groupModule.isMessageFromAVChatroom(p)) {
                                  var h = Xe(d);
                                  h.event = n, u.push(h)
                              } else {
                                  d.currentUser = this._groupModule.getMyUserID(), d.conversationType = E.CONV_GROUP, (a = new Dr(d)).setElement({
                                      type: E.MSG_GRP_TIP,
                                      content: t(t({}, d.elements), {}, {
                                          groupProfile: d.groupProfile
                                      })
                                  }), a.isSystemMessage = !1;
                                  var _ = this._groupModule.getModule(wt),
                                      f = a.conversationID;
                                  if (6 === n) a.setOnlineOnlyFlag(!0), r.push(a);
                                  else if (!_.pushIntoNoticeResult(r, a)) continue;
                                  if (6 !== n || !_.getLocalConversation(f)) {
                                      if (6 !== n) this._groupModule.getModule(Jt).addMessageSequence({
                                          key: ka,
                                          message: a
                                      });
                                      if (Ge(i[f])) i[f] = s.push({
                                          conversationID: f,
                                          unreadCount: "in" === a.flow && a.getOnlineOnlyFlag() ? 0 : 1,
                                          type: a.conversationType,
                                          subType: a.conversationSubType,
                                          lastMessage: a
                                      }) - 1;
                                      else {
                                          var m = i[f];
                                          s[m].type = a.conversationType, s[m].subType = a.conversationSubType, s[m].lastMessage = a, "in" !== a.flow || a.getOnlineOnlyFlag() || s[m].unreadCount++
                                      }
                                  }
                              }
                      else this._cacheGroupTipsAndProbe({
                          groupID: p,
                          event: n,
                          item: d
                      })
                  }
                  return {
                      eventDataList: s,
                      result: r,
                      AVChatRoomMessageList: u
                  }
              }
          }, {
              key: "handleMessageList",
              value: function(e) {
                  var t = this;
                  e.forEach((function(e) {
                      switch (e.payload.operationType) {
                          case 1:
                              t._onNewMemberComeIn(e);
                              break;
                          case 2:
                              t._onMemberQuit(e);
                              break;
                          case 3:
                              t._onMemberKickedOut(e);
                              break;
                          case 4:
                              t._onMemberSetAdmin(e);
                              break;
                          case 5:
                              t._onMemberCancelledAdmin(e);
                              break;
                          case 6:
                              t._onGroupProfileModified(e);
                              break;
                          case 7:
                              t._onMemberInfoModified(e);
                              break;
                          default:
                              Se.warn("".concat(t._className, ".handleMessageList unknown operationType:").concat(e.payload.operationType))
                      }
                  }))
              }
          }, {
              key: "_onNewMemberComeIn",
              value: function(e) {
                  var t = e.payload,
                      n = t.memberNum,
                      o = t.groupProfile.groupID,
                      a = this._groupModule.getLocalGroupProfile(o);
                  a && Ae(n) && (a.memberNum = n)
              }
          }, {
              key: "_onMemberQuit",
              value: function(e) {
                  var t = e.payload,
                      n = t.memberNum,
                      o = t.groupProfile.groupID,
                      a = this._groupModule.getLocalGroupProfile(o);
                  a && Ae(n) && (a.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList)
              }
          }, {
              key: "_onMemberKickedOut",
              value: function(e) {
                  var t = e.payload,
                      n = t.memberNum,
                      o = t.groupProfile.groupID,
                      a = this._groupModule.getLocalGroupProfile(o);
                  a && Ae(n) && (a.memberNum = n), this._groupModule.deleteLocalGroupMembers(o, e.payload.userIDList)
              }
          }, {
              key: "_onMemberSetAdmin",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID,
                      n = e.payload.userIDList,
                      o = this._groupModule.getModule(bt);
                  n.forEach((function(e) {
                      var n = o.getLocalGroupMemberInfo(t, e);
                      n && n.updateRole(E.GRP_MBR_ROLE_ADMIN)
                  }))
              }
          }, {
              key: "_onMemberCancelledAdmin",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID,
                      n = e.payload.userIDList,
                      o = this._groupModule.getModule(bt);
                  n.forEach((function(e) {
                      var n = o.getLocalGroupMemberInfo(t, e);
                      n && n.updateRole(E.GRP_MBR_ROLE_MEMBER)
                  }))
              }
          }, {
              key: "_onGroupProfileModified",
              value: function(e) {
                  var t = this,
                      n = e.payload,
                      o = n.newGroupProfile,
                      a = n.groupProfile.groupID,
                      s = this._groupModule.getLocalGroupProfile(a);
                  Object.keys(o).forEach((function(e) {
                      switch (e) {
                          case "ownerID":
                              t._ownerChanged(s, o);
                              break;
                          default:
                              s[e] = o[e]
                      }
                  })), this._groupModule.emitGroupListUpdate(!0, !0)
              }
          }, {
              key: "_ownerChanged",
              value: function(e, t) {
                  var n = e.groupID,
                      o = this._groupModule.getLocalGroupProfile(n),
                      a = this.tim.context.identifier;
                  if (a === t.ownerID) {
                      o.updateGroup({
                          selfInfo: {
                              role: E.GRP_MBR_ROLE_OWNER
                          }
                      });
                      var s = this._groupModule.getModule(bt),
                          r = s.getLocalGroupMemberInfo(n, a),
                          i = this._groupModule.getLocalGroupProfile(n).ownerID,
                          u = s.getLocalGroupMemberInfo(n, i);
                      r && r.updateRole(E.GRP_MBR_ROLE_OWNER), u && u.updateRole(E.GRP_MBR_ROLE_MEMBER)
                  }
              }
          }, {
              key: "_onMemberInfoModified",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID,
                      n = this._groupModule.getModule(bt);
                  e.payload.memberList.forEach((function(e) {
                      var o = n.getLocalGroupMemberInfo(t, e.userID);
                      o && e.muteTime && o.updateMuteUntil(e.muteTime)
                  }))
              }
          }, {
              key: "_cacheGroupTips",
              value: function(e, t) {
                  this._cachedGroupTipsMap.has(e) || this._cachedGroupTipsMap.set(e, []), this._cachedGroupTipsMap.get(e).push(t)
              }
          }, {
              key: "_deleteCachedGroupTips",
              value: function(e) {
                  this._cachedGroupTipsMap.has(e) && this._cachedGroupTipsMap.delete(e)
              }
          }, {
              key: "_notifyCachedGroupTips",
              value: function(e) {
                  var t = this,
                      n = this._cachedGroupTipsMap.get(e) || [];
                  n.forEach((function(e) {
                      t.onNewGroupTips(e)
                  })), this._deleteCachedGroupTips(e), Se.log("".concat(this._className, "._notifyCachedGroupTips groupID:").concat(e, " count:").concat(n.length))
              }
          }, {
              key: "_cacheGroupTipsAndProbe",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.event,
                      a = e.item;
                  this._cacheGroupTips(n, {
                      event: o,
                      dataList: [a]
                  }), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
                      e.type === E.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupTips(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupTips(n))
                  })), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Se.log("".concat(this._className, "._cacheGroupTipsAndProbe groupID:").concat(n))
              }
          }, {
              key: "reset",
              value: function() {
                  this._cachedGroupTipsMap.clear(), this._checkCountMap.clear()
              }
          }]), e
      }(),
      ti = function() {
          function e(t) {
              o(this, e), this._groupModule = t, this._className = "CommonGroupHandler", this.tempConversationList = null, this._cachedGroupMessageMap = new Map, this._checkCountMap = new Map, this.MAX_CHECK_COUNT = 4, t.getInnerEmitterInstance().once(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
          }
          return s(e, [{
              key: "onCheckTimer",
              value: function(e) {
                  e % 1 == 0 && this._cachedGroupMessageMap.size > 0 && this._checkCachedGroupMessage()
              }
          }, {
              key: "_checkCachedGroupMessage",
              value: function() {
                  var e = this;
                  this._cachedGroupMessageMap.forEach((function(t, n) {
                      var o = e._checkCountMap.get(n),
                          a = e._groupModule.hasLocalGroup(n);
                      Se.log("".concat(e._className, "._checkCachedGroupMessage groupID:").concat(n, " hasLocalGroup:").concat(a, " checkCount:").concat(o)), a ? (e._notifyCachedGroupMessage(n), e._checkCountMap.delete(n), e._groupModule.deleteUnjoinedAVChatRoom(n)) : o >= e.MAX_CHECK_COUNT ? (e._deleteCachedGroupMessage(n), e._checkCountMap.delete(n)) : (o++, e._checkCountMap.set(n, o))
                  }))
              }
          }, {
              key: "_initGroupList",
              value: function() {
                  var e = this;
                  Se.log("".concat(this._className, "._initGroupList"));
                  var t = new Ga(Cs),
                      n = this._groupModule.getStorageGroupList();
                  if (Re(n) && n.length > 0) {
                      n.forEach((function(t) {
                          e._groupModule.initGroupMap(t)
                      })), this._groupModule.emitGroupListUpdate(!0, !1);
                      var o = this._groupModule.getLocalGroupList().length;
                      t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:".concat(o)).end()
                  } else t.setNetworkType(this._groupModule.getNetworkType()).setMessage("group count:0").end();
                  Se.log("".concat(this._className, "._initGroupList ok")), this.getGroupList()
              }
          }, {
              key: "handleUpdateGroupLastMessage",
              value: function(e) {
                  var t = "".concat(this._className, ".handleUpdateGroupLastMessage");
                  if (Se.debug("".concat(t, " conversation count:").concat(e.length, ", local group count:").concat(this._groupModule.getLocalGroupList().length)), 0 !== this._groupModule.getGroupMap().size) {
                      for (var n, o, a, s = !1, r = 0, i = e.length; r < i; r++)(n = e[r]).type === E.CONV_GROUP && (o = n.conversationID.split(/^GROUP/)[1], (a = this._groupModule.getLocalGroupProfile(o)) && (a.lastMessage = n.lastMessage, s = !0));
                      s && (this._groupModule.sortLocalGroupList(), this._groupModule.emitGroupListUpdate(!0, !1))
                  } else this.tempConversationList = e
              }
          }, {
              key: "onNewGroupMessage",
              value: function(e) {
                  Se.debug("".concat(this._className, ".onNewGroupMessage count:").concat(e.dataList.length));
                  var t = this._newGroupMessageStoredAndSummary(e),
                      n = t.conversationOptionsList,
                      o = t.messageList,
                      a = t.AVChatRoomMessageList;
                  (a.length > 0 && this._groupModule.onAVChatRoomMessage(a), this._groupModule.filterModifiedMessage(o), n.length > 0) && (this._groupModule.getModule(wt).onNewMessage({
                      conversationOptionsList: n,
                      isInstantMessage: !0
                  }), this._groupModule.updateNextMessageSeq(n));
                  var s = this._groupModule.filterUnmodifiedMessage(o);
                  s.length > 0 && this._groupModule.emitOuterEvent(S.MESSAGE_RECEIVED, s), o.length = 0
              }
          }, {
              key: "_newGroupMessageStoredAndSummary",
              value: function(e) {
                  var t = e.dataList,
                      n = e.event,
                      o = e.isInstantMessage,
                      a = null,
                      s = [],
                      r = [],
                      i = [],
                      u = {},
                      c = E.CONV_GROUP,
                      l = this._groupModule.getModule(Kt),
                      d = t.length;
                  d > 1 && t.sort((function(e, t) {
                      return e.sequence - t.sequence
                  }));
                  for (var p = 0; p < d; p++) {
                      var g = t[p],
                          h = g.groupProfile.groupID,
                          _ = this._groupModule.hasLocalGroup(h);
                      if (_ || !this._groupModule.isUnjoinedAVChatRoom(h))
                          if (_)
                              if (this._groupModule.isMessageFromAVChatroom(h)) {
                                  var f = Xe(g);
                                  f.event = n, i.push(f)
                              } else {
                                  g.currentUser = this._groupModule.getMyUserID(), g.conversationType = c, g.isSystemMessage = !!g.isSystemMessage, a = new Dr(g), g.elements = l.parseElements(g.elements, g.from), a.setElement(g.elements);
                                  var m = 1 === t[p].isModified,
                                      M = this._groupModule.getModule(wt);
                                  M.isMessageSentByCurrentInstance(a) ? a.isModified = m : m = !1;
                                  var v = this._groupModule.getModule(Jt);
                                  if (o && v.addMessageDelay({
                                          currentTime: Date.now(),
                                          time: a.time
                                      }), 1 === g.onlineOnlyFlag) a.setOnlineOnlyFlag(!0), r.push(a);
                                  else {
                                      if (!M.pushIntoMessageList(r, a, m)) continue;
                                      v.addMessageSequence({
                                          key: ka,
                                          message: a
                                      });
                                      var y = a.conversationID;
                                      if (Ge(u[y])) u[y] = s.push({
                                          conversationID: y,
                                          unreadCount: "out" === a.flow ? 0 : 1,
                                          type: a.conversationType,
                                          subType: a.conversationSubType,
                                          lastMessage: a
                                      }) - 1;
                                      else {
                                          var I = u[y];
                                          s[I].type = a.conversationType, s[I].subType = a.conversationSubType, s[I].lastMessage = a, "in" === a.flow && s[I].unreadCount++
                                      }
                                  }
                              }
                      else this._cacheGroupMessageAndProbe({
                          groupID: h,
                          event: n,
                          item: g
                      })
                  }
                  return {
                      conversationOptionsList: s,
                      messageList: r,
                      AVChatRoomMessageList: i
                  }
              }
          }, {
              key: "onGroupMessageRevoked",
              value: function(e) {
                  Se.debug("".concat(this._className, ".onGroupMessageRevoked nums:").concat(e.dataList.length));
                  var t = this._groupModule.getModule(wt),
                      n = [],
                      o = null;
                  e.dataList.forEach((function(e) {
                      var a = e.elements.revokedInfos;
                      Ge(a) || a.forEach((function(e) {
                          (o = t.revoke("GROUP".concat(e.groupID), e.sequence, e.random)) && n.push(o)
                      }))
                  })), 0 !== n.length && (t.onMessageRevoked(n), this._groupModule.emitOuterEvent(S.MESSAGE_REVOKED, n))
              }
          }, {
              key: "_groupListTreeShaking",
              value: function(e) {
                  for (var t = new Map(M(this._groupModule.getGroupMap())), n = 0, o = e.length; n < o; n++) t.delete(e[n].groupID);
                  this._groupModule.hasJoinedAVChatRoom() && this._groupModule.getJoinedAVChatRoom().forEach((function(e) {
                      t.delete(e)
                  }));
                  for (var a = M(t.keys()), s = 0, r = a.length; s < r; s++) this._groupModule.deleteGroup(a[s])
              }
          }, {
              key: "getGroupList",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".getGroupList"),
                      o = new Ga(Ts);
                  Se.log("".concat(n));
                  var a = {
                          introduction: "Introduction",
                          notification: "Notification",
                          createTime: "CreateTime",
                          ownerID: "Owner_Account",
                          lastInfoTime: "LastInfoTime",
                          memberNum: "MemberNum",
                          maxMemberNum: "MaxMemberNum",
                          joinOption: "ApplyJoinOption",
                          muteAllMembers: "ShutUpAllMember"
                      },
                      s = ["Type", "Name", "FaceUrl", "NextMsgSeq", "LastMsgTime"],
                      r = [];
                  return e && e.groupProfileFilter && e.groupProfileFilter.forEach((function(e) {
                      a[e] && s.push(a[e])
                  })), this._pagingGetGroupList({
                      limit: 50,
                      offset: 0,
                      groupBaseInfoFilter: s,
                      groupList: r
                  }).then((function() {
                      Se.log("".concat(n, " ok. count:").concat(r.length)), t._groupListTreeShaking(r), t._groupModule.updateGroupMap(r);
                      var e = t._groupModule.getLocalGroupList().length;
                      return o.setNetworkType(t._groupModule.getNetworkType()).setMessage("remote count:".concat(r.length, ", after tree shaking, local count:").concat(e)).end(), t.tempConversationList && (Se.log("".concat(n, " update last message with tempConversationList, count:").concat(t.tempConversationList.length)), t.handleUpdateGroupLastMessage({
                          data: t.tempConversationList
                      }), t.tempConversationList = null), t._groupModule.emitGroupListUpdate(), Cr({
                          groupList: t._groupModule.getLocalGroupList()
                      })
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "_pagingGetGroupList",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, "._pagingGetGroupList"),
                      o = e.limit,
                      a = e.offset,
                      s = e.groupBaseInfoFilter,
                      r = e.groupList,
                      i = new Ga(ks);
                  return this._groupModule.request({
                      protocolName: In,
                      requestData: {
                          memberAccount: this._groupModule.getMyUserID(),
                          limit: o,
                          offset: a,
                          responseFilter: {
                              groupBaseInfoFilter: s,
                              selfInfoFilter: ["Role", "JoinTime", "MsgFlag"]
                          }
                      }
                  }).then((function(e) {
                      var u = e.data,
                          c = u.groups,
                          l = u.totalCount;
                      r.push.apply(r, M(c));
                      var d = a + o,
                          p = !(l > d);
                      return i.setNetworkType(t._groupModule.getNetworkType()).setMessage("offset:".concat(a, " totalCount:").concat(l, " isCompleted:").concat(p, " currentCount:").concat(r.length)).end(), p ? (Se.log("".concat(n, " ok. totalCount:").concat(l)), Cr({
                          groupList: r
                      })) : (a = d, t._pagingGetGroupList({
                          limit: o,
                          offset: a,
                          groupBaseInfoFilter: s,
                          groupList: r
                      }))
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          i.setError(e, o, a).end()
                      })), Pr(e)
                  }))
              }
          }, {
              key: "_cacheGroupMessage",
              value: function(e, t) {
                  this._cachedGroupMessageMap.has(e) || this._cachedGroupMessageMap.set(e, []), this._cachedGroupMessageMap.get(e).push(t)
              }
          }, {
              key: "_deleteCachedGroupMessage",
              value: function(e) {
                  this._cachedGroupMessageMap.has(e) && this._cachedGroupMessageMap.delete(e)
              }
          }, {
              key: "_notifyCachedGroupMessage",
              value: function(e) {
                  var t = this,
                      n = this._cachedGroupMessageMap.get(e) || [];
                  n.forEach((function(e) {
                      t.onNewGroupMessage(e)
                  })), this._deleteCachedGroupMessage(e), Se.log("".concat(this._className, "._notifyCachedGroupMessage groupID:").concat(e, " count:").concat(n.length))
              }
          }, {
              key: "_cacheGroupMessageAndProbe",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.event,
                      a = e.item;
                  this._cacheGroupMessage(n, {
                      event: o,
                      dataList: [a]
                  }), this._groupModule.getGroupSimplifiedInfo(n).then((function(e) {
                      e.type === E.GRP_AVCHATROOM ? t._groupModule.hasLocalGroup(n) ? t._notifyCachedGroupMessage(n) : t._groupModule.setUnjoinedAVChatRoom(n) : (t._groupModule.updateGroupMap([e]), t._notifyCachedGroupMessage(n))
                  })), this._checkCountMap.has(n) || this._checkCountMap.set(n, 0), Se.log("".concat(this._className, "._cacheGroupMessageAndProbe groupID:").concat(n))
              }
          }, {
              key: "reset",
              value: function() {
                  this._cachedGroupMessageMap.clear(), this._checkCountMap.clear(), this._groupModule.getInnerEmitterInstance().once(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, this._initGroupList, this)
              }
          }]), e
      }(),
      ni = {
          1: "init",
          2: "modify",
          3: "clear",
          4: "delete"
      },
      oi = function() {
          function e(t) {
              o(this, e), this._groupModule = t, this._className = "GroupAttributesHandler", this._groupAttributesMap = new Map, this.CACHE_EXPIRE_TIME = 3e4, this._groupModule.getInnerEmitterInstance().on(Ur.CLOUD_CONFIG_UPDATED, this._onCloudConfigUpdated, this)
          }
          return s(e, [{
              key: "_onCloudConfigUpdated",
              value: function() {
                  var e = this._groupModule.getCloudConfig("grp_attr_cache_time");
                  Ge(e) || (this.CACHE_EXPIRE_TIME = Number(e))
              }
          }, {
              key: "updateLocalMainSequenceOnReconnected",
              value: function() {
                  this._groupAttributesMap.forEach((function(e) {
                      e.localMainSequence = 0
                  }))
              }
          }, {
              key: "onGroupAttributesUpdated",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.groupAttributeOption,
                      a = o.mainSequence,
                      s = o.hasChangedAttributeInfo,
                      r = o.groupAttributeList,
                      i = void 0 === r ? [] : r,
                      u = o.operationType;
                  if (Se.log("".concat(this._className, ".onGroupAttributesUpdated. hasChangedAttributeInfo:").concat(s, " operationType:").concat(u)), 1 === s) {
                      if (4 === u) {
                          var c = [];
                          i.forEach((function(e) {
                              c.push(e.key)
                          })), i = M(c), c = null
                      }
                      return this._refreshCachedGroupAttributes({
                          groupID: n,
                          remoteMainSequence: a,
                          groupAttributeList: i,
                          operationType: ni[u]
                      }), void this._emitGroupAttributesUpdated(n)
                  }
                  if (this._groupAttributesMap.has(n)) {
                      var l = this._groupAttributesMap.get(n).avChatRoomKey;
                      this._getGroupAttributes({
                          groupID: n,
                          avChatRoomKey: l
                      }).then((function() {
                          t._emitGroupAttributesUpdated(n)
                      }))
                  }
              }
          }, {
              key: "initGroupAttributesCache",
              value: function(e) {
                  var t = e.groupID,
                      n = e.avChatRoomKey;
                  this._groupAttributesMap.set(t, {
                      lastUpdateTime: 0,
                      localMainSequence: 0,
                      remoteMainSequence: 0,
                      attributes: new Map,
                      avChatRoomKey: n
                  }), Se.log("".concat(this._className, ".initGroupAttributesCache groupID:").concat(t, " avChatRoomKey:").concat(n))
              }
          }, {
              key: "initGroupAttributes",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.groupAttributes,
                      a = this._checkCachedGroupAttributes({
                          groupID: n,
                          funcName: "initGroupAttributes"
                      });
                  if (!0 !== a) return Pr(a);
                  var s = this._groupAttributesMap.get(n),
                      r = s.remoteMainSequence,
                      i = s.avChatRoomKey,
                      u = new Ga(Os);
                  return u.setMessage("groupID:".concat(n, " mainSequence:").concat(r, " groupAttributes:").concat(JSON.stringify(o))), this._groupModule.request({
                      protocolName: xn,
                      requestData: {
                          groupID: n,
                          avChatRoomKey: i,
                          mainSequence: r,
                          groupAttributeList: this._transformGroupAttributes(o)
                      }
                  }).then((function(e) {
                      var a = e.data,
                          s = a.mainSequence,
                          r = M(a.groupAttributeList);
                      return r.forEach((function(e) {
                          e.value = o[e.key]
                      })), t._refreshCachedGroupAttributes({
                          groupID: n,
                          remoteMainSequence: s,
                          groupAttributeList: r,
                          operationType: "init"
                      }), u.setNetworkType(t._groupModule.getNetworkType()).end(), Se.log("".concat(t._className, ".initGroupAttributes ok. groupID:").concat(n)), Cr({
                          groupAttributes: o
                      })
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          u.setError(e, o, a).end()
                      })), Pr(e)
                  }))
              }
          }, {
              key: "setGroupAttributes",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.groupAttributes,
                      a = this._checkCachedGroupAttributes({
                          groupID: n,
                          funcName: "setGroupAttributes"
                      });
                  if (!0 !== a) return Pr(a);
                  var s = this._groupAttributesMap.get(n),
                      r = s.remoteMainSequence,
                      i = s.avChatRoomKey,
                      u = s.attributes,
                      c = this._transformGroupAttributes(o);
                  c.forEach((function(e) {
                      var t = e.key;
                      e.sequence = 0, u.has(t) && (e.sequence = u.get(t).sequence)
                  }));
                  var l = new Ga(Ls);
                  return l.setMessage("groupID:".concat(n, " mainSequence:").concat(r, " groupAttributes:").concat(JSON.stringify(o))), this._groupModule.request({
                      protocolName: Bn,
                      requestData: {
                          groupID: n,
                          avChatRoomKey: i,
                          mainSequence: r,
                          groupAttributeList: c
                      }
                  }).then((function(e) {
                      var a = e.data,
                          s = a.mainSequence,
                          r = M(a.groupAttributeList);
                      return r.forEach((function(e) {
                          e.value = o[e.key]
                      })), t._refreshCachedGroupAttributes({
                          groupID: n,
                          remoteMainSequence: s,
                          groupAttributeList: r,
                          operationType: "modify"
                      }), l.setNetworkType(t._groupModule.getNetworkType()).end(), Se.log("".concat(t._className, ".setGroupAttributes ok. groupID:").concat(n)), Cr({
                          groupAttributes: o
                      })
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          l.setError(e, o, a).end()
                      })), Pr(e)
                  }))
              }
          }, {
              key: "deleteGroupAttributes",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.keyList,
                      a = void 0 === o ? [] : o,
                      s = this._checkCachedGroupAttributes({
                          groupID: n,
                          funcName: "deleteGroupAttributes"
                      });
                  if (!0 !== s) return Pr(s);
                  var r = this._groupAttributesMap.get(n),
                      i = r.remoteMainSequence,
                      u = r.avChatRoomKey,
                      c = r.attributes,
                      l = M(c.keys()),
                      d = jn,
                      p = "clear",
                      g = {
                          groupID: n,
                          avChatRoomKey: u,
                          mainSequence: i
                      };
                  if (a.length > 0) {
                      var h = [];
                      l = [], d = Hn, p = "delete", a.forEach((function(e) {
                          var t = 0;
                          c.has(e) && (t = c.get(e).sequence, l.push(e)), h.push({
                              key: e,
                              sequence: t
                          })
                      })), g.groupAttributeList = h
                  }
                  var _ = new Ga(Rs);
                  return _.setMessage("groupID:".concat(n, " mainSequence:").concat(i, " keyList:").concat(a, " protocolName:").concat(d)), this._groupModule.request({
                      protocolName: d,
                      requestData: g
                  }).then((function(e) {
                      var o = e.data.mainSequence;
                      return t._refreshCachedGroupAttributes({
                          groupID: n,
                          remoteMainSequence: o,
                          groupAttributeList: a,
                          operationType: p
                      }), _.setNetworkType(t._groupModule.getNetworkType()).end(), Se.log("".concat(t._className, ".deleteGroupAttributes ok. groupID:").concat(n)), Cr({
                          keyList: l
                      })
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          _.setError(e, o, a).end()
                      })), Pr(e)
                  }))
              }
          }, {
              key: "getGroupAttributes",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = this._checkCachedGroupAttributes({
                          groupID: n,
                          funcName: "getGroupAttributes"
                      });
                  if (!0 !== o) return Pr(o);
                  var a = this._groupAttributesMap.get(n),
                      s = a.avChatRoomKey,
                      r = a.lastUpdateTime,
                      i = a.localMainSequence,
                      u = a.remoteMainSequence,
                      c = new Ga(Gs);
                  if (c.setMessage("groupID:".concat(n, " localMainSequence:").concat(i, " remoteMainSequence:").concat(u, " keyList:").concat(e.keyList)), Date.now() - r >= this.CACHE_EXPIRE_TIME || i < u) return this._getGroupAttributes({
                      groupID: n,
                      avChatRoomKey: s
                  }).then((function(o) {
                      c.setMoreMessage("get attributes from remote. count:".concat(o.length)).setNetworkType(t._groupModule.getNetworkType()).end(), Se.log("".concat(t._className, ".getGroupAttributes from remote. groupID:").concat(n));
                      var a = t._getLocalGroupAttributes(e);
                      return Cr({
                          groupAttributes: a
                      })
                  })).catch((function(e) {
                      return t._groupModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          c.setError(e, o, a).end()
                      })), Pr(e)
                  }));
                  c.setMoreMessage("get attributes from cache").setNetworkType(this._groupModule.getNetworkType()).end(), Se.log("".concat(this._className, ".getGroupAttributes from cache. groupID:").concat(n));
                  var l = this._getLocalGroupAttributes(e);
                  return Gr({
                      groupAttributes: l
                  })
              }
          }, {
              key: "_getGroupAttributes",
              value: function(e) {
                  var n = this;
                  return this._groupModule.request({
                      protocolName: Yn,
                      requestData: t({}, e)
                  }).then((function(t) {
                      var o = t.data,
                          a = o.mainSequence,
                          s = o.groupAttributeList,
                          r = M(s);
                      return Se.log("".concat(n._className, "._getGroupAttributes ok. groupID:").concat(e.groupID)), n._refreshCachedGroupAttributes({
                          groupID: e.groupID,
                          remoteMainSequence: a,
                          groupAttributeList: r,
                          operationType: "get"
                      }), s
                  })).catch((function(e) {
                      return Pr(e)
                  }))
              }
          }, {
              key: "_getLocalGroupAttributes",
              value: function(e) {
                  var t = e.groupID,
                      n = e.keyList,
                      o = void 0 === n ? [] : n,
                      a = {};
                  if (!this._groupAttributesMap.has(t)) return a;
                  var s = this._groupAttributesMap.get(t).attributes;
                  if (o.length > 0) o.forEach((function(e) {
                      s.has(e) && (a[e] = s.get(e).value)
                  }));
                  else {
                      var r, i = C(s.keys());
                      try {
                          for (i.s(); !(r = i.n()).done;) {
                              var u = r.value;
                              a[u] = s.get(u).value
                          }
                      } catch (c) {
                          i.e(c)
                      } finally {
                          i.f()
                      }
                  }
                  return a
              }
          }, {
              key: "_refreshCachedGroupAttributes",
              value: function(e) {
                  var t = e.groupID,
                      n = e.remoteMainSequence,
                      o = e.groupAttributeList,
                      a = e.operationType;
                  if (this._groupAttributesMap.has(t)) {
                      var s = this._groupAttributesMap.get(t),
                          r = s.localMainSequence;
                      if ("get" === a || n - r == 1) s.remoteMainSequence = n, s.localMainSequence = n, s.lastUpdateTime = Date.now(), this._updateCachedAttributes({
                          groupAttributes: s,
                          groupAttributeList: o,
                          operationType: a
                      });
                      else {
                          if (r === n) return;
                          s.remoteMainSequence = n
                      }
                      this._groupAttributesMap.set(t, s);
                      var i = "operationType:".concat(a, " localMainSequence:").concat(r, " remoteMainSequence:").concat(n);
                      Se.log("".concat(this._className, "._refreshCachedGroupAttributes. ").concat(i))
                  }
              }
          }, {
              key: "_updateCachedAttributes",
              value: function(e) {
                  var t = e.groupAttributes,
                      n = e.groupAttributeList,
                      o = e.operationType;
                  "clear" !== o ? "delete" !== o ? ("init" === o && t.attributes.clear(), n.forEach((function(e) {
                      var n = e.key,
                          o = e.value,
                          a = e.sequence;
                      t.attributes.set(n, {
                          value: o,
                          sequence: a
                      })
                  }))) : n.forEach((function(e) {
                      t.attributes.delete(e)
                  })) : t.attributes.clear()
              }
          }, {
              key: "_checkCachedGroupAttributes",
              value: function(e) {
                  var t = e.groupID,
                      n = e.funcName;
                  if (this._groupModule.hasLocalGroup(t) && this._groupModule.getLocalGroupProfile(t).type !== E.GRP_AVCHATROOM) {
                      return Se.warn("".concat(this._className, "._checkCachedGroupAttributes. ").concat("非直播群不能使用群属性 API")), new Or({
                          code: co.CANNOT_USE_GRP_ATTR_NOT_AVCHATROOM,
                          message: "非直播群不能使用群属性 API"
                      })
                  }
                  var o = this._groupAttributesMap.get(t);
                  if (Ge(o)) {
                      var a = "如果 groupID:".concat(t, " 是直播群，使用 ").concat(n, " 前先使用 joinGroup 接口申请加入群组，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup");
                      return Se.warn("".concat(this._className, "._checkCachedGroupAttributes. ").concat(a)), new Or({
                          code: co.CANNOT_USE_GRP_ATTR_AVCHATROOM_UNJOIN,
                          message: a
                      })
                  }
                  return !0
              }
          }, {
              key: "_transformGroupAttributes",
              value: function(e) {
                  var t = [];
                  return Object.keys(e).forEach((function(n) {
                      t.push({
                          key: n,
                          value: e[n]
                      })
                  })), t
              }
          }, {
              key: "_emitGroupAttributesUpdated",
              value: function(e) {
                  var t = this._getLocalGroupAttributes({
                      groupID: e
                  });
                  this._groupModule.emitOuterEvent(S.GROUP_ATTRIBUTES_UPDATED, {
                      groupID: e,
                      groupAttributes: t
                  })
              }
          }, {
              key: "reset",
              value: function() {
                  this._groupAttributesMap.clear(), this.CACHE_EXPIRE_TIME = 3e4
              }
          }]), e
      }(),
      ai = function() {
          function e(t) {
              o(this, e);
              var n = t.groupModule,
                  a = t.groupID,
                  s = t.onInit,
                  r = t.onSuccess,
                  i = t.onFail;
              this._groupModule = n, this._className = "Polling", this._onInit = s, this._onSuccess = r, this._onFail = i, this._groupID = a, this._timeoutID = -1, this._isRunning = !1, this._pollingInterval = 0, this.MAX_POLLING_INTERVAL = 2e3
          }
          return s(e, [{
              key: "start",
              value: function() {
                  Se.log("".concat(this._className, ".start")), this._isRunning = !0, this._request()
              }
          }, {
              key: "isRunning",
              value: function() {
                  return this._isRunning
              }
          }, {
              key: "_request",
              value: function() {
                  var e = this,
                      t = this._onInit(this._groupID),
                      n = Fn;
                  this._groupModule.isLoggedIn() || (n = qn), this._groupModule.request({
                      protocolName: n,
                      requestData: t
                  }).then((function(t) {
                      e._onSuccess(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), 0))
                  })).catch((function(t) {
                      e._onFail(e._groupID, t), e.isRunning() && (clearTimeout(e._timeoutID), e._timeoutID = setTimeout(e._request.bind(e), e.MAX_POLLING_INTERVAL))
                  }))
              }
          }, {
              key: "stop",
              value: function() {
                  Se.log("".concat(this._className, ".stop")), this._timeoutID > 0 && (clearTimeout(this._timeoutID), this._timeoutID = -1, this._pollingInterval = 0), this._isRunning = !1
              }
          }]), e
      }(),
      si = {
          3: !0,
          4: !0,
          5: !0,
          6: !0
      },
      ri = function() {
          function e(t) {
              o(this, e), this._groupModule = t, this._className = "AVChatRoomHandler", this._joinedGroupMap = new Map, this._pollingRequestInfoMap = new Map, this._pollingInstanceMap = new Map, this.sequencesLinkedList = new $r(100), this.messageIDLinkedList = new $r(100), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0, this._onlineMemberCountMap = new Map, this.DEFAULT_EXPIRE_TIME = 60
          }
          return s(e, [{
              key: "hasJoinedAVChatRoom",
              value: function() {
                  return this._joinedGroupMap.size > 0
              }
          }, {
              key: "checkJoinedAVChatRoomByID",
              value: function(e) {
                  return this._joinedGroupMap.has(e)
              }
          }, {
              key: "getJoinedAVChatRoom",
              value: function() {
                  return this._joinedGroupMap.size > 0 ? M(this._joinedGroupMap.keys()) : null
              }
          }, {
              key: "_updateRequestData",
              value: function(e) {
                  return t({}, this._pollingRequestInfoMap.get(e))
              }
          }, {
              key: "_handleSuccess",
              value: function(e, t) {
                  var n = t.data,
                      o = n.key,
                      a = n.nextSeq,
                      s = n.rspMsgList;
                  if (0 !== n.errorCode) {
                      var r = this._pollingRequestInfoMap.get(e),
                          i = new Ga(Bs),
                          u = r ? "".concat(r.key, "-").concat(r.startSeq) : "requestInfo is undefined";
                      i.setMessage("".concat(e, "-").concat(u, "-").concat(t.errorInfo)).setCode(t.errorCode).setNetworkType(this._groupModule.getNetworkType()).end(!0)
                  } else {
                      if (!this.checkJoinedAVChatRoomByID(e)) return;
                      Ne(o) && Ae(a) && this._pollingRequestInfoMap.set(e, {
                          key: o,
                          startSeq: a
                      }), Re(s) && s.length > 0 && (s.forEach((function(e) {
                          e.to = e.groupID
                      })), this.onMessage(s))
                  }
              }
          }, {
              key: "_handleFailure",
              value: function(e, t) {}
          }, {
              key: "onMessage",
              value: function(e) {
                  if (Re(e) && 0 !== e.length) {
                      var t = null,
                          n = [],
                          o = this._getModule(wt),
                          a = e.length;
                      a > 1 && e.sort((function(e, t) {
                          return e.sequence - t.sequence
                      }));
                      for (var s = this._getModule(Ut), r = 0; r < a; r++)
                          if (si[e[r].event]) {
                              this.receivedMessageCount += 1, t = this.packMessage(e[r], e[r].event);
                              var i = 1 === e[r].isModified;
                              if ((s.isUnlimitedAVChatRoom() || !this.sequencesLinkedList.has(t.sequence)) && !this.messageIDLinkedList.has(t.ID)) {
                                  var u = t.conversationID;
                                  if (this.receivedMessageCount % 40 == 0 && this._getModule($t).detectMessageLoss(u, this.sequencesLinkedList.data()), null !== this.sequencesLinkedList.tail()) {
                                      var c = this.sequencesLinkedList.tail().value,
                                          l = t.sequence - c;
                                      l > 1 && l <= 20 ? this._getModule($t).onMessageMaybeLost(u, c + 1, l - 1) : l < -1 && l >= -20 && this._getModule($t).onMessageMaybeLost(u, t.sequence + 1, Math.abs(l) - 1)
                                  }
                                  this.sequencesLinkedList.set(t.sequence), this.messageIDLinkedList.set(t.ID);
                                  var d = !1;
                                  if (this._isMessageSentByCurrentInstance(t) ? i && (d = !0, t.isModified = i, o.updateMessageIsModifiedProperty(t)) : d = !0, d) {
                                      if (t.conversationType, E.CONV_SYSTEM, t.conversationType !== E.CONV_SYSTEM) {
                                          var p = this._getModule(Jt),
                                              g = t.conversationID.replace(E.CONV_GROUP, "");
                                          this._pollingInstanceMap.has(g) ? p.addMessageSequence({
                                              key: Na,
                                              message: t
                                          }) : (t.type !== E.MSG_GRP_TIP && p.addMessageDelay({
                                              currentTime: Date.now(),
                                              time: t.time
                                          }), p.addMessageSequence({
                                              key: Aa,
                                              message: t
                                          }))
                                      }
                                      n.push(t)
                                  }
                              }
                          } else Se.warn("".concat(this._className, ".onMessage 未处理的 event 类型: ").concat(e[r].event));
                      if (0 !== n.length) {
                          this._groupModule.filterModifiedMessage(n);
                          var h = this.packConversationOption(n);
                          if (h.length > 0) this._getModule(wt).onNewMessage({
                              conversationOptionsList: h,
                              isInstantMessage: !0
                          });
                          Se.debug("".concat(this._className, ".onMessage count:").concat(n.length)), this._checkMessageStacked(n);
                          var _ = this._groupModule.filterUnmodifiedMessage(n);
                          _.length > 0 && this._groupModule.emitOuterEvent(S.MESSAGE_RECEIVED, _), n.length = 0
                      }
                  }
              }
          }, {
              key: "_checkMessageStacked",
              value: function(e) {
                  var t = e.length;
                  t >= 100 && (Se.warn("".concat(this._className, "._checkMessageStacked 直播群消息堆积数:").concat(e.length, '！可能会导致微信小程序渲染时遇到 "Dom limit exceeded" 的错误，建议接入侧此时只渲染最近的10条消息')), this._reportMessageStackedCount < 5 && (new Ga(js).setNetworkType(this._groupModule.getNetworkType()).setMessage("count:".concat(t, " groupID:").concat(M(this._joinedGroupMap.keys()))).setLevel("warning").end(), this._reportMessageStackedCount += 1))
              }
          }, {
              key: "_isMessageSentByCurrentInstance",
              value: function(e) {
                  return !!this._getModule(wt).isMessageSentByCurrentInstance(e)
              }
          }, {
              key: "packMessage",
              value: function(e, t) {
                  e.currentUser = this._groupModule.getMyUserID(), e.conversationType = 5 === t ? E.CONV_SYSTEM : E.CONV_GROUP, e.isSystemMessage = !!e.isSystemMessage;
                  var n = new Dr(e),
                      o = this.packElements(e, t);
                  return n.setElement(o), n
              }
          }, {
              key: "packElements",
              value: function(e, n) {
                  return 4 === n || 6 === n ? (this._updateMemberCountByGroupTips(e), this._onGroupAttributesUpdated(e), {
                      type: E.MSG_GRP_TIP,
                      content: t(t({}, e.elements), {}, {
                          groupProfile: e.groupProfile
                      })
                  }) : 5 === n ? {
                      type: E.MSG_GRP_SYS_NOTICE,
                      content: t(t({}, e.elements), {}, {
                          groupProfile: e.groupProfile
                      })
                  } : this._getModule(Kt).parseElements(e.elements, e.from)
              }
          }, {
              key: "packConversationOption",
              value: function(e) {
                  for (var t = new Map, n = 0; n < e.length; n++) {
                      var o = e[n],
                          a = o.conversationID;
                      if (t.has(a)) {
                          var s = t.get(a);
                          s.lastMessage = o, "in" === o.flow && s.unreadCount++
                      } else t.set(a, {
                          conversationID: o.conversationID,
                          unreadCount: "out" === o.flow ? 0 : 1,
                          type: o.conversationType,
                          subType: o.conversationSubType,
                          lastMessage: o
                      })
                  }
                  return M(t.values())
              }
          }, {
              key: "_updateMemberCountByGroupTips",
              value: function(e) {
                  var t = e.groupProfile.groupID,
                      n = e.elements.onlineMemberInfo,
                      o = void 0 === n ? void 0 : n;
                  if (!_t(o)) {
                      var a = o.onlineMemberNum,
                          s = void 0 === a ? 0 : a,
                          r = o.expireTime,
                          i = void 0 === r ? this.DEFAULT_EXPIRE_TIME : r,
                          u = this._onlineMemberCountMap.get(t) || {},
                          c = Date.now();
                      _t(u) ? Object.assign(u, {
                          lastReqTime: 0,
                          lastSyncTime: 0,
                          latestUpdateTime: c,
                          memberCount: s,
                          expireTime: i
                      }) : (u.latestUpdateTime = c, u.memberCount = s), Se.debug("".concat(this._className, "._updateMemberCountByGroupTips info:"), u), this._onlineMemberCountMap.set(t, u)
                  }
              }
          }, {
              key: "start",
              value: function(e) {
                  if (this._pollingInstanceMap.has(e)) {
                      var t = this._pollingInstanceMap.get(e);
                      t.isRunning() || t.start()
                  } else {
                      var n = new ai({
                          groupModule: this._groupModule,
                          groupID: e,
                          onInit: this._updateRequestData.bind(this),
                          onSuccess: this._handleSuccess.bind(this),
                          onFail: this._handleFailure.bind(this)
                      });
                      n.start(), this._pollingInstanceMap.set(e, n), Se.log("".concat(this._className, ".start groupID:").concat(e))
                  }
              }
          }, {
              key: "handleJoinResult",
              value: function(e) {
                  var t = this;
                  return this._preCheck().then((function() {
                      var n = e.longPollingKey,
                          o = e.group,
                          a = o.groupID;
                      return t._joinedGroupMap.set(a, o), t._groupModule.updateGroupMap([o]), t._groupModule.deleteUnjoinedAVChatRoom(a), t._groupModule.emitGroupListUpdate(!0, !1), Ge(n) ? Gr({
                          status: ir,
                          group: o
                      }) : Promise.resolve()
                  }))
              }
          }, {
              key: "startRunLoop",
              value: function(e) {
                  var t = this;
                  return this.handleJoinResult(e).then((function() {
                      var n = e.longPollingKey,
                          o = e.group,
                          a = o.groupID;
                      return t._pollingRequestInfoMap.set(a, {
                          key: n,
                          startSeq: 0
                      }), t.start(a), t._groupModule.isLoggedIn() ? Gr({
                          status: ir,
                          group: o
                      }) : Gr({
                          status: ir
                      })
                  }))
              }
          }, {
              key: "_preCheck",
              value: function() {
                  if (this._getModule(Ut).isUnlimitedAVChatRoom()) return Promise.resolve();
                  if (!this.hasJoinedAVChatRoom()) return Promise.resolve();
                  var e = m(this._joinedGroupMap.entries().next().value, 2),
                      t = e[0],
                      n = e[1];
                  if (this._groupModule.isLoggedIn()) {
                      if (!(n.selfInfo.role === E.GRP_MBR_ROLE_OWNER || n.ownerID === this._groupModule.getMyUserID())) return this._groupModule.quitGroup(t);
                      this._groupModule.deleteLocalGroupAndConversation(t)
                  } else this._groupModule.deleteLocalGroupAndConversation(t);
                  return this.reset(t), Promise.resolve()
              }
          }, {
              key: "joinWithoutAuth",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = "".concat(this._className, ".joinWithoutAuth"),
                      a = new Ga(Ns);
                  return this._groupModule.request({
                      protocolName: kn,
                      requestData: e
                  }).then((function(e) {
                      var s = e.data.longPollingKey;
                      if (a.setNetworkType(t._groupModule.getNetworkType()).setMessage("groupID:".concat(n, " longPollingKey:").concat(s)).end(!0), Ge(s)) return Pr(new Or({
                          code: co.CANNOT_JOIN_NON_AVCHATROOM_WITHOUT_LOGIN,
                          message: ea
                      }));
                      Se.log("".concat(o, " ok. groupID:").concat(n)), t._getModule(wt).setCompleted("".concat(E.CONV_GROUP).concat(n));
                      var r = new Wr({
                          groupID: n
                      });
                      return t.startRunLoop({
                          group: r,
                          longPollingKey: s
                      }), Cr({
                          status: ir
                      })
                  })).catch((function(e) {
                      return Se.error("".concat(o, " failed. groupID:").concat(n, " error:"), e), t._groupModule.probeNetwork().then((function(t) {
                          var o = m(t, 2),
                              s = o[0],
                              r = o[1];
                          a.setError(e, s, r).setMessage("groupID:".concat(n)).end(!0)
                      })), Pr(e)
                  })).finally((function() {
                      t._groupModule.getModule(qt).reportAtOnce()
                  }))
              }
          }, {
              key: "getGroupOnlineMemberCount",
              value: function(e) {
                  var t = this._onlineMemberCountMap.get(e) || {},
                      n = Date.now();
                  return _t(t) || n - t.lastSyncTime > 1e3 * t.expireTime && n - t.latestUpdateTime > 1e4 && n - t.lastReqTime > 3e3 ? (t.lastReqTime = n, this._onlineMemberCountMap.set(e, t), this._getGroupOnlineMemberCount(e).then((function(e) {
                      return Cr({
                          memberCount: e.memberCount
                      })
                  })).catch((function(e) {
                      return Pr(e)
                  }))) : Gr({
                      memberCount: t.memberCount
                  })
              }
          }, {
              key: "_getGroupOnlineMemberCount",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, "._getGroupOnlineMemberCount");
                  return this._groupModule.request({
                      protocolName: Vn,
                      requestData: {
                          groupID: e
                      }
                  }).then((function(o) {
                      var a = t._onlineMemberCountMap.get(e) || {},
                          s = o.data,
                          r = s.onlineMemberNum,
                          i = void 0 === r ? 0 : r,
                          u = s.expireTime,
                          c = void 0 === u ? t.DEFAULT_EXPIRE_TIME : u;
                      Se.log("".concat(n, " ok. groupID:").concat(e, " memberCount:").concat(i, " expireTime:").concat(c));
                      var l = Date.now();
                      return _t(a) && (a.lastReqTime = l), t._onlineMemberCountMap.set(e, Object.assign(a, {
                          lastSyncTime: l,
                          latestUpdateTime: l,
                          memberCount: i,
                          expireTime: c
                      })), {
                          memberCount: i
                      }
                  })).catch((function(o) {
                      return Se.warn("".concat(n, " failed. error:"), o), new Ga(xs).setCode(o.code).setMessage("groupID:".concat(e, " error:").concat(JSON.stringify(o))).setNetworkType(t._groupModule.getNetworkType()).end(), Promise.reject(o)
                  }))
              }
          }, {
              key: "_onGroupAttributesUpdated",
              value: function(e) {
                  var t = e.groupProfile.groupID,
                      n = e.elements,
                      o = n.operationType,
                      a = n.newGroupProfile;
                  if (6 === o) {
                      var s = (void 0 === a ? void 0 : a).groupAttributeOption;
                      Ge(s) || this._groupModule.onGroupAttributesUpdated({
                          groupID: t,
                          groupAttributeOption: s
                      })
                  }
              }
          }, {
              key: "_getModule",
              value: function(e) {
                  return this._groupModule.getModule(e)
              }
          }, {
              key: "reset",
              value: function(e) {
                  if (e) {
                      Se.log("".concat(this._className, ".reset groupID:").concat(e));
                      var t = this._pollingInstanceMap.get(e);
                      t && t.stop(), this._pollingInstanceMap.delete(e), this._joinedGroupMap.delete(e), this._pollingRequestInfoMap.delete(e), this._onlineMemberCountMap.delete(e)
                  } else {
                      Se.log("".concat(this._className, ".reset all"));
                      var n, o = C(this._pollingInstanceMap.values());
                      try {
                          for (o.s(); !(n = o.n()).done;) {
                              n.value.stop()
                          }
                      } catch (a) {
                          o.e(a)
                      } finally {
                          o.f()
                      }
                      this._pollingInstanceMap.clear(), this._joinedGroupMap.clear(), this._pollingRequestInfoMap.clear(), this._onlineMemberCountMap.clear()
                  }
                  this.sequencesLinkedList.reset(), this.messageIDLinkedList.reset(), this.receivedMessageCount = 0, this._reportMessageStackedCount = 0
              }
          }]), e
      }(),
      ii = 1,
      ui = 15,
      ci = function() {
          function e(t) {
              o(this, e), this._groupModule = t, this._className = "GroupSystemNoticeHandler", this.pendencyMap = new Map
          }
          return s(e, [{
              key: "onNewGroupSystemNotice",
              value: function(e) {
                  var t = e.dataList,
                      n = e.isSyncingEnded,
                      o = e.isInstantMessage;
                  Se.debug("".concat(this._className, ".onReceiveSystemNotice count:").concat(t.length));
                  var a = this.newSystemNoticeStoredAndSummary({
                          notifiesList: t,
                          isInstantMessage: o
                      }),
                      s = a.eventDataList,
                      r = a.result;
                  s.length > 0 && (this._groupModule.getModule(wt).onNewMessage({
                      conversationOptionsList: s,
                      isInstantMessage: o
                  }), this._onReceivedGroupSystemNotice({
                      result: r,
                      isInstantMessage: o
                  }));
                  o ? r.length > 0 && this._groupModule.emitOuterEvent(S.MESSAGE_RECEIVED, r) : !0 === n && this._clearGroupSystemNotice()
              }
          }, {
              key: "newSystemNoticeStoredAndSummary",
              value: function(e) {
                  var n = e.notifiesList,
                      o = e.isInstantMessage,
                      a = null,
                      s = n.length,
                      r = 0,
                      i = [],
                      u = {
                          conversationID: E.CONV_SYSTEM,
                          unreadCount: 0,
                          type: E.CONV_SYSTEM,
                          subType: null,
                          lastMessage: null
                      };
                  for (r = 0; r < s; r++) {
                      var c = n[r];
                      if (c.elements.operationType !== ui) c.currentUser = this._groupModule.getMyUserID(), c.conversationType = E.CONV_SYSTEM, c.conversationID = E.CONV_SYSTEM, (a = new Dr(c)).setElement({
                          type: E.MSG_GRP_SYS_NOTICE,
                          content: t(t({}, c.elements), {}, {
                              groupProfile: c.groupProfile
                          })
                      }), a.isSystemMessage = !0, (1 === a.sequence && 1 === a.random || 2 === a.sequence && 2 === a.random) && (a.sequence = He(), a.random = He(), a.generateMessageID(c.currentUser), Se.log("".concat(this._className, ".newSystemNoticeStoredAndSummary sequence and random maybe duplicated, regenerate. ID:").concat(a.ID))), this._groupModule.getModule(wt).pushIntoNoticeResult(i, a) && (o ? u.unreadCount++ : a.setIsRead(!0), u.subType = a.conversationSubType)
                  }
                  return u.lastMessage = i[i.length - 1], {
                      eventDataList: i.length > 0 ? [u] : [],
                      result: i
                  }
              }
          }, {
              key: "_clearGroupSystemNotice",
              value: function() {
                  var e = this;
                  this.getPendencyList().then((function(t) {
                      t.forEach((function(t) {
                          e.pendencyMap.set("".concat(t.from, "_").concat(t.groupID, "_").concat(t.to), t)
                      }));
                      var n = e._groupModule.getModule(wt).getLocalMessageList(E.CONV_SYSTEM),
                          o = [];
                      n.forEach((function(t) {
                          var n = t.payload,
                              a = n.operatorID,
                              s = n.operationType,
                              r = n.groupProfile;
                          if (s === ii) {
                              var i = "".concat(a, "_").concat(r.groupID, "_").concat(r.to),
                                  u = e.pendencyMap.get(i);
                              u && Ae(u.handled) && 0 !== u.handled && o.push(t)
                          }
                      })), e.deleteGroupSystemNotice({
                          messageList: o
                      })
                  }))
              }
          }, {
              key: "deleteGroupSystemNotice",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".deleteGroupSystemNotice");
                  return Re(e.messageList) && 0 !== e.messageList.length ? (Se.log("".concat(n) + e.messageList.map((function(e) {
                      return e.ID
                  }))), this._groupModule.request({
                      protocolName: Un,
                      requestData: {
                          messageListToDelete: e.messageList.map((function(e) {
                              return {
                                  from: E.CONV_SYSTEM,
                                  messageSeq: e.clientSequence,
                                  messageRandom: e.random
                              }
                          }))
                      }
                  }).then((function() {
                      Se.log("".concat(n, " ok"));
                      var o = t._groupModule.getModule(wt);
                      return e.messageList.forEach((function(e) {
                          o.deleteLocalMessage(e)
                      })), Cr()
                  })).catch((function(e) {
                      return Se.error("".concat(n, " error:"), e), Pr(e)
                  }))) : Gr()
              }
          }, {
              key: "getPendencyList",
              value: function(e) {
                  var t = this;
                  return this._groupModule.request({
                      protocolName: wn,
                      requestData: {
                          startTime: e && e.startTime ? e.startTime : 0,
                          limit: e && e.limit ? e.limit : 10,
                          handleAccount: this._groupModule.getMyUserID()
                      }
                  }).then((function(e) {
                      var n = e.data.pendencyList;
                      return 0 !== e.data.nextStartTime ? t.getPendencyList({
                          startTime: e.data.nextStartTime
                      }).then((function(e) {
                          return [].concat(M(n), M(e))
                      })) : n
                  }))
              }
          }, {
              key: "_onReceivedGroupSystemNotice",
              value: function(e) {
                  var t = this,
                      n = e.result;
                  e.isInstantMessage && n.forEach((function(e) {
                      switch (e.payload.operationType) {
                          case 1:
                              break;
                          case 2:
                              t._onApplyGroupRequestAgreed(e);
                              break;
                          case 3:
                              break;
                          case 4:
                              t._onMemberKicked(e);
                              break;
                          case 5:
                              t._onGroupDismissed(e);
                              break;
                          case 6:
                              break;
                          case 7:
                              t._onInviteGroup(e);
                              break;
                          case 8:
                              t._onQuitGroup(e);
                              break;
                          case 9:
                              t._onSetManager(e);
                              break;
                          case 10:
                              t._onDeleteManager(e)
                      }
                  }))
              }
          }, {
              key: "_onApplyGroupRequestAgreed",
              value: function(e) {
                  var t = this,
                      n = e.payload.groupProfile.groupID;
                  this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
                      groupID: n
                  }).then((function(e) {
                      var n = e.data.group;
                      n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate())
                  }))
              }
          }, {
              key: "_onMemberKicked",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID;
                  this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t)
              }
          }, {
              key: "_onGroupDismissed",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID;
                  this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t);
                  var n = this._groupModule._AVChatRoomHandler;
                  n && n.checkJoinedAVChatRoomByID(t) && n.reset(t)
              }
          }, {
              key: "_onInviteGroup",
              value: function(e) {
                  var t = this,
                      n = e.payload.groupProfile.groupID;
                  this._groupModule.hasLocalGroup(n) || this._groupModule.getGroupProfile({
                      groupID: n
                  }).then((function(e) {
                      var n = e.data.group;
                      n && (t._groupModule.updateGroupMap([n]), t._groupModule.emitGroupListUpdate())
                  }))
              }
          }, {
              key: "_onQuitGroup",
              value: function(e) {
                  var t = e.payload.groupProfile.groupID;
                  this._groupModule.hasLocalGroup(t) && this._groupModule.deleteLocalGroupAndConversation(t)
              }
          }, {
              key: "_onSetManager",
              value: function(e) {
                  var t = e.payload.groupProfile,
                      n = t.to,
                      o = t.groupID,
                      a = this._groupModule.getModule(bt).getLocalGroupMemberInfo(o, n);
                  a && a.updateRole(E.GRP_MBR_ROLE_ADMIN)
              }
          }, {
              key: "_onDeleteManager",
              value: function(e) {
                  var t = e.payload.groupProfile,
                      n = t.to,
                      o = t.groupID,
                      a = this._groupModule.getModule(bt).getLocalGroupMemberInfo(o, n);
                  a && a.updateRole(E.GRP_MBR_ROLE_MEMBER)
              }
          }, {
              key: "reset",
              value: function() {
                  this.pendencyMap.clear()
              }
          }]), e
      }(),
      li = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              return o(this, a), (t = n.call(this, e))._className = "GroupModule", t._commonGroupHandler = null, t._AVChatRoomHandler = null, t._groupSystemNoticeHandler = null, t._commonGroupHandler = new ti(h(t)), t._groupAttributesHandler = new oi(h(t)), t._AVChatRoomHandler = new ri(h(t)), t._groupTipsHandler = new ei(h(t)), t._groupSystemNoticeHandler = new ci(h(t)), t.groupMap = new Map, t._unjoinedAVChatRoomList = new Map, t
          }
          return s(a, [{
              key: "onCheckTimer",
              value: function(e) {
                  this.isLoggedIn() && (this._commonGroupHandler.onCheckTimer(e), this._groupTipsHandler.onCheckTimer(e))
              }
          }, {
              key: "guardForAVChatRoom",
              value: function(e) {
                  var t = this;
                  if (e.conversationType === E.CONV_GROUP) {
                      var n = e.to;
                      return this.hasLocalGroup(n) ? Gr() : this.getGroupProfile({
                          groupID: n
                      }).then((function(o) {
                          var a = o.data.group.type;
                          if (Se.log("".concat(t._className, ".guardForAVChatRoom. groupID:").concat(n, " type:").concat(a)), a === E.GRP_AVCHATROOM) {
                              var s = "userId:".concat(e.from, " 未加入群 groupID:").concat(n, "。发消息前先使用 joinGroup 接口申请加群，详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#joinGroup");
                              return Se.warn("".concat(t._className, ".guardForAVChatRoom sendMessage not allowed. ").concat(s)), Pr(new Or({
                                  code: co.MESSAGE_SEND_FAIL,
                                  message: s,
                                  data: {
                                      message: e
                                  }
                              }))
                          }
                          return Gr()
                      }))
                  }
                  return Gr()
              }
          }, {
              key: "checkJoinedAVChatRoomByID",
              value: function(e) {
                  return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
              }
          }, {
              key: "onNewGroupMessage",
              value: function(e) {
                  this._commonGroupHandler && this._commonGroupHandler.onNewGroupMessage(e)
              }
          }, {
              key: "updateNextMessageSeq",
              value: function(e) {
                  var t = this;
                  Re(e) && e.forEach((function(e) {
                      var n = e.conversationID.replace(E.CONV_GROUP, "");
                      t.groupMap.has(n) && (t.groupMap.get(n).nextMessageSeq = e.lastMessage.sequence + 1)
                  }))
              }
          }, {
              key: "onNewGroupTips",
              value: function(e) {
                  this._groupTipsHandler && this._groupTipsHandler.onNewGroupTips(e)
              }
          }, {
              key: "onGroupMessageRevoked",
              value: function(e) {
                  this._commonGroupHandler && this._commonGroupHandler.onGroupMessageRevoked(e)
              }
          }, {
              key: "onNewGroupSystemNotice",
              value: function(e) {
                  this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.onNewGroupSystemNotice(e)
              }
          }, {
              key: "onGroupMessageReadNotice",
              value: function(e) {
                  var t = this;
                  e.dataList.forEach((function(e) {
                      var n = e.elements.groupMessageReadNotice;
                      if (!Ge(n)) {
                          var o = t.getModule(wt);
                          n.forEach((function(e) {
                              var n = e.groupID,
                                  a = e.lastMessageSeq;
                              Se.debug("".concat(t._className, ".onGroupMessageReadNotice groupID:").concat(n, " lastMessageSeq:").concat(a));
                              var s = "".concat(E.CONV_GROUP).concat(n);
                              o.updateIsReadAfterReadReport({
                                  conversationID: s,
                                  lastMessageSeq: a
                              }), o.updateUnreadCount(s)
                          }))
                      }
                  }))
              }
          }, {
              key: "deleteGroupSystemNotice",
              value: function(e) {
                  this._groupSystemNoticeHandler && this._groupSystemNoticeHandler.deleteGroupSystemNotice(e)
              }
          }, {
              key: "initGroupMap",
              value: function(e) {
                  this.groupMap.set(e.groupID, new Wr(e))
              }
          }, {
              key: "deleteGroup",
              value: function(e) {
                  this.groupMap.delete(e)
              }
          }, {
              key: "updateGroupMap",
              value: function(e) {
                  var t = this;
                  e.forEach((function(e) {
                      t.groupMap.has(e.groupID) ? t.groupMap.get(e.groupID).updateGroup(e) : t.groupMap.set(e.groupID, new Wr(e))
                  })), this._setStorageGroupList()
              }
          }, {
              key: "getStorageGroupList",
              value: function() {
                  return this.getModule(Ft).getItem("groupMap")
              }
          }, {
              key: "_setStorageGroupList",
              value: function() {
                  var e = this.getLocalGroupList().filter((function(e) {
                      var t = e.type;
                      return !et(t)
                  })).slice(0, 20).map((function(e) {
                      return {
                          groupID: e.groupID,
                          name: e.name,
                          avatar: e.avatar,
                          type: e.type
                      }
                  }));
                  this.getModule(Ft).setItem("groupMap", e)
              }
          }, {
              key: "getGroupMap",
              value: function() {
                  return this.groupMap
              }
          }, {
              key: "getLocalGroupList",
              value: function() {
                  return M(this.groupMap.values())
              }
          }, {
              key: "getLocalGroupProfile",
              value: function(e) {
                  return this.groupMap.get(e)
              }
          }, {
              key: "sortLocalGroupList",
              value: function() {
                  var e = M(this.groupMap).filter((function(e) {
                      var t = m(e, 2);
                      t[0];
                      return !_t(t[1].lastMessage)
                  }));
                  e.sort((function(e, t) {
                      return t[1].lastMessage.lastTime - e[1].lastMessage.lastTime
                  })), this.groupMap = new Map(M(e))
              }
          }, {
              key: "updateGroupLastMessage",
              value: function(e) {
                  this._commonGroupHandler && this._commonGroupHandler.handleUpdateGroupLastMessage(e)
              }
          }, {
              key: "emitGroupListUpdate",
              value: function() {
                  var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                      t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      n = this.getLocalGroupList();
                  if (e && this.emitOuterEvent(S.GROUP_LIST_UPDATED, n), t) {
                      var o = JSON.parse(JSON.stringify(n)),
                          a = this.getModule(wt);
                      a.updateConversationGroupProfile(o)
                  }
              }
          }, {
              key: "getMyNameCardByGroupID",
              value: function(e) {
                  var t = this.getLocalGroupProfile(e);
                  return t ? t.selfInfo.nameCard : ""
              }
          }, {
              key: "getGroupList",
              value: function(e) {
                  return this._commonGroupHandler ? this._commonGroupHandler.getGroupList(e) : Gr()
              }
          }, {
              key: "getGroupProfile",
              value: function(e) {
                  var t = this,
                      n = new Ga(Ds),
                      o = "".concat(this._className, ".getGroupProfile"),
                      a = e.groupID,
                      s = e.groupCustomFieldFilter;
                  Se.log("".concat(o, " groupID:").concat(a));
                  var r = {
                      groupIDList: [a],
                      responseFilter: {
                          groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"],
                          groupCustomFieldFilter: s
                      }
                  };
                  return this.getGroupProfileAdvance(r).then((function(e) {
                      var s, r = e.data,
                          i = r.successGroupList,
                          u = r.failureGroupList;
                      return Se.log("".concat(o, " ok")), u.length > 0 ? Pr(u[0]) : (et(i[0].type) && !t.hasLocalGroup(a) ? s = new Wr(i[0]) : (t.updateGroupMap(i), s = t.getLocalGroupProfile(a)), n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(a, " type:").concat(s.type, " muteAllMembers:").concat(s.muteAllMembers, " ownerID:").concat(s.ownerID)).end(), s && s.selfInfo && !s.selfInfo.nameCard ? t.updateSelfInfo(s).then((function(e) {
                          return Cr({
                              group: e
                          })
                      })) : Cr({
                          group: s
                      }))
                  })).catch((function(a) {
                      return t.probeNetwork().then((function(t) {
                          var o = m(t, 2),
                              s = o[0],
                              r = o[1];
                          n.setError(a, s, r).setMessage("groupID:".concat(e.groupID)).end()
                      })), Se.error("".concat(o, " failed. error:"), a), Pr(a)
                  }))
              }
          }, {
              key: "getGroupProfileAdvance",
              value: function(e) {
                  var t = "".concat(this._className, ".getGroupProfileAdvance");
                  return Re(e.groupIDList) && e.groupIDList.length > 50 && (Se.warn("".concat(t, " 获取群资料的数量不能超过50个")), e.groupIDList.length = 50), Se.log("".concat(t, " groupIDList:").concat(e.groupIDList)), this.request({
                      protocolName: Tn,
                      requestData: e
                  }).then((function(e) {
                      Se.log("".concat(t, " ok"));
                      var n = e.data.groups,
                          o = n.filter((function(e) {
                              return Ge(e.errorCode) || 0 === e.errorCode
                          })),
                          a = n.filter((function(e) {
                              return e.errorCode && 0 !== e.errorCode
                          })).map((function(e) {
                              return new Or({
                                  code: e.errorCode,
                                  message: e.errorInfo,
                                  data: {
                                      groupID: e.groupID
                                  }
                              })
                          }));
                      return Cr({
                          successGroupList: o,
                          failureGroupList: a
                      })
                  })).catch((function(e) {
                      return Se.error("".concat(t, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "updateSelfInfo",
              value: function(e) {
                  var t = "".concat(this._className, ".updateSelfInfo"),
                      n = e.groupID;
                  return Se.log("".concat(t, " groupID:").concat(n)), this.getModule(bt).getGroupMemberProfile({
                      groupID: n,
                      userIDList: [this.getMyUserID()]
                  }).then((function(n) {
                      var o = n.data.memberList;
                      return Se.log("".concat(t, " ok")), e && 0 !== o.length && e.updateSelfInfo(o[0]), e
                  }))
              }
          }, {
              key: "createGroup",
              value: function(e) {
                  var n = this,
                      o = "".concat(this._className, ".createGroup");
                  if (!["Public", "Private", "ChatRoom", "AVChatRoom"].includes(e.type)) {
                      var a = new Or({
                          code: co.ILLEGAL_GROUP_TYPE,
                          message: Yo
                      });
                      return Pr(a)
                  }
                  et(e.type) && !Ge(e.memberList) && e.memberList.length > 0 && (Se.warn("".concat(o, " 创建 AVChatRoom 时不能添加群成员，自动忽略该字段")), e.memberList = void 0), Ze(e.type) || Ge(e.joinOption) || (Se.warn("".concat(o, " 创建 Work/Meeting/AVChatRoom 群时不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0);
                  var s = new Ga(ps);
                  Se.log("".concat(o, " options:"), e);
                  var r = [];
                  return this.request({
                      protocolName: Dn,
                      requestData: t(t({}, e), {}, {
                          ownerID: this.getMyUserID(),
                          webPushFlag: 1
                      })
                  }).then((function(a) {
                      var i = a.data,
                          u = i.groupID,
                          c = i.overLimitUserIDList,
                          l = void 0 === c ? [] : c;
                      if (r = l, s.setNetworkType(n.getNetworkType()).setMessage("groupType:".concat(e.type, " groupID:").concat(u, " overLimitUserIDList=").concat(l)).end(), Se.log("".concat(o, " ok groupID:").concat(u, " overLimitUserIDList:"), l), e.type === E.GRP_AVCHATROOM) return n.getGroupProfile({
                          groupID: u
                      });
                      _t(e.memberList) || _t(l) || (e.memberList = e.memberList.filter((function(e) {
                          return -1 === l.indexOf(e.userID)
                      }))), n.updateGroupMap([t(t({}, e), {}, {
                          groupID: u
                      })]);
                      var d = n.getModule(Ot),
                          p = d.createCustomMessage({
                              to: u,
                              conversationType: E.CONV_GROUP,
                              payload: {
                                  data: "group_create",
                                  extension: "".concat(n.getMyUserID(), "创建群组")
                              }
                          });
                      return d.sendMessageInstance(p), n.emitGroupListUpdate(), n.getGroupProfile({
                          groupID: u
                      })
                  })).then((function(e) {
                      var t = e.data.group,
                          n = t.selfInfo,
                          o = n.nameCard,
                          a = n.joinTime;
                      return t.updateSelfInfo({
                          nameCard: o,
                          joinTime: a,
                          messageRemindType: E.MSG_REMIND_ACPT_AND_NOTE,
                          role: E.GRP_MBR_ROLE_OWNER
                      }), Cr({
                          group: t,
                          overLimitUserIDList: r
                      })
                  })).catch((function(t) {
                      return s.setMessage("groupType:".concat(e.type)), n.probeNetwork().then((function(e) {
                          var n = m(e, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(t, o, a).end()
                      })), Se.error("".concat(o, " failed. error:"), t), Pr(t)
                  }))
              }
          }, {
              key: "dismissGroup",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".dismissGroup");
                  if (this.hasLocalGroup(e) && this.getLocalGroupProfile(e).type === E.GRP_WORK) return Pr(new Or({
                      code: co.CANNOT_DISMISS_WORK,
                      message: Jo
                  }));
                  var o = new Ga(ys);
                  return o.setMessage("groupID:".concat(e)), Se.log("".concat(n, " groupID:").concat(e)), this.request({
                      protocolName: Cn,
                      requestData: {
                          groupID: e
                      }
                  }).then((function() {
                      return o.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), t.deleteLocalGroupAndConversation(e), t.checkJoinedAVChatRoomByID(e) && t._AVChatRoomHandler.reset(e), Cr({
                          groupID: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "updateGroupProfile",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".updateGroupProfile");
                  !this.hasLocalGroup(e.groupID) || Ze(this.getLocalGroupProfile(e.groupID).type) || Ge(e.joinOption) || (Se.warn("".concat(n, " Work/Meeting/AVChatRoom 群不能设置字段 joinOption，自动忽略该字段")), e.joinOption = void 0), Ge(e.muteAllMembers) || (e.muteAllMembers ? e.muteAllMembers = "On" : e.muteAllMembers = "Off");
                  var o = new Ga(Is);
                  return o.setMessage(JSON.stringify(e)), Se.log("".concat(n, " groupID:").concat(e.groupID)), this.request({
                      protocolName: Sn,
                      requestData: e
                  }).then((function() {
                      (o.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), t.hasLocalGroup(e.groupID)) && (t.groupMap.get(e.groupID).updateGroup(e), t._setStorageGroupList());
                      return Cr({
                          group: t.groupMap.get(e.groupID)
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.log("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "joinGroup",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.type,
                      a = "".concat(this._className, ".joinGroup");
                  if (o === E.GRP_WORK) {
                      var s = new Or({
                          code: co.CANNOT_JOIN_WORK,
                          message: $o
                      });
                      return Pr(s)
                  }
                  if (this.deleteUnjoinedAVChatRoom(n), this.hasLocalGroup(n)) {
                      if (!this.isLoggedIn()) return Gr({
                          status: E.JOIN_STATUS_ALREADY_IN_GROUP
                      });
                      var r = new Ga(gs);
                      return this.getGroupProfile({
                          groupID: n
                      }).then((function() {
                          return r.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " joinedStatus:").concat(E.JOIN_STATUS_ALREADY_IN_GROUP)).end(), Gr({
                              status: E.JOIN_STATUS_ALREADY_IN_GROUP
                          })
                      })).catch((function(o) {
                          return r.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " unjoined")).end(), Se.warn("".concat(a, " ").concat(n, " was unjoined, now join!")), t.groupMap.delete(n), t.applyJoinGroup(e)
                      }))
                  }
                  return Se.log("".concat(a, " groupID:").concat(n)), this.isLoggedIn() ? this.applyJoinGroup(e) : this._AVChatRoomHandler.joinWithoutAuth(e)
              }
          }, {
              key: "applyJoinGroup",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".applyJoinGroup"),
                      o = e.groupID,
                      a = new Ga(gs);
                  return this.request({
                      protocolName: En,
                      requestData: e
                  }).then((function(e) {
                      var s = e.data,
                          r = s.joinedStatus,
                          i = s.longPollingKey,
                          u = s.avChatRoomFlag,
                          c = s.avChatRoomKey,
                          l = "groupID:".concat(o, " joinedStatus:").concat(r, " longPollingKey:").concat(i, " avChatRoomFlag:").concat(u);
                      switch (a.setNetworkType(t.getNetworkType()).setMessage("".concat(l)).end(), Se.log("".concat(n, " ok. ").concat(l)), r) {
                          case ur:
                              return Cr({
                                  status: ur
                              });
                          case ir:
                              return t.getGroupProfile({
                                  groupID: o
                              }).then((function(e) {
                                  var n = e.data.group,
                                      a = {
                                          status: ir,
                                          group: n
                                      };
                                  return 1 === u ? (t.getModule(wt).setCompleted("".concat(E.CONV_GROUP).concat(o)), t._groupAttributesHandler.initGroupAttributesCache({
                                      groupID: o,
                                      avChatRoomKey: c
                                  }), Ge(i) ? t._AVChatRoomHandler.handleJoinResult({
                                      group: n
                                  }) : t._AVChatRoomHandler.startRunLoop({
                                      longPollingKey: i,
                                      group: n
                                  })) : (t.emitGroupListUpdate(!0, !1), Cr(a))
                              }));
                          default:
                              var d = new Or({
                                  code: co.JOIN_GROUP_FAIL,
                                  message: Qo
                              });
                              return Se.error("".concat(n, " error:"), d), Pr(d)
                      }
                  })).catch((function(o) {
                      return a.setMessage("groupID:".concat(e.groupID)), t.probeNetwork().then((function(e) {
                          var t = m(e, 2),
                              n = t[0],
                              s = t[1];
                          a.setError(o, n, s).end()
                      })), Se.error("".concat(n, " error:"), o), Pr(o)
                  }))
              }
          }, {
              key: "quitGroup",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".quitGroup");
                  Se.log("".concat(n, " groupID:").concat(e));
                  var o = this.checkJoinedAVChatRoomByID(e);
                  if (!o && !this.hasLocalGroup(e)) {
                      var a = new Or({
                          code: co.MEMBER_NOT_IN_GROUP,
                          message: Xo
                      });
                      return Pr(a)
                  }
                  if (o && !this.isLoggedIn()) return Se.log("".concat(n, " anonymously ok. groupID:").concat(e)), this.deleteLocalGroupAndConversation(e), this._AVChatRoomHandler.reset(e), Gr({
                      groupID: e
                  });
                  var s = new Ga(hs);
                  return s.setMessage("groupID:".concat(e)), this.request({
                      protocolName: An,
                      requestData: {
                          groupID: e
                      }
                  }).then((function() {
                      return s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), o && t._AVChatRoomHandler.reset(e), t.deleteLocalGroupAndConversation(e), Cr({
                          groupID: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "searchGroupByID",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".searchGroupByID"),
                      o = {
                          groupIDList: [e]
                      },
                      a = new Ga(_s);
                  return a.setMessage("groupID:".concat(e)), Se.log("".concat(n, " groupID:").concat(e)), this.request({
                      protocolName: Nn,
                      requestData: o
                  }).then((function(e) {
                      var o = e.data.groupProfile;
                      if (0 !== o[0].errorCode) throw new Or({
                          code: o[0].errorCode,
                          message: o[0].errorInfo
                      });
                      return a.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), Cr({
                          group: new Wr(o[0])
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              s = n[1];
                          a.setError(e, o, s).end()
                      })), Se.warn("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "changeGroupOwner",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".changeGroupOwner");
                  if (this.hasLocalGroup(e.groupID) && this.getLocalGroupProfile(e.groupID).type === E.GRP_AVCHATROOM) return Pr(new Or({
                      code: co.CANNOT_CHANGE_OWNER_IN_AVCHATROOM,
                      message: zo
                  }));
                  if (e.newOwnerID === this.getMyUserID()) return Pr(new Or({
                      code: co.CANNOT_CHANGE_OWNER_TO_SELF,
                      message: Wo
                  }));
                  var o = new Ga(fs);
                  return o.setMessage("groupID:".concat(e.groupID, " newOwnerID:").concat(e.newOwnerID)), Se.log("".concat(n, " groupID:").concat(e.groupID)), this.request({
                      protocolName: On,
                      requestData: e
                  }).then((function() {
                      o.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok"));
                      var a = e.groupID,
                          s = e.newOwnerID;
                      t.groupMap.get(a).ownerID = s;
                      var r = t.getModule(bt).getLocalGroupMemberList(a);
                      if (r instanceof Map) {
                          var i = r.get(t.getMyUserID());
                          Ge(i) || (i.updateRole("Member"), t.groupMap.get(a).selfInfo.role = "Member");
                          var u = r.get(s);
                          Ge(u) || u.updateRole("Owner")
                      }
                      return t.emitGroupListUpdate(!0, !1), Cr({
                          group: t.groupMap.get(a)
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "handleGroupApplication",
              value: function(e) {
                  var n = this,
                      o = "".concat(this._className, ".handleGroupApplication"),
                      a = e.message.payload,
                      s = a.groupProfile.groupID,
                      r = a.authentication,
                      i = a.messageKey,
                      u = a.operatorID,
                      c = new Ga(ms);
                  return c.setMessage("groupID:".concat(s)), Se.log("".concat(o, " groupID:").concat(s)), this.request({
                      protocolName: Ln,
                      requestData: t(t({}, e), {}, {
                          applicant: u,
                          groupID: s,
                          authentication: r,
                          messageKey: i
                      })
                  }).then((function() {
                      return c.setNetworkType(n.getNetworkType()).end(), Se.log("".concat(o, " ok")), n._groupSystemNoticeHandler.deleteGroupSystemNotice({
                          messageList: [e.message]
                      }), Cr({
                          group: n.getLocalGroupProfile(s)
                      })
                  })).catch((function(e) {
                      return n.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          c.setError(e, o, a).end()
                      })), Se.error("".concat(o, " failed. error"), e), Pr(e)
                  }))
              }
          }, {
              key: "handleGroupInvitation",
              value: function(e) {
                  var n = this,
                      o = "".concat(this._className, ".handleGroupInvitation"),
                      a = e.message.payload,
                      s = a.groupProfile.groupID,
                      r = a.authentication,
                      i = a.messageKey,
                      u = a.operatorID,
                      c = e.handleAction,
                      l = new Ga(Ms);
                  return l.setMessage("groupID:".concat(s, " inviter:").concat(u, " handleAction:").concat(c)), Se.log("".concat(o, " groupID:").concat(s, " inviter:").concat(u, " handleAction:").concat(c)), this.request({
                      protocolName: Rn,
                      requestData: t(t({}, e), {}, {
                          inviter: u,
                          groupID: s,
                          authentication: r,
                          messageKey: i
                      })
                  }).then((function() {
                      return l.setNetworkType(n.getNetworkType()).end(), Se.log("".concat(o, " ok")), n._groupSystemNoticeHandler.deleteGroupSystemNotice({
                          messageList: [e.message]
                      }), Cr({
                          group: n.getLocalGroupProfile(s)
                      })
                  })).catch((function(e) {
                      return n.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          l.setError(e, o, a).end()
                      })), Se.error("".concat(o, " failed. error"), e), Pr(e)
                  }))
              }
          }, {
              key: "getGroupOnlineMemberCount",
              value: function(e) {
                  return this._AVChatRoomHandler ? this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e) ? this._AVChatRoomHandler.getGroupOnlineMemberCount(e) : Gr({
                      memberCount: 0
                  }) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "hasLocalGroup",
              value: function(e) {
                  return this.groupMap.has(e)
              }
          }, {
              key: "deleteLocalGroupAndConversation",
              value: function(e) {
                  this._deleteLocalGroup(e), this.getModule(wt).deleteLocalConversation("GROUP".concat(e)), this.emitGroupListUpdate(!0, !1)
              }
          }, {
              key: "_deleteLocalGroup",
              value: function(e) {
                  this.groupMap.delete(e), this.getModule(bt).deleteGroupMemberList(e), this._setStorageGroupList()
              }
          }, {
              key: "sendMessage",
              value: function(e, t) {
                  var n = this.createGroupMessagePack(e, t);
                  return this.request(n)
              }
          }, {
              key: "createGroupMessagePack",
              value: function(e, t) {
                  var n = null;
                  t && t.offlinePushInfo && (n = t.offlinePushInfo);
                  var o = "";
                  Ne(e.cloudCustomData) && e.cloudCustomData.length > 0 && (o = e.cloudCustomData);
                  var a = e.getGroupAtInfoList();
                  return {
                      protocolName: an,
                      tjgID: this.generateTjgID(e),
                      requestData: {
                          fromAccount: this.getMyUserID(),
                          groupID: e.to,
                          msgBody: e.getElements(),
                          cloudCustomData: o,
                          random: e.random,
                          priority: e.priority,
                          clientSequence: e.clientSequence,
                          groupAtInfo: e.type !== E.MSG_TEXT || _t(a) ? void 0 : a,
                          onlineOnlyFlag: this.isOnlineMessage(e, t) ? 1 : 0,
                          offlinePushInfo: n ? {
                              pushFlag: !0 === n.disablePush ? 1 : 0,
                              title: n.title || "",
                              desc: n.description || "",
                              ext: n.extension || "",
                              apnsInfo: {
                                  badgeMode: !0 === n.ignoreIOSBadge ? 1 : 0
                              },
                              androidInfo: {
                                  OPPOChannelID: n.androidOPPOChannelID || ""
                              }
                          } : void 0
                      }
                  }
              }
          }, {
              key: "revokeMessage",
              value: function(e) {
                  return this.request({
                      protocolName: Gn,
                      requestData: {
                          to: e.to,
                          msgSeqList: [{
                              msgSeq: e.sequence
                          }]
                      }
                  })
              }
          }, {
              key: "deleteMessage",
              value: function(e) {
                  var t = e.to,
                      n = e.keyList;
                  return Se.log("".concat(this._className, ".deleteMessage groupID:").concat(t, " count:").concat(n.length)), this.request({
                      protocolName: Kn,
                      requestData: {
                          groupID: t,
                          deleter: this.getMyUserID(),
                          keyList: n
                      }
                  })
              }
          }, {
              key: "getRoamingMessage",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".getRoamingMessage"),
                      o = new Ga(Wa),
                      a = 0;
                  return this._computeLastSequence(e).then((function(n) {
                      return a = n, Se.log("".concat(t._className, ".getRoamingMessage groupID:").concat(e.groupID, " lastSequence:").concat(a)), t.request({
                          protocolName: bn,
                          requestData: {
                              groupID: e.groupID,
                              count: 21,
                              sequence: a
                          }
                      })
                  })).then((function(s) {
                      var r = s.data,
                          i = r.messageList,
                          u = r.complete;
                      Ge(i) ? Se.log("".concat(n, " ok. complete:").concat(u, " but messageList is undefined!")) : Se.log("".concat(n, " ok. complete:").concat(u, " count:").concat(i.length)), o.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(a, " complete:").concat(u, " count:").concat(i ? i.length : "undefined")).end();
                      var c = "GROUP".concat(e.groupID),
                          l = t.getModule(wt);
                      if (2 === u || _t(i)) return l.setCompleted(c), [];
                      var d = l.storeRoamingMessage(i, c);
                      return l.updateIsRead(c), l.patchConversationLastMessage(c), d
                  })).catch((function(s) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              r = n[0],
                              i = n[1];
                          o.setError(s, r, i).setMessage("groupID:".concat(e.groupID, " lastSequence:").concat(a)).end()
                      })), Se.warn("".concat(n, " failed. error:"), s), Pr(s)
                  }))
              }
          }, {
              key: "setMessageRead",
              value: function(e) {
                  var t = this,
                      n = e.conversationID,
                      o = e.lastMessageSeq,
                      a = "".concat(this._className, ".setMessageRead");
                  Se.log("".concat(a, " conversationID:").concat(n, " lastMessageSeq:").concat(o)), Ae(o) || Se.warn("".concat(a, " 请勿修改 Conversation.lastMessage.lastSequence，否则可能会导致已读上报结果不准确"));
                  var s = new Ga(Za);
                  return s.setMessage("".concat(n, "-").concat(o)), this.request({
                      protocolName: Pn,
                      requestData: {
                          groupID: n.replace("GROUP", ""),
                          messageReadSeq: o
                      }
                  }).then((function() {
                      s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(a, " ok."));
                      var e = t.getModule(wt);
                      return e.updateIsReadAfterReadReport({
                          conversationID: n,
                          lastMessageSeq: o
                      }), e.updateUnreadCount(n), Cr()
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.log("".concat(a, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "_computeLastSequence",
              value: function(e) {
                  return e.sequence > 0 ? Promise.resolve(e.sequence) : this.getGroupLastSequence(e.groupID)
              }
          }, {
              key: "getGroupLastSequence",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".getGroupLastSequence"),
                      o = new Ga(Ss),
                      a = 0,
                      s = "";
                  if (this.hasLocalGroup(e)) {
                      var r = this.getLocalGroupProfile(e),
                          i = r.lastMessage;
                      if (i.lastSequence > 0 && !1 === i.onlineOnlyFlag) return a = i.lastSequence, s = "got lastSequence:".concat(a, " from local group profile[lastMessage.lastSequence]. groupID:").concat(e), Se.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a);
                      if (r.nextMessageSeq > 1) return a = r.nextMessageSeq - 1, s = "got lastSequence:".concat(a, " from local group profile[nextMessageSeq]. groupID:").concat(e), Se.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a)
                  }
                  var u = "GROUP".concat(e),
                      c = this.getModule(wt).getLocalConversation(u);
                  if (c && c.lastMessage.lastSequence && !1 === c.lastMessage.onlineOnlyFlag) return a = c.lastMessage.lastSequence, s = "got lastSequence:".concat(a, " from local conversation profile[lastMessage.lastSequence]. groupID:").concat(e), Se.log("".concat(n, " ").concat(s)), o.setNetworkType(this.getNetworkType()).setMessage("".concat(s)).end(), Promise.resolve(a);
                  var l = {
                      groupIDList: [e],
                      responseFilter: {
                          groupBaseInfoFilter: ["NextMsgSeq"]
                      }
                  };
                  return this.getGroupProfileAdvance(l).then((function(r) {
                      var i = r.data.successGroupList;
                      return _t(i) ? Se.log("".concat(n, " successGroupList is empty. groupID:").concat(e)) : (a = i[0].nextMessageSeq - 1, s = "got lastSequence:".concat(a, " from getGroupProfileAdvance. groupID:").concat(e), Se.log("".concat(n, " ").concat(s))), o.setNetworkType(t.getNetworkType()).setMessage("".concat(s)).end(), a
                  })).catch((function(a) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              s = n[0],
                              r = n[1];
                          o.setError(a, s, r).setMessage("get lastSequence failed from getGroupProfileAdvance. groupID:".concat(e)).end()
                      })), Se.warn("".concat(n, " failed. error:"), a), Pr(a)
                  }))
              }
          }, {
              key: "isMessageFromAVChatroom",
              value: function(e) {
                  return !!this._AVChatRoomHandler && this._AVChatRoomHandler.checkJoinedAVChatRoomByID(e)
              }
          }, {
              key: "hasJoinedAVChatRoom",
              value: function() {
                  return this._AVChatRoomHandler ? this._AVChatRoomHandler.hasJoinedAVChatRoom() : 0
              }
          }, {
              key: "getJoinedAVChatRoom",
              value: function() {
                  return this._AVChatRoomHandler ? this._AVChatRoomHandler.getJoinedAVChatRoom() : []
              }
          }, {
              key: "isOnlineMessage",
              value: function(e, t) {
                  return !(!this._canIUseOnlineOnlyFlag(e) || !t || !0 !== t.onlineUserOnly)
              }
          }, {
              key: "_canIUseOnlineOnlyFlag",
              value: function(e) {
                  var t = this.getJoinedAVChatRoom();
                  return !t || !t.includes(e.to) || e.conversationType !== E.CONV_GROUP
              }
          }, {
              key: "deleteLocalGroupMembers",
              value: function(e, t) {
                  this.getModule(bt).deleteLocalGroupMembers(e, t)
              }
          }, {
              key: "onAVChatRoomMessage",
              value: function(e) {
                  this._AVChatRoomHandler && this._AVChatRoomHandler.onMessage(e)
              }
          }, {
              key: "getGroupSimplifiedInfo",
              value: function(e) {
                  var t = this,
                      n = new Ga(As),
                      o = {
                          groupIDList: [e],
                          responseFilter: {
                              groupBaseInfoFilter: ["Type", "Name"]
                          }
                      };
                  return this.getGroupProfileAdvance(o).then((function(o) {
                      var a = o.data.successGroupList;
                      return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e, " type:").concat(a[0].type)).end(), a[0]
                  })).catch((function(o) {
                      t.probeNetwork().then((function(t) {
                          var a = m(t, 2),
                              s = a[0],
                              r = a[1];
                          n.setError(o, s, r).setMessage("groupID:".concat(e)).end()
                      }))
                  }))
              }
          }, {
              key: "setUnjoinedAVChatRoom",
              value: function(e) {
                  this._unjoinedAVChatRoomList.set(e, 1)
              }
          }, {
              key: "deleteUnjoinedAVChatRoom",
              value: function(e) {
                  this._unjoinedAVChatRoomList.has(e) && this._unjoinedAVChatRoomList.delete(e)
              }
          }, {
              key: "isUnjoinedAVChatRoom",
              value: function(e) {
                  return this._unjoinedAVChatRoomList.has(e)
              }
          }, {
              key: "onGroupAttributesUpdated",
              value: function(e) {
                  this._groupAttributesHandler && this._groupAttributesHandler.onGroupAttributesUpdated(e)
              }
          }, {
              key: "updateLocalMainSequenceOnReconnected",
              value: function() {
                  this._groupAttributesHandler && this._groupAttributesHandler.updateLocalMainSequenceOnReconnected()
              }
          }, {
              key: "initGroupAttributes",
              value: function(e) {
                  return this._groupAttributesHandler.initGroupAttributes(e)
              }
          }, {
              key: "setGroupAttributes",
              value: function(e) {
                  return this._groupAttributesHandler.setGroupAttributes(e)
              }
          }, {
              key: "deleteGroupAttributes",
              value: function(e) {
                  return this._groupAttributesHandler.deleteGroupAttributes(e)
              }
          }, {
              key: "getGroupAttributes",
              value: function(e) {
                  return this._groupAttributesHandler.getGroupAttributes(e)
              }
          }, {
              key: "reset",
              value: function() {
                  this.groupMap.clear(), this._unjoinedAVChatRoomList.clear(), this._commonGroupHandler.reset(), this._groupSystemNoticeHandler.reset(), this._groupTipsHandler.reset(), this._AVChatRoomHandler && this._AVChatRoomHandler.reset()
              }
          }]), a
      }(Xt),
      di = function() {
          function e(t) {
              o(this, e), this.userID = "", this.avatar = "", this.nick = "", this.role = "", this.joinTime = "", this.lastSendMsgTime = "", this.nameCard = "", this.muteUntil = 0, this.memberCustomField = [], this._initMember(t)
          }
          return s(e, [{
              key: "_initMember",
              value: function(e) {
                  this.updateMember(e)
              }
          }, {
              key: "updateMember",
              value: function(e) {
                  var t = [null, void 0, "", 0, NaN];
                  e.memberCustomField && Qe(this.memberCustomField, e.memberCustomField), Ke(this, e, ["memberCustomField"], t)
              }
          }, {
              key: "updateRole",
              value: function(e) {
                  ["Owner", "Admin", "Member"].indexOf(e) < 0 || (this.role = e)
              }
          }, {
              key: "updateMuteUntil",
              value: function(e) {
                  Ge(e) || (this.muteUntil = Math.floor((Date.now() + 1e3 * e) / 1e3))
              }
          }, {
              key: "updateNameCard",
              value: function(e) {
                  Ge(e) || (this.nameCard = e)
              }
          }, {
              key: "updateMemberCustomField",
              value: function(e) {
                  e && Qe(this.memberCustomField, e)
              }
          }]), e
      }(),
      pi = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              return o(this, a), (t = n.call(this, e))._className = "GroupMemberModule", t.groupMemberListMap = new Map, t.getInnerEmitterInstance().on(Ur.PROFILE_UPDATED, t._onProfileUpdated, h(t)), t
          }
          return s(a, [{
              key: "_onProfileUpdated",
              value: function(e) {
                  for (var t = this, n = e.data, o = function(e) {
                          var o = n[e];
                          t.groupMemberListMap.forEach((function(e) {
                              e.has(o.userID) && e.get(o.userID).updateMember({
                                  nick: o.nick,
                                  avatar: o.avatar
                              })
                          }))
                      }, a = 0; a < n.length; a++) o(a)
              }
          }, {
              key: "deleteGroupMemberList",
              value: function(e) {
                  this.groupMemberListMap.delete(e)
              }
          }, {
              key: "getGroupMemberList",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.offset,
                      a = void 0 === o ? 0 : o,
                      s = e.count,
                      r = void 0 === s ? 15 : s,
                      i = "".concat(this._className, ".getGroupMemberList"),
                      u = new Ga(Ps);
                  Se.log("".concat(i, " groupID:").concat(n, " offset:").concat(a, " count:").concat(r));
                  var c = [];
                  return this.request({
                      protocolName: $n,
                      requestData: {
                          groupID: n,
                          offset: a,
                          limit: r > 100 ? 100 : r
                      }
                  }).then((function(e) {
                      var o = e.data,
                          a = o.members,
                          s = o.memberNum;
                      if (!Re(a) || 0 === a.length) return Promise.resolve([]);
                      var r = t.getModule(Gt);
                      return r.hasLocalGroup(n) && (r.getLocalGroupProfile(n).memberNum = s), c = t._updateLocalGroupMemberMap(n, a), t.getModule(Lt).getUserProfile({
                          userIDList: a.map((function(e) {
                              return e.userID
                          })),
                          tagList: [or.NICK, or.AVATAR]
                      })
                  })).then((function(e) {
                      var o = e.data;
                      if (!Re(o) || 0 === o.length) return Gr({
                          memberList: []
                      });
                      var s = o.map((function(e) {
                          return {
                              userID: e.userID,
                              nick: e.nick,
                              avatar: e.avatar
                          }
                      }));
                      return t._updateLocalGroupMemberMap(n, s), u.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(n, " offset:").concat(a, " count:").concat(r)).end(), Se.log("".concat(i, " ok.")), Cr({
                          memberList: c
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          u.setError(e, o, a).end()
                      })), Se.error("".concat(i, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "getGroupMemberProfile",
              value: function(e) {
                  var n = this,
                      o = "".concat(this._className, ".getGroupMemberProfile"),
                      a = new Ga(bs);
                  a.setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)), Se.log("".concat(o, " groupID:").concat(e.groupID, " userIDList:").concat(e.userIDList.join(","))), e.userIDList.length > 50 && (e.userIDList = e.userIDList.slice(0, 50));
                  var s = e.groupID,
                      r = e.userIDList;
                  return this._getGroupMemberProfileAdvance(t(t({}, e), {}, {
                      userIDList: r
                  })).then((function(e) {
                      var t = e.data.members;
                      return Re(t) && 0 !== t.length ? (n._updateLocalGroupMemberMap(s, t), n.getModule(Lt).getUserProfile({
                          userIDList: t.map((function(e) {
                              return e.userID
                          })),
                          tagList: [or.NICK, or.AVATAR]
                      })) : Gr([])
                  })).then((function(e) {
                      var t = e.data.map((function(e) {
                          return {
                              userID: e.userID,
                              nick: e.nick,
                              avatar: e.avatar
                          }
                      }));
                      n._updateLocalGroupMemberMap(s, t);
                      var o = r.filter((function(e) {
                          return n.hasLocalGroupMember(s, e)
                      })).map((function(e) {
                          return n.getLocalGroupMemberInfo(s, e)
                      }));
                      return a.setNetworkType(n.getNetworkType()).end(), Cr({
                          memberList: o
                      })
                  }))
              }
          }, {
              key: "addGroupMember",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".addGroupMember"),
                      o = e.groupID,
                      a = this.getModule(Gt).getLocalGroupProfile(o),
                      s = a.type,
                      r = new Ga(ws);
                  if (r.setMessage("groupID:".concat(o, " groupType:").concat(s)), et(s)) {
                      var i = new Or({
                          code: co.CANNOT_ADD_MEMBER_IN_AVCHATROOM,
                          message: Zo
                      });
                      return r.setCode(co.CANNOT_ADD_MEMBER_IN_AVCHATROOM).setError(Zo).setNetworkType(this.getNetworkType()).end(), Pr(i)
                  }
                  return e.userIDList = e.userIDList.map((function(e) {
                      return {
                          userID: e
                      }
                  })), Se.log("".concat(n, " groupID:").concat(o)), this.request({
                      protocolName: Wn,
                      requestData: e
                  }).then((function(o) {
                      var s = o.data.members;
                      Se.log("".concat(n, " ok"));
                      var i = s.filter((function(e) {
                              return 1 === e.result
                          })).map((function(e) {
                              return e.userID
                          })),
                          u = s.filter((function(e) {
                              return 0 === e.result
                          })).map((function(e) {
                              return e.userID
                          })),
                          c = s.filter((function(e) {
                              return 2 === e.result
                          })).map((function(e) {
                              return e.userID
                          })),
                          l = s.filter((function(e) {
                              return 4 === e.result
                          })).map((function(e) {
                              return e.userID
                          })),
                          d = "groupID:".concat(e.groupID, ", ") + "successUserIDList:".concat(i, ", ") + "failureUserIDList:".concat(u, ", ") + "existedUserIDList:".concat(c, ", ") + "overLimitUserIDList:".concat(l);
                      return r.setNetworkType(t.getNetworkType()).setMoreMessage(d).end(), 0 === i.length ? Cr({
                          successUserIDList: i,
                          failureUserIDList: u,
                          existedUserIDList: c,
                          overLimitUserIDList: l
                      }) : (a.memberNum += i.length, Cr({
                          successUserIDList: i,
                          failureUserIDList: u,
                          existedUserIDList: c,
                          overLimitUserIDList: l,
                          group: a
                      }))
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          r.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "deleteGroupMember",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".deleteGroupMember"),
                      o = e.groupID,
                      a = e.userIDList,
                      s = new Ga(Us),
                      r = "groupID:".concat(o, " ").concat(a.length > 5 ? "userIDList.length:".concat(a.length) : "userIDList:".concat(a));
                  s.setMessage(r), Se.log("".concat(n, " groupID:").concat(o, " userIDList:"), a);
                  var i = this.getModule(Gt).getLocalGroupProfile(o);
                  return et(i.type) ? Pr(new Or({
                      code: co.CANNOT_KICK_MEMBER_IN_AVCHATROOM,
                      message: ta
                  })) : this.request({
                      protocolName: Jn,
                      requestData: e
                  }).then((function() {
                      return s.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), i.memberNum--, t.deleteLocalGroupMembers(o, a), Cr({
                          group: i,
                          userIDList: a
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "setGroupMemberMuteTime",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.userID,
                      a = e.muteTime,
                      s = "".concat(this._className, ".setGroupMemberMuteTime");
                  if (o === this.getMyUserID()) return Pr(new Or({
                      code: co.CANNOT_MUTE_SELF,
                      message: ra
                  }));
                  Se.log("".concat(s, " groupID:").concat(n, " userID:").concat(o));
                  var r = new Ga(Fs);
                  return r.setMessage("groupID:".concat(n, " userID:").concat(o, " muteTime:").concat(a)), this._modifyGroupMemberInfo({
                      groupID: n,
                      userID: o,
                      muteTime: a
                  }).then((function(e) {
                      r.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(s, " ok"));
                      var o = t.getModule(Gt);
                      return Cr({
                          group: o.getLocalGroupProfile(n),
                          member: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          r.setError(e, o, a).end()
                      })), Se.error("".concat(s, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "setGroupMemberRole",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".setGroupMemberRole"),
                      o = e.groupID,
                      a = e.userID,
                      s = e.role,
                      r = this.getModule(Gt).getLocalGroupProfile(o);
                  if (r.selfInfo.role !== E.GRP_MBR_ROLE_OWNER) return Pr(new Or({
                      code: co.NOT_OWNER,
                      message: na
                  }));
                  if ([E.GRP_WORK, E.GRP_AVCHATROOM].includes(r.type)) return Pr(new Or({
                      code: co.CANNOT_SET_MEMBER_ROLE_IN_WORK_AND_AVCHATROOM,
                      message: oa
                  }));
                  if ([E.GRP_MBR_ROLE_ADMIN, E.GRP_MBR_ROLE_MEMBER].indexOf(s) < 0) return Pr(new Or({
                      code: co.INVALID_MEMBER_ROLE,
                      message: aa
                  }));
                  if (a === this.getMyUserID()) return Pr(new Or({
                      code: co.CANNOT_SET_SELF_MEMBER_ROLE,
                      message: sa
                  }));
                  var i = new Ga(Vs);
                  return i.setMessage("groupID:".concat(o, " userID:").concat(a, " role:").concat(s)), Se.log("".concat(n, " groupID:").concat(o, " userID:").concat(a)), this._modifyGroupMemberInfo({
                      groupID: o,
                      userID: a,
                      role: s
                  }).then((function(e) {
                      return i.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok")), Cr({
                          group: r,
                          member: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          i.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "setGroupMemberNameCard",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".setGroupMemberNameCard"),
                      o = e.groupID,
                      a = e.userID,
                      s = void 0 === a ? this.getMyUserID() : a,
                      r = e.nameCard;
                  Se.log("".concat(n, " groupID:").concat(o, " userID:").concat(s));
                  var i = new Ga(qs);
                  return i.setMessage("groupID:".concat(o, " userID:").concat(s, " nameCard:").concat(r)), this._modifyGroupMemberInfo({
                      groupID: o,
                      userID: s,
                      nameCard: r
                  }).then((function(e) {
                      Se.log("".concat(n, " ok")), i.setNetworkType(t.getNetworkType()).end();
                      var a = t.getModule(Gt).getLocalGroupProfile(o);
                      return s === t.getMyUserID() && a && a.setSelfNameCard(r), Cr({
                          group: a,
                          member: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          i.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "setGroupMemberCustomField",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".setGroupMemberCustomField"),
                      o = e.groupID,
                      a = e.userID,
                      s = void 0 === a ? this.getMyUserID() : a,
                      r = e.memberCustomField;
                  Se.log("".concat(n, " groupID:").concat(o, " userID:").concat(s));
                  var i = new Ga(Ks);
                  return i.setMessage("groupID:".concat(o, " userID:").concat(s, " memberCustomField:").concat(JSON.stringify(r))), this._modifyGroupMemberInfo({
                      groupID: o,
                      userID: s,
                      memberCustomField: r
                  }).then((function(e) {
                      i.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok"));
                      var a = t.getModule(Gt).getLocalGroupProfile(o);
                      return Cr({
                          group: a,
                          member: e
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          i.setError(e, o, a).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "setMessageRemindType",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".setMessageRemindType"),
                      o = new Ga(vs);
                  o.setMessage("groupID:".concat(e.groupID)), Se.log("".concat(n, " groupID:").concat(e.groupID));
                  var a = e.groupID,
                      s = e.messageRemindType;
                  return this._modifyGroupMemberInfo({
                      groupID: a,
                      messageRemindType: s,
                      userID: this.getMyUserID()
                  }).then((function() {
                      o.setNetworkType(t.getNetworkType()).end(), Se.log("".concat(n, " ok. groupID:").concat(e.groupID));
                      var a = t.getModule(Gt).getLocalGroupProfile(e.groupID);
                      return a && (a.selfInfo.messageRemindType = s), Cr({
                          group: a
                      })
                  })).catch((function(e) {
                      return t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "_modifyGroupMemberInfo",
              value: function(e) {
                  var t = this,
                      n = e.groupID,
                      o = e.userID;
                  return this.request({
                      protocolName: Xn,
                      requestData: e
                  }).then((function() {
                      if (t.hasLocalGroupMember(n, o)) {
                          var a = t.getLocalGroupMemberInfo(n, o);
                          return Ge(e.muteTime) || a.updateMuteUntil(e.muteTime), Ge(e.role) || a.updateRole(e.role), Ge(e.nameCard) || a.updateNameCard(e.nameCard), Ge(e.memberCustomField) || a.updateMemberCustomField(e.memberCustomField), a
                      }
                      return t.getGroupMemberProfile({
                          groupID: n,
                          userIDList: [o]
                      }).then((function(e) {
                          return m(e.data.memberList, 1)[0]
                      }))
                  }))
              }
          }, {
              key: "_getGroupMemberProfileAdvance",
              value: function(e) {
                  return this.request({
                      protocolName: zn,
                      requestData: t(t({}, e), {}, {
                          memberInfoFilter: e.memberInfoFilter ? e.memberInfoFilter : ["Role", "JoinTime", "NameCard", "ShutUpUntil"]
                      })
                  })
              }
          }, {
              key: "_updateLocalGroupMemberMap",
              value: function(e, t) {
                  var n = this;
                  return Re(t) && 0 !== t.length ? t.map((function(t) {
                      return n.hasLocalGroupMember(e, t.userID) ? n.getLocalGroupMemberInfo(e, t.userID).updateMember(t) : n.setLocalGroupMember(e, new di(t)), n.getLocalGroupMemberInfo(e, t.userID)
                  })) : []
              }
          }, {
              key: "deleteLocalGroupMembers",
              value: function(e, t) {
                  var n = this.groupMemberListMap.get(e);
                  n && t.forEach((function(e) {
                      n.delete(e)
                  }))
              }
          }, {
              key: "getLocalGroupMemberInfo",
              value: function(e, t) {
                  return this.groupMemberListMap.has(e) ? this.groupMemberListMap.get(e).get(t) : null
              }
          }, {
              key: "setLocalGroupMember",
              value: function(e, t) {
                  if (this.groupMemberListMap.has(e)) this.groupMemberListMap.get(e).set(t.userID, t);
                  else {
                      var n = (new Map).set(t.userID, t);
                      this.groupMemberListMap.set(e, n)
                  }
              }
          }, {
              key: "getLocalGroupMemberList",
              value: function(e) {
                  return this.groupMemberListMap.get(e)
              }
          }, {
              key: "hasLocalGroupMember",
              value: function(e, t) {
                  return this.groupMemberListMap.has(e) && this.groupMemberListMap.get(e).has(t)
              }
          }, {
              key: "hasLocalGroupMemberMap",
              value: function(e) {
                  return this.groupMemberListMap.has(e)
              }
          }, {
              key: "reset",
              value: function() {
                  this.groupMemberListMap.clear()
              }
          }]), a
      }(Xt),
      gi = function() {
          function e(t) {
              o(this, e), this._userModule = t, this._className = "ProfileHandler", this.TAG = "profile", this.accountProfileMap = new Map, this.expirationTime = 864e5
          }
          return s(e, [{
              key: "setExpirationTime",
              value: function(e) {
                  this.expirationTime = e
              }
          }, {
              key: "getUserProfile",
              value: function(e) {
                  var t = this,
                      n = e.userIDList;
                  e.fromAccount = this._userModule.getMyAccount(), n.length > 100 && (Se.warn("".concat(this._className, ".getUserProfile 获取用户资料人数不能超过100人")), n.length = 100);
                  for (var o, a = [], s = [], r = 0, i = n.length; r < i; r++) o = n[r], this._userModule.isMyFriend(o) && this._containsAccount(o) ? s.push(this._getProfileFromMap(o)) : a.push(o);
                  if (0 === a.length) return Gr(s);
                  e.toAccount = a;
                  var u = e.bFromGetMyProfile || !1,
                      c = [];
                  e.toAccount.forEach((function(e) {
                      c.push({
                          toAccount: e,
                          standardSequence: 0,
                          customSequence: 0
                      })
                  })), e.userItem = c;
                  var l = new Ga(Ys);
                  return l.setMessage(n.length > 5 ? "userIDList.length:".concat(n.length) : "userIDList:".concat(n)), this._userModule.request({
                      protocolName: sn,
                      requestData: e
                  }).then((function(e) {
                      l.setNetworkType(t._userModule.getNetworkType()).end(), Se.info("".concat(t._className, ".getUserProfile ok"));
                      var n = t._handleResponse(e).concat(s);
                      return Cr(u ? n[0] : n)
                  })).catch((function(e) {
                      return t._userModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          l.setError(e, o, a).end()
                      })), Se.error("".concat(t._className, ".getUserProfile failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "getMyProfile",
              value: function() {
                  var e = this._userModule.getMyAccount();
                  if (Se.log("".concat(this._className, ".getMyProfile myAccount:").concat(e)), this._fillMap(), this._containsAccount(e)) {
                      var t = this._getProfileFromMap(e);
                      return Se.debug("".concat(this._className, ".getMyProfile from cache, myProfile:") + JSON.stringify(t)), Gr(t)
                  }
                  return this.getUserProfile({
                      fromAccount: e,
                      userIDList: [e],
                      bFromGetMyProfile: !0
                  })
              }
          }, {
              key: "_handleResponse",
              value: function(e) {
                  for (var t, n, o = Ve.now(), a = e.data.userProfileItem, s = [], r = 0, i = a.length; r < i; r++) "@TLS#NOT_FOUND" !== a[r].to && "" !== a[r].to && (t = a[r].to, n = this._updateMap(t, this._getLatestProfileFromResponse(t, a[r].profileItem)), s.push(n));
                  return Se.log("".concat(this._className, "._handleResponse cost ").concat(Ve.now() - o, " ms")), s
              }
          }, {
              key: "_getLatestProfileFromResponse",
              value: function(e, t) {
                  var n = {};
                  if (n.userID = e, n.profileCustomField = [], !_t(t))
                      for (var o = 0, a = t.length; o < a; o++)
                          if (t[o].tag.indexOf("Tag_Profile_Custom") > -1) n.profileCustomField.push({
                              key: t[o].tag,
                              value: t[o].value
                          });
                          else switch (t[o].tag) {
                              case or.NICK:
                                  n.nick = t[o].value;
                                  break;
                              case or.GENDER:
                                  n.gender = t[o].value;
                                  break;
                              case or.BIRTHDAY:
                                  n.birthday = t[o].value;
                                  break;
                              case or.LOCATION:
                                  n.location = t[o].value;
                                  break;
                              case or.SELFSIGNATURE:
                                  n.selfSignature = t[o].value;
                                  break;
                              case or.ALLOWTYPE:
                                  n.allowType = t[o].value;
                                  break;
                              case or.LANGUAGE:
                                  n.language = t[o].value;
                                  break;
                              case or.AVATAR:
                                  n.avatar = t[o].value;
                                  break;
                              case or.MESSAGESETTINGS:
                                  n.messageSettings = t[o].value;
                                  break;
                              case or.ADMINFORBIDTYPE:
                                  n.adminForbidType = t[o].value;
                                  break;
                              case or.LEVEL:
                                  n.level = t[o].value;
                                  break;
                              case or.ROLE:
                                  n.role = t[o].value;
                                  break;
                              default:
                                  Se.warn("".concat(this._className, "._handleResponse unknown tag:"), t[o].tag, t[o].value)
                          }
                  return n
              }
          }, {
              key: "updateMyProfile",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".updateMyProfile"),
                      o = new Ga($s);
                  o.setMessage(JSON.stringify(e));
                  var a = (new jr).validate(e);
                  if (!a.valid) return o.setCode(co.UPDATE_PROFILE_INVALID_PARAM).setMoreMessage("".concat(n, " info:").concat(a.tips)).setNetworkType(this._userModule.getNetworkType()).end(), Se.error("".concat(n, " info:").concat(a.tips, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), Pr({
                      code: co.UPDATE_PROFILE_INVALID_PARAM,
                      message: ia
                  });
                  var s = [];
                  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && ("profileCustomField" === r ? e.profileCustomField.forEach((function(e) {
                      s.push({
                          tag: e.key,
                          value: e.value
                      })
                  })) : s.push({
                      tag: or[r.toUpperCase()],
                      value: e[r]
                  }));
                  return 0 === s.length ? (o.setCode(co.UPDATE_PROFILE_NO_KEY).setMoreMessage(ua).setNetworkType(this._userModule.getNetworkType()).end(), Se.error("".concat(n, " info:").concat(ua, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#updateMyProfile")), Pr({
                      code: co.UPDATE_PROFILE_NO_KEY,
                      message: ua
                  })) : this._userModule.request({
                      protocolName: rn,
                      requestData: {
                          fromAccount: this._userModule.getMyAccount(),
                          profileItem: s
                      }
                  }).then((function(a) {
                      o.setNetworkType(t._userModule.getNetworkType()).end(), Se.info("".concat(n, " ok"));
                      var s = t._updateMap(t._userModule.getMyAccount(), e);
                      return t._userModule.emitOuterEvent(S.PROFILE_UPDATED, [s]), Gr(s)
                  })).catch((function(e) {
                      return t._userModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))
              }
          }, {
              key: "onProfileModified",
              value: function(e) {
                  var t = e.dataList;
                  if (!_t(t)) {
                      var n, o, a = t.length;
                      Se.info("".concat(this._className, ".onProfileModified count:").concat(a));
                      for (var s = [], r = this._userModule.getModule(wt), i = 0; i < a; i++) n = t[i].userID, o = this._updateMap(n, this._getLatestProfileFromResponse(n, t[i].profileList)), s.push(o), n === this._userModule.getMyAccount() && r.onMyProfileModified({
                          latestNick: o.nick,
                          latestAvatar: o.avatar
                      });
                      this._userModule.emitInnerEvent(Ur.PROFILE_UPDATED, s), this._userModule.emitOuterEvent(S.PROFILE_UPDATED, s)
                  }
              }
          }, {
              key: "_fillMap",
              value: function() {
                  if (0 === this.accountProfileMap.size) {
                      for (var e = this._getCachedProfiles(), t = Date.now(), n = 0, o = e.length; n < o; n++) t - e[n].lastUpdatedTime < this.expirationTime && this.accountProfileMap.set(e[n].userID, e[n]);
                      Se.log("".concat(this._className, "._fillMap from cache, map.size:").concat(this.accountProfileMap.size))
                  }
              }
          }, {
              key: "_updateMap",
              value: function(e, t) {
                  var n, o = Date.now();
                  return this._containsAccount(e) ? (n = this._getProfileFromMap(e), t.profileCustomField && Qe(n.profileCustomField, t.profileCustomField), Ke(n, t, ["profileCustomField"]), n.lastUpdatedTime = o) : (n = new jr(t), (this._userModule.isMyFriend(e) || e === this._userModule.getMyAccount()) && (n.lastUpdatedTime = o, this.accountProfileMap.set(e, n))), this._flushMap(e === this._userModule.getMyAccount()), n
              }
          }, {
              key: "_flushMap",
              value: function(e) {
                  var t = M(this.accountProfileMap.values()),
                      n = this._userModule.getStorageModule();
                  Se.debug("".concat(this._className, "._flushMap length:").concat(t.length, " flushAtOnce:").concat(e)), n.setItem(this.TAG, t, e)
              }
          }, {
              key: "_containsAccount",
              value: function(e) {
                  return this.accountProfileMap.has(e)
              }
          }, {
              key: "_getProfileFromMap",
              value: function(e) {
                  return this.accountProfileMap.get(e)
              }
          }, {
              key: "_getCachedProfiles",
              value: function() {
                  var e = this._userModule.getStorageModule().getItem(this.TAG);
                  return _t(e) ? [] : e
              }
          }, {
              key: "onConversationsProfileUpdated",
              value: function(e) {
                  for (var t, n, o, a = [], s = 0, r = e.length; s < r; s++) n = (t = e[s]).userID, this._userModule.isMyFriend(n) || (this._containsAccount(n) ? (o = this._getProfileFromMap(n), Ke(o, t) > 0 && a.push(n)) : a.push(t.userID));
                  0 !== a.length && (Se.info("".concat(this._className, ".onConversationsProfileUpdated toAccountList:").concat(a)), this.getUserProfile({
                      userIDList: a
                  }))
              }
          }, {
              key: "getNickAndAvatarByUserID",
              value: function(e) {
                  if (this._containsAccount(e)) {
                      var t = this._getProfileFromMap(e);
                      return {
                          nick: t.nick,
                          avatar: t.avatar
                      }
                  }
                  return {
                      nick: "",
                      avatar: ""
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  this._flushMap(!0), this.accountProfileMap.clear()
              }
          }]), e
      }(),
      hi = function e(t) {
          o(this, e), _t || (this.userID = t.userID || "", this.timeStamp = t.timeStamp || 0)
      },
      _i = function() {
          function e(t) {
              o(this, e), this._userModule = t, this._className = "BlacklistHandler", this._blacklistMap = new Map, this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0
          }
          return s(e, [{
              key: "getLocalBlacklist",
              value: function() {
                  return M(this._blacklistMap.keys())
              }
          }, {
              key: "getBlacklist",
              value: function() {
                  var e = this,
                      t = "".concat(this._className, ".getBlacklist"),
                      n = {
                          fromAccount: this._userModule.getMyAccount(),
                          maxLimited: this.maxLimited,
                          startIndex: 0,
                          lastSequence: this.currentSequence
                      },
                      o = new Ga(zs);
                  return this._userModule.request({
                      protocolName: un,
                      requestData: n
                  }).then((function(n) {
                      var a = n.data,
                          s = a.blackListItem,
                          r = a.currentSequence,
                          i = _t(s) ? 0 : s.length;
                      o.setNetworkType(e._userModule.getNetworkType()).setMessage("blackList count:".concat(i)).end(), Se.info("".concat(t, " ok")), e.currentSequence = r, e._handleResponse(s, !0), e._userModule.emitOuterEvent(S.BLACKLIST_UPDATED, M(e._blacklistMap.keys()))
                  })).catch((function(n) {
                      return e._userModule.probeNetwork().then((function(e) {
                          var t = m(e, 2),
                              a = t[0],
                              s = t[1];
                          o.setError(n, a, s).end()
                      })), Se.error("".concat(t, " failed. error:"), n), Pr(n)
                  }))
              }
          }, {
              key: "addBlacklist",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".addBlacklist"),
                      o = new Ga(Ws);
                  if (!Re(e.userIDList)) return o.setCode(co.ADD_BLACKLIST_INVALID_PARAM).setMessage(ca).setNetworkType(this._userModule.getNetworkType()).end(), Se.error("".concat(n, " options.userIDList 必需是数组")), Pr({
                      code: co.ADD_BLACKLIST_INVALID_PARAM,
                      message: ca
                  });
                  var a = this._userModule.getMyAccount();
                  return 1 === e.userIDList.length && e.userIDList[0] === a ? (o.setCode(co.CANNOT_ADD_SELF_TO_BLACKLIST).setMessage(da).setNetworkType(this._userModule.getNetworkType()).end(), Se.error("".concat(n, " 不能把自己拉黑")), Pr({
                      code: co.CANNOT_ADD_SELF_TO_BLACKLIST,
                      message: da
                  })) : (e.userIDList.includes(a) && (e.userIDList = e.userIDList.filter((function(e) {
                      return e !== a
                  })), Se.warn("".concat(n, " 不能把自己拉黑，已过滤"))), e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({
                      protocolName: cn,
                      requestData: e
                  }).then((function(a) {
                      return o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Se.info("".concat(n, " ok")), t._handleResponse(a.resultItem, !0), Cr(M(t._blacklistMap.keys()))
                  })).catch((function(e) {
                      return t._userModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  })))
              }
          }, {
              key: "_handleResponse",
              value: function(e, t) {
                  if (!_t(e))
                      for (var n, o, a, s = 0, r = e.length; s < r; s++) o = e[s].to, a = e[s].resultCode, (Ge(a) || 0 === a) && (t ? ((n = this._blacklistMap.has(o) ? this._blacklistMap.get(o) : new hi).userID = o, !_t(e[s].addBlackTimeStamp) && (n.timeStamp = e[s].addBlackTimeStamp), this._blacklistMap.set(o, n)) : this._blacklistMap.has(o) && (n = this._blacklistMap.get(o), this._blacklistMap.delete(o)));
                  Se.log("".concat(this._className, "._handleResponse total:").concat(this._blacklistMap.size, " bAdd:").concat(t))
              }
          }, {
              key: "deleteBlacklist",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".deleteBlacklist"),
                      o = new Ga(Js);
                  return Re(e.userIDList) ? (e.fromAccount = this._userModule.getMyAccount(), e.toAccount = e.userIDList, this._userModule.request({
                      protocolName: ln,
                      requestData: e
                  }).then((function(a) {
                      return o.setNetworkType(t._userModule.getNetworkType()).setMessage(e.userIDList.length > 5 ? "userIDList.length:".concat(e.userIDList.length) : "userIDList:".concat(e.userIDList)).end(), Se.info("".concat(n, " ok")), t._handleResponse(a.data.resultItem, !1), Cr(M(t._blacklistMap.keys()))
                  })).catch((function(e) {
                      return t._userModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              a = n[0],
                              s = n[1];
                          o.setError(e, a, s).end()
                      })), Se.error("".concat(n, " failed. error:"), e), Pr(e)
                  }))) : (o.setCode(co.DEL_BLACKLIST_INVALID_PARAM).setMessage(la).setNetworkType(this._userModule.getNetworkType()).end(), Se.error("".concat(n, " options.userIDList 必需是数组")), Pr({
                      code: co.DEL_BLACKLIST_INVALID_PARAM,
                      message: la
                  }))
              }
          }, {
              key: "onAccountDeleted",
              value: function(e) {
                  for (var t, n = [], o = 0, a = e.length; o < a; o++) t = e[o], this._blacklistMap.has(t) && (this._blacklistMap.delete(t), n.push(t));
                  n.length > 0 && (Se.log("".concat(this._className, ".onAccountDeleted count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(S.BLACKLIST_UPDATED, M(this._blacklistMap.keys())))
              }
          }, {
              key: "onAccountAdded",
              value: function(e) {
                  for (var t, n = [], o = 0, a = e.length; o < a; o++) t = e[o], this._blacklistMap.has(t) || (this._blacklistMap.set(t, new hi({
                      userID: t
                  })), n.push(t));
                  n.length > 0 && (Se.log("".concat(this._className, ".onAccountAdded count:").concat(n.length, " userIDList:"), n), this._userModule.emitOuterEvent(S.BLACKLIST_UPDATED, M(this._blacklistMap.keys())))
              }
          }, {
              key: "reset",
              value: function() {
                  this._blacklistMap.clear(), this.startIndex = 0, this.maxLimited = 100, this.currentSequence = 0
              }
          }]), e
      }(),
      fi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "UserModule", a._profileHandler = new gi(h(a)), a._blacklistHandler = new _i(h(a)), a.getInnerEmitterInstance().on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, a.onContextUpdated, h(a)), a
          }
          return s(n, [{
              key: "onContextUpdated",
              value: function(e) {
                  this._profileHandler.getMyProfile(), this._blacklistHandler.getBlacklist()
              }
          }, {
              key: "onProfileModified",
              value: function(e) {
                  this._profileHandler.onProfileModified(e)
              }
          }, {
              key: "onRelationChainModified",
              value: function(e) {
                  var t = e.dataList;
                  if (!_t(t)) {
                      var n = [];
                      t.forEach((function(e) {
                          e.blackListDelAccount && n.push.apply(n, M(e.blackListDelAccount))
                      })), n.length > 0 && this._blacklistHandler.onAccountDeleted(n);
                      var o = [];
                      t.forEach((function(e) {
                          e.blackListAddAccount && o.push.apply(o, M(e.blackListAddAccount))
                      })), o.length > 0 && this._blacklistHandler.onAccountAdded(o)
                  }
              }
          }, {
              key: "onConversationsProfileUpdated",
              value: function(e) {
                  this._profileHandler.onConversationsProfileUpdated(e)
              }
          }, {
              key: "getMyAccount",
              value: function() {
                  return this.getMyUserID()
              }
          }, {
              key: "getMyProfile",
              value: function() {
                  return this._profileHandler.getMyProfile()
              }
          }, {
              key: "getStorageModule",
              value: function() {
                  return this.getModule(Ft)
              }
          }, {
              key: "isMyFriend",
              value: function(e) {
                  var t = this.getModule(Pt);
                  return !!t && t.isMyFriend(e)
              }
          }, {
              key: "getUserProfile",
              value: function(e) {
                  return this._profileHandler.getUserProfile(e)
              }
          }, {
              key: "updateMyProfile",
              value: function(e) {
                  return this._profileHandler.updateMyProfile(e)
              }
          }, {
              key: "getNickAndAvatarByUserID",
              value: function(e) {
                  return this._profileHandler.getNickAndAvatarByUserID(e)
              }
          }, {
              key: "getLocalBlacklist",
              value: function() {
                  var e = this._blacklistHandler.getLocalBlacklist();
                  return Gr(e)
              }
          }, {
              key: "addBlacklist",
              value: function(e) {
                  return this._blacklistHandler.addBlacklist(e)
              }
          }, {
              key: "deleteBlacklist",
              value: function(e) {
                  return this._blacklistHandler.deleteBlacklist(e)
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._profileHandler.reset(), this._blacklistHandler.reset()
              }
          }]), n
      }(Xt),
      mi = function() {
          function e(t, n) {
              o(this, e), this._moduleManager = t, this._isLoggedIn = !1, this._SDKAppID = n.SDKAppID, this._userID = n.userID || "", this._userSig = n.userSig || "", this._version = "2.14.0", this._a2Key = "", this._tinyID = "", this._contentType = "json", this._unlimitedAVChatRoom = n.unlimitedAVChatRoom, this._scene = n.scene || "", this._oversea = n.oversea, this._instanceID = n.instanceID, this._statusInstanceID = 0
          }
          return s(e, [{
              key: "isLoggedIn",
              value: function() {
                  return this._isLoggedIn
              }
          }, {
              key: "isOversea",
              value: function() {
                  return this._oversea
              }
          }, {
              key: "isUnlimitedAVChatRoom",
              value: function() {
                  return this._unlimitedAVChatRoom
              }
          }, {
              key: "getUserID",
              value: function() {
                  return this._userID
              }
          }, {
              key: "setUserID",
              value: function(e) {
                  this._userID = e
              }
          }, {
              key: "setUserSig",
              value: function(e) {
                  this._userSig = e
              }
          }, {
              key: "getUserSig",
              value: function() {
                  return this._userSig
              }
          }, {
              key: "getSDKAppID",
              value: function() {
                  return this._SDKAppID
              }
          }, {
              key: "getTinyID",
              value: function() {
                  return this._tinyID
              }
          }, {
              key: "setTinyID",
              value: function(e) {
                  this._tinyID = e, this._isLoggedIn = !0
              }
          }, {
              key: "getScene",
              value: function() {
                  return function() {
                      var e = !1,
                          t = [];
                      z && (t = Object.keys(J)), W && (t = Object.keys(window));
                      for (var n = 0, o = t.length; n < o; n++)
                          if (t[n].toLowerCase().includes("uikit")) {
                              e = !0;
                              break
                          } return t = null, e
                  }() ? "tuikit" : this._scene
              }
          }, {
              key: "getInstanceID",
              value: function() {
                  return this._instanceID
              }
          }, {
              key: "getStatusInstanceID",
              value: function() {
                  return this._statusInstanceID
              }
          }, {
              key: "setStatusInstanceID",
              value: function(e) {
                  this._statusInstanceID = e
              }
          }, {
              key: "getVersion",
              value: function() {
                  return this._version
              }
          }, {
              key: "getA2Key",
              value: function() {
                  return this._a2Key
              }
          }, {
              key: "setA2Key",
              value: function(e) {
                  this._a2Key = e
              }
          }, {
              key: "getContentType",
              value: function() {
                  return this._contentType
              }
          }, {
              key: "reset",
              value: function() {
                  this._isLoggedIn = !1, this._userSig = "", this._a2Key = "", this._tinyID = "", this._statusInstanceID = 0
              }
          }]), e
      }(),
      Mi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "SignModule", a._helloInterval = 120, a._lastLoginTs = 0, Fr.mixin(h(a)), a
          }
          return s(n, [{
              key: "onCheckTimer",
              value: function(e) {
                  this.isLoggedIn() && e % this._helloInterval == 0 && this._hello()
              }
          }, {
              key: "login",
              value: function(e) {
                  if (this.isLoggedIn()) {
                      var t = "您已经登录账号".concat(e.userID, "！如需切换账号登录，请先调用 logout 接口登出，再调用 login 接口登录。");
                      return Se.warn(t), Gr({
                          actionStatus: "OK",
                          errorCode: 0,
                          errorInfo: t,
                          repeatLogin: !0
                      })
                  }
                  if (Date.now() - this._lastLoginTs <= 15e3) return Se.warn("您正在尝试登录账号".concat(e.userID, "！请勿重复登录。")), Pr({
                      code: co.REPEAT_LOGIN,
                      message: mo
                  });
                  Se.log("".concat(this._className, ".login userID:").concat(e.userID));
                  var n = this._checkLoginInfo(e);
                  if (0 !== n.code) return Pr(n);
                  var o = this.getModule(Ut),
                      a = e.userID,
                      s = e.userSig;
                  return o.setUserID(a), o.setUserSig(s), this.getModule(jt).updateProtocolConfig(), this._login()
              }
          }, {
              key: "_login",
              value: function() {
                  var e = this,
                      t = this.getModule(Ut),
                      n = new Ga(wa);
                  return n.setMessage("".concat(t.getScene())).setMoreMessage("identifier:".concat(this.getMyUserID())), this._lastLoginTs = Date.now(), this.request({
                      protocolName: Qt
                  }).then((function(o) {
                      e._lastLoginTs = 0;
                      var a = Date.now(),
                          s = null,
                          r = o.data,
                          i = r.a2Key,
                          u = r.tinyID,
                          c = r.helloInterval,
                          l = r.instanceID,
                          d = r.timeStamp;
                      Se.log("".concat(e._className, ".login ok. helloInterval:").concat(c, " instanceID:").concat(l, " timeStamp:").concat(d));
                      var p = 1e3 * d,
                          g = a - n.getStartTs(),
                          h = p + parseInt(g / 2) - a,
                          _ = n.getStartTs() + h;
                      if (n.start(_), function(e, t) {
                              ve = t;
                              var n = new Date;
                              n.setTime(e), Se.info("baseTime from server: ".concat(n, " offset: ").concat(ve))
                          }(p, h), !u) throw s = new Or({
                          code: co.NO_TINYID,
                          message: ho
                      }), n.setError(s, !0, e.getNetworkType()).end(), s;
                      if (!i) throw s = new Or({
                          code: co.NO_A2KEY,
                          message: _o
                      }), n.setError(s, !0, e.getNetworkType()).end(), s;
                      return n.setNetworkType(e.getNetworkType()).setMoreMessage("helloInterval:".concat(c, " instanceID:").concat(l, " offset:").concat(h)).end(), t.setA2Key(i), t.setTinyID(u), t.setStatusInstanceID(l), e.getModule(jt).updateProtocolConfig(), e.emitInnerEvent(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED), e._helloInterval = c, e.triggerReady(), e._fetchCloudControlConfig(), o
                  })).catch((function(t) {
                      return e.probeNetwork().then((function(e) {
                          var o = m(e, 2),
                              a = o[0],
                              s = o[1];
                          n.setError(t, a, s).end(!0)
                      })), Se.error("".concat(e._className, ".login failed. error:"), t), e._moduleManager.onLoginFailed(), Pr(t)
                  }))
              }
          }, {
              key: "logout",
              value: function() {
                  var e = this,
                      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  if (!this.isLoggedIn()) return Pr({
                      code: co.USER_NOT_LOGGED_IN,
                      message: fo
                  });
                  var n = new Ga(Ua);
                  return n.setNetworkType(this.getNetworkType()).setMessage("identifier:".concat(this.getMyUserID())).end(!0), Se.info("".concat(this._className, ".logout type:").concat(t)), this.request({
                      protocolName: Zt,
                      requestData: {
                          type: t
                      }
                  }).then((function() {
                      return e.resetReady(), Gr({})
                  })).catch((function(t) {
                      return Se.error("".concat(e._className, "._logout error:"), t), e.resetReady(), Gr({})
                  }))
              }
          }, {
              key: "_fetchCloudControlConfig",
              value: function() {
                  this.getModule(zt).fetchConfig()
              }
          }, {
              key: "_hello",
              value: function() {
                  var e = this;
                  this.request({
                      protocolName: en
                  }).catch((function(t) {
                      Se.warn("".concat(e._className, "._hello error:"), t)
                  }))
              }
          }, {
              key: "_checkLoginInfo",
              value: function(e) {
                  var t = 0,
                      n = "";
                  return _t(this.getModule(Ut).getSDKAppID()) ? (t = co.NO_SDKAPPID, n = lo) : _t(e.userID) ? (t = co.NO_IDENTIFIER, n = po) : _t(e.userSig) && (t = co.NO_USERSIG, n = go), {
                      code: t,
                      message: n
                  }
              }
          }, {
              key: "onMultipleAccountKickedOut",
              value: function(e) {
                  var t = this;
                  new Ga(Fa).setNetworkType(this.getNetworkType()).setMessage("type:".concat(E.KICKED_OUT_MULT_ACCOUNT, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Se.warn("".concat(this._className, ".onMultipleAccountKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout(1).then((function() {
                      t.emitOuterEvent(S.KICKED_OUT, {
                          type: E.KICKED_OUT_MULT_ACCOUNT
                      }), t._moduleManager.reset()
                  }))
              }
          }, {
              key: "onMultipleDeviceKickedOut",
              value: function(e) {
                  var t = this;
                  new Ga(Fa).setNetworkType(this.getNetworkType()).setMessage("type:".concat(E.KICKED_OUT_MULT_DEVICE, " newInstanceInfo:").concat(JSON.stringify(e))).end(!0), Se.warn("".concat(this._className, ".onMultipleDeviceKickedOut userID:").concat(this.getMyUserID(), " newInstanceInfo:"), e), this.logout(1).then((function() {
                      t.emitOuterEvent(S.KICKED_OUT, {
                          type: E.KICKED_OUT_MULT_DEVICE
                      }), t._moduleManager.reset()
                  }))
              }
          }, {
              key: "onUserSigExpired",
              value: function() {
                  new Ga(Fa).setNetworkType(this.getNetworkType()).setMessage(E.KICKED_OUT_USERSIG_EXPIRED).end(!0), Se.warn("".concat(this._className, ".onUserSigExpired: userSig 签名过期被踢下线")), 0 !== this.getModule(Ut).getStatusInstanceID() && (this.emitOuterEvent(S.KICKED_OUT, {
                      type: E.KICKED_OUT_USERSIG_EXPIRED
                  }), this._moduleManager.reset())
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this.resetReady(), this._helloInterval = 120, this._lastLoginTs = 0
              }
          }]), n
      }(Xt);

  function vi() {
      return null
  }
  var yi = function() {
          function e(t) {
              o(this, e), this._moduleManager = t, this._className = "StorageModule", this._storageQueue = new Map, this._errorTolerantHandle()
          }
          return s(e, [{
              key: "_errorTolerantHandle",
              value: function() {
                  z || !Ge(window) && !Ge(window.localStorage) || (this.getItem = vi, this.setItem = vi, this.removeItem = vi, this.clear = vi)
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  if (e % 20 == 0) {
                      if (0 === this._storageQueue.size) return;
                      this._doFlush()
                  }
              }
          }, {
              key: "_doFlush",
              value: function() {
                  try {
                      var e, t = C(this._storageQueue);
                      try {
                          for (t.s(); !(e = t.n()).done;) {
                              var n = m(e.value, 2),
                                  o = n[0],
                                  a = n[1];
                              this._setStorageSync(this._getKey(o), a)
                          }
                      } catch (s) {
                          t.e(s)
                      } finally {
                          t.f()
                      }
                      this._storageQueue.clear()
                  } catch (r) {
                      Se.warn("".concat(this._className, "._doFlush error:"), r)
                  }
              }
          }, {
              key: "_getPrefix",
              value: function() {
                  var e = this._moduleManager.getModule(Ut);
                  return "TIM_".concat(e.getSDKAppID(), "_").concat(e.getUserID(), "_")
              }
          }, {
              key: "_getKey",
              value: function(e) {
                  return "".concat(this._getPrefix()).concat(e)
              }
          }, {
              key: "getItem",
              value: function(e) {
                  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  try {
                      var n = t ? this._getKey(e) : e;
                      return this._getStorageSync(n)
                  } catch (o) {
                      return Se.warn("".concat(this._className, ".getItem error:"), o), {}
                  }
              }
          }, {
              key: "setItem",
              value: function(e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                  if (n) {
                      var a = o ? this._getKey(e) : e;
                      this._setStorageSync(a, t)
                  } else this._storageQueue.set(e, t)
              }
          }, {
              key: "clear",
              value: function() {
                  try {
                      z ? J.clearStorageSync() : localStorage && localStorage.clear()
                  } catch (e) {
                      Se.warn("".concat(this._className, ".clear error:"), e)
                  }
              }
          }, {
              key: "removeItem",
              value: function(e) {
                  var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  try {
                      var n = t ? this._getKey(e) : e;
                      this._removeStorageSync(n)
                  } catch (o) {
                      Se.warn("".concat(this._className, ".removeItem error:"), o)
                  }
              }
          }, {
              key: "getSize",
              value: function(e) {
                  var t = this,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "b";
                  try {
                      var o = {
                          size: 0,
                          limitSize: 5242880,
                          unit: n
                      };
                      if (Object.defineProperty(o, "leftSize", {
                              enumerable: !0,
                              get: function() {
                                  return o.limitSize - o.size
                              }
                          }), z && (o.limitSize = 1024 * J.getStorageInfoSync().limitSize), e) o.size = JSON.stringify(this.getItem(e)).length + this._getKey(e).length;
                      else if (z) {
                          var a = J.getStorageInfoSync(),
                              s = a.keys;
                          s.forEach((function(e) {
                              o.size += JSON.stringify(t._getStorageSync(e)).length + t._getKey(e).length
                          }))
                      } else if (localStorage)
                          for (var r in localStorage) localStorage.hasOwnProperty(r) && (o.size += localStorage.getItem(r).length + r.length);
                      return this._convertUnit(o)
                  } catch (i) {
                      Se.warn("".concat(this._className, " error:"), i)
                  }
              }
          }, {
              key: "_convertUnit",
              value: function(e) {
                  var t = {},
                      n = e.unit;
                  for (var o in t.unit = n, e) "number" == typeof e[o] && ("kb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024) : "mb" === n.toLowerCase() ? t[o] = Math.round(e[o] / 1024 / 1024) : t[o] = e[o]);
                  return t
              }
          }, {
              key: "_setStorageSync",
              value: function(e, t) {
                  z ? Y ? my.setStorageSync({
                      key: e,
                      data: t
                  }) : J.setStorageSync(e, t) : localStorage && localStorage.setItem(e, JSON.stringify(t))
              }
          }, {
              key: "_getStorageSync",
              value: function(e) {
                  return z ? Y ? my.getStorageSync({
                      key: e
                  }).data : J.getStorageSync(e) : localStorage ? JSON.parse(localStorage.getItem(e)) : {}
              }
          }, {
              key: "_removeStorageSync",
              value: function(e) {
                  z ? Y ? my.removeStorageSync({
                      key: e
                  }) : J.removeStorageSync(e) : localStorage && localStorage.removeItem(e)
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._doFlush()
              }
          }]), e
      }(),
      Ii = function() {
          function e(t) {
              o(this, e), this._className = "SSOLogBody", this._report = []
          }
          return s(e, [{
              key: "pushIn",
              value: function(e) {
                  Se.debug("".concat(this._className, ".pushIn"), this._report.length, e), this._report.push(e)
              }
          }, {
              key: "backfill",
              value: function(e) {
                  var t;
                  Re(e) && 0 !== e.length && (Se.debug("".concat(this._className, ".backfill"), this._report.length, e.length), (t = this._report).unshift.apply(t, M(e)))
              }
          }, {
              key: "getLogsNumInMemory",
              value: function() {
                  return this._report.length
              }
          }, {
              key: "isEmpty",
              value: function() {
                  return 0 === this._report.length
              }
          }, {
              key: "_reset",
              value: function() {
                  this._report.length = 0, this._report = []
              }
          }, {
              key: "getLogsInMemory",
              value: function() {
                  var e = this._report.slice();
                  return this._reset(), e
              }
          }]), e
      }(),
      Ti = function(e) {
          var t = e.getModule(Ut);
          return {
              SDKType: 10,
              SDKAppID: t.getSDKAppID(),
              SDKVersion: t.getVersion(),
              tinyID: Number(t.getTinyID()),
              userID: t.getUserID(),
              platform: e.getPlatform(),
              instanceID: t.getInstanceID(),
              traceID: ye()
          }
      },
      Di = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              o(this, a), (t = n.call(this, e))._className = "EventStatModule", t.TAG = "im-ssolog-event", t._reportBody = new Ii, t.MIN_THRESHOLD = 20, t.MAX_THRESHOLD = 100, t.WAITING_TIME = 6e4, t.REPORT_LEVEL = [4, 5, 6], t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [], t._lastReportTime = Date.now();
              var s = t.getInnerEmitterInstance();
              return s.on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), s.on(Ur.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t
          }
          return s(a, [{
              key: "reportAtOnce",
              value: function() {
                  Se.debug("".concat(this._className, ".reportAtOnce")), this._report()
              }
          }, {
              key: "_onLoginSuccess",
              value: function() {
                  var e = this,
                      t = this.getModule(Ft),
                      n = t.getItem(this.TAG, !1);
                  !_t(n) && be(n.forEach) && (Se.log("".concat(this._className, "._onLoginSuccess get ssolog in storage, count:").concat(n.length)), n.forEach((function(t) {
                      e._reportBody.pushIn(t)
                  })), t.removeItem(this.TAG, !1))
              }
          }, {
              key: "_onCloudConfigUpdated",
              value: function() {
                  var e = this.getCloudConfig("evt_rpt_threshold"),
                      t = this.getCloudConfig("evt_rpt_waiting"),
                      n = this.getCloudConfig("evt_rpt_level"),
                      o = this.getCloudConfig("evt_rpt_sdkappid_bl"),
                      a = this.getCloudConfig("evt_rpt_tinyid_wl");
                  Ge(e) || (this.MIN_THRESHOLD = Number(e)), Ge(t) || (this.WAITING_TIME = Number(t)), Ge(n) || (this.REPORT_LEVEL = n.split(",").map((function(e) {
                      return Number(e)
                  }))), Ge(o) || (this.REPORT_SDKAPPID_BLACKLIST = o.split(",").map((function(e) {
                      return Number(e)
                  }))), Ge(a) || (this.REPORT_TINYID_WHITELIST = a.split(","))
              }
          }, {
              key: "pushIn",
              value: function(e) {
                  e instanceof Ga && (e.updateTimeStamp(), this._reportBody.pushIn(e), this._reportBody.getLogsNumInMemory() >= this.MIN_THRESHOLD && this._report())
              }
          }, {
              key: "onCheckTimer",
              value: function() {
                  Date.now() < this._lastReportTime + this.WAITING_TIME || this._reportBody.isEmpty() || this._report()
              }
          }, {
              key: "_filterLogs",
              value: function(e) {
                  var t = this,
                      n = this.getModule(Ut),
                      o = n.getSDKAppID(),
                      a = n.getTinyID();
                  return pt(this.REPORT_SDKAPPID_BLACKLIST, o) && !gt(this.REPORT_TINYID_WHITELIST, a) ? [] : e.filter((function(e) {
                      return t.REPORT_LEVEL.includes(e.level)
                  }))
              }
          }, {
              key: "_report",
              value: function() {
                  var e = this;
                  if (!this._reportBody.isEmpty()) {
                      var n = this._reportBody.getLogsInMemory(),
                          o = this._filterLogs(n);
                      if (0 !== o.length) {
                          var a = {
                              header: Ti(this),
                              event: o
                          };
                          this.request({
                              protocolName: eo,
                              requestData: t({}, a)
                          }).then((function() {
                              e._lastReportTime = Date.now()
                          })).catch((function(t) {
                              Se.warn("".concat(e._className, ".report failed. networkType:").concat(e.getNetworkType(), " error:"), t), e._reportBody.backfill(n), e._reportBody.getLogsNumInMemory() > e.MAX_THRESHOLD && e._flushAtOnce()
                          }))
                      } else this._lastReportTime = Date.now()
                  }
              }
          }, {
              key: "_flushAtOnce",
              value: function() {
                  var e = this.getModule(Ft),
                      t = e.getItem(this.TAG, !1),
                      n = this._reportBody.getLogsInMemory();
                  if (_t(t)) Se.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
                  else {
                      var o = n.concat(t);
                      o.length > this.MAX_THRESHOLD && (o = o.slice(0, this.MAX_THRESHOLD)), Se.log("".concat(this._className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1)
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._lastReportTime = 0, this._report(), this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = []
              }
          }]), a
      }(Xt),
      Ci = "none",
      Si = "online",
      Ei = function() {
          function e(t) {
              o(this, e), this._moduleManager = t, this._networkType = "", this._className = "NetMonitorModule", this.MAX_WAIT_TIME = 3e3
          }
          return s(e, [{
              key: "start",
              value: function() {
                  var e = this;
                  if (z) {
                      J.getNetworkType({
                          success: function(t) {
                              e._networkType = t.networkType, t.networkType === Ci ? Se.warn("".concat(e._className, ".start no network, please check!")) : Se.info("".concat(e._className, ".start networkType:").concat(t.networkType))
                          }
                      });
                      var t = this._onNetworkStatusChange.bind(this);
                      J.offNetworkStatusChange && ($ || H ? J.offNetworkStatusChange(t) : J.offNetworkStatusChange()), J.onNetworkStatusChange(t)
                  } else this._networkType = Si
              }
          }, {
              key: "_onNetworkStatusChange",
              value: function(e) {
                  e.isConnected ? (Se.info("".concat(this._className, "._onNetworkStatusChange previousNetworkType:").concat(this._networkType, " currentNetworkType:").concat(e.networkType)), this._networkType !== e.networkType && this._moduleManager.getModule(Yt).reConnect()) : Se.warn("".concat(this._className, "._onNetworkStatusChange no network, please check!"));
                  this._networkType = e.networkType
              }
          }, {
              key: "probe",
              value: function() {
                  var e = this;
                  return new Promise((function(t, n) {
                      if (z) J.getNetworkType({
                          success: function(n) {
                              e._networkType = n.networkType, n.networkType === Ci ? (Se.warn("".concat(e._className, ".probe no network, please check!")), t([!1, n.networkType])) : (Se.info("".concat(e._className, ".probe networkType:").concat(n.networkType)), t([!0, n.networkType]))
                          }
                      });
                      else if (window && window.fetch) fetch("".concat(We(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())).then((function(e) {
                          e.ok ? t([!0, Si]) : t([!1, Ci])
                      })).catch((function(e) {
                          t([!1, Ci])
                      }));
                      else {
                          var o = new XMLHttpRequest,
                              a = setTimeout((function() {
                                  Se.warn("".concat(e._className, ".probe fetch timeout. Probably no network, please check!")), o.abort(), e._networkType = Ci, t([!1, Ci])
                              }), e.MAX_WAIT_TIME);
                          o.onreadystatechange = function() {
                              4 === o.readyState && (clearTimeout(a), 200 === o.status || 304 === o.status ? (this._networkType = Si, t([!0, Si])) : (Se.warn("".concat(this.className, ".probe fetch status:").concat(o.status, ". Probably no network, please check!")), this._networkType = Ci, t([!1, Ci])))
                          }, o.open("GET", "".concat(We(), "//web.sdk.qcloud.com/im/assets/speed.xml?random=").concat(Math.random())), o.send()
                      }
                  }))
              }
          }, {
              key: "getNetworkType",
              value: function() {
                  return this._networkType
              }
          }]), e
      }(),
      ki = N((function(e) {
          var t = Object.prototype.hasOwnProperty,
              n = "~";

          function o() {}

          function a(e, t, n) {
              this.fn = e, this.context = t, this.once = n || !1
          }

          function s(e, t, o, s, r) {
              if ("function" != typeof o) throw new TypeError("The listener must be a function");
              var i = new a(o, s || e, r),
                  u = n ? n + t : t;
              return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], i] : e._events[u].push(i) : (e._events[u] = i, e._eventsCount++), e
          }

          function r(e, t) {
              0 == --e._eventsCount ? e._events = new o : delete e._events[t]
          }

          function i() {
              this._events = new o, this._eventsCount = 0
          }
          Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), i.prototype.eventNames = function() {
              var e, o, a = [];
              if (0 === this._eventsCount) return a;
              for (o in e = this._events) t.call(e, o) && a.push(n ? o.slice(1) : o);
              return Object.getOwnPropertySymbols ? a.concat(Object.getOwnPropertySymbols(e)) : a
          }, i.prototype.listeners = function(e) {
              var t = n ? n + e : e,
                  o = this._events[t];
              if (!o) return [];
              if (o.fn) return [o.fn];
              for (var a = 0, s = o.length, r = new Array(s); a < s; a++) r[a] = o[a].fn;
              return r
          }, i.prototype.listenerCount = function(e) {
              var t = n ? n + e : e,
                  o = this._events[t];
              return o ? o.fn ? 1 : o.length : 0
          }, i.prototype.emit = function(e, t, o, a, s, r) {
              var i = n ? n + e : e;
              if (!this._events[i]) return !1;
              var u, c, l = this._events[i],
                  d = arguments.length;
              if (l.fn) {
                  switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                      case 1:
                          return l.fn.call(l.context), !0;
                      case 2:
                          return l.fn.call(l.context, t), !0;
                      case 3:
                          return l.fn.call(l.context, t, o), !0;
                      case 4:
                          return l.fn.call(l.context, t, o, a), !0;
                      case 5:
                          return l.fn.call(l.context, t, o, a, s), !0;
                      case 6:
                          return l.fn.call(l.context, t, o, a, s, r), !0
                  }
                  for (c = 1, u = new Array(d - 1); c < d; c++) u[c - 1] = arguments[c];
                  l.fn.apply(l.context, u)
              } else {
                  var p, g = l.length;
                  for (c = 0; c < g; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), d) {
                      case 1:
                          l[c].fn.call(l[c].context);
                          break;
                      case 2:
                          l[c].fn.call(l[c].context, t);
                          break;
                      case 3:
                          l[c].fn.call(l[c].context, t, o);
                          break;
                      case 4:
                          l[c].fn.call(l[c].context, t, o, a);
                          break;
                      default:
                          if (!u)
                              for (p = 1, u = new Array(d - 1); p < d; p++) u[p - 1] = arguments[p];
                          l[c].fn.apply(l[c].context, u)
                  }
              }
              return !0
          }, i.prototype.on = function(e, t, n) {
              return s(this, e, t, n, !1)
          }, i.prototype.once = function(e, t, n) {
              return s(this, e, t, n, !0)
          }, i.prototype.removeListener = function(e, t, o, a) {
              var s = n ? n + e : e;
              if (!this._events[s]) return this;
              if (!t) return r(this, s), this;
              var i = this._events[s];
              if (i.fn) i.fn !== t || a && !i.once || o && i.context !== o || r(this, s);
              else {
                  for (var u = 0, c = [], l = i.length; u < l; u++)(i[u].fn !== t || a && !i[u].once || o && i[u].context !== o) && c.push(i[u]);
                  c.length ? this._events[s] = 1 === c.length ? c[0] : c : r(this, s)
              }
              return this
          }, i.prototype.removeAllListeners = function(e) {
              var t;
              return e ? (t = n ? n + e : e, this._events[t] && r(this, t)) : (this._events = new o, this._eventsCount = 0), this
          }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prefixed = n, i.EventEmitter = i, e.exports = i
      })),
      Ai = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "BigDataChannelModule", a.FILETYPE = {
                  SOUND: 2106,
                  FILE: 2107,
                  VIDEO: 2113
              }, a._bdh_download_server = "grouptalk.c2c.qq.com", a._BDHBizID = 10001, a._authKey = "", a._expireTime = 0, a.getInnerEmitterInstance().on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, a._getAuthKey, h(a)), a
          }
          return s(n, [{
              key: "_getAuthKey",
              value: function() {
                  var e = this;
                  this.request({
                      protocolName: nn
                  }).then((function(t) {
                      t.data.authKey && (e._authKey = t.data.authKey, e._expireTime = parseInt(t.data.expireTime))
                  }))
              }
          }, {
              key: "_isFromOlderVersion",
              value: function(e) {
                  return !(!e.content || 2 === e.content.downloadFlag)
              }
          }, {
              key: "parseElements",
              value: function(e, t) {
                  if (!Re(e) || !t) return [];
                  for (var n = [], o = null, a = 0; a < e.length; a++) o = e[a], this._needParse(o) ? n.push(this._parseElement(o, t)) : n.push(e[a]);
                  return n
              }
          }, {
              key: "_needParse",
              value: function(e) {
                  return !e.cloudCustomData && !(!this._isFromOlderVersion(e) || e.type !== E.MSG_AUDIO && e.type !== E.MSG_FILE && e.type !== E.MSG_VIDEO)
              }
          }, {
              key: "_parseElement",
              value: function(e, t) {
                  switch (e.type) {
                      case E.MSG_AUDIO:
                          return this._parseAudioElement(e, t);
                      case E.MSG_FILE:
                          return this._parseFileElement(e, t);
                      case E.MSG_VIDEO:
                          return this._parseVideoElement(e, t)
                  }
              }
          }, {
              key: "_parseAudioElement",
              value: function(e, t) {
                  return e.content.url = this._genAudioUrl(e.content.uuid, t), e
              }
          }, {
              key: "_parseFileElement",
              value: function(e, t) {
                  return e.content.url = this._genFileUrl(e.content.uuid, t, e.content.fileName), e
              }
          }, {
              key: "_parseVideoElement",
              value: function(e, t) {
                  return e.content.url = this._genVideoUrl(e.content.uuid, t), e
              }
          }, {
              key: "_genAudioUrl",
              value: function(e, t) {
                  if ("" === this._authKey) return Se.warn("".concat(this._className, "._genAudioUrl no authKey!")), "";
                  var n = this.getModule(Ut).getSDKAppID();
                  return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.SOUND, "&openid=").concat(t, "&ver=0")
              }
          }, {
              key: "_genFileUrl",
              value: function(e, t, n) {
                  if ("" === this._authKey) return Se.warn("".concat(this._className, "._genFileUrl no authKey!")), "";
                  n || (n = "".concat(Math.floor(1e5 * Math.random()), "-").concat(Date.now()));
                  var o = this.getModule(Ut).getSDKAppID();
                  return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(o, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.FILE, "&openid=").concat(t, "&ver=0&filename=").concat(encodeURIComponent(n))
              }
          }, {
              key: "_genVideoUrl",
              value: function(e, t) {
                  if ("" === this._authKey) return Se.warn("".concat(this._className, "._genVideoUrl no authKey!")), "";
                  var n = this.getModule(Ut).getSDKAppID();
                  return "https://".concat(this._bdh_download_server, "/asn.com/stddownload_common_file?authkey=").concat(this._authKey, "&bid=").concat(this._BDHBizID, "&subbid=").concat(n, "&fileid=").concat(e, "&filetype=").concat(this.FILETYPE.VIDEO, "&openid=").concat(t, "&ver=0")
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._authKey = "", this.expireTime = 0
              }
          }]), n
      }(Xt),
      Ni = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              return o(this, a), (t = n.call(this, e))._className = "UploadModule", t.TIMUploadPlugin = null, t.timUploadPlugin = null, t.COSSDK = null, t._cosUploadMethod = null, t.expiredTimeLimit = 600, t.appid = 0, t.bucketName = "", t.ciUrl = "", t.directory = "", t.downloadUrl = "", t.uploadUrl = "", t.region = "ap-shanghai", t.cos = null, t.cosOptions = {
                  secretId: "",
                  secretKey: "",
                  sessionToken: "",
                  expiredTime: 0
              }, t.uploadFileType = "", t.duration = 900, t.tryCount = 0, t.getInnerEmitterInstance().on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._init, h(t)), t
          }
          return s(a, [{
              key: "_init",
              value: function() {
                  var e = "".concat(this._className, "._init"),
                      t = this.getModule(Bt);
                  if (this.TIMUploadPlugin = t.getPlugin("tim-upload-plugin"), this.TIMUploadPlugin) this._initUploaderMethod();
                  else {
                      var n = z ? "cos-wx-sdk" : "cos-js-sdk";
                      this.COSSDK = t.getPlugin(n), this.COSSDK ? (this._getAuthorizationKey(), Se.warn("".concat(e, " v2.9.2起推荐使用 tim-upload-plugin 代替 ").concat(n, "，上传更快更安全。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))) : Se.warn("".concat(e, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin"))
                  }
              }
          }, {
              key: "_getAuthorizationKey",
              value: function() {
                  var e = this,
                      t = new Ga(Ha),
                      n = Math.ceil(Date.now() / 1e3);
                  this.request({
                      protocolName: Qn,
                      requestData: {
                          duration: this.expiredTimeLimit
                      }
                  }).then((function(o) {
                      var a = o.data;
                      Se.log("".concat(e._className, "._getAuthorizationKey ok. data:"), a);
                      var s = a.expiredTime - n;
                      t.setMessage("requestId:".concat(a.requestId, " requestTime:").concat(n, " expiredTime:").concat(a.expiredTime, " diff:").concat(s, "s")).setNetworkType(e.getNetworkType()).end(), !z && a.region && (e.region = a.region), e.appid = a.appid, e.bucketName = a.bucketName, e.ciUrl = a.ciUrl, e.directory = a.directory, e.downloadUrl = a.downloadUrl, e.uploadUrl = a.uploadUrl, e.cosOptions = {
                          secretId: a.secretId,
                          secretKey: a.secretKey,
                          sessionToken: a.sessionToken,
                          expiredTime: a.expiredTime
                      }, Se.log("".concat(e._className, "._getAuthorizationKey ok. region:").concat(e.region, " bucketName:").concat(e.bucketName)), e._initUploaderMethod()
                  })).catch((function(n) {
                      e.probeNetwork().then((function(e) {
                          var o = m(e, 2),
                              a = o[0],
                              s = o[1];
                          t.setError(n, a, s).end()
                      })), Se.warn("".concat(e._className, "._getAuthorizationKey failed. error:"), n)
                  }))
              }
          }, {
              key: "_getCosPreSigUrl",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, "._getCosPreSigUrl"),
                      o = Math.ceil(Date.now() / 1e3),
                      a = new Ga(ja);
                  return this.request({
                      protocolName: Zn,
                      requestData: {
                          fileType: e.fileType,
                          fileName: e.fileName,
                          uploadMethod: e.uploadMethod,
                          duration: e.duration
                      }
                  }).then((function(e) {
                      t.tryCount = 0;
                      var s = e.data || {},
                          r = s.expiredTime - o;
                      return Se.log("".concat(n, " ok. data:"), s), a.setMessage("requestId:".concat(s.requestId, " expiredTime:").concat(s.expiredTime, " diff:").concat(r, "s")).setNetworkType(t.getNetworkType()).end(), s
                  })).catch((function(o) {
                      return -1 === o.code && (o.code = co.COS_GET_SIG_FAIL), t.probeNetwork().then((function(e) {
                          var t = m(e, 2),
                              n = t[0],
                              s = t[1];
                          a.setError(o, n, s).end()
                      })), Se.warn("".concat(n, " failed. error:"), o), t.tryCount < 1 ? (t.tryCount++, t._getCosPreSigUrl(e)) : (t.tryCount = 0, Pr({
                          code: co.COS_GET_SIG_FAIL,
                          message: vo
                      }))
                  }))
              }
          }, {
              key: "_initUploaderMethod",
              value: function() {
                  var e = this;
                  if (this.TIMUploadPlugin) return this.timUploadPlugin = new this.TIMUploadPlugin, void(this._cosUploadMethod = function(t, n) {
                      e.timUploadPlugin.uploadFile(t, n)
                  });
                  this.appid && (this.cos = z ? new this.COSSDK({
                      ForcePathStyle: !0,
                      getAuthorization: this._getAuthorization.bind(this)
                  }) : new this.COSSDK({
                      getAuthorization: this._getAuthorization.bind(this)
                  }), this._cosUploadMethod = z ? function(t, n) {
                      e.cos.postObject(t, n)
                  } : function(t, n) {
                      e.cos.uploadFiles(t, n)
                  })
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  this.COSSDK && (this.TIMUploadPlugin || this.isLoggedIn() && e % 60 == 0 && Math.ceil(Date.now() / 1e3) >= this.cosOptions.expiredTime - 120 && this._getAuthorizationKey())
              }
          }, {
              key: "_getAuthorization",
              value: function(e, t) {
                  t({
                      TmpSecretId: this.cosOptions.secretId,
                      TmpSecretKey: this.cosOptions.secretKey,
                      XCosSecurityToken: this.cosOptions.sessionToken,
                      ExpiredTime: this.cosOptions.expiredTime
                  })
              }
          }, {
              key: "upload",
              value: function(e) {
                  if (!0 === e.getRelayFlag()) return Promise.resolve();
                  var t = this.getModule(Jt);
                  switch (e.type) {
                      case E.MSG_IMAGE:
                          return t.addTotalCount(Ea), this._uploadImage(e);
                      case E.MSG_FILE:
                          return t.addTotalCount(Ea), this._uploadFile(e);
                      case E.MSG_AUDIO:
                          return t.addTotalCount(Ea), this._uploadAudio(e);
                      case E.MSG_VIDEO:
                          return t.addTotalCount(Ea), this._uploadVideo(e);
                      default:
                          return Promise.resolve()
                  }
              }
          }, {
              key: "_uploadImage",
              value: function(e) {
                  var n = this.getModule(Ot),
                      o = e.getElements()[0],
                      a = n.getMessageOptionByID(e.ID);
                  return this.doUploadImage({
                      file: a.payload.file,
                      to: a.to,
                      onProgress: function(e) {
                          if (o.updatePercent(e), be(a.onProgress)) try {
                              a.onProgress(e)
                          } catch (t) {
                              return Pr({
                                  code: co.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                  message: Co
                              })
                          }
                      }
                  }).then((function(n) {
                      var a = n.location,
                          s = n.fileType,
                          r = n.fileSize,
                          i = n.width,
                          u = n.height,
                          c = Je(a);
                      o.updateImageFormat(s);
                      var l = ut({
                              originUrl: c,
                              originWidth: i,
                              originHeight: u,
                              min: 198
                          }),
                          d = ut({
                              originUrl: c,
                              originWidth: i,
                              originHeight: u,
                              min: 720
                          });
                      return o.updateImageInfoArray([{
                          size: r,
                          url: c,
                          width: i,
                          height: u
                      }, t({}, d), t({}, l)]), e
                  }))
              }
          }, {
              key: "_uploadFile",
              value: function(e) {
                  var t = this.getModule(Ot),
                      n = e.getElements()[0],
                      o = t.getMessageOptionByID(e.ID);
                  return this.doUploadFile({
                      file: o.payload.file,
                      to: o.to,
                      onProgress: function(e) {
                          if (n.updatePercent(e), be(o.onProgress)) try {
                              o.onProgress(e)
                          } catch (t) {
                              return Pr({
                                  code: co.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                  message: Co
                              })
                          }
                      }
                  }).then((function(t) {
                      var o = t.location,
                          a = Je(o);
                      return n.updateFileUrl(a), e
                  }))
              }
          }, {
              key: "_uploadAudio",
              value: function(e) {
                  var t = this.getModule(Ot),
                      n = e.getElements()[0],
                      o = t.getMessageOptionByID(e.ID);
                  return this.doUploadAudio({
                      file: o.payload.file,
                      to: o.to,
                      onProgress: function(e) {
                          if (n.updatePercent(e), be(o.onProgress)) try {
                              o.onProgress(e)
                          } catch (t) {
                              return Pr({
                                  code: co.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                  message: Co
                              })
                          }
                      }
                  }).then((function(t) {
                      var o = t.location,
                          a = Je(o);
                      return n.updateAudioUrl(a), e
                  }))
              }
          }, {
              key: "_uploadVideo",
              value: function(e) {
                  var t = this.getModule(Ot),
                      n = e.getElements()[0],
                      o = t.getMessageOptionByID(e.ID);
                  return this.doUploadVideo({
                      file: o.payload.file,
                      to: o.to,
                      onProgress: function(e) {
                          if (n.updatePercent(e), be(o.onProgress)) try {
                              o.onProgress(e)
                          } catch (t) {
                              return Pr({
                                  code: co.MESSAGE_ONPROGRESS_FUNCTION_ERROR,
                                  message: Co
                              })
                          }
                      }
                  }).then((function(t) {
                      var o = Je(t.location);
                      return n.updateVideoUrl(o), e
                  }))
              }
          }, {
              key: "doUploadImage",
              value: function(e) {
                  if (!e.file) return Pr({
                      code: co.MESSAGE_IMAGE_SELECT_FILE_FIRST,
                      message: ko
                  });
                  var t = this._checkImageType(e.file);
                  if (!0 !== t) return t;
                  var n = this._checkImageSize(e.file);
                  if (!0 !== n) return n;
                  var o = null;
                  return this._setUploadFileType(Kr), this.uploadByCOS(e).then((function(e) {
                      return o = e, t = "https://".concat(e.location), z ? new Promise((function(e, n) {
                          J.getImageInfo({
                              src: t,
                              success: function(t) {
                                  e({
                                      width: t.width,
                                      height: t.height
                                  })
                              },
                              fail: function() {
                                  e({
                                      width: 0,
                                      height: 0
                                  })
                              }
                          })
                      })) : ue && 9 === ce ? Promise.resolve({
                          width: 0,
                          height: 0
                      }) : new Promise((function(e, n) {
                          var o = new Image;
                          o.onload = function() {
                              e({
                                  width: this.width,
                                  height: this.height
                              }), o = null
                          }, o.onerror = function() {
                              e({
                                  width: 0,
                                  height: 0
                              }), o = null
                          }, o.src = t
                      }));
                      var t
                  })).then((function(e) {
                      return o.width = e.width, o.height = e.height, Promise.resolve(o)
                  }))
              }
          }, {
              key: "_checkImageType",
              value: function(e) {
                  var t = "";
                  return t = z ? e.url.slice(e.url.lastIndexOf(".") + 1) : e.files[0].name.slice(e.files[0].name.lastIndexOf(".") + 1), qr.indexOf(t.toLowerCase()) >= 0 || Pr({
                      code: co.MESSAGE_IMAGE_TYPES_LIMIT,
                      message: Ao
                  })
              }
          }, {
              key: "_checkImageSize",
              value: function(e) {
                  var t = 0;
                  return 0 === (t = z ? e.size : e.files[0].size) ? Pr({
                      code: co.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Do)
                  }) : t < 20971520 || Pr({
                      code: co.MESSAGE_IMAGE_SIZE_LIMIT,
                      message: "".concat(No)
                  })
              }
          }, {
              key: "doUploadFile",
              value: function(e) {
                  var t = null;
                  return e.file ? e.file.files[0].size > 104857600 ? Pr(t = {
                      code: co.MESSAGE_FILE_SIZE_LIMIT,
                      message: Uo
                  }) : 0 === e.file.files[0].size ? (t = {
                      code: co.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Do)
                  }, Pr(t)) : (this._setUploadFileType(Hr), this.uploadByCOS(e)) : Pr(t = {
                      code: co.MESSAGE_FILE_SELECT_FILE_FIRST,
                      message: wo
                  })
              }
          }, {
              key: "doUploadVideo",
              value: function(e) {
                  return e.file.videoFile.size > 104857600 ? Pr({
                      code: co.MESSAGE_VIDEO_SIZE_LIMIT,
                      message: "".concat(Go)
                  }) : 0 === e.file.videoFile.size ? Pr({
                      code: co.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Do)
                  }) : -1 === Vr.indexOf(e.file.videoFile.type) ? Pr({
                      code: co.MESSAGE_VIDEO_TYPES_LIMIT,
                      message: "".concat(Po)
                  }) : (this._setUploadFileType(xr), z ? this.handleVideoUpload({
                      file: e.file.videoFile,
                      onProgress: e.onProgress
                  }) : W ? this.handleVideoUpload(e) : void 0)
              }
          }, {
              key: "handleVideoUpload",
              value: function(e) {
                  var t = this;
                  return new Promise((function(n, o) {
                      t.uploadByCOS(e).then((function(e) {
                          n(e)
                      })).catch((function() {
                          t.uploadByCOS(e).then((function(e) {
                              n(e)
                          })).catch((function() {
                              o(new Or({
                                  code: co.MESSAGE_VIDEO_UPLOAD_FAIL,
                                  message: Ro
                              }))
                          }))
                      }))
                  }))
              }
          }, {
              key: "doUploadAudio",
              value: function(e) {
                  return e.file ? e.file.size > 20971520 ? Pr(new Or({
                      code: co.MESSAGE_AUDIO_SIZE_LIMIT,
                      message: "".concat(Lo)
                  })) : 0 === e.file.size ? Pr(new Or({
                      code: co.MESSAGE_FILE_IS_EMPTY,
                      message: "".concat(Do)
                  })) : (this._setUploadFileType(Br), this.uploadByCOS(e)) : Pr(new Or({
                      code: co.MESSAGE_AUDIO_UPLOAD_FAIL,
                      message: Oo
                  }))
              }
          }, {
              key: "uploadByCOS",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, ".uploadByCOS");
                  if (!be(this._cosUploadMethod)) return Se.warn("".concat(n, " 没有检测到上传插件，将无法发送图片、音频、视频、文件等类型的消息。详细请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html#registerPlugin")), Pr({
                      code: co.COS_UNDETECTED,
                      message: Mo
                  });
                  if (this.timUploadPlugin) return this._uploadWithPreSigUrl(e);
                  var o = new Ga(Ya),
                      a = Date.now(),
                      s = z ? e.file : e.file.files[0];
                  return new Promise((function(r, i) {
                      var u = z ? t._createCosOptionsWXMiniApp(e) : t._createCosOptionsWeb(e),
                          c = t;
                      t._cosUploadMethod(u, (function(e, u) {
                          var l = Object.create(null);
                          if (u) {
                              if (e || Re(u.files) && u.files[0].error) {
                                  var d = new Or({
                                      code: co.MESSAGE_FILE_UPLOAD_FAIL,
                                      message: bo
                                  });
                                  return o.setError(d, !0, t.getNetworkType()).end(), Se.log("".concat(n, " failed. error:"), u.files[0].error), 403 === u.files[0].error.statusCode && (Se.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), void i(d)
                              }
                              l.fileName = s.name, l.fileSize = s.size, l.fileType = s.type.slice(s.type.indexOf("/") + 1).toLowerCase(), l.location = z ? u.Location : u.files[0].data.Location;
                              var p = Date.now() - a,
                                  g = c._formatFileSize(s.size),
                                  h = c._formatSpeed(1e3 * s.size / p),
                                  _ = "size:".concat(g, " time:").concat(p, "ms speed:").concat(h);
                              Se.log("".concat(n, " success. name:").concat(s.name, " ").concat(_)), r(l);
                              var f = t.getModule(Jt);
                              return f.addCost(Ea, p), f.addFileSize(Ea, s.size), void o.setNetworkType(t.getNetworkType()).setMessage(_).end()
                          }
                          var m = new Or({
                              code: co.MESSAGE_FILE_UPLOAD_FAIL,
                              message: bo
                          });
                          o.setError(m, !0, c.getNetworkType()).end(), Se.warn("".concat(n, " failed. error:"), e), 403 === e.statusCode && (Se.warn("".concat(n, " failed. cos AccessKeyId was invalid, regain auth key!")), t._getAuthorizationKey()), i(m)
                      }))
                  }))
              }
          }, {
              key: "_uploadWithPreSigUrl",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, "._uploadWithPreSigUrl"),
                      o = z ? e.file : e.file.files[0];
                  return this._createCosOptionsPreSigUrl(e).then((function(e) {
                      return new Promise((function(a, s) {
                          var r = new Ga(Ya);
                          Se.time(va), t._cosUploadMethod(e, (function(e, i) {
                              var u = Object.create(null);
                              if (e || 403 === i.statusCode) {
                                  var c = new Or({
                                      code: co.MESSAGE_FILE_UPLOAD_FAIL,
                                      message: bo
                                  });
                                  return r.setError(c, !0, t.getNetworkType()).end(), Se.log("".concat(n, " failed, error:"), e), void s(c)
                              }
                              var l = i.data.location || "";
                              0 !== l.indexOf("https://") && 0 !== l.indexOf("http://") || (l = l.split("//")[1]), u.fileName = o.name, u.fileSize = o.size, u.fileType = o.type.slice(o.type.indexOf("/") + 1).toLowerCase(), u.location = l;
                              var d = Se.timeEnd(va),
                                  p = t._formatFileSize(o.size),
                                  g = t._formatSpeed(1e3 * o.size / d),
                                  h = "size:".concat(p, ",time:").concat(d, "ms,speed:").concat(g);
                              Se.log("".concat(n, " success name:").concat(o.name, ",").concat(h)), r.setNetworkType(t.getNetworkType()).setMessage(h).end();
                              var _ = t.getModule(Jt);
                              _.addCost(Ea, d), _.addFileSize(Ea, o.size), a(u)
                          }))
                      }))
                  }))
              }
          }, {
              key: "_formatFileSize",
              value: function(e) {
                  return e < 1024 ? e + "B" : e < 1048576 ? Math.floor(e / 1024) + "KB" : Math.floor(e / 1048576) + "MB"
              }
          }, {
              key: "_formatSpeed",
              value: function(e) {
                  return e <= 1048576 ? dt(e / 1024, 1) + "KB/s" : dt(e / 1048576, 1) + "MB/s"
              }
          }, {
              key: "_createCosOptionsWeb",
              value: function(e) {
                  var t = this.getMyUserID(),
                      n = this._genFileName(t, e.to, e.file.files[0].name);
                  return {
                      files: [{
                          Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                          Region: this.region,
                          Key: "".concat(this.directory, "/").concat(n),
                          Body: e.file.files[0]
                      }],
                      SliceSize: 1048576,
                      onProgress: function(t) {
                          if ("function" == typeof e.onProgress) try {
                              e.onProgress(t.percent)
                          } catch (n) {
                              Se.warn("onProgress callback error:", n)
                          }
                      },
                      onFileFinish: function(e, t, n) {}
                  }
              }
          }, {
              key: "_createCosOptionsWXMiniApp",
              value: function(e) {
                  var t = this.getMyUserID(),
                      n = this._genFileName(t, e.to, e.file.name),
                      o = e.file.url;
                  return {
                      Bucket: "".concat(this.bucketName, "-").concat(this.appid),
                      Region: this.region,
                      Key: "".concat(this.directory, "/").concat(n),
                      FilePath: o,
                      onProgress: function(t) {
                          if (Se.log(JSON.stringify(t)), "function" == typeof e.onProgress) try {
                              e.onProgress(t.percent)
                          } catch (n) {
                              Se.warn("onProgress callback error:", n)
                          }
                      }
                  }
              }
          }, {
              key: "_createCosOptionsPreSigUrl",
              value: function(e) {
                  var t = this,
                      n = "",
                      o = "",
                      a = 0;
                  return z ? (n = this._genFileName(e.file.name), o = e.file.url, a = 1) : (n = this._genFileName("".concat(He(999999))), o = e.file.files[0], a = 0), this._getCosPreSigUrl({
                      fileType: this.uploadFileType,
                      fileName: n,
                      uploadMethod: a,
                      duration: this.duration
                  }).then((function(a) {
                      var s = a.uploadUrl,
                          r = a.downloadUrl;
                      return {
                          url: s,
                          fileType: t.uploadFileType,
                          fileName: n,
                          resources: o,
                          downloadUrl: r,
                          onProgress: function(t) {
                              if ("function" == typeof e.onProgress) try {
                                  e.onProgress(t.percent)
                              } catch (n) {
                                  Se.warn("onProgress callback error:", n), Se.error(n)
                              }
                          }
                      }
                  }))
              }
          }, {
              key: "_genFileName",
              value: function(e) {
                  return "".concat(rt(), "-").concat(e)
              }
          }, {
              key: "_setUploadFileType",
              value: function(e) {
                  this.uploadFileType = e
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset"))
              }
          }]), a
      }(Xt),
      Oi = ["downloadKey", "pbDownloadKey", "messageList"],
      Li = function() {
          function e(t) {
              o(this, e), this._className = "MergerMessageHandler", this._messageModule = t
          }
          return s(e, [{
              key: "uploadMergerMessage",
              value: function(e, t) {
                  var n = this;
                  Se.debug("".concat(this._className, ".uploadMergerMessage message:"), e, "messageBytes:".concat(t));
                  var o = e.payload.messageList,
                      a = o.length,
                      s = new Ga(ns);
                  return this._messageModule.request({
                      protocolName: so,
                      requestData: {
                          messageList: o
                      }
                  }).then((function(e) {
                      Se.debug("".concat(n._className, ".uploadMergerMessage ok. response:"), e.data);
                      var o = e.data,
                          r = o.pbDownloadKey,
                          i = o.downloadKey,
                          u = {
                              pbDownloadKey: r,
                              downloadKey: i,
                              messageNumber: a
                          };
                      return s.setNetworkType(n._messageModule.getNetworkType()).setMessage("".concat(a, "-").concat(t, "-").concat(i)).end(), u
                  })).catch((function(e) {
                      throw Se.warn("".concat(n._className, ".uploadMergerMessage failed. error:"), e), n._messageModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          s.setError(e, o, a).end()
                      })), e
                  }))
              }
          }, {
              key: "downloadMergerMessage",
              value: function(e) {
                  var n = this;
                  Se.debug("".concat(this._className, ".downloadMergerMessage message:"), e);
                  var o = e.payload.downloadKey,
                      a = new Ga(os);
                  return a.setMessage("downloadKey:".concat(o)), this._messageModule.request({
                      protocolName: ro,
                      requestData: {
                          downloadKey: o
                      }
                  }).then((function(o) {
                      if (Se.debug("".concat(n._className, ".downloadMergerMessage ok. response:"), o.data), be(e.clearElement)) {
                          var s = e.payload,
                              r = (s.downloadKey, s.pbDownloadKey, s.messageList, g(s, Oi));
                          e.clearElement(), e.setElement({
                              type: e.type,
                              content: t({
                                  messageList: o.data.messageList
                              }, r)
                          })
                      } else {
                          var i = [];
                          o.data.messageList.forEach((function(e) {
                              if (!_t(e)) {
                                  var t = new yr(e);
                                  i.push(t)
                              }
                          })), e.payload.messageList = i, e.payload.downloadKey = "", e.payload.pbDownloadKey = ""
                      }
                      return a.setNetworkType(n._messageModule.getNetworkType()).end(), e
                  })).catch((function(e) {
                      throw Se.warn("".concat(n._className, ".downloadMergerMessage failed. key:").concat(o, " error:"), e), n._messageModule.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              s = n[1];
                          a.setError(e, o, s).end()
                      })), e
                  }))
              }
          }, {
              key: "createMergerMessagePack",
              value: function(e, t, n) {
                  return e.conversationType === E.CONV_C2C ? this._createC2CMergerMessagePack(e, t, n) : this._createGroupMergerMessagePack(e, t, n)
              }
          }, {
              key: "_createC2CMergerMessagePack",
              value: function(e, t, n) {
                  var o = null;
                  t && (t.offlinePushInfo && (o = t.offlinePushInfo), !0 === t.onlineUserOnly && (o ? o.disablePush = !0 : o = {
                      disablePush: !0
                  }));
                  var a = "";
                  Ne(e.cloudCustomData) && e.cloudCustomData.length > 0 && (a = e.cloudCustomData);
                  var s = n.pbDownloadKey,
                      r = n.downloadKey,
                      i = n.messageNumber,
                      u = e.payload,
                      c = u.title,
                      l = u.abstractList,
                      d = u.compatibleText,
                      p = this._messageModule.getModule(Rt);
                  return {
                      protocolName: on,
                      tjgID: this._messageModule.generateTjgID(e),
                      requestData: {
                          fromAccount: this._messageModule.getMyUserID(),
                          toAccount: e.to,
                          msgBody: [{
                              msgType: e.type,
                              msgContent: {
                                  pbDownloadKey: s,
                                  downloadKey: r,
                                  title: c,
                                  abstractList: l,
                                  compatibleText: d,
                                  messageNumber: i
                              }
                          }],
                          cloudCustomData: a,
                          msgSeq: e.sequence,
                          msgRandom: e.random,
                          msgLifeTime: p && p.isOnlineMessage(e, t) ? 0 : void 0,
                          offlinePushInfo: o ? {
                              pushFlag: !0 === o.disablePush ? 1 : 0,
                              title: o.title || "",
                              desc: o.description || "",
                              ext: o.extension || "",
                              apnsInfo: {
                                  badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
                              },
                              androidInfo: {
                                  OPPOChannelID: o.androidOPPOChannelID || ""
                              }
                          } : void 0
                      }
                  }
              }
          }, {
              key: "_createGroupMergerMessagePack",
              value: function(e, t, n) {
                  var o = null;
                  t && t.offlinePushInfo && (o = t.offlinePushInfo);
                  var a = "";
                  Ne(e.cloudCustomData) && e.cloudCustomData.length > 0 && (a = e.cloudCustomData);
                  var s = n.pbDownloadKey,
                      r = n.downloadKey,
                      i = n.messageNumber,
                      u = e.payload,
                      c = u.title,
                      l = u.abstractList,
                      d = u.compatibleText,
                      p = this._messageModule.getModule(Gt);
                  return {
                      protocolName: an,
                      tjgID: this._messageModule.generateTjgID(e),
                      requestData: {
                          fromAccount: this._messageModule.getMyUserID(),
                          groupID: e.to,
                          msgBody: [{
                              msgType: e.type,
                              msgContent: {
                                  pbDownloadKey: s,
                                  downloadKey: r,
                                  title: c,
                                  abstractList: l,
                                  compatibleText: d,
                                  messageNumber: i
                              }
                          }],
                          random: e.random,
                          priority: e.priority,
                          clientSequence: e.clientSequence,
                          groupAtInfo: void 0,
                          cloudCustomData: a,
                          onlineOnlyFlag: p && p.isOnlineMessage(e, t) ? 1 : 0,
                          offlinePushInfo: o ? {
                              pushFlag: !0 === o.disablePush ? 1 : 0,
                              title: o.title || "",
                              desc: o.description || "",
                              ext: o.extension || "",
                              apnsInfo: {
                                  badgeMode: !0 === o.ignoreIOSBadge ? 1 : 0
                              },
                              androidInfo: {
                                  OPPOChannelID: o.androidOPPOChannelID || ""
                              }
                          } : void 0
                      }
                  }
              }
          }]), e
      }(),
      Ri = {
          ERR_SVR_COMM_SENSITIVE_TEXT: 80001,
          ERR_SVR_COMM_BODY_SIZE_LIMIT: 80002,
          ERR_SVR_MSG_PKG_PARSE_FAILED: 20001,
          ERR_SVR_MSG_INTERNAL_AUTH_FAILED: 20002,
          ERR_SVR_MSG_INVALID_ID: 20003,
          ERR_SVR_MSG_PUSH_DENY: 20006,
          ERR_SVR_MSG_IN_PEER_BLACKLIST: 20007,
          ERR_SVR_MSG_BOTH_NOT_FRIEND: 20009,
          ERR_SVR_MSG_NOT_PEER_FRIEND: 20010,
          ERR_SVR_MSG_NOT_SELF_FRIEND: 20011,
          ERR_SVR_MSG_SHUTUP_DENY: 20012,
          ERR_SVR_GROUP_INVALID_PARAMETERS: 10004,
          ERR_SVR_GROUP_PERMISSION_DENY: 10007,
          ERR_SVR_GROUP_NOT_FOUND: 10010,
          ERR_SVR_GROUP_INVALID_GROUPID: 10015,
          ERR_SVR_GROUP_REJECT_FROM_THIRDPARTY: 10016,
          ERR_SVR_GROUP_SHUTUP_DENY: 10017,
          MESSAGE_SEND_FAIL: 2100
      },
      Gi = [co.MESSAGE_ONPROGRESS_FUNCTION_ERROR, co.MESSAGE_IMAGE_SELECT_FILE_FIRST, co.MESSAGE_IMAGE_TYPES_LIMIT, co.MESSAGE_FILE_IS_EMPTY, co.MESSAGE_IMAGE_SIZE_LIMIT, co.MESSAGE_FILE_SELECT_FILE_FIRST, co.MESSAGE_FILE_SIZE_LIMIT, co.MESSAGE_VIDEO_SIZE_LIMIT, co.MESSAGE_VIDEO_TYPES_LIMIT, co.MESSAGE_AUDIO_UPLOAD_FAIL, co.MESSAGE_AUDIO_SIZE_LIMIT, co.COS_UNDETECTED];
  var Pi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "MessageModule", a._messageOptionsMap = new Map, a._mergerMessageHandler = new Li(h(a)), a
          }
          return s(n, [{
              key: "createTextMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t;
                  var n = new Dr(e),
                      o = "string" == typeof e.payload ? e.payload : e.payload.text,
                      a = new tr({
                          text: o
                      }),
                      s = this._getNickAndAvatarByUserID(t);
                  return n.setElement(a), n.setNickAndAvatar(s), n.setNameCard(this._getNameCardByGroupID(n)), n
              }
          }, {
              key: "createImageMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t;
                  var n = new Dr(e);
                  if (z) {
                      var o = e.payload.file;
                      if (ke(o)) return void Se.warn("小程序环境下调用 createImageMessage 接口时，payload.file 不支持传入 File 对象");
                      var a = o.tempFilePaths[0],
                          s = {
                              url: a,
                              name: a.slice(a.lastIndexOf("/") + 1),
                              size: o.tempFiles && o.tempFiles[0].size || 1,
                              type: a.slice(a.lastIndexOf(".") + 1).toLowerCase()
                          };
                      e.payload.file = s
                  } else if (W)
                      if (ke(e.payload.file)) {
                          var r = e.payload.file;
                          e.payload.file = {
                              files: [r]
                          }
                      } else if (Le(e.payload.file) && "undefined" != typeof uni) {
                      var i = e.payload.file.tempFiles[0];
                      e.payload.file = {
                          files: [i]
                      }
                  }
                  var u = new cr({
                          imageFormat: nr.IMAGE_FORMAT.UNKNOWN,
                          uuid: this._generateUUID(),
                          file: e.payload.file
                      }),
                      c = this._getNickAndAvatarByUserID(t);
                  return n.setElement(u), n.setNickAndAvatar(c), n.setNameCard(this._getNameCardByGroupID(n)), this._messageOptionsMap.set(n.ID, e), n
              }
          }, {
              key: "createAudioMessage",
              value: function(e) {
                  if (z) {
                      var t = e.payload.file;
                      if (z) {
                          var n = {
                              url: t.tempFilePath,
                              name: t.tempFilePath.slice(t.tempFilePath.lastIndexOf("/") + 1),
                              size: t.fileSize,
                              second: parseInt(t.duration) / 1e3,
                              type: t.tempFilePath.slice(t.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                          };
                          e.payload.file = n
                      }
                      var o = this.getMyUserID();
                      e.currentUser = o;
                      var a = new Dr(e),
                          s = new dr({
                              second: Math.floor(t.duration / 1e3),
                              size: t.fileSize,
                              url: t.tempFilePath,
                              uuid: this._generateUUID()
                          }),
                          r = this._getNickAndAvatarByUserID(o);
                      return a.setElement(s), a.setNickAndAvatar(r), a.setNameCard(this._getNameCardByGroupID(a)), this._messageOptionsMap.set(a.ID, e), a
                  }
                  Se.warn("createAudioMessage 目前只支持小程序环境下发语音消息")
              }
          }, {
              key: "createVideoMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t, e.payload.file.thumbUrl = "https://web.sdk.qcloud.com/im/assets/images/transparent.png", e.payload.file.thumbSize = 1668;
                  var n = {};
                  if (z) {
                      if (Y) return void Se.warn("createVideoMessage 不支持在支付宝小程序环境下使用");
                      if (ke(e.payload.file)) return void Se.warn("小程序环境下调用 createVideoMessage 接口时，payload.file 不支持传入 File 对象");
                      var o = e.payload.file;
                      n.url = o.tempFilePath, n.name = o.tempFilePath.slice(o.tempFilePath.lastIndexOf("/") + 1), n.size = o.size, n.second = o.duration, n.type = o.tempFilePath.slice(o.tempFilePath.lastIndexOf(".") + 1).toLowerCase()
                  } else if (W) {
                      if (ke(e.payload.file)) {
                          var a = e.payload.file;
                          e.payload.file.files = [a]
                      } else if (Le(e.payload.file) && "undefined" != typeof uni) {
                          var s = e.payload.file.tempFile;
                          e.payload.file.files = [s]
                      }
                      var r = e.payload.file;
                      n.url = window.URL.createObjectURL(r.files[0]), n.name = r.files[0].name, n.size = r.files[0].size, n.second = r.files[0].duration || 0, n.type = r.files[0].type.split("/")[1]
                  }
                  e.payload.file.videoFile = n;
                  var i = new Dr(e),
                      u = new Mr({
                          videoFormat: n.type,
                          videoSecond: dt(n.second, 0),
                          videoSize: n.size,
                          remoteVideoUrl: "",
                          videoUrl: n.url,
                          videoUUID: this._generateUUID(),
                          thumbUUID: this._generateUUID(),
                          thumbWidth: e.payload.file.width || 200,
                          thumbHeight: e.payload.file.height || 200,
                          thumbUrl: e.payload.file.thumbUrl,
                          thumbSize: e.payload.file.thumbSize,
                          thumbFormat: e.payload.file.thumbUrl.slice(e.payload.file.thumbUrl.lastIndexOf(".") + 1).toLowerCase()
                      }),
                      c = this._getNickAndAvatarByUserID(t);
                  return i.setElement(u), i.setNickAndAvatar(c), i.setNameCard(this._getNameCardByGroupID(i)), this._messageOptionsMap.set(i.ID, e), i
              }
          }, {
              key: "createCustomMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t;
                  var n = new Dr(e),
                      o = new mr({
                          data: e.payload.data,
                          description: e.payload.description,
                          extension: e.payload.extension
                      }),
                      a = this._getNickAndAvatarByUserID(t);
                  return n.setElement(o), n.setNickAndAvatar(a), n.setNameCard(this._getNameCardByGroupID(n)), n
              }
          }, {
              key: "createFaceMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t;
                  var n = new Dr(e),
                      o = new lr(e.payload),
                      a = this._getNickAndAvatarByUserID(t);
                  return n.setElement(o), n.setNickAndAvatar(a), n.setNameCard(this._getNameCardByGroupID(n)), n
              }
          }, {
              key: "createMergerMessage",
              value: function(e) {
                  var t = this.getMyUserID();
                  e.currentUser = t;
                  var n = this._getNickAndAvatarByUserID(t),
                      o = new Dr(e),
                      a = new Ir(e.payload);
                  return o.setElement(a), o.setNickAndAvatar(n), o.setNameCard(this._getNameCardByGroupID(o)), o.setRelayFlag(!0), o
              }
          }, {
              key: "createForwardMessage",
              value: function(e) {
                  var t = e.to,
                      n = e.conversationType,
                      o = e.priority,
                      a = e.payload,
                      s = this.getMyUserID(),
                      r = this._getNickAndAvatarByUserID(s);
                  if (a.type === E.MSG_GRP_TIP) return Pr(new Or({
                      code: co.MESSAGE_FORWARD_TYPE_INVALID,
                      message: xo
                  }));
                  var i = {
                          to: t,
                          conversationType: n,
                          conversationID: "".concat(n).concat(t),
                          priority: o,
                          isPlaceMessage: 0,
                          status: vt.UNSEND,
                          currentUser: s,
                          cloudCustomData: e.cloudCustomData || a.cloudCustomData || ""
                      },
                      u = new Dr(i);
                  return u.setElement(a.getElements()[0]), u.setNickAndAvatar(r), u.setNameCard(this._getNameCardByGroupID(a)), u.setRelayFlag(!0), u
              }
          }, {
              key: "downloadMergerMessage",
              value: function(e) {
                  return this._mergerMessageHandler.downloadMergerMessage(e)
              }
          }, {
              key: "createFileMessage",
              value: function(e) {
                  if (!z) {
                      if (W)
                          if (ke(e.payload.file)) {
                              var t = e.payload.file;
                              e.payload.file = {
                                  files: [t]
                              }
                          } else if (Le(e.payload.file) && "undefined" != typeof uni) {
                          var n = e.payload.file.tempFiles[0];
                          e.payload.file = {
                              files: [n]
                          }
                      }
                      var o = this.getMyUserID();
                      e.currentUser = o;
                      var a = new Dr(e),
                          s = new fr({
                              uuid: this._generateUUID(),
                              file: e.payload.file
                          }),
                          r = this._getNickAndAvatarByUserID(o);
                      return a.setElement(s), a.setNickAndAvatar(r), a.setNameCard(this._getNameCardByGroupID(a)), this._messageOptionsMap.set(a.ID, e), a
                  }
                  Se.warn("小程序目前不支持选择文件， createFileMessage 接口不可用！")
              }
          }, {
              key: "_onCannotFindModule",
              value: function() {
                  return Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "sendMessageInstance",
              value: function(e, t) {
                  var n, o = this,
                      a = null;
                  switch (e.conversationType) {
                      case E.CONV_C2C:
                          if (!(a = this.getModule(Rt))) return this._onCannotFindModule();
                          break;
                      case E.CONV_GROUP:
                          if (!(a = this.getModule(Gt))) return this._onCannotFindModule();
                          break;
                      default:
                          return Pr({
                              code: co.MESSAGE_SEND_INVALID_CONVERSATION_TYPE,
                              message: To
                          })
                  }
                  var s = this.getModule(xt),
                      r = this.getModule(Gt);
                  return s.upload(e).then((function() {
                      o._getSendMessageSpecifiedKey(e) === Sa && o.getModule(Jt).addSuccessCount(Ea);
                      return r.guardForAVChatRoom(e).then((function() {
                          if (!e.isSendable()) return Pr({
                              code: co.MESSAGE_FILE_URL_IS_EMPTY,
                              message: Fo
                          });
                          o._addSendMessageTotalCount(e), n = Date.now();
                          var s = function(e) {
                              var t = "utf-8";
                              W && document && (t = document.charset.toLowerCase());
                              var n, o, a = 0;
                              if (o = e.length, "utf-8" === t || "utf8" === t)
                                  for (var s = 0; s < o; s++)(n = e.codePointAt(s)) <= 127 ? a += 1 : n <= 2047 ? a += 2 : n <= 65535 ? a += 3 : (a += 4, s++);
                              else if ("utf-16" === t || "utf16" === t)
                                  for (var r = 0; r < o; r++)(n = e.codePointAt(r)) <= 65535 ? a += 2 : (a += 4, r++);
                              else a = e.replace(/[^\x00-\xff]/g, "aa").length;
                              return a
                          }(JSON.stringify(e));
                          return e.type === E.MSG_MERGER && s > 7e3 ? o._mergerMessageHandler.uploadMergerMessage(e, s).then((function(n) {
                              var a = o._mergerMessageHandler.createMergerMessagePack(e, t, n);
                              return o.request(a)
                          })) : (o.getModule(wt).setMessageRandom(e), e.conversationType === E.CONV_C2C || e.conversationType === E.CONV_GROUP ? a.sendMessage(e, t) : void 0)
                      })).then((function(s) {
                          var r = s.data,
                              i = r.time,
                              u = r.sequence;
                          o._addSendMessageSuccessCount(e, n), o._messageOptionsMap.delete(e.ID);
                          var c = o.getModule(wt);
                          e.status = vt.SUCCESS, e.time = i;
                          var l = !1;
                          if (e.conversationType === E.CONV_GROUP) e.sequence = u, e.generateMessageID(o.getMyUserID());
                          else if (e.conversationType === E.CONV_C2C) {
                              var d = c.getLatestMessageSentByMe(e.conversationID);
                              if (d) {
                                  var p = d.nick,
                                      g = d.avatar;
                                  p === e.nick && g === e.avatar || (l = !0)
                              }
                          }
                          return c.appendToMessageList(e), l && c.modifyMessageSentByMe({
                              conversationID: e.conversationID,
                              latestNick: e.nick,
                              latestAvatar: e.avatar
                          }), a.isOnlineMessage(e, t) ? e.setOnlineOnlyFlag(!0) : c.onMessageSent({
                              conversationOptionsList: [{
                                  conversationID: e.conversationID,
                                  unreadCount: 0,
                                  type: e.conversationType,
                                  subType: e.conversationSubType,
                                  lastMessage: e
                              }]
                          }), e.getRelayFlag() || "TIMImageElem" !== e.type || ct(e.payload.imageInfoArray), Cr({
                              message: e
                          })
                      }))
                  })).catch((function(t) {
                      return o._onSendMessageFailed(e, t)
                  }))
              }
          }, {
              key: "_onSendMessageFailed",
              value: function(e, t) {
                  e.status = vt.FAIL, this.getModule(wt).deleteMessageRandom(e), this._addSendMessageFailCountOnUser(e, t);
                  var n = new Ga($a);
                  return n.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), this.probeNetwork().then((function(e) {
                      var o = m(e, 2),
                          a = o[0],
                          s = o[1];
                      n.setError(t, a, s).end()
                  })), Se.error("".concat(this._className, "._onSendMessageFailed error:"), t), Pr(new Or({
                      code: t && t.code ? t.code : co.MESSAGE_SEND_FAIL,
                      message: t && t.message ? t.message : yo,
                      data: {
                          message: e
                      }
                  }))
              }
          }, {
              key: "_getSendMessageSpecifiedKey",
              value: function(e) {
                  if ([E.MSG_IMAGE, E.MSG_AUDIO, E.MSG_VIDEO, E.MSG_FILE].includes(e.type)) return Sa;
                  if (e.conversationType === E.CONV_C2C) return Ta;
                  if (e.conversationType === E.CONV_GROUP) {
                      var t = this.getModule(Gt).getLocalGroupProfile(e.to);
                      if (!t) return;
                      var n = t.type;
                      return et(n) ? Ca : Da
                  }
              }
          }, {
              key: "_addSendMessageTotalCount",
              value: function(e) {
                  var t = this._getSendMessageSpecifiedKey(e);
                  t && this.getModule(Jt).addTotalCount(t)
              }
          }, {
              key: "_addSendMessageSuccessCount",
              value: function(e, t) {
                  var n = Math.abs(Date.now() - t),
                      o = this._getSendMessageSpecifiedKey(e);
                  if (o) {
                      var a = this.getModule(Jt);
                      a.addSuccessCount(o), a.addCost(o, n)
                  }
              }
          }, {
              key: "_addSendMessageFailCountOnUser",
              value: function(e, t) {
                  var n, o, a = t.code,
                      s = void 0 === a ? -1 : a,
                      r = this.getModule(Jt),
                      i = this._getSendMessageSpecifiedKey(e);
                  i === Sa && (n = s, o = !1, Gi.includes(n) && (o = !0), o) ? r.addFailedCountOfUserSide(Ea) : function(e) {
                      var t = !1;
                      return Object.values(Ri).includes(e) && (t = !0), (e >= 120001 && e <= 13e4 || e >= 10100 && e <= 10200) && (t = !0), t
                  }(s) && i && r.addFailedCountOfUserSide(i)
              }
          }, {
              key: "resendMessage",
              value: function(e) {
                  return e.isResend = !0, e.status = vt.UNSEND, this.sendMessageInstance(e)
              }
          }, {
              key: "revokeMessage",
              value: function(e) {
                  var t = this,
                      n = null;
                  if (e.conversationType === E.CONV_C2C) {
                      if (!(n = this.getModule(Rt))) return this._onCannotFindModule()
                  } else if (e.conversationType === E.CONV_GROUP && !(n = this.getModule(Gt))) return this._onCannotFindModule();
                  var o = new Ga(Ja);
                  return o.setMessage("tjg_id:".concat(this.generateTjgID(e), " type:").concat(e.type, " from:").concat(e.from, " to:").concat(e.to)), n.revokeMessage(e).then((function(n) {
                      var a = n.data.recallRetList;
                      if (!_t(a) && 0 !== a[0].retCode) {
                          var s = new Or({
                              code: a[0].retCode,
                              message: Nr[a[0].retCode] || So,
                              data: {
                                  message: e
                              }
                          });
                          return o.setCode(s.code).setMoreMessage(s.message).end(), Pr(s)
                      }
                      return Se.info("".concat(t._className, ".revokeMessage ok. ID:").concat(e.ID)), e.isRevoked = !0, o.end(), t.getModule(wt).onMessageRevoked([e]), Cr({
                          message: e
                      })
                  })).catch((function(n) {
                      t.probeNetwork().then((function(e) {
                          var t = m(e, 2),
                              a = t[0],
                              s = t[1];
                          o.setError(n, a, s).end()
                      }));
                      var a = new Or({
                          code: n && n.code ? n.code : co.MESSAGE_REVOKE_FAIL,
                          message: n && n.message ? n.message : So,
                          data: {
                              message: e
                          }
                      });
                      return Se.warn("".concat(t._className, ".revokeMessage failed. error:"), n), Pr(a)
                  }))
              }
          }, {
              key: "deleteMessage",
              value: function(e) {
                  var t = this,
                      n = null,
                      o = e[0],
                      a = o.conversationID,
                      s = "",
                      r = [],
                      i = [];
                  if (o.conversationType === E.CONV_C2C ? (n = this.getModule(Rt), s = a.replace(E.CONV_C2C, ""), e.forEach((function(e) {
                          e && e.status === vt.SUCCESS && e.conversationID === a && (e.getOnlineOnlyFlag() || r.push("".concat(e.sequence, "_").concat(e.random, "_").concat(e.time)), i.push(e))
                      }))) : o.conversationType === E.CONV_GROUP && (n = this.getModule(Gt), s = a.replace(E.CONV_GROUP, ""), e.forEach((function(e) {
                          e && e.status === vt.SUCCESS && e.conversationID === a && (e.getOnlineOnlyFlag() || r.push("".concat(e.sequence)), i.push(e))
                      }))), !n) return this._onCannotFindModule();
                  if (0 === r.length) return this._onMessageDeleted(i);
                  r.length > 30 && (r = r.slice(0, 30), i = i.slice(0, 30));
                  var u = new Ga(Xa);
                  return u.setMessage("to:".concat(s, " count:").concat(r.length)), n.deleteMessage({
                      to: s,
                      keyList: r
                  }).then((function(e) {
                      return u.end(), Se.info("".concat(t._className, ".deleteMessage ok")), t._onMessageDeleted(i)
                  })).catch((function(e) {
                      t.probeNetwork().then((function(t) {
                          var n = m(t, 2),
                              o = n[0],
                              a = n[1];
                          u.setError(e, o, a).end()
                      })), Se.warn("".concat(t._className, ".deleteMessage failed. error:"), e);
                      var n = new Or({
                          code: e && e.code ? e.code : co.MESSAGE_DELETE_FAIL,
                          message: e && e.message ? e.message : Eo
                      });
                      return Pr(n)
                  }))
              }
          }, {
              key: "_onMessageDeleted",
              value: function(e) {
                  return this.getModule(wt).onMessageDeleted(e), Gr({
                      messageList: e
                  })
              }
          }, {
              key: "_generateUUID",
              value: function() {
                  var e = this.getModule(Ut);
                  return "".concat(e.getSDKAppID(), "-").concat(e.getUserID(), "-").concat(function() {
                      for (var e = "", t = 32; t > 0; --t) e += je[Math.floor(Math.random() * Ye)];
                      return e
                  }())
              }
          }, {
              key: "getMessageOptionByID",
              value: function(e) {
                  return this._messageOptionsMap.get(e)
              }
          }, {
              key: "_getNickAndAvatarByUserID",
              value: function(e) {
                  return this.getModule(Lt).getNickAndAvatarByUserID(e)
              }
          }, {
              key: "_getNameCardByGroupID",
              value: function(e) {
                  if (e.conversationType === E.CONV_GROUP) {
                      var t = this.getModule(Gt);
                      if (t) return t.getMyNameCardByGroupID(e.to)
                  }
                  return ""
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._messageOptionsMap.clear()
              }
          }]), n
      }(Xt),
      bi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "PluginModule", a.plugins = {}, a
          }
          return s(n, [{
              key: "registerPlugin",
              value: function(e) {
                  var t = this;
                  Object.keys(e).forEach((function(n) {
                      t.plugins[n] = e[n]
                  })), new Ga(qa).setMessage("key=".concat(Object.keys(e))).end()
              }
          }, {
              key: "getPlugin",
              value: function(e) {
                  return this.plugins[e]
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset"))
              }
          }]), n
      }(Xt),
      wi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "SyncUnreadMessageModule", a._cookie = "", a._onlineSyncFlag = !1, a.getInnerEmitterInstance().on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, a._onLoginSuccess, h(a)), a
          }
          return s(n, [{
              key: "_onLoginSuccess",
              value: function(e) {
                  this._startSync({
                      cookie: this._cookie,
                      syncFlag: 0,
                      isOnlineSync: 0
                  })
              }
          }, {
              key: "_startSync",
              value: function(e) {
                  var t = this,
                      n = e.cookie,
                      o = e.syncFlag,
                      a = e.isOnlineSync;
                  Se.log("".concat(this._className, "._startSync cookie:").concat(n, " syncFlag:").concat(o, " isOnlineSync:").concat(a)), this.request({
                      protocolName: tn,
                      requestData: {
                          cookie: n,
                          syncFlag: o,
                          isOnlineSync: a
                      }
                  }).then((function(e) {
                      var n = e.data,
                          o = n.cookie,
                          a = n.syncFlag,
                          s = n.eventArray,
                          r = n.messageList,
                          i = n.C2CRemainingUnreadList;
                      if (t._cookie = o, _t(o));
                      else if (0 === a || 1 === a) {
                          if (s) t.getModule(jt).onMessage({
                              head: {},
                              body: {
                                  eventArray: s,
                                  isInstantMessage: t._onlineSyncFlag,
                                  isSyncingEnded: !1
                              }
                          });
                          t.getModule(Rt).onNewC2CMessage({
                              dataList: r,
                              isInstantMessage: !1,
                              C2CRemainingUnreadList: i
                          }), t._startSync({
                              cookie: o,
                              syncFlag: a,
                              isOnlineSync: 0
                          })
                      } else if (2 === a) {
                          if (s) t.getModule(jt).onMessage({
                              head: {},
                              body: {
                                  eventArray: s,
                                  isInstantMessage: t._onlineSyncFlag,
                                  isSyncingEnded: !0
                              }
                          });
                          t.getModule(Rt).onNewC2CMessage({
                              dataList: r,
                              isInstantMessage: t._onlineSyncFlag,
                              C2CRemainingUnreadList: i
                          })
                      }
                  })).catch((function(e) {
                      Se.error("".concat(t._className, "._startSync failed. error:"), e)
                  }))
              }
          }, {
              key: "startOnlineSync",
              value: function() {
                  Se.log("".concat(this._className, ".startOnlineSync")), this._onlineSyncFlag = !0, this._startSync({
                      cookie: this._cookie,
                      syncFlag: 0,
                      isOnlineSync: 1
                  })
              }
          }, {
              key: "startSyncOnReconnected",
              value: function() {
                  Se.log("".concat(this._className, ".startSyncOnReconnected.")), this._onlineSyncFlag = !0, this._startSync({
                      cookie: this._cookie,
                      syncFlag: 0,
                      isOnlineSync: 0
                  })
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._onlineSyncFlag = !1, this._cookie = ""
              }
          }]), n
      }(Xt),
      Ui = {
          request: {
              toAccount: "To_Account",
              fromAccount: "From_Account",
              to: "To_Account",
              from: "From_Account",
              groupID: "GroupId",
              groupAtUserID: "GroupAt_Account",
              extension: "Ext",
              data: "Data",
              description: "Desc",
              elements: "MsgBody",
              sizeType: "Type",
              downloadFlag: "Download_Flag",
              thumbUUID: "ThumbUUID",
              videoUUID: "VideoUUID",
              remoteAudioUrl: "Url",
              remoteVideoUrl: "VideoUrl",
              videoUrl: "",
              imageUrl: "URL",
              fileUrl: "Url",
              uuid: "UUID",
              priority: "MsgPriority",
              receiverUserID: "To_Account",
              receiverGroupID: "GroupId",
              messageSender: "SenderId",
              messageReceiver: "ReceiverId",
              nick: "From_AccountNick",
              avatar: "From_AccountHeadurl",
              messageNumber: "MsgNum",
              pbDownloadKey: "PbMsgKey",
              downloadKey: "JsonMsgKey",
              applicationType: "PendencyType",
              userIDList: "To_Account",
              groupNameList: "GroupName",
              userID: "To_Account",
              groupAttributeList: "GroupAttr",
              mainSequence: "AttrMainSeq",
              avChatRoomKey: "BytesKey",
              attributeControl: "AttrControl",
              sequence: "seq"
          },
          response: {
              MsgPriority: "priority",
              ThumbUUID: "thumbUUID",
              VideoUUID: "videoUUID",
              Download_Flag: "downloadFlag",
              GroupId: "groupID",
              Member_Account: "userID",
              MsgList: "messageList",
              SyncFlag: "syncFlag",
              To_Account: "to",
              From_Account: "from",
              MsgSeq: "sequence",
              MsgRandom: "random",
              MsgTime: "time",
              MsgTimeStamp: "time",
              MsgContent: "content",
              MsgBody: "elements",
              From_AccountNick: "nick",
              From_AccountHeadurl: "avatar",
              GroupWithdrawInfoArray: "revokedInfos",
              GroupReadInfoArray: "groupMessageReadNotice",
              LastReadMsgSeq: "lastMessageSeq",
              WithdrawC2cMsgNotify: "c2cMessageRevokedNotify",
              C2cWithdrawInfoArray: "revokedInfos",
              C2cReadedReceipt: "c2cMessageReadReceipt",
              ReadC2cMsgNotify: "c2cMessageReadNotice",
              LastReadTime: "peerReadTime",
              MsgRand: "random",
              MsgType: "type",
              MsgShow: "messageShow",
              NextMsgSeq: "nextMessageSeq",
              FaceUrl: "avatar",
              ProfileDataMod: "profileModify",
              Profile_Account: "userID",
              ValueBytes: "value",
              ValueNum: "value",
              NoticeSeq: "noticeSequence",
              NotifySeq: "notifySequence",
              MsgFrom_AccountExtraInfo: "messageFromAccountExtraInformation",
              Operator_Account: "operatorID",
              OpType: "operationType",
              ReportType: "operationType",
              UserId: "userID",
              User_Account: "userID",
              List_Account: "userIDList",
              MsgOperatorMemberExtraInfo: "operatorInfo",
              MsgMemberExtraInfo: "memberInfoList",
              ImageUrl: "avatar",
              NickName: "nick",
              MsgGroupNewInfo: "newGroupProfile",
              MsgAppDefinedData: "groupCustomField",
              Owner_Account: "ownerID",
              GroupFaceUrl: "avatar",
              GroupIntroduction: "introduction",
              GroupNotification: "notification",
              GroupApplyJoinOption: "joinOption",
              MsgKey: "messageKey",
              GroupInfo: "groupProfile",
              ShutupTime: "muteTime",
              Desc: "description",
              Ext: "extension",
              GroupAt_Account: "groupAtUserID",
              MsgNum: "messageNumber",
              PbMsgKey: "pbDownloadKey",
              JsonMsgKey: "downloadKey",
              MsgModifiedFlag: "isModified",
              PendencyItem: "applicationItem",
              PendencyType: "applicationType",
              AddTime: "time",
              AddSource: "source",
              AddWording: "wording",
              ProfileImImage: "avatar",
              PendencyAdd: "friendApplicationAdded",
              FrienPencydDel_Account: "friendApplicationDeletedUserIDList",
              Peer_Account: "userID",
              GroupAttr: "groupAttributeList",
              GroupAttrAry: "groupAttributeList",
              AttrMainSeq: "mainSequence",
              seq: "sequence",
              GroupAttrOption: "groupAttributeOption",
              BytesChangedKeys: "changedKeyList",
              GroupAttrInfo: "groupAttributeList",
              GroupAttrSeq: "mainSequence",
              PushChangedAttrValFlag: "hasChangedAttributeInfo",
              SubKeySeq: "sequence",
              Val: "value"
          },
          ignoreKeyWord: ["C2C", "ID", "USP"]
      };

  function Fi(e, t) {
      if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
      t = Object.assign({
          pascalCase: !1
      }, t);
      var n;
      return 0 === (e = Array.isArray(e) ? e.map((function(e) {
          return e.trim()
      })).filter((function(e) {
          return e.length
      })).join("-") : e.trim()).length ? "" : 1 === e.length ? t.pascalCase ? e.toUpperCase() : e.toLowerCase() : (e !== e.toLowerCase() && (e = qi(e)), e = e.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, (function(e, t) {
          return t.toUpperCase()
      })).replace(/\d+(\w|$)/g, (function(e) {
          return e.toUpperCase()
      })), n = e, t.pascalCase ? n.charAt(0).toUpperCase() + n.slice(1) : n)
  }
  var qi = function(e) {
      for (var t = !1, n = !1, o = !1, a = 0; a < e.length; a++) {
          var s = e[a];
          t && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = e.slice(0, a) + "-" + e.slice(a), t = !1, o = n, n = !0, a++) : n && o && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = e.slice(0, a - 1) + "-" + e.slice(a - 1), o = n, n = !1, t = !0) : (t = s.toLowerCase() === s && s.toUpperCase() !== s, o = n, n = s.toUpperCase() === s && s.toLowerCase() !== s)
      }
      return e
  };

  function Vi(e, t) {
      var n = 0;
      return function e(t, o) {
          if (++n > 100) return n--, t;
          if (Re(t)) {
              var a = t.map((function(t) {
                  return Oe(t) ? e(t, o) : t
              }));
              return n--, a
          }
          if (Oe(t)) {
              var s = (r = t, i = function(e, t) {
                  if (!Fe(t)) return !1;
                  if ((a = t) !== Fi(a))
                      for (var n = 0; n < Ui.ignoreKeyWord.length && !t.includes(Ui.ignoreKeyWord[n]); n++);
                  var a;
                  return Ge(o[t]) ? function(e) {
                      return "OPPOChannelID" === e ? e : e[0].toUpperCase() + Fi(e).slice(1)
                  }(t) : o[t]
              }, u = Object.create(null), Object.keys(r).forEach((function(e) {
                  var t = i(r[e], e);
                  t && (u[t] = r[e])
              })), u);
              return s = st(s, (function(t, n) {
                  return Re(t) || Oe(t) ? e(t, o) : t
              })), n--, s
          }
          var r, i, u
      }(e, t)
  }

  function Ki(e, t) {
      if (Re(e)) return e.map((function(e) {
          return Oe(e) ? Ki(e, t) : e
      }));
      if (Oe(e)) {
          var n = (o = e, a = function(e, n) {
              return Ge(t[n]) ? Fi(n) : t[n]
          }, s = {}, Object.keys(o).forEach((function(e) {
              s[a(o[e], e)] = o[e]
          })), s);
          return n = st(n, (function(e) {
              return Re(e) || Oe(e) ? Ki(e, t) : e
          }))
      }
      var o, a, s
  }
  var xi = function() {
          function e(t) {
              o(this, e), this._handler = t;
              var n = t.getURL();
              this._socket = null, this._id = He(), z ? Y ? (J.connectSocket({
                  url: n,
                  header: {
                      "content-type": "application/json"
                  }
              }), J.onSocketClose(this._onClose.bind(this)), J.onSocketOpen(this._onOpen.bind(this)), J.onSocketMessage(this._onMessage.bind(this)), J.onSocketError(this._onError.bind(this))) : (this._socket = J.connectSocket({
                  url: n,
                  header: {
                      "content-type": "application/json"
                  },
                  complete: function() {}
              }), this._socket.onClose(this._onClose.bind(this)), this._socket.onOpen(this._onOpen.bind(this)), this._socket.onMessage(this._onMessage.bind(this)), this._socket.onError(this._onError.bind(this))) : W && (this._socket = new WebSocket(n), this._socket.onopen = this._onOpen.bind(this), this._socket.onmessage = this._onMessage.bind(this), this._socket.onclose = this._onClose.bind(this), this._socket.onerror = this._onError.bind(this))
          }
          return s(e, [{
              key: "getID",
              value: function() {
                  return this._id
              }
          }, {
              key: "_onOpen",
              value: function() {
                  this._handler.onOpen({
                      id: this._id
                  })
              }
          }, {
              key: "_onClose",
              value: function(e) {
                  this._handler.onClose({
                      id: this._id,
                      e: e
                  })
              }
          }, {
              key: "_onMessage",
              value: function(e) {
                  this._handler.onMessage(e)
              }
          }, {
              key: "_onError",
              value: function(e) {
                  this._handler.onError({
                      id: this._id,
                      e: e
                  })
              }
          }, {
              key: "close",
              value: function(e) {
                  if (Y) return J.offSocketClose(), J.offSocketMessage(), J.offSocketOpen(), J.offSocketError(), void J.closeSocket();
                  this._socket && (z ? (this._socket.onClose((function() {})), this._socket.onOpen((function() {})), this._socket.onMessage((function() {})), this._socket.onError((function() {}))) : W && (this._socket.onopen = null, this._socket.onmessage = null, this._socket.onclose = null, this._socket.onerror = null), j ? this._socket.close({
                      code: e
                  }) : this._socket.close(e), this._socket = null)
              }
          }, {
              key: "send",
              value: function(e) {
                  Y ? J.sendSocketMessage({
                      data: e.data,
                      fail: function() {
                          e.fail && e.requestID && e.fail(e.requestID)
                      }
                  }) : this._socket && (z ? this._socket.send({
                      data: e.data,
                      fail: function() {
                          e.fail && e.requestID && e.fail(e.requestID)
                      }
                  }) : W && this._socket.send(e.data))
              }
          }]), e
      }(),
      Bi = 4e3,
      Hi = 4001,
      ji = ["keyMap"],
      Yi = ["keyMap"],
      $i = "connected",
      zi = "connecting",
      Wi = "disconnected",
      Ji = function() {
          function e(t) {
              o(this, e), this._channelModule = t, this._className = "SocketHandler", this._promiseMap = new Map, this._readyState = Wi, this._simpleRequestMap = new Map, this.MAX_SIZE = 100, this._startSequence = He(), this._startTs = 0, this._reConnectFlag = !1, this._nextPingTs = 0, this._reConnectCount = 0, this.MAX_RECONNECT_COUNT = 3, this._socketID = -1, this._random = 0, this._socket = null, this._url = "", this._onOpenTs = 0, this._setOverseaHost(), this._initConnection()
          }
          return s(e, [{
              key: "_setOverseaHost",
              value: function() {
                  this._channelModule.isOversea() && U.HOST.setCurrent(w)
              }
          }, {
              key: "_initConnection",
              value: function() {
                  "" === this._url ? this._url = U.HOST.CURRENT.DEFAULT : this._url === U.HOST.CURRENT.DEFAULT ? this._url = U.HOST.CURRENT.BACKUP : this._url === U.HOST.CURRENT.BACKUP && (this._url = U.HOST.CURRENT.DEFAULT), this._connect(), this._nextPingTs = 0
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  e % 1 == 0 && this._checkPromiseMap()
              }
          }, {
              key: "_checkPromiseMap",
              value: function() {
                  var e = this;
                  0 !== this._promiseMap.size && this._promiseMap.forEach((function(t, n) {
                      var o = t.reject,
                          a = t.timestamp;
                      Date.now() - a >= 15e3 && (Se.log("".concat(e._className, "._checkPromiseMap request timeout, delete requestID:").concat(n)), e._promiseMap.delete(n), o(new Or({
                          code: co.NETWORK_TIMEOUT,
                          message: ga
                      })), e._channelModule.onRequestTimeout(n))
                  }))
              }
          }, {
              key: "onOpen",
              value: function(e) {
                  this._onOpenTs = Date.now();
                  var t = e.id;
                  this._socketID = t, new Ga(Ka).setMessage(n).setMessage("socketID:".concat(t)).end();
                  var n = Date.now() - this._startTs;
                  Se.log("".concat(this._className, "._onOpen cost ").concat(n, " ms. socketID:").concat(t)), e.id === this._socketID && (this._readyState = $i, this._reConnectCount = 0, this._resend(), !0 === this._reConnectFlag && (this._channelModule.onReconnected(), this._reConnectFlag = !1), this._channelModule.onOpen())
              }
          }, {
              key: "onClose",
              value: function(e) {
                  var t = new Ga(xa),
                      n = e.id,
                      o = e.e,
                      a = "sourceSocketID:".concat(n, " currentSocketID:").concat(this._socketID),
                      s = 0;
                  0 !== this._onOpenTs && (s = Date.now() - this._onOpenTs), t.setMessage(s).setMoreMessage(a).setCode(o.code).end(), Se.log("".concat(this._className, "._onClose code:").concat(o.code, " reason:").concat(o.reason, " ").concat(a, " onlineTime:").concat(s)), n === this._socketID && (this._readyState = Wi, s < 1e3 ? this._channelModule.onReconnectFailed() : this._channelModule.onClose())
              }
          }, {
              key: "onError",
              value: function(e) {
                  var t = e.id,
                      n = e.e,
                      o = "sourceSocketID:".concat(t, " currentSocketID:").concat(this._socketID);
                  new Ga(Ba).setMessage(n.errMsg || xe(n)).setMoreMessage(o).setLevel("error").end(), Se.warn("".concat(this._className, "._onError"), n, o), t === this._socketID && (this._readyState = "", this._channelModule.onError())
              }
          }, {
              key: "onMessage",
              value: function(e) {
                  var t;
                  try {
                      t = JSON.parse(e.data)
                  } catch (c) {
                      new Ga(as).setMessage(e.data).end()
                  }
                  if (t && t.head) {
                      var n = this._getRequestIDFromHead(t.head),
                          o = lt(t.head),
                          a = Ki(t.body, this._getResponseKeyMap(o));
                      if (Se.debug("".concat(this._className, ".onMessage ret:").concat(JSON.stringify(a), " requestID:").concat(n, " has:").concat(this._promiseMap.has(n))), this._setNextPingTs(), this._promiseMap.has(n)) {
                          var s = this._promiseMap.get(n),
                              r = s.resolve,
                              i = s.reject,
                              u = s.timestamp;
                          return this._promiseMap.delete(n), this._calcRTT(u), void(a.errorCode && 0 !== a.errorCode ? (this._channelModule.onErrorCodeNotZero(a), i(new Or({
                              code: a.errorCode,
                              message: a.errorInfo || ""
                          }))) : r(Cr(a)))
                      }
                      this._channelModule.onMessage({
                          head: t.head,
                          body: a
                      })
                  }
              }
          }, {
              key: "_calcRTT",
              value: function(e) {
                  var t = Date.now() - e;
                  this._channelModule.getModule(Jt).addRTT(t)
              }
          }, {
              key: "_connect",
              value: function() {
                  new Ga(Va).setMessage("url:".concat(this.getURL())).end(), Se.log("".concat(this._className, "._connect url:").concat(this.getURL())), this._startTs = Date.now(), this._socket = new xi(this), this._socketID = this._socket.getID(), this._readyState = zi
              }
          }, {
              key: "getURL",
              value: function() {
                  var e = this._channelModule.getModule(Ut);
                  return "".concat(this._url, "/info?sdkappid=").concat(e.getSDKAppID(), "&instanceid=").concat(e.getInstanceID(), "&random=").concat(this._getRandom())
              }
          }, {
              key: "_closeConnection",
              value: function(e) {
                  Se.log("".concat(this._className, "._closeConnection")), this._socket && (this._socket.close(e), this._socketID = -1, this._socket = null, this._readyState = Wi)
              }
          }, {
              key: "_resend",
              value: function() {
                  var e = this;
                  if (Se.log("".concat(this._className, "._resend reConnectFlag:").concat(this._reConnectFlag), "promiseMap.size:".concat(this._promiseMap.size, " simpleRequestMap.size:").concat(this._simpleRequestMap.size)), this._promiseMap.size > 0 && this._promiseMap.forEach((function(t, n) {
                          var o = t.uplinkData,
                              a = t.resolve,
                              s = t.reject;
                          e._promiseMap.set(n, {
                              resolve: a,
                              reject: s,
                              timestamp: Date.now(),
                              uplinkData: o
                          }), e._execute(n, o)
                      })), this._simpleRequestMap.size > 0) {
                      var t, n = C(this._simpleRequestMap);
                      try {
                          for (n.s(); !(t = n.n()).done;) {
                              var o = m(t.value, 2),
                                  a = o[0],
                                  s = o[1];
                              this._execute(a, s)
                          }
                      } catch (r) {
                          n.e(r)
                      } finally {
                          n.f()
                      }
                      this._simpleRequestMap.clear()
                  }
              }
          }, {
              key: "send",
              value: function(e) {
                  var t = this;
                  e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3);
                  e.keyMap;
                  var n = g(e, ji),
                      o = this._getRequestIDFromHead(e.head),
                      a = JSON.stringify(n);
                  return new Promise((function(e, s) {
                      (t._promiseMap.set(o, {
                          resolve: e,
                          reject: s,
                          timestamp: Date.now(),
                          uplinkData: a
                      }), Se.debug("".concat(t._className, ".send uplinkData:").concat(JSON.stringify(n), " requestID:").concat(o, " readyState:").concat(t._readyState)), t._readyState !== $i) ? t._reConnect(): (t._execute(o, a), t._channelModule.getModule(Jt).addRequestCount())
                  }))
              }
          }, {
              key: "simplySend",
              value: function(e) {
                  e.head.seq = this._getSequence(), e.head.reqtime = Math.floor(Date.now() / 1e3);
                  e.keyMap;
                  var t = g(e, Yi),
                      n = this._getRequestIDFromHead(e.head),
                      o = JSON.stringify(t);
                  this._readyState !== $i ? (this._simpleRequestMap.size < this.MAX_SIZE ? this._simpleRequestMap.set(n, o) : Se.log("".concat(this._className, ".simplySend. simpleRequestMap is full, drop request!")), this._reConnect()) : this._execute(n, o)
              }
          }, {
              key: "_execute",
              value: function(e, t) {
                  this._socket.send({
                      data: t,
                      fail: z ? this._onSendFail.bind(this) : void 0,
                      requestID: e
                  })
              }
          }, {
              key: "_onSendFail",
              value: function(e) {
                  Se.log("".concat(this._className, "._onSendFail requestID:").concat(e))
              }
          }, {
              key: "_getSequence",
              value: function() {
                  var e;
                  if (this._startSequence < 2415919103) return e = this._startSequence, this._startSequence += 1, 2415919103 === this._startSequence && (this._startSequence = He()), e
              }
          }, {
              key: "_getRequestIDFromHead",
              value: function(e) {
                  return e.servcmd + e.seq
              }
          }, {
              key: "_getResponseKeyMap",
              value: function(e) {
                  var n = this._channelModule.getKeyMap(e);
                  return t(t({}, Ui.response), n.response)
              }
          }, {
              key: "_reConnect",
              value: function() {
                  this._readyState !== $i && this._readyState !== zi && this.forcedReconnect()
              }
          }, {
              key: "forcedReconnect",
              value: function() {
                  var e = this;
                  Se.log("".concat(this._className, ".forcedReconnect count:").concat(this._reConnectCount, " readyState:").concat(this._readyState)), this._reConnectFlag = !0, this._resetRandom(), this._reConnectCount < this.MAX_RECONNECT_COUNT ? (this._reConnectCount += 1, this._closeConnection(Hi), this._initConnection()) : this._channelModule.probeNetwork().then((function(t) {
                      var n = m(t, 2),
                          o = n[0];
                      n[1];
                      o ? (Se.warn("".concat(e._className, ".forcedReconnect disconnected from wsserver but network is ok, continue...")), e._reConnectCount = 0, e._closeConnection(Hi), e._initConnection()) : e._channelModule.onReconnectFailed()
                  }))
              }
          }, {
              key: "getReconnectFlag",
              value: function() {
                  return this._reConnectFlag
              }
          }, {
              key: "_setNextPingTs",
              value: function() {
                  this._nextPingTs = Date.now() + 1e4
              }
          }, {
              key: "getNextPingTs",
              value: function() {
                  return this._nextPingTs
              }
          }, {
              key: "isConnected",
              value: function() {
                  return this._readyState === $i
              }
          }, {
              key: "_getRandom",
              value: function() {
                  return 0 === this._random && (this._random = Math.random()), this._random
              }
          }, {
              key: "_resetRandom",
              value: function() {
                  this._random = 0
              }
          }, {
              key: "close",
              value: function() {
                  Se.log("".concat(this._className, ".close")), this._closeConnection(Bi), this._promiseMap.clear(), this._startSequence = He(), this._readyState = Wi, this._simpleRequestMap.clear(), this._reConnectFlag = !1, this._reConnectCount = 0, this._onOpenTs = 0, this._url = "", this._random = 0
              }
          }]), e
      }(),
      Xi = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              if (o(this, n), (a = t.call(this, e))._className = "ChannelModule", a._socketHandler = new Ji(h(a)), a._probing = !1, a._isAppShowing = !0, a._previousState = E.NET_STATE_CONNECTED, z && "function" == typeof J.onAppShow && "function" == typeof J.onAppHide) {
                  var s = a._onAppHide.bind(h(a)),
                      r = a._onAppShow.bind(h(a));
                  "function" == typeof J.offAppHide && J.offAppHide(s), "function" == typeof J.offAppShow && J.offAppShow(r), J.onAppHide(s), J.onAppShow(r)
              }
              return a._timerForNotLoggedIn = -1, a._timerForNotLoggedIn = setInterval(a.onCheckTimer.bind(h(a)), 1e3), a._fatalErrorFlag = !1, a
          }
          return s(n, [{
              key: "onCheckTimer",
              value: function(e) {
                  this._socketHandler && (this.isLoggedIn() ? (this._timerForNotLoggedIn > 0 && (clearInterval(this._timerForNotLoggedIn), this._timerForNotLoggedIn = -1), this._socketHandler.onCheckTimer(e)) : this._socketHandler.onCheckTimer(1), this._checkNextPing())
              }
          }, {
              key: "onErrorCodeNotZero",
              value: function(e) {
                  this.getModule(jt).onErrorCodeNotZero(e)
              }
          }, {
              key: "onMessage",
              value: function(e) {
                  this.getModule(jt).onMessage(e)
              }
          }, {
              key: "send",
              value: function(e) {
                  return this._socketHandler ? this._previousState !== E.NET_STATE_CONNECTED && e.head.servcmd.includes(eo) ? this._sendLogViaHTTP(e) : this._socketHandler.send(e) : Promise.reject()
              }
          }, {
              key: "_sendLogViaHTTP",
              value: function(e) {
                  return new Promise((function(t, n) {
                      var o = "https://webim.tim.qq.com/v4/imopenstat/tim_web_report_v2?sdkappid=".concat(e.head.sdkappid, "&reqtime=").concat(Date.now()),
                          a = JSON.stringify(e.body),
                          s = "application/x-www-form-urlencoded;charset=UTF-8";
                      if (z) J.request({
                          url: o,
                          data: a,
                          method: "POST",
                          timeout: 3e3,
                          header: {
                              "content-type": s
                          },
                          success: function() {
                              t()
                          },
                          fail: function() {
                              n(new Or({
                                  code: co.NETWORK_ERROR,
                                  message: pa
                              }))
                          }
                      });
                      else {
                          var r = new XMLHttpRequest,
                              i = setTimeout((function() {
                                  r.abort(), n(new Or({
                                      code: co.NETWORK_TIMEOUT,
                                      message: ga
                                  }))
                              }), 3e3);
                          r.onreadystatechange = function() {
                              4 === r.readyState && (clearTimeout(i), 200 === r.status || 304 === r.status ? t() : n(new Or({
                                  code: co.NETWORK_ERROR,
                                  message: pa
                              })))
                          }, r.open("POST", o, !0), r.setRequestHeader("Content-type", s), r.send(a)
                      }
                  }))
              }
          }, {
              key: "simplySend",
              value: function(e) {
                  return this._socketHandler ? this._socketHandler.simplySend(e) : Promise.reject()
              }
          }, {
              key: "onOpen",
              value: function() {
                  this._ping()
              }
          }, {
              key: "onClose",
              value: function() {
                  this.reConnect()
              }
          }, {
              key: "onError",
              value: function() {
                  z && Se.error("".concat(this._className, ".onError 从v2.11.2起，SDK 支持了 WebSocket，如您未添加相关受信域名，请先添加！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html"))
              }
          }, {
              key: "getKeyMap",
              value: function(e) {
                  return this.getModule(jt).getKeyMap(e)
              }
          }, {
              key: "_onAppHide",
              value: function() {
                  this._isAppShowing = !1
              }
          }, {
              key: "_onAppShow",
              value: function() {
                  this._isAppShowing = !0
              }
          }, {
              key: "onRequestTimeout",
              value: function(e) {}
          }, {
              key: "onReconnected",
              value: function() {
                  Se.log("".concat(this._className, ".onReconnected")), this.getModule(jt).onReconnected(), this._emitNetStateChangeEvent(E.NET_STATE_CONNECTED)
              }
          }, {
              key: "onReconnectFailed",
              value: function() {
                  Se.log("".concat(this._className, ".onReconnectFailed")), this._emitNetStateChangeEvent(E.NET_STATE_DISCONNECTED)
              }
          }, {
              key: "reConnect",
              value: function() {
                  if (!this._fatalErrorFlag && this._socketHandler) {
                      var e = this._socketHandler.getReconnectFlag();
                      if (Se.log("".concat(this._className, ".reConnect previousState:").concat(this._previousState, " reconnectFlag:").concat(e)), this._previousState === E.NET_STATE_CONNECTING && e) return;
                      this._socketHandler.forcedReconnect(), this._emitNetStateChangeEvent(E.NET_STATE_CONNECTING)
                  }
              }
          }, {
              key: "_emitNetStateChangeEvent",
              value: function(e) {
                  this._previousState !== e && (this._previousState = e, this.emitOuterEvent(S.NET_STATE_CHANGE, {
                      state: e
                  }))
              }
          }, {
              key: "_ping",
              value: function() {
                  var e = this;
                  if (!0 !== this._probing) {
                      this._probing = !0;
                      var t = this.getModule(jt).getProtocolData({
                          protocolName: to
                      });
                      this.send(t).then((function() {
                          e._probing = !1
                      })).catch((function(t) {
                          if (Se.warn("".concat(e._className, "._ping failed. error:"), t), e._probing = !1, t && 60002 === t.code) return new Ga(er).setMessage("code:".concat(t.code, " message:").concat(t.message)).setNetworkType(e.getModule(Vt).getNetworkType()).end(), e._fatalErrorFlag = !0, void e._emitNetStateChangeEvent(E.NET_STATE_DISCONNECTED);
                          e.probeNetwork().then((function(t) {
                              var n = m(t, 2),
                                  o = n[0],
                                  a = n[1];
                              Se.log("".concat(e._className, "._ping failed. isAppShowing:").concat(e._isAppShowing, " online:").concat(o, " networkType:").concat(a)), o ? e.reConnect() : e._emitNetStateChangeEvent(E.NET_STATE_DISCONNECTED)
                          }))
                      }))
                  }
              }
          }, {
              key: "_checkNextPing",
              value: function() {
                  this._socketHandler && (this._socketHandler.isConnected() && Date.now() >= this._socketHandler.getNextPingTs() && this._ping())
              }
          }, {
              key: "dealloc",
              value: function() {
                  this._socketHandler && (this._socketHandler.close(), this._socketHandler = null), this._timerForNotLoggedIn > -1 && clearInterval(this._timerForNotLoggedIn)
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._previousState = E.NET_STATE_CONNECTED, this._probing = !1, this._fatalErrorFlag = !1, this._timerForNotLoggedIn = setInterval(this.onCheckTimer.bind(this), 1e3)
              }
          }]), n
      }(Xt),
      Qi = ["a2", "tinyid"],
      Zi = ["a2", "tinyid"],
      eu = function() {
          function e(t) {
              o(this, e), this._className = "ProtocolHandler", this._sessionModule = t, this._configMap = new Map, this._fillConfigMap()
          }
          return s(e, [{
              key: "_fillConfigMap",
              value: function() {
                  this._configMap.clear();
                  var e = this._sessionModule.genCommonHead(),
                      n = this._sessionModule.genCosSpecifiedHead(),
                      o = this._sessionModule.genSSOReportHead();
                  this._configMap.set(Qt, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_STATUS, ".").concat(U.CMD.LOGIN)
                          }),
                          body: {
                              state: "Online"
                          },
                          keyMap: {
                              response: {
                                  TinyId: "tinyID",
                                  InstId: "instanceID",
                                  HelloInterval: "helloInterval"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Zt, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_STATUS, ".").concat(U.CMD.LOGOUT)
                          }),
                          body: {
                              type: 0
                          },
                          keyMap: {
                              request: {
                                  type: "wslogout_type"
                              }
                          }
                      }
                  }(e)), this._configMap.set(en, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_STATUS, ".").concat(U.CMD.HELLO)
                          }),
                          body: {},
                          keyMap: {
                              response: {
                                  NewInstInfo: "newInstanceInfo"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Qn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_COS_SIGN, ".").concat(U.CMD.COS_SIGN)
                          }),
                          body: {
                              cmd: "open_im_cos_svc",
                              subCmd: "get_cos_token",
                              duration: 300,
                              version: 2
                          },
                          keyMap: {
                              request: {
                                  userSig: "usersig",
                                  subCmd: "sub_cmd",
                                  cmd: "cmd",
                                  duration: "duration",
                                  version: "version"
                              },
                              response: {
                                  expired_time: "expiredTime",
                                  bucket_name: "bucketName",
                                  session_token: "sessionToken",
                                  tmp_secret_id: "secretId",
                                  tmp_secret_key: "secretKey"
                              }
                          }
                      }
                  }(n)), this._configMap.set(Zn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.CUSTOM_UPLOAD, ".").concat(U.CMD.COS_PRE_SIG)
                          }),
                          body: {
                              fileType: void 0,
                              fileName: void 0,
                              uploadMethod: 0,
                              duration: 900
                          },
                          keyMap: {
                              request: {
                                  userSig: "usersig",
                                  fileType: "file_type",
                                  fileName: "file_name",
                                  uploadMethod: "upload_method"
                              },
                              response: {
                                  expired_time: "expiredTime",
                                  request_id: "requestId",
                                  head_url: "headUrl",
                                  upload_url: "uploadUrl",
                                  download_url: "downloadUrl",
                                  ci_url: "ciUrl"
                              }
                          }
                      }
                  }(n)), this._configMap.set(io, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.CLOUD_CONTROL, ".").concat(U.CMD.FETCH_CLOUD_CONTROL_CONFIG)
                          }),
                          body: {
                              SDKAppID: 0,
                              version: 0
                          },
                          keyMap: {
                              request: {
                                  SDKAppID: "uint32_sdkappid",
                                  version: "uint64_version"
                              },
                              response: {
                                  int32_error_code: "errorCode",
                                  str_error_message: "errorMessage",
                                  str_json_config: "cloudControlConfig",
                                  uint32_expired_time: "expiredTime",
                                  uint32_sdkappid: "SDKAppID",
                                  uint64_version: "version"
                              }
                          }
                      }
                  }(e)), this._configMap.set(uo, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.CLOUD_CONTROL, ".").concat(U.CMD.PUSHED_CLOUD_CONTROL_CONFIG)
                          }),
                          body: {},
                          keyMap: {
                              response: {
                                  int32_error_code: "errorCode",
                                  str_error_message: "errorMessage",
                                  str_json_config: "cloudControlConfig",
                                  uint32_expired_time: "expiredTime",
                                  uint32_sdkappid: "SDKAppID",
                                  uint64_version: "version"
                              }
                          }
                      }
                  }(e)), this._configMap.set(tn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.GET_MESSAGES)
                          }),
                          body: {
                              cookie: "",
                              syncFlag: 0,
                              needAbstract: 1,
                              isOnlineSync: 0
                          },
                          keyMap: {
                              request: {
                                  fromAccount: "From_Account",
                                  toAccount: "To_Account",
                                  from: "From_Account",
                                  to: "To_Account",
                                  time: "MsgTimeStamp",
                                  sequence: "MsgSeq",
                                  random: "MsgRandom",
                                  elements: "MsgBody"
                              },
                              response: {
                                  MsgList: "messageList",
                                  SyncFlag: "syncFlag",
                                  To_Account: "to",
                                  From_Account: "from",
                                  ClientSeq: "clientSequence",
                                  MsgSeq: "sequence",
                                  NoticeSeq: "noticeSequence",
                                  NotifySeq: "notifySequence",
                                  MsgRandom: "random",
                                  MsgTimeStamp: "time",
                                  MsgContent: "content",
                                  ToGroupId: "groupID",
                                  MsgKey: "messageKey",
                                  GroupTips: "groupTips",
                                  MsgBody: "elements",
                                  MsgType: "type",
                                  C2CRemainingUnreadCount: "C2CRemainingUnreadList",
                                  C2CPairUnreadCount: "C2CPairUnreadList"
                              }
                          }
                      }
                  }(e)), this._configMap.set(nn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.BIG_DATA_HALLWAY_AUTH_KEY)
                          }),
                          body: {}
                      }
                  }(e)), this._configMap.set(on, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.SEND_MESSAGE)
                          }),
                          body: {
                              fromAccount: "",
                              toAccount: "",
                              msgTimeStamp: void 0,
                              msgSeq: 0,
                              msgRandom: 0,
                              msgBody: [],
                              cloudCustomData: void 0,
                              nick: "",
                              avatar: "",
                              msgLifeTime: void 0,
                              offlinePushInfo: {
                                  pushFlag: 0,
                                  title: "",
                                  desc: "",
                                  ext: "",
                                  apnsInfo: {
                                      badgeMode: 0
                                  },
                                  androidInfo: {
                                      OPPOChannelID: ""
                                  }
                              }
                          },
                          keyMap: {
                              request: {
                                  fromAccount: "From_Account",
                                  toAccount: "To_Account",
                                  msgTimeStamp: "MsgTimeStamp",
                                  msgSeq: "MsgSeq",
                                  msgRandom: "MsgRandom",
                                  msgBody: "MsgBody",
                                  count: "MaxCnt",
                                  lastMessageTime: "LastMsgTime",
                                  messageKey: "MsgKey",
                                  peerAccount: "Peer_Account",
                                  data: "Data",
                                  description: "Desc",
                                  extension: "Ext",
                                  type: "MsgType",
                                  content: "MsgContent",
                                  sizeType: "Type",
                                  uuid: "UUID",
                                  url: "",
                                  imageUrl: "URL",
                                  fileUrl: "Url",
                                  remoteAudioUrl: "Url",
                                  remoteVideoUrl: "VideoUrl",
                                  thumbUUID: "ThumbUUID",
                                  videoUUID: "VideoUUID",
                                  videoUrl: "",
                                  downloadFlag: "Download_Flag",
                                  nick: "From_AccountNick",
                                  avatar: "From_AccountHeadurl",
                                  from: "From_Account",
                                  time: "MsgTimeStamp",
                                  messageRandom: "MsgRandom",
                                  messageSequence: "MsgSeq",
                                  elements: "MsgBody",
                                  clientSequence: "ClientSeq",
                                  payload: "MsgContent",
                                  messageList: "MsgList",
                                  messageNumber: "MsgNum",
                                  abstractList: "AbstractList",
                                  messageBody: "MsgBody"
                              }
                          }
                      }
                  }(e)), this._configMap.set(an, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.SEND_GROUP_MESSAGE)
                          }),
                          body: {
                              fromAccount: "",
                              groupID: "",
                              random: 0,
                              clientSequence: 0,
                              priority: "",
                              msgBody: [],
                              cloudCustomData: void 0,
                              onlineOnlyFlag: 0,
                              offlinePushInfo: {
                                  pushFlag: 0,
                                  title: "",
                                  desc: "",
                                  ext: "",
                                  apnsInfo: {
                                      badgeMode: 0
                                  },
                                  androidInfo: {
                                      OPPOChannelID: ""
                                  }
                              },
                              groupAtInfo: []
                          },
                          keyMap: {
                              request: {
                                  to: "GroupId",
                                  extension: "Ext",
                                  data: "Data",
                                  description: "Desc",
                                  random: "Random",
                                  sequence: "ReqMsgSeq",
                                  count: "ReqMsgNumber",
                                  type: "MsgType",
                                  priority: "MsgPriority",
                                  content: "MsgContent",
                                  elements: "MsgBody",
                                  sizeType: "Type",
                                  uuid: "UUID",
                                  url: "",
                                  imageUrl: "URL",
                                  fileUrl: "Url",
                                  remoteAudioUrl: "Url",
                                  remoteVideoUrl: "VideoUrl",
                                  thumbUUID: "ThumbUUID",
                                  videoUUID: "VideoUUID",
                                  videoUrl: "",
                                  downloadFlag: "Download_Flag",
                                  clientSequence: "ClientSeq",
                                  from: "From_Account",
                                  time: "MsgTimeStamp",
                                  messageRandom: "MsgRandom",
                                  messageSequence: "MsgSeq",
                                  payload: "MsgContent",
                                  messageList: "MsgList",
                                  messageNumber: "MsgNum",
                                  abstractList: "AbstractList",
                                  messageBody: "MsgBody"
                              },
                              response: {
                                  MsgTime: "time",
                                  MsgSeq: "sequence"
                              }
                          }
                      }
                  }(e)), this._configMap.set(dn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.REVOKE_C2C_MESSAGE)
                          }),
                          body: {
                              msgInfo: {
                                  fromAccount: "",
                                  toAccount: "",
                                  msgTimeStamp: 0,
                                  msgSeq: 0,
                                  msgRandom: 0
                              }
                          },
                          keyMap: {
                              request: {
                                  msgInfo: "MsgInfo",
                                  msgTimeStamp: "MsgTimeStamp",
                                  msgSeq: "MsgSeq",
                                  msgRandom: "MsgRandom"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Gn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.REVOKE_GROUP_MESSAGE)
                          }),
                          body: {
                              to: "",
                              msgSeqList: void 0
                          },
                          keyMap: {
                              request: {
                                  to: "GroupId",
                                  msgSeqList: "MsgSeqList",
                                  msgSeq: "MsgSeq"
                              }
                          }
                      }
                  }(e)), this._configMap.set(gn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.GET_C2C_ROAM_MESSAGES)
                          }),
                          body: {
                              peerAccount: "",
                              count: 15,
                              lastMessageTime: 0,
                              messageKey: "",
                              withRecalledMessage: 1
                          },
                          keyMap: {
                              request: {
                                  messageKey: "MsgKey",
                                  peerAccount: "Peer_Account",
                                  count: "MaxCnt",
                                  lastMessageTime: "LastMsgTime",
                                  withRecalledMessage: "WithRecalledMsg"
                              }
                          }
                      }
                  }(e)), this._configMap.set(bn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_GROUP_ROAM_MESSAGES)
                          }),
                          body: {
                              withRecalledMsg: 1,
                              groupID: "",
                              count: 15,
                              sequence: ""
                          },
                          keyMap: {
                              request: {
                                  sequence: "ReqMsgSeq",
                                  count: "ReqMsgNumber",
                                  withRecalledMessage: "WithRecalledMsg"
                              },
                              response: {
                                  Random: "random",
                                  MsgTime: "time",
                                  MsgSeq: "sequence",
                                  ReqMsgSeq: "sequence",
                                  RspMsgList: "messageList",
                                  IsPlaceMsg: "isPlaceMessage",
                                  IsSystemMsg: "isSystemMessage",
                                  ToGroupId: "to",
                                  EnumFrom_AccountType: "fromAccountType",
                                  EnumTo_AccountType: "toAccountType",
                                  GroupCode: "groupCode",
                                  MsgPriority: "priority",
                                  MsgBody: "elements",
                                  MsgType: "type",
                                  MsgContent: "content",
                                  IsFinished: "complete",
                                  Download_Flag: "downloadFlag",
                                  ClientSeq: "clientSequence",
                                  ThumbUUID: "thumbUUID",
                                  VideoUUID: "videoUUID"
                              }
                          }
                      }
                  }(e)), this._configMap.set(pn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.SET_C2C_MESSAGE_READ)
                          }),
                          body: {
                              C2CMsgReaded: void 0
                          },
                          keyMap: {
                              request: {
                                  lastMessageTime: "LastedMsgTime"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Pn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.SET_GROUP_MESSAGE_READ)
                          }),
                          body: {
                              groupID: void 0,
                              messageReadSeq: void 0
                          },
                          keyMap: {
                              request: {
                                  messageReadSeq: "MsgReadedSeq"
                              }
                          }
                      }
                  }(e)), this._configMap.set(_n, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.DELETE_C2C_MESSAGE)
                          }),
                          body: {
                              fromAccount: "",
                              to: "",
                              keyList: void 0
                          },
                          keyMap: {
                              request: {
                                  keyList: "MsgKeyList"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Kn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.DELETE_GROUP_MESSAGE)
                          }),
                          body: {
                              groupID: "",
                              deleter: "",
                              keyList: void 0
                          },
                          keyMap: {
                              request: {
                                  deleter: "Deleter_Account",
                                  keyList: "Seqs"
                              }
                          }
                      }
                  }(e)), this._configMap.set(hn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.GET_PEER_READ_TIME)
                          }),
                          body: {
                              userIDList: void 0
                          },
                          keyMap: {
                              request: {
                                  userIDList: "To_Account"
                              },
                              response: {
                                  ReadTime: "peerReadTimeList"
                              }
                          }
                      }
                  }(e)), this._configMap.set(mn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.RECENT_CONTACT, ".").concat(U.CMD.GET_CONVERSATION_LIST)
                          }),
                          body: {
                              fromAccount: void 0,
                              count: 0
                          },
                          keyMap: {
                              request: {},
                              response: {
                                  SessionItem: "conversations",
                                  ToAccount: "groupID",
                                  To_Account: "userID",
                                  UnreadMsgCount: "unreadCount",
                                  MsgGroupReadedSeq: "messageReadSeq",
                                  C2cPeerReadTime: "c2cPeerReadTime"
                              }
                          }
                      }
                  }(e)), this._configMap.set(fn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.RECENT_CONTACT, ".").concat(U.CMD.PAGING_GET_CONVERSATION_LIST)
                          }),
                          body: {
                              fromAccount: void 0,
                              timeStamp: void 0,
                              startIndex: void 0,
                              pinnedTimeStamp: void 0,
                              pinnedStartIndex: void 0,
                              orderType: void 0,
                              messageAssistFlag: 4,
                              assistFlag: 7
                          },
                          keyMap: {
                              request: {
                                  messageAssistFlag: "MsgAssistFlags",
                                  assistFlag: "AssistFlags",
                                  pinnedTimeStamp: "TopTimeStamp",
                                  pinnedStartIndex: "TopStartIndex"
                              },
                              response: {
                                  SessionItem: "conversations",
                                  ToAccount: "groupID",
                                  To_Account: "userID",
                                  UnreadMsgCount: "unreadCount",
                                  MsgGroupReadedSeq: "messageReadSeq",
                                  C2cPeerReadTime: "c2cPeerReadTime",
                                  LastMsgFlags: "lastMessageFlag",
                                  TopFlags: "isPinned",
                                  TopTimeStamp: "pinnedTimeStamp",
                                  TopStartIndex: "pinnedStartIndex"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Mn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.RECENT_CONTACT, ".").concat(U.CMD.DELETE_CONVERSATION)
                          }),
                          body: {
                              fromAccount: "",
                              toAccount: void 0,
                              type: 1,
                              toGroupID: void 0
                          },
                          keyMap: {
                              request: {
                                  toGroupID: "ToGroupid"
                              }
                          }
                      }
                  }(e)), this._configMap.set(vn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.RECENT_CONTACT, ".").concat(U.CMD.PIN_CONVERSATION)
                          }),
                          body: {
                              fromAccount: "",
                              operationType: 1,
                              itemList: void 0
                          },
                          keyMap: {
                              request: {
                                  itemList: "RecentContactItem"
                              }
                          }
                      }
                  }(e)), this._configMap.set(yn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.DELETE_GROUP_AT_TIPS)
                          }),
                          body: {
                              messageListToDelete: void 0
                          },
                          keyMap: {
                              request: {
                                  messageListToDelete: "DelMsgList",
                                  messageSeq: "MsgSeq",
                                  messageRandom: "MsgRandom"
                              }
                          }
                      }
                  }(e)), this._configMap.set(sn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.PROFILE, ".").concat(U.CMD.PORTRAIT_GET)
                          }),
                          body: {
                              fromAccount: "",
                              userItem: []
                          },
                          keyMap: {
                              request: {
                                  toAccount: "To_Account",
                                  standardSequence: "StandardSequence",
                                  customSequence: "CustomSequence"
                              }
                          }
                      }
                  }(e)), this._configMap.set(rn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.PROFILE, ".").concat(U.CMD.PORTRAIT_SET)
                          }),
                          body: {
                              fromAccount: "",
                              profileItem: [{
                                  tag: or.NICK,
                                  value: ""
                              }, {
                                  tag: or.GENDER,
                                  value: ""
                              }, {
                                  tag: or.ALLOWTYPE,
                                  value: ""
                              }, {
                                  tag: or.AVATAR,
                                  value: ""
                              }]
                          },
                          keyMap: {
                              request: {
                                  toAccount: "To_Account",
                                  standardSequence: "StandardSequence",
                                  customSequence: "CustomSequence"
                              }
                          }
                      }
                  }(e)), this._configMap.set(un, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.FRIEND, ".").concat(U.CMD.GET_BLACKLIST)
                          }),
                          body: {
                              fromAccount: "",
                              startIndex: 0,
                              maxLimited: 30,
                              lastSequence: 0
                          },
                          keyMap: {
                              response: {
                                  CurruentSequence: "currentSequence"
                              }
                          }
                      }
                  }(e)), this._configMap.set(cn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.FRIEND, ".").concat(U.CMD.ADD_BLACKLIST)
                          }),
                          body: {
                              fromAccount: "",
                              toAccount: []
                          }
                      }
                  }(e)), this._configMap.set(ln, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.FRIEND, ".").concat(U.CMD.DELETE_BLACKLIST)
                          }),
                          body: {
                              fromAccount: "",
                              toAccount: []
                          }
                      }
                  }(e)), this._configMap.set(In, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_JOINED_GROUPS)
                          }),
                          body: {
                              memberAccount: "",
                              limit: void 0,
                              offset: void 0,
                              groupType: void 0,
                              responseFilter: {
                                  groupBaseInfoFilter: void 0,
                                  selfInfoFilter: void 0
                              }
                          },
                          keyMap: {
                              request: {
                                  memberAccount: "Member_Account"
                              },
                              response: {
                                  GroupIdList: "groups",
                                  MsgFlag: "messageRemindType"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Tn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_GROUP_INFO)
                          }),
                          body: {
                              groupIDList: void 0,
                              responseFilter: {
                                  groupBaseInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "Owner_Account", "CreateTime", "InfoSeq", "LastInfoTime", "LastMsgTime", "MemberNum", "MaxMemberNum", "ApplyJoinOption", "NextMsgSeq", "ShutUpAllMember"],
                                  groupCustomFieldFilter: void 0,
                                  memberInfoFilter: void 0,
                                  memberCustomFieldFilter: void 0
                              }
                          },
                          keyMap: {
                              request: {
                                  groupIDList: "GroupIdList",
                                  groupCustomField: "AppDefinedData",
                                  memberCustomField: "AppMemberDefinedData",
                                  groupCustomFieldFilter: "AppDefinedDataFilter_Group",
                                  memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                              },
                              response: {
                                  GroupIdList: "groups",
                                  MsgFlag: "messageRemindType",
                                  AppDefinedData: "groupCustomField",
                                  AppMemberDefinedData: "memberCustomField",
                                  AppDefinedDataFilter_Group: "groupCustomFieldFilter",
                                  AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                  InfoSeq: "infoSequence",
                                  MemberList: "members",
                                  GroupInfo: "groups",
                                  ShutUpUntil: "muteUntil",
                                  ShutUpAllMember: "muteAllMembers",
                                  ApplyJoinOption: "joinOption"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Dn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.CREATE_GROUP)
                          }),
                          body: {
                              type: void 0,
                              name: void 0,
                              groupID: void 0,
                              ownerID: void 0,
                              introduction: void 0,
                              notification: void 0,
                              maxMemberNum: void 0,
                              joinOption: void 0,
                              memberList: void 0,
                              groupCustomField: void 0,
                              memberCustomField: void 0,
                              webPushFlag: 1,
                              avatar: "FaceUrl"
                          },
                          keyMap: {
                              request: {
                                  ownerID: "Owner_Account",
                                  userID: "Member_Account",
                                  avatar: "FaceUrl",
                                  maxMemberNum: "MaxMemberCount",
                                  joinOption: "ApplyJoinOption",
                                  groupCustomField: "AppDefinedData",
                                  memberCustomField: "AppMemberDefinedData"
                              },
                              response: {
                                  HugeGroupFlag: "avChatRoomFlag",
                                  OverJoinedGroupLimit_Account: "overLimitUserIDList"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Cn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.DESTROY_GROUP)
                          }),
                          body: {
                              groupID: void 0
                          }
                      }
                  }(e)), this._configMap.set(Sn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.MODIFY_GROUP_INFO)
                          }),
                          body: {
                              groupID: void 0,
                              name: void 0,
                              introduction: void 0,
                              notification: void 0,
                              avatar: void 0,
                              maxMemberNum: void 0,
                              joinOption: void 0,
                              groupCustomField: void 0,
                              muteAllMembers: void 0
                          },
                          keyMap: {
                              request: {
                                  maxMemberNum: "MaxMemberCount",
                                  groupCustomField: "AppDefinedData",
                                  muteAllMembers: "ShutUpAllMember",
                                  joinOption: "ApplyJoinOption",
                                  avatar: "FaceUrl"
                              },
                              response: {
                                  AppDefinedData: "groupCustomField",
                                  ShutUpAllMember: "muteAllMembers",
                                  ApplyJoinOption: "joinOption"
                              }
                          }
                      }
                  }(e)), this._configMap.set(En, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.APPLY_JOIN_GROUP)
                          }),
                          body: {
                              groupID: void 0,
                              applyMessage: void 0,
                              userDefinedField: void 0,
                              webPushFlag: 1
                          },
                          keyMap: {
                              request: {
                                  applyMessage: "ApplyMsg"
                              },
                              response: {
                                  HugeGroupFlag: "avChatRoomFlag",
                                  AVChatRoomKey: "avChatRoomKey"
                              }
                          }
                      }
                  }(e)), this._configMap.set(kn, function(e) {
                      e.a2, e.tinyid;
                      return {
                          head: t(t({}, g(e, Qi)), {}, {
                              servcmd: "".concat(U.NAME.BIG_GROUP_NO_AUTH, ".").concat(U.CMD.APPLY_JOIN_GROUP)
                          }),
                          body: {
                              groupID: void 0,
                              applyMessage: void 0,
                              userDefinedField: void 0,
                              webPushFlag: 1
                          },
                          keyMap: {
                              request: {
                                  applyMessage: "ApplyMsg"
                              },
                              response: {
                                  HugeGroupFlag: "avChatRoomFlag"
                              }
                          }
                      }
                  }(e)), this._configMap.set(An, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.QUIT_GROUP)
                          }),
                          body: {
                              groupID: void 0
                          }
                      }
                  }(e)), this._configMap.set(Nn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.SEARCH_GROUP_BY_ID)
                          }),
                          body: {
                              groupIDList: void 0,
                              responseFilter: {
                                  groupBasePublicInfoFilter: ["Type", "Name", "Introduction", "Notification", "FaceUrl", "CreateTime", "Owner_Account", "LastInfoTime", "LastMsgTime", "NextMsgSeq", "MemberNum", "MaxMemberNum", "ApplyJoinOption"]
                              }
                          },
                          keyMap: {
                              response: {
                                  ApplyJoinOption: "joinOption"
                              }
                          }
                      }
                  }(e)), this._configMap.set(On, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.CHANGE_GROUP_OWNER)
                          }),
                          body: {
                              groupID: void 0,
                              newOwnerID: void 0
                          },
                          keyMap: {
                              request: {
                                  newOwnerID: "NewOwner_Account"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Ln, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.HANDLE_APPLY_JOIN_GROUP)
                          }),
                          body: {
                              groupID: void 0,
                              applicant: void 0,
                              handleAction: void 0,
                              handleMessage: void 0,
                              authentication: void 0,
                              messageKey: void 0,
                              userDefinedField: void 0
                          },
                          keyMap: {
                              request: {
                                  applicant: "Applicant_Account",
                                  handleAction: "HandleMsg",
                                  handleMessage: "ApprovalMsg",
                                  messageKey: "MsgKey"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Rn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.HANDLE_GROUP_INVITATION)
                          }),
                          body: {
                              groupID: void 0,
                              inviter: void 0,
                              handleAction: void 0,
                              handleMessage: void 0,
                              authentication: void 0,
                              messageKey: void 0,
                              userDefinedField: void 0
                          },
                          keyMap: {
                              request: {
                                  inviter: "Inviter_Account",
                                  handleAction: "HandleMsg",
                                  handleMessage: "ApprovalMsg",
                                  messageKey: "MsgKey"
                              }
                          }
                      }
                  }(e)), this._configMap.set(wn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_GROUP_APPLICATION)
                          }),
                          body: {
                              startTime: void 0,
                              limit: void 0,
                              handleAccount: void 0
                          },
                          keyMap: {
                              request: {
                                  handleAccount: "Handle_Account"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Un, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.DELETE_GROUP_SYSTEM_MESSAGE)
                          }),
                          body: {
                              messageListToDelete: void 0
                          },
                          keyMap: {
                              request: {
                                  messageListToDelete: "DelMsgList",
                                  messageSeq: "MsgSeq",
                                  messageRandom: "MsgRandom"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Fn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.BIG_GROUP_LONG_POLLING, ".").concat(U.CMD.AVCHATROOM_LONG_POLL)
                          }),
                          body: {
                              USP: 1,
                              startSeq: 1,
                              holdTime: 90,
                              key: void 0
                          },
                          keyMap: {
                              request: {
                                  USP: "USP"
                              },
                              response: {
                                  ToGroupId: "groupID"
                              }
                          }
                      }
                  }(e)), this._configMap.set(qn, function(e) {
                      e.a2, e.tinyid;
                      return {
                          head: t(t({}, g(e, Zi)), {}, {
                              servcmd: "".concat(U.NAME.BIG_GROUP_LONG_POLLING_NO_AUTH, ".").concat(U.CMD.AVCHATROOM_LONG_POLL)
                          }),
                          body: {
                              USP: 1,
                              startSeq: 1,
                              holdTime: 90,
                              key: void 0
                          },
                          keyMap: {
                              request: {
                                  USP: "USP"
                              },
                              response: {
                                  ToGroupId: "groupID"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Vn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_ONLINE_MEMBER_NUM)
                          }),
                          body: {
                              groupID: void 0
                          }
                      }
                  }(e)), this._configMap.set(xn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.SET_GROUP_ATTRIBUTES)
                          }),
                          body: {
                              groupID: void 0,
                              groupAttributeList: void 0,
                              mainSequence: void 0,
                              avChatRoomKey: void 0,
                              attributeControl: ["RaceConflict"]
                          },
                          keyMap: {
                              request: {
                                  key: "key",
                                  value: "value"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Bn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.MODIFY_GROUP_ATTRIBUTES)
                          }),
                          body: {
                              groupID: void 0,
                              groupAttributeList: void 0,
                              mainSequence: void 0,
                              avChatRoomKey: void 0,
                              attributeControl: ["RaceConflict"]
                          },
                          keyMap: {
                              request: {
                                  key: "key",
                                  value: "value"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Hn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.DELETE_GROUP_ATTRIBUTES)
                          }),
                          body: {
                              groupID: void 0,
                              groupAttributeList: void 0,
                              mainSequence: void 0,
                              avChatRoomKey: void 0,
                              attributeControl: ["RaceConflict"]
                          },
                          keyMap: {
                              request: {
                                  key: "key"
                              }
                          }
                      }
                  }(e)), this._configMap.set(jn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.CLEAR_GROUP_ATTRIBUTES)
                          }),
                          body: {
                              groupID: void 0,
                              mainSequence: void 0,
                              avChatRoomKey: void 0,
                              attributeControl: ["RaceConflict"]
                          }
                      }
                  }(e)), this._configMap.set(Yn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP_ATTR, ".").concat(U.CMD.GET_GROUP_ATTRIBUTES)
                          }),
                          body: {
                              groupID: void 0,
                              avChatRoomKey: void 0,
                              groupType: 1
                          },
                          keyMap: {
                              request: {
                                  avChatRoomKey: "Key",
                                  groupType: "GroupType"
                              }
                          }
                      }
                  }(e)), this._configMap.set($n, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_GROUP_MEMBER_LIST)
                          }),
                          body: {
                              groupID: void 0,
                              limit: 0,
                              offset: 0,
                              memberRoleFilter: void 0,
                              memberInfoFilter: ["Role", "NameCard", "ShutUpUntil", "JoinTime"],
                              memberCustomFieldFilter: void 0
                          },
                          keyMap: {
                              request: {
                                  memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                              },
                              response: {
                                  AppMemberDefinedData: "memberCustomField",
                                  AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                  MemberList: "members",
                                  ShutUpUntil: "muteUntil"
                              }
                          }
                      }
                  }(e)), this._configMap.set(zn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.GET_GROUP_MEMBER_INFO)
                          }),
                          body: {
                              groupID: void 0,
                              userIDList: void 0,
                              memberInfoFilter: void 0,
                              memberCustomFieldFilter: void 0
                          },
                          keyMap: {
                              request: {
                                  userIDList: "Member_List_Account",
                                  memberCustomFieldFilter: "AppDefinedDataFilter_GroupMember"
                              },
                              response: {
                                  MemberList: "members",
                                  ShutUpUntil: "muteUntil",
                                  AppDefinedDataFilter_GroupMember: "memberCustomFieldFilter",
                                  AppMemberDefinedData: "memberCustomField"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Wn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.ADD_GROUP_MEMBER)
                          }),
                          body: {
                              groupID: void 0,
                              silence: void 0,
                              userIDList: void 0
                          },
                          keyMap: {
                              request: {
                                  userID: "Member_Account",
                                  userIDList: "MemberList"
                              },
                              response: {
                                  MemberList: "members"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Jn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.DELETE_GROUP_MEMBER)
                          }),
                          body: {
                              groupID: void 0,
                              userIDList: void 0,
                              reason: void 0
                          },
                          keyMap: {
                              request: {
                                  userIDList: "MemberToDel_Account"
                              }
                          }
                      }
                  }(e)), this._configMap.set(Xn, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.GROUP, ".").concat(U.CMD.MODIFY_GROUP_MEMBER_INFO)
                          }),
                          body: {
                              groupID: void 0,
                              userID: void 0,
                              messageRemindType: void 0,
                              nameCard: void 0,
                              role: void 0,
                              memberCustomField: void 0,
                              muteTime: void 0
                          },
                          keyMap: {
                              request: {
                                  userID: "Member_Account",
                                  memberCustomField: "AppMemberDefinedData",
                                  muteTime: "ShutUpTime",
                                  messageRemindType: "MsgFlag"
                              }
                          }
                      }
                  }(e)), this._configMap.set(eo, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_STAT, ".").concat(U.CMD.TIM_WEB_REPORT_V2)
                          }),
                          body: {
                              header: {},
                              event: [],
                              quality: []
                          },
                          keyMap: {
                              request: {
                                  SDKType: "sdk_type",
                                  SDKVersion: "sdk_version",
                                  deviceType: "device_type",
                                  platform: "platform",
                                  instanceID: "instance_id",
                                  traceID: "trace_id",
                                  SDKAppID: "sdk_app_id",
                                  userID: "user_id",
                                  tinyID: "tiny_id",
                                  extension: "extension",
                                  timestamp: "timestamp",
                                  networkType: "network_type",
                                  eventType: "event_type",
                                  code: "error_code",
                                  message: "error_message",
                                  moreMessage: "more_message",
                                  duplicate: "duplicate",
                                  costTime: "cost_time",
                                  level: "level",
                                  qualityType: "quality_type",
                                  reportIndex: "report_index",
                                  wholePeriod: "whole_period",
                                  totalCount: "total_count",
                                  rttCount: "success_count_business",
                                  successRateOfRequest: "percent_business",
                                  countLessThan1Second: "success_count_business",
                                  percentOfCountLessThan1Second: "percent_business",
                                  countLessThan3Second: "success_count_platform",
                                  percentOfCountLessThan3Second: "percent_platform",
                                  successCountOfBusiness: "success_count_business",
                                  successRateOfBusiness: "percent_business",
                                  successCountOfPlatform: "success_count_platform",
                                  successRateOfPlatform: "percent_platform",
                                  successCountOfMessageReceived: "success_count_business",
                                  successRateOfMessageReceived: "percent_business",
                                  avgRTT: "average_value",
                                  avgDelay: "average_value",
                                  avgValue: "average_value"
                              }
                          }
                      }
                  }(o)), this._configMap.set(to, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.HEARTBEAT, ".").concat(U.CMD.ALIVE)
                          }),
                          body: {}
                      }
                  }(e)), this._configMap.set(no, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_PUSH, ".").concat(U.CMD.MESSAGE_PUSH)
                          }),
                          body: {},
                          keyMap: {
                              response: {
                                  C2cMsgArray: "C2CMessageArray",
                                  GroupMsgArray: "groupMessageArray",
                                  GroupTips: "groupTips",
                                  C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                  ClientSeq: "clientSequence",
                                  MsgPriority: "priority",
                                  NoticeSeq: "noticeSequence",
                                  MsgContent: "content",
                                  MsgType: "type",
                                  MsgBody: "elements",
                                  ToGroupId: "to",
                                  Desc: "description",
                                  Ext: "extension",
                                  IsSyncMsg: "isSyncMessage",
                                  Flag: "needSync",
                                  NeedAck: "needAck",
                                  PendencyAdd_Account: "userID",
                                  ProfileImNick: "nick",
                                  PendencyType: "applicationType"
                              }
                          }
                      }
                  }(e)), this._configMap.set(oo, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.OPEN_IM, ".").concat(U.CMD.MESSAGE_PUSH_ACK)
                          }),
                          body: {
                              sessionData: void 0
                          },
                          keyMap: {
                              request: {
                                  sessionData: "SessionData"
                              }
                          }
                      }
                  }(e)), this._configMap.set(ao, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_OPEN_STATUS, ".").concat(U.CMD.STATUS_FORCEOFFLINE)
                          }),
                          body: {},
                          keyMap: {
                              response: {
                                  C2cNotifyMsgArray: "C2CNotifyMessageArray",
                                  NoticeSeq: "noticeSequence",
                                  KickoutMsgNotify: "kickoutMsgNotify",
                                  NewInstInfo: "newInstanceInfo"
                              }
                          }
                      }
                  }(e)), this._configMap.set(ro, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_LONG_MESSAGE, ".").concat(U.CMD.DOWNLOAD_MERGER_MESSAGE)
                          }),
                          body: {
                              downloadKey: ""
                          },
                          keyMap: {
                              response: {
                                  Data: "data",
                                  Desc: "description",
                                  Ext: "extension",
                                  Download_Flag: "downloadFlag",
                                  ThumbUUID: "thumbUUID",
                                  VideoUUID: "videoUUID"
                              }
                          }
                      }
                  }(e)), this._configMap.set(so, function(e) {
                      return {
                          head: t(t({}, e), {}, {
                              servcmd: "".concat(U.NAME.IM_LONG_MESSAGE, ".").concat(U.CMD.UPLOAD_MERGER_MESSAGE)
                          }),
                          body: {
                              messageList: []
                          },
                          keyMap: {
                              request: {
                                  fromAccount: "From_Account",
                                  toAccount: "To_Account",
                                  msgTimeStamp: "MsgTimeStamp",
                                  msgSeq: "MsgSeq",
                                  msgRandom: "MsgRandom",
                                  msgBody: "MsgBody",
                                  type: "MsgType",
                                  content: "MsgContent",
                                  data: "Data",
                                  description: "Desc",
                                  extension: "Ext",
                                  sizeType: "Type",
                                  uuid: "UUID",
                                  url: "",
                                  imageUrl: "URL",
                                  fileUrl: "Url",
                                  remoteAudioUrl: "Url",
                                  remoteVideoUrl: "VideoUrl",
                                  thumbUUID: "ThumbUUID",
                                  videoUUID: "VideoUUID",
                                  videoUrl: "",
                                  downloadFlag: "Download_Flag",
                                  from: "From_Account",
                                  time: "MsgTimeStamp",
                                  messageRandom: "MsgRandom",
                                  messageSequence: "MsgSeq",
                                  elements: "MsgBody",
                                  clientSequence: "ClientSeq",
                                  payload: "MsgContent",
                                  messageList: "MsgList",
                                  messageNumber: "MsgNum",
                                  abstractList: "AbstractList",
                                  messageBody: "MsgBody"
                              }
                          }
                      }
                  }(e))
              }
          }, {
              key: "has",
              value: function(e) {
                  return this._configMap.has(e)
              }
          }, {
              key: "get",
              value: function(e) {
                  return this._configMap.get(e)
              }
          }, {
              key: "update",
              value: function() {
                  this._fillConfigMap()
              }
          }, {
              key: "getKeyMap",
              value: function(e) {
                  return this.has(e) ? this.get(e).keyMap || {} : (Se.warn("".concat(this._className, ".getKeyMap unknown protocolName:").concat(e)), {})
              }
          }, {
              key: "getProtocolData",
              value: function(e) {
                  var t = e.protocolName,
                      n = e.requestData,
                      o = this.get(t),
                      a = null;
                  if (n) {
                      var s = this._simpleDeepCopy(o),
                          r = s.body,
                          i = Object.create(null);
                      for (var u in r)
                          if (Object.prototype.hasOwnProperty.call(r, u)) {
                              if (i[u] = r[u], void 0 === n[u]) continue;
                              i[u] = n[u]
                          } s.body = i, a = this._getUplinkData(s)
                  } else a = this._getUplinkData(o);
                  return a
              }
          }, {
              key: "_getUplinkData",
              value: function(e) {
                  var t = this._requestDataCleaner(e),
                      n = lt(t.head),
                      o = Vi(t.body, this._getRequestKeyMap(n));
                  return t.body = o, t
              }
          }, {
              key: "_getRequestKeyMap",
              value: function(e) {
                  var n = this.getKeyMap(e);
                  return t(t({}, Ui.request), n.request)
              }
          }, {
              key: "_requestDataCleaner",
              value: function(e) {
                  var t = Array.isArray(e) ? [] : Object.create(null);
                  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && Fe(o) && null !== e[o] && void 0 !== e[o] && ("object" !== n(e[o]) ? t[o] = e[o] : t[o] = this._requestDataCleaner.bind(this)(e[o]));
                  return t
              }
          }, {
              key: "_simpleDeepCopy",
              value: function(e) {
                  for (var t, n = Object.keys(e), o = {}, a = 0, s = n.length; a < s; a++) t = n[a], Re(e[t]) ? o[t] = Array.from(e[t]) : Oe(e[t]) ? o[t] = this._simpleDeepCopy(e[t]) : o[t] = e[t];
                  return o
              }
          }]), e
      }(),
      tu = [oo],
      nu = function() {
          function e(t) {
              o(this, e), this._sessionModule = t, this._className = "DownlinkHandler", this._eventHandlerMap = new Map, this._eventHandlerMap.set("C2CMessageArray", this._c2cMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupMessageArray", this._groupMessageArrayHandler.bind(this)), this._eventHandlerMap.set("groupTips", this._groupTipsHandler.bind(this)), this._eventHandlerMap.set("C2CNotifyMessageArray", this._C2CNotifyMessageArrayHandler.bind(this)), this._eventHandlerMap.set("profileModify", this._profileHandler.bind(this)), this._eventHandlerMap.set("friendListMod", this._relationChainHandler.bind(this)), this._eventHandlerMap.set("recentContactMod", this._recentContactHandler.bind(this)), this._keys = M(this._eventHandlerMap.keys())
          }
          return s(e, [{
              key: "_c2cMessageArrayHandler",
              value: function(e) {
                  var t = this._sessionModule.getModule(Rt);
                  if (t) {
                      if (e.dataList.forEach((function(e) {
                              if (1 === e.isSyncMessage) {
                                  var t = e.from;
                                  e.from = e.to, e.to = t
                              }
                          })), 1 === e.needSync) this._sessionModule.getModule(Ht).startOnlineSync();
                      t.onNewC2CMessage({
                          dataList: e.dataList,
                          isInstantMessage: !0
                      })
                  }
              }
          }, {
              key: "_groupMessageArrayHandler",
              value: function(e) {
                  var t = this._sessionModule.getModule(Gt);
                  t && t.onNewGroupMessage({
                      event: e.event,
                      dataList: e.dataList,
                      isInstantMessage: !0
                  })
              }
          }, {
              key: "_groupTipsHandler",
              value: function(e) {
                  var t = this._sessionModule.getModule(Gt);
                  if (t) {
                      var n = e.event,
                          o = e.dataList,
                          a = e.isInstantMessage,
                          s = void 0 === a || a,
                          r = e.isSyncingEnded;
                      switch (n) {
                          case 4:
                          case 6:
                              t.onNewGroupTips({
                                  event: n,
                                  dataList: o
                              });
                              break;
                          case 5:
                              o.forEach((function(e) {
                                  Re(e.elements.revokedInfos) ? t.onGroupMessageRevoked({
                                      dataList: o
                                  }) : Re(e.elements.groupMessageReadNotice) ? t.onGroupMessageReadNotice({
                                      dataList: o
                                  }) : t.onNewGroupSystemNotice({
                                      dataList: o,
                                      isInstantMessage: s,
                                      isSyncingEnded: r
                                  })
                              }));
                              break;
                          case 12:
                              this._sessionModule.getModule(wt).onNewGroupAtTips({
                                  dataList: o
                              });
                              break;
                          default:
                              Se.log("".concat(this._className, "._groupTipsHandler unknown event:").concat(n, " dataList:"), o)
                      }
                  }
              }
          }, {
              key: "_C2CNotifyMessageArrayHandler",
              value: function(e) {
                  var t = this,
                      n = e.dataList;
                  if (Re(n)) {
                      var o = this._sessionModule.getModule(Rt);
                      n.forEach((function(e) {
                          if (Le(e))
                              if (e.hasOwnProperty("kickoutMsgNotify")) {
                                  var a = e.kickoutMsgNotify,
                                      s = a.kickType,
                                      r = a.newInstanceInfo,
                                      i = void 0 === r ? {} : r;
                                  1 === s ? t._sessionModule.onMultipleAccountKickedOut(i) : 2 === s && t._sessionModule.onMultipleDeviceKickedOut(i)
                              } else e.hasOwnProperty("c2cMessageRevokedNotify") ? o && o.onC2CMessageRevoked({
                                  dataList: n
                              }) : e.hasOwnProperty("c2cMessageReadReceipt") ? o && o.onC2CMessageReadReceipt({
                                  dataList: n
                              }) : e.hasOwnProperty("c2cMessageReadNotice") && o && o.onC2CMessageReadNotice({
                                  dataList: n
                              })
                      }))
                  }
              }
          }, {
              key: "_profileHandler",
              value: function(e) {
                  this._sessionModule.getModule(Lt).onProfileModified({
                      dataList: e.dataList
                  });
                  var t = this._sessionModule.getModule(Pt);
                  t && t.onFriendProfileModified({
                      dataList: e.dataList
                  })
              }
          }, {
              key: "_relationChainHandler",
              value: function(e) {
                  this._sessionModule.getModule(Lt).onRelationChainModified({
                      dataList: e.dataList
                  });
                  var t = this._sessionModule.getModule(Pt);
                  t && t.onRelationChainModified({
                      dataList: e.dataList
                  })
              }
          }, {
              key: "_recentContactHandler",
              value: function(e) {
                  var t = e.dataList;
                  if (Re(t)) {
                      var n = this._sessionModule.getModule(wt);
                      n && t.forEach((function(e) {
                          var t = e.pushType,
                              o = e.recentContactTopItem,
                              a = e.recentContactDeleteItem;
                          1 === t ? n.onConversationDeleted(a.recentContactList) : 2 === t ? n.onConversationPinned(o.recentContactList) : 3 === t && n.onConversationUnpinned(o.recentContactList)
                      }))
                  }
              }
          }, {
              key: "_cloudControlConfigHandler",
              value: function(e) {
                  this._sessionModule.getModule(zt).onPushedCloudControlConfig(e)
              }
          }, {
              key: "onMessage",
              value: function(e) {
                  var t = this,
                      n = e.head,
                      o = e.body;
                  if (this._isPushedCloudControlConfig(n)) this._cloudControlConfigHandler(o);
                  else {
                      var a = o.eventArray,
                          s = o.isInstantMessage,
                          r = o.isSyncingEnded,
                          i = o.needSync;
                      if (Re(a))
                          for (var u = null, c = null, l = 0, d = 0, p = a.length; d < p; d++) {
                              l = (u = a[d]).event;
                              var g = Object.keys(u).find((function(e) {
                                  return -1 !== t._keys.indexOf(e)
                              }));
                              g ? (c = u[g], this._eventHandlerMap.get(g)({
                                  event: l,
                                  dataList: c,
                                  isInstantMessage: s,
                                  isSyncingEnded: r,
                                  needSync: i
                              })) : Se.log("".concat(this._className, ".onMessage unknown eventItem:").concat(u))
                          }
                  }
              }
          }, {
              key: "_isPushedCloudControlConfig",
              value: function(e) {
                  return e.servcmd && e.servcmd.includes(uo)
              }
          }]), e
      }(),
      ou = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "SessionModule", a._platform = a.getPlatform(), a._protocolHandler = new eu(h(a)), a._messageDispatcher = new nu(h(a)), a
          }
          return s(n, [{
              key: "updateProtocolConfig",
              value: function() {
                  this._protocolHandler.update()
              }
          }, {
              key: "request",
              value: function(e) {
                  Se.debug("".concat(this._className, ".request options:"), e);
                  var t = e.protocolName,
                      n = e.tjgID;
                  if (!this._protocolHandler.has(t)) return Se.warn("".concat(this._className, ".request unknown protocol:").concat(t)), Pr({
                      code: co.CANNOT_FIND_PROTOCOL,
                      message: fa
                  });
                  var o = this.getProtocolData(e);
                  _t(n) || (o.head.tjgID = n);
                  var a = this.getModule(Yt);
                  return tu.includes(t) ? a.simplySend(o) : a.send(o)
              }
          }, {
              key: "getKeyMap",
              value: function(e) {
                  return this._protocolHandler.getKeyMap(e)
              }
          }, {
              key: "genCommonHead",
              value: function() {
                  var e = this.getModule(Ut);
                  return {
                      ver: "v4",
                      platform: this._platform,
                      websdkappid: G,
                      websdkversion: R,
                      a2: e.getA2Key() || void 0,
                      tinyid: e.getTinyID() || void 0,
                      status_instid: e.getStatusInstanceID(),
                      sdkappid: e.getSDKAppID(),
                      contenttype: e.getContentType(),
                      reqtime: 0,
                      identifier: e.getA2Key() ? void 0 : e.getUserID(),
                      usersig: e.getA2Key() ? void 0 : e.getUserSig(),
                      sdkability: 2,
                      tjgID: ""
                  }
              }
          }, {
              key: "genCosSpecifiedHead",
              value: function() {
                  var e = this.getModule(Ut);
                  return {
                      ver: "v4",
                      platform: this._platform,
                      websdkappid: G,
                      websdkversion: R,
                      sdkappid: e.getSDKAppID(),
                      contenttype: e.getContentType(),
                      reqtime: 0,
                      identifier: e.getUserID(),
                      usersig: e.getUserSig(),
                      status_instid: e.getStatusInstanceID(),
                      sdkability: 2
                  }
              }
          }, {
              key: "genSSOReportHead",
              value: function() {
                  var e = this.getModule(Ut);
                  return {
                      ver: "v4",
                      platform: this._platform,
                      websdkappid: G,
                      websdkversion: R,
                      sdkappid: e.getSDKAppID(),
                      contenttype: "",
                      reqtime: 0,
                      identifier: "",
                      usersig: "",
                      status_instid: e.getStatusInstanceID(),
                      sdkability: 2
                  }
              }
          }, {
              key: "getProtocolData",
              value: function(e) {
                  return this._protocolHandler.getProtocolData(e)
              }
          }, {
              key: "onErrorCodeNotZero",
              value: function(e) {
                  var t = e.errorCode;
                  if (t === co.HELLO_ANSWER_KICKED_OUT) {
                      var n = e.kickType,
                          o = e.newInstanceInfo,
                          a = void 0 === o ? {} : o;
                      1 === n ? this.onMultipleAccountKickedOut(a) : 2 === n && this.onMultipleDeviceKickedOut(a)
                  }
                  t !== co.MESSAGE_A2KEY_EXPIRED && t !== co.ACCOUNT_A2KEY_EXPIRED || (this._onUserSigExpired(), this.getModule(Yt).reConnect())
              }
          }, {
              key: "onMessage",
              value: function(e) {
                  var t = e.body,
                      n = t.needAck,
                      o = void 0 === n ? 0 : n,
                      a = t.sessionData;
                  1 === o && this._sendACK(a), this._messageDispatcher.onMessage(e)
              }
          }, {
              key: "onReconnected",
              value: function() {
                  var e = this;
                  this.isLoggedIn() && this.request({
                      protocolName: Qt
                  }).then((function(t) {
                      var n = t.data.instanceID;
                      e.getModule(Ut).setStatusInstanceID(n), Se.log("".concat(e._className, ".onReconnected, login ok. start to sync unread messages.")), e.getModule(Ht).startSyncOnReconnected(), e.getModule(Wt).startPull(), e.getModule(Gt).updateLocalMainSequenceOnReconnected()
                  }))
              }
          }, {
              key: "onMultipleAccountKickedOut",
              value: function(e) {
                  this.getModule(Nt).onMultipleAccountKickedOut(e)
              }
          }, {
              key: "onMultipleDeviceKickedOut",
              value: function(e) {
                  this.getModule(Nt).onMultipleDeviceKickedOut(e)
              }
          }, {
              key: "_onUserSigExpired",
              value: function() {
                  this.getModule(Nt).onUserSigExpired()
              }
          }, {
              key: "_sendACK",
              value: function(e) {
                  this.request({
                      protocolName: oo,
                      requestData: {
                          sessionData: e
                      }
                  })
              }
          }]), n
      }(Xt),
      au = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "MessageLossDetectionModule", a._maybeLostSequencesMap = new Map, a
          }
          return s(n, [{
              key: "onMessageMaybeLost",
              value: function(e, t, n) {
                  this._maybeLostSequencesMap.has(e) || this._maybeLostSequencesMap.set(e, []);
                  for (var o = this._maybeLostSequencesMap.get(e), a = 0; a < n; a++) o.push(t + a);
                  Se.debug("".concat(this._className, ".onMessageMaybeLost. maybeLostSequences:").concat(o))
              }
          }, {
              key: "detectMessageLoss",
              value: function(e, t) {
                  var n = this._maybeLostSequencesMap.get(e);
                  if (!_t(n) && !_t(t)) {
                      var o = t.filter((function(e) {
                          return -1 !== n.indexOf(e)
                      }));
                      if (Se.debug("".concat(this._className, ".detectMessageLoss. matchedSequences:").concat(o)), n.length === o.length) Se.info("".concat(this._className, ".detectMessageLoss no message loss. conversationID:").concat(e));
                      else {
                          var a, s = n.filter((function(e) {
                                  return -1 === o.indexOf(e)
                              })),
                              r = s.length;
                          r <= 5 ? a = e + "-" + s.join("-") : (s.sort((function(e, t) {
                              return e - t
                          })), a = e + " start:" + s[0] + " end:" + s[r - 1] + " count:" + r), new Ga(Hs).setMessage(a).setNetworkType(this.getNetworkType()).setLevel("warning").end(), Se.warn("".concat(this._className, ".detectMessageLoss message loss detected. conversationID:").concat(e, " lostSequences:").concat(s))
                      }
                      n.length = 0
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._maybeLostSequencesMap.clear()
              }
          }]), n
      }(Xt),
      su = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "CloudControlModule", a._cloudConfig = new Map, a._expiredTime = 0, a._version = 0, a._isFetching = !1, a
          }
          return s(n, [{
              key: "getCloudConfig",
              value: function(e) {
                  return Ge(e) ? this._cloudConfig : this._cloudConfig.has(e) ? this._cloudConfig.get(e) : void 0
              }
          }, {
              key: "_canFetchConfig",
              value: function() {
                  return this.isLoggedIn() && !this._isFetching && Date.now() >= this._expiredTime
              }
          }, {
              key: "fetchConfig",
              value: function() {
                  var e = this,
                      t = this._canFetchConfig();
                  if (Se.log("".concat(this._className, ".fetchConfig canFetchConfig:").concat(t)), t) {
                      var n = new Ga(Qs),
                          o = this.getModule(Ut).getSDKAppID();
                      this._isFetching = !0, this.request({
                          protocolName: io,
                          requestData: {
                              SDKAppID: o,
                              version: this._version
                          }
                      }).then((function(t) {
                          e._isFetching = !1, n.setMessage("version:".concat(e._version, " newVersion:").concat(t.data.version, " config:").concat(t.data.cloudControlConfig)).setNetworkType(e.getNetworkType()).end(), Se.log("".concat(e._className, ".fetchConfig ok")), e._parseCloudControlConfig(t.data)
                      })).catch((function(t) {
                          e._isFetching = !1, e.probeNetwork().then((function(e) {
                              var o = m(e, 2),
                                  a = o[0],
                                  s = o[1];
                              n.setError(t, a, s).end()
                          })), Se.log("".concat(e._className, ".fetchConfig failed. error:"), t), e._setExpiredTimeOnResponseError(12e4)
                      }))
                  }
              }
          }, {
              key: "onPushedCloudControlConfig",
              value: function(e) {
                  Se.log("".concat(this._className, ".onPushedCloudControlConfig")), new Ga(Zs).setNetworkType(this.getNetworkType()).setMessage("newVersion:".concat(e.version, " config:").concat(e.cloudControlConfig)).end(), this._parseCloudControlConfig(e)
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  this._canFetchConfig() && this.fetchConfig()
              }
          }, {
              key: "_parseCloudControlConfig",
              value: function(e) {
                  var t = this,
                      n = "".concat(this._className, "._parseCloudControlConfig"),
                      o = e.errorCode,
                      a = e.errorMessage,
                      s = e.cloudControlConfig,
                      r = e.version,
                      i = e.expiredTime;
                  if (0 === o) {
                      if (this._version !== r) {
                          var u = null;
                          try {
                              u = JSON.parse(s)
                          } catch (c) {
                              Se.error("".concat(n, " JSON parse error:").concat(s))
                          }
                          u && (this._cloudConfig.clear(), Object.keys(u).forEach((function(e) {
                              t._cloudConfig.set(e, u[e])
                          })), this._version = r, this.emitInnerEvent(Ur.CLOUD_CONFIG_UPDATED))
                      }
                      this._expiredTime = Date.now() + 1e3 * i
                  } else Ge(o) ? (Se.log("".concat(n, " failed. Invalid message format:"), e), this._setExpiredTimeOnResponseError(36e5)) : (Se.error("".concat(n, " errorCode:").concat(o, " errorMessage:").concat(a)), this._setExpiredTimeOnResponseError(12e4))
              }
          }, {
              key: "_setExpiredTimeOnResponseError",
              value: function(e) {
                  this._expiredTime = Date.now() + e
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._cloudConfig.clear(), this._expiredTime = 0, this._version = 0, this._isFetching = !1
              }
          }]), n
      }(Xt),
      ru = function(e) {
          i(n, e);
          var t = f(n);

          function n(e) {
              var a;
              return o(this, n), (a = t.call(this, e))._className = "PullGroupMessageModule", a._remoteLastMessageSequenceMap = new Map, a.PULL_LIMIT_COUNT = 15, a
          }
          return s(n, [{
              key: "startPull",
              value: function() {
                  var e = this,
                      t = this._getNeedPullConversationList();
                  this._getRemoteLastMessageSequenceList().then((function() {
                      var n = e.getModule(wt);
                      t.forEach((function(t) {
                          var o = t.conversationID,
                              a = o.replace(E.CONV_GROUP, ""),
                              s = n.getGroupLocalLastMessageSequence(o),
                              r = e._remoteLastMessageSequenceMap.get(a) || 0,
                              i = r - s;
                          Se.log("".concat(e._className, ".startPull groupID:").concat(a, " localLastMessageSequence:").concat(s, " ") + "remoteLastMessageSequence:".concat(r, " diff:").concat(i)), s > 0 && i >= 1 && i < 300 && e._pullMissingMessage({
                              groupID: a,
                              localLastMessageSequence: s,
                              remoteLastMessageSequence: r,
                              diff: i
                          })
                      }))
                  }))
              }
          }, {
              key: "_getNeedPullConversationList",
              value: function() {
                  return this.getModule(wt).getLocalConversationList().filter((function(e) {
                      return e.type === E.CONV_GROUP && e.groupProfile.type !== E.GRP_AVCHATROOM
                  }))
              }
          }, {
              key: "_getRemoteLastMessageSequenceList",
              value: function() {
                  var e = this;
                  return this.getModule(Gt).getGroupList().then((function(t) {
                      for (var n = t.data.groupList, o = void 0 === n ? [] : n, a = 0; a < o.length; a++) {
                          var s = o[a],
                              r = s.groupID,
                              i = s.nextMessageSeq;
                          if (s.type !== E.GRP_AVCHATROOM) {
                              var u = i - 1;
                              e._remoteLastMessageSequenceMap.set(r, u)
                          }
                      }
                  }))
              }
          }, {
              key: "_pullMissingMessage",
              value: function(e) {
                  var t = this,
                      n = e.localLastMessageSequence,
                      o = e.remoteLastMessageSequence,
                      a = e.diff;
                  e.count = a > this.PULL_LIMIT_COUNT ? this.PULL_LIMIT_COUNT : a, e.sequence = a > this.PULL_LIMIT_COUNT ? n + this.PULL_LIMIT_COUNT : n + a, this._getGroupMissingMessage(e).then((function(s) {
                      s.length > 0 && (s[0].sequence + 1 <= o && (e.localLastMessageSequence = n + t.PULL_LIMIT_COUNT, e.diff = a - t.PULL_LIMIT_COUNT, t._pullMissingMessage(e)), t.getModule(Gt).onNewGroupMessage({
                          dataList: s,
                          isInstantMessage: !1
                      }))
                  }))
              }
          }, {
              key: "_getGroupMissingMessage",
              value: function(e) {
                  var t = this,
                      n = new Ga(Es);
                  return this.request({
                      protocolName: bn,
                      requestData: {
                          groupID: e.groupID,
                          count: e.count,
                          sequence: e.sequence
                      }
                  }).then((function(o) {
                      var a = o.data.messageList,
                          s = void 0 === a ? [] : a;
                      return n.setNetworkType(t.getNetworkType()).setMessage("groupID:".concat(e.groupID, " count:").concat(e.count, " sequence:").concat(e.sequence, " messageList length:").concat(s.length)).end(), s
                  })).catch((function(e) {
                      t.probeNetwork().then((function(t) {
                          var o = m(t, 2),
                              a = o[0],
                              s = o[1];
                          n.setError(e, a, s).end()
                      }))
                  }))
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._remoteLastMessageSequenceMap.clear()
              }
          }]), n
      }(Xt),
      iu = function() {
          function e() {
              o(this, e), this._className = "AvgE2EDelay", this._e2eDelayArray = []
          }
          return s(e, [{
              key: "addMessageDelay",
              value: function(e) {
                  var t = dt(e.currentTime / 1e3 - e.time, 2);
                  this._e2eDelayArray.push(t)
              }
          }, {
              key: "_calcAvg",
              value: function(e, t) {
                  if (0 === t) return 0;
                  var n = 0;
                  return e.forEach((function(e) {
                      n += e
                  })), dt(n / t, 1)
              }
          }, {
              key: "_calcTotalCount",
              value: function() {
                  return this._e2eDelayArray.length
              }
          }, {
              key: "_calcCountWithLimit",
              value: function(e) {
                  var t = e.e2eDelayArray,
                      n = e.min,
                      o = e.max;
                  return t.filter((function(e) {
                      return n < e && e <= o
                  })).length
              }
          }, {
              key: "_calcPercent",
              value: function(e, t) {
                  var n = dt(e / t * 100, 2);
                  return n > 100 && (n = 100), n
              }
          }, {
              key: "_checkE2EDelayException",
              value: function(e, t) {
                  var n = e.filter((function(e) {
                      return e > t
                  }));
                  if (n.length > 0) {
                      var o = n.length,
                          a = Math.min.apply(Math, M(n)),
                          s = Math.max.apply(Math, M(n)),
                          r = this._calcAvg(n, o),
                          i = dt(o / e.length * 100, 2);
                      new Ga(ss).setMessage("message e2e delay exception. count:".concat(o, " min:").concat(a, " max:").concat(s, " avg:").concat(r, " percent:").concat(i)).setLevel("warning").end()
                  }
              }
          }, {
              key: "getStatResult",
              value: function() {
                  var e = this._calcTotalCount();
                  if (0 === e) return null;
                  var t = M(this._e2eDelayArray),
                      n = this._calcCountWithLimit({
                          e2eDelayArray: t,
                          min: 0,
                          max: 1
                      }),
                      o = this._calcCountWithLimit({
                          e2eDelayArray: t,
                          min: 1,
                          max: 3
                      }),
                      a = this._calcPercent(n, e),
                      s = this._calcPercent(o, e),
                      r = this._calcAvg(t, e);
                  return this._checkE2EDelayException(t, 3), this.reset(), {
                      totalCount: e,
                      countLessThan1Second: n,
                      percentOfCountLessThan1Second: a,
                      countLessThan3Second: o,
                      percentOfCountLessThan3Second: s,
                      avgDelay: r
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  this._e2eDelayArray.length = 0
              }
          }]), e
      }(),
      uu = function() {
          function e() {
              o(this, e), this._className = "AvgRTT", this._requestCount = 0, this._rttArray = []
          }
          return s(e, [{
              key: "addRequestCount",
              value: function() {
                  this._requestCount += 1
              }
          }, {
              key: "addRTT",
              value: function(e) {
                  this._rttArray.push(e)
              }
          }, {
              key: "_calcTotalCount",
              value: function() {
                  return this._requestCount
              }
          }, {
              key: "_calcRTTCount",
              value: function(e) {
                  return e.length
              }
          }, {
              key: "_calcSuccessRateOfRequest",
              value: function(e, t) {
                  if (0 === t) return 0;
                  var n = dt(e / t * 100, 2);
                  return n > 100 && (n = 100), n
              }
          }, {
              key: "_calcAvg",
              value: function(e, t) {
                  if (0 === t) return 0;
                  var n = 0;
                  return e.forEach((function(e) {
                      n += e
                  })), parseInt(n / t)
              }
          }, {
              key: "_calcMax",
              value: function() {
                  return Math.max.apply(Math, M(this._rttArray))
              }
          }, {
              key: "_calcMin",
              value: function() {
                  return Math.min.apply(Math, M(this._rttArray))
              }
          }, {
              key: "getStatResult",
              value: function() {
                  var e = this._calcTotalCount(),
                      t = M(this._rttArray);
                  if (0 === e) return null;
                  var n = this._calcRTTCount(t),
                      o = this._calcSuccessRateOfRequest(n, e),
                      a = this._calcAvg(t, n);
                  return Se.log("".concat(this._className, ".getStatResult max:").concat(this._calcMax(), " min:").concat(this._calcMin(), " avg:").concat(a)), this.reset(), {
                      totalCount: e,
                      rttCount: n,
                      successRateOfRequest: o,
                      avgRTT: a
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  this._requestCount = 0, this._rttArray.length = 0
              }
          }]), e
      }(),
      cu = function() {
          function e() {
              o(this, e), this._map = new Map
          }
          return s(e, [{
              key: "initMap",
              value: function(e) {
                  var t = this;
                  e.forEach((function(e) {
                      t._map.set(e, {
                          totalCount: 0,
                          successCount: 0,
                          failedCountOfUserSide: 0,
                          costArray: [],
                          fileSizeArray: []
                      })
                  }))
              }
          }, {
              key: "addTotalCount",
              value: function(e) {
                  return !(Ge(e) || !this._map.has(e)) && (this._map.get(e).totalCount += 1, !0)
              }
          }, {
              key: "addSuccessCount",
              value: function(e) {
                  return !(Ge(e) || !this._map.has(e)) && (this._map.get(e).successCount += 1, !0)
              }
          }, {
              key: "addFailedCountOfUserSide",
              value: function(e) {
                  return !(Ge(e) || !this._map.has(e)) && (this._map.get(e).failedCountOfUserSide += 1, !0)
              }
          }, {
              key: "addCost",
              value: function(e, t) {
                  return !(Ge(e) || !this._map.has(e)) && (this._map.get(e).costArray.push(t), !0)
              }
          }, {
              key: "addFileSize",
              value: function(e, t) {
                  return !(Ge(e) || !this._map.has(e)) && (this._map.get(e).fileSizeArray.push(t), !0)
              }
          }, {
              key: "_calcSuccessRateOfBusiness",
              value: function(e) {
                  if (Ge(e) || !this._map.has(e)) return -1;
                  var t = this._map.get(e),
                      n = dt(t.successCount / t.totalCount * 100, 2);
                  return n > 100 && (n = 100), n
              }
          }, {
              key: "_calcSuccessRateOfPlatform",
              value: function(e) {
                  if (Ge(e) || !this._map.has(e)) return -1;
                  var t = this._map.get(e),
                      n = this._calcSuccessCountOfPlatform(e) / t.totalCount * 100;
                  return (n = dt(n, 2)) > 100 && (n = 100), n
              }
          }, {
              key: "_calcTotalCount",
              value: function(e) {
                  return Ge(e) || !this._map.has(e) ? -1 : this._map.get(e).totalCount
              }
          }, {
              key: "_calcSuccessCountOfBusiness",
              value: function(e) {
                  return Ge(e) || !this._map.has(e) ? -1 : this._map.get(e).successCount
              }
          }, {
              key: "_calcSuccessCountOfPlatform",
              value: function(e) {
                  if (Ge(e) || !this._map.has(e)) return -1;
                  var t = this._map.get(e);
                  return t.successCount + t.failedCountOfUserSide
              }
          }, {
              key: "_calcAvg",
              value: function(e) {
                  return Ge(e) || !this._map.has(e) ? -1 : e === Ea ? this._calcAvgSpeed(e) : this._calcAvgCost(e)
              }
          }, {
              key: "_calcAvgCost",
              value: function(e) {
                  var t = this._map.get(e).costArray.length;
                  if (0 === t) return 0;
                  var n = 0;
                  return this._map.get(e).costArray.forEach((function(e) {
                      n += e
                  })), parseInt(n / t)
              }
          }, {
              key: "_calcAvgSpeed",
              value: function(e) {
                  var t = 0,
                      n = 0;
                  return this._map.get(e).costArray.forEach((function(e) {
                      t += e
                  })), this._map.get(e).fileSizeArray.forEach((function(e) {
                      n += e
                  })), parseInt(1e3 * n / t)
              }
          }, {
              key: "getStatResult",
              value: function(e) {
                  var t = this._calcTotalCount(e);
                  if (0 === t) return null;
                  var n = this._calcSuccessCountOfBusiness(e),
                      o = this._calcSuccessRateOfBusiness(e),
                      a = this._calcSuccessCountOfPlatform(e),
                      s = this._calcSuccessRateOfPlatform(e),
                      r = this._calcAvg(e);
                  return this.reset(e), {
                      totalCount: t,
                      successCountOfBusiness: n,
                      successRateOfBusiness: o,
                      successCountOfPlatform: a,
                      successRateOfPlatform: s,
                      avgValue: r
                  }
              }
          }, {
              key: "reset",
              value: function(e) {
                  Ge(e) ? this._map.clear() : this._map.set(e, {
                      totalCount: 0,
                      successCount: 0,
                      failedCountOfUserSide: 0,
                      costArray: [],
                      fileSizeArray: []
                  })
              }
          }]), e
      }(),
      lu = function() {
          function e() {
              o(this, e), this._lastMap = new Map, this._currentMap = new Map
          }
          return s(e, [{
              key: "initMap",
              value: function(e) {
                  var t = this;
                  e.forEach((function(e) {
                      t._lastMap.set(e, new Map), t._currentMap.set(e, new Map)
                  }))
              }
          }, {
              key: "addMessageSequence",
              value: function(e) {
                  var t = e.key,
                      n = e.message;
                  if (Ge(t) || !this._lastMap.has(t) || !this._currentMap.has(t)) return !1;
                  var o = n.conversationID,
                      a = n.sequence,
                      s = o.replace(E.CONV_GROUP, "");
                  if (0 === this._lastMap.get(t).size) this._addCurrentMap(e);
                  else if (this._lastMap.get(t).has(s)) {
                      var r = this._lastMap.get(t).get(s),
                          i = r.length - 1;
                      a > r[0] && a < r[i] ? (r.push(a), r.sort(), this._lastMap.get(t).set(s, r)) : this._addCurrentMap(e)
                  } else this._addCurrentMap(e);
                  return !0
              }
          }, {
              key: "_addCurrentMap",
              value: function(e) {
                  var t = e.key,
                      n = e.message,
                      o = n.conversationID,
                      a = n.sequence,
                      s = o.replace(E.CONV_GROUP, "");
                  this._currentMap.get(t).has(s) || this._currentMap.get(t).set(s, []), this._currentMap.get(t).get(s).push(a)
              }
          }, {
              key: "_copyData",
              value: function(e) {
                  if (!Ge(e)) {
                      this._lastMap.set(e, new Map);
                      var t, n = this._lastMap.get(e),
                          o = C(this._currentMap.get(e));
                      try {
                          for (o.s(); !(t = o.n()).done;) {
                              var a = m(t.value, 2),
                                  s = a[0],
                                  r = a[1];
                              n.set(s, r)
                          }
                      } catch (i) {
                          o.e(i)
                      } finally {
                          o.f()
                      }
                      n = null, this._currentMap.set(e, new Map)
                  }
              }
          }, {
              key: "getStatResult",
              value: function(e) {
                  if (Ge(this._currentMap.get(e)) || Ge(this._lastMap.get(e))) return null;
                  if (0 === this._lastMap.get(e).size) return this._copyData(e), null;
                  var t = 0,
                      n = 0;
                  if (this._lastMap.get(e).forEach((function(e, o) {
                          var a = M(e.values()),
                              s = a.length,
                              r = a[s - 1] - a[0] + 1;
                          t += r, n += s
                      })), 0 === t) return null;
                  var o = dt(n / t * 100, 2);
                  return o > 100 && (o = 100), this._copyData(e), {
                      totalCount: t,
                      successCountOfMessageReceived: n,
                      successRateOfMessageReceived: o
                  }
              }
          }, {
              key: "reset",
              value: function() {
                  this._currentMap.clear(), this._lastMap.clear()
              }
          }]), e
      }(),
      du = function(e) {
          i(a, e);
          var n = f(a);

          function a(e) {
              var t;
              o(this, a), (t = n.call(this, e))._className = "QualityStatModule", t.TAG = "im-ssolog-quality-stat", t.reportIndex = 0, t.wholePeriod = !1, t._qualityItems = [ya, Ia, Ta, Da, Ca, Sa, Ea, ka, Aa, Na], t._messageSentItems = [Ta, Da, Ca, Sa, Ea], t._messageReceivedItems = [ka, Aa, Na], t.REPORT_INTERVAL = 120, t.REPORT_SDKAPPID_BLACKLIST = [], t.REPORT_TINYID_WHITELIST = [], t._statInfoArr = [], t._avgRTT = new uu, t._avgE2EDelay = new iu, t._rateMessageSent = new cu, t._rateMessageReceived = new lu;
              var s = t.getInnerEmitterInstance();
              return s.on(Ur.CONTEXT_A2KEY_AND_TINYID_UPDATED, t._onLoginSuccess, h(t)), s.on(Ur.CLOUD_CONFIG_UPDATED, t._onCloudConfigUpdated, h(t)), t
          }
          return s(a, [{
              key: "_onLoginSuccess",
              value: function() {
                  var e = this;
                  this._rateMessageSent.initMap(this._messageSentItems), this._rateMessageReceived.initMap(this._messageReceivedItems);
                  var t = this.getModule(Ft),
                      n = t.getItem(this.TAG, !1);
                  !_t(n) && be(n.forEach) && (Se.log("".concat(this._className, "._onLoginSuccess.get quality stat log in storage, nums=").concat(n.length)), n.forEach((function(t) {
                      e._statInfoArr.push(t)
                  })), t.removeItem(this.TAG, !1))
              }
          }, {
              key: "_onCloudConfigUpdated",
              value: function() {
                  var e = this.getCloudConfig("q_rpt_interval"),
                      t = this.getCloudConfig("q_rpt_sdkappid_bl"),
                      n = this.getCloudConfig("q_rpt_tinyid_wl");
                  Ge(e) || (this.REPORT_INTERVAL = Number(e)), Ge(t) || (this.REPORT_SDKAPPID_BLACKLIST = t.split(",").map((function(e) {
                      return Number(e)
                  }))), Ge(n) || (this.REPORT_TINYID_WHITELIST = n.split(","))
              }
          }, {
              key: "onCheckTimer",
              value: function(e) {
                  this.isLoggedIn() && e % this.REPORT_INTERVAL == 0 && (this.wholePeriod = !0, this._report())
              }
          }, {
              key: "addRequestCount",
              value: function() {
                  this._avgRTT.addRequestCount()
              }
          }, {
              key: "addRTT",
              value: function(e) {
                  this._avgRTT.addRTT(e)
              }
          }, {
              key: "addMessageDelay",
              value: function(e) {
                  this._avgE2EDelay.addMessageDelay(e)
              }
          }, {
              key: "addTotalCount",
              value: function(e) {
                  this._rateMessageSent.addTotalCount(e) || Se.warn("".concat(this._className, ".addTotalCount invalid key:"), e)
              }
          }, {
              key: "addSuccessCount",
              value: function(e) {
                  this._rateMessageSent.addSuccessCount(e) || Se.warn("".concat(this._className, ".addSuccessCount invalid key:"), e)
              }
          }, {
              key: "addFailedCountOfUserSide",
              value: function(e) {
                  this._rateMessageSent.addFailedCountOfUserSide(e) || Se.warn("".concat(this._className, ".addFailedCountOfUserSide invalid key:"), e)
              }
          }, {
              key: "addCost",
              value: function(e, t) {
                  this._rateMessageSent.addCost(e, t) || Se.warn("".concat(this._className, ".addCost invalid key or cost:"), e, t)
              }
          }, {
              key: "addFileSize",
              value: function(e, t) {
                  this._rateMessageSent.addFileSize(e, t) || Se.warn("".concat(this._className, ".addFileSize invalid key or size:"), e, t)
              }
          }, {
              key: "addMessageSequence",
              value: function(e) {
                  this._rateMessageReceived.addMessageSequence(e) || Se.warn("".concat(this._className, ".addMessageSequence invalid key:"), e.key)
              }
          }, {
              key: "_getQualityItem",
              value: function(e) {
                  var n = {},
                      o = Ra[this.getNetworkType()];
                  Ge(o) && (o = 8);
                  var a = {
                      qualityType: Oa[e],
                      timestamp: ye(),
                      networkType: o,
                      extension: ""
                  };
                  switch (e) {
                      case ya:
                          n = this._avgRTT.getStatResult();
                          break;
                      case Ia:
                          n = this._avgE2EDelay.getStatResult();
                          break;
                      case Ta:
                      case Da:
                      case Ca:
                      case Sa:
                      case Ea:
                          n = this._rateMessageSent.getStatResult(e);
                          break;
                      case ka:
                      case Aa:
                      case Na:
                          n = this._rateMessageReceived.getStatResult(e)
                  }
                  return null === n ? null : t(t({}, a), n)
              }
          }, {
              key: "_report",
              value: function(e) {
                  var t = this,
                      n = [],
                      o = null;
                  Ge(e) ? this._qualityItems.forEach((function(e) {
                      null !== (o = t._getQualityItem(e)) && (o.reportIndex = t.reportIndex, o.wholePeriod = t.wholePeriod, n.push(o))
                  })) : null !== (o = this._getQualityItem(e)) && (o.reportIndex = this.reportIndex, o.wholePeriod = this.wholePeriod, n.push(o)), Se.debug("".concat(this._className, "._report"), n), this._statInfoArr.length > 0 && (n = n.concat(this._statInfoArr), this._statInfoArr = []);
                  var a = this.getModule(Ut),
                      s = a.getSDKAppID(),
                      r = a.getTinyID();
                  pt(this.REPORT_SDKAPPID_BLACKLIST, s) && !gt(this.REPORT_TINYID_WHITELIST, r) && (n = []), n.length > 0 && this._doReport(n)
              }
          }, {
              key: "_doReport",
              value: function(e) {
                  var n = this,
                      o = {
                          header: Ti(this),
                          quality: e
                      };
                  this.request({
                      protocolName: eo,
                      requestData: t({}, o)
                  }).then((function() {
                      n.reportIndex++, n.wholePeriod = !1
                  })).catch((function(t) {
                      Se.warn("".concat(n._className, "._doReport, online:").concat(n.getNetworkType(), " error:"), t), n._statInfoArr = n._statInfoArr.concat(e), n._flushAtOnce()
                  }))
              }
          }, {
              key: "_flushAtOnce",
              value: function() {
                  var e = this.getModule(Ft),
                      t = e.getItem(this.TAG, !1),
                      n = this._statInfoArr;
                  if (_t(t)) Se.log("".concat(this._className, "._flushAtOnce count:").concat(n.length)), e.setItem(this.TAG, n, !0, !1);
                  else {
                      var o = n.concat(t);
                      o.length > 10 && (o = o.slice(0, 10)), Se.log("".concat(this.className, "._flushAtOnce count:").concat(o.length)), e.setItem(this.TAG, o, !0, !1)
                  }
                  this._statInfoArr = []
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), this._report(), this.reportIndex = 0, this.wholePeriod = !1, this.REPORT_SDKAPPID_BLACKLIST = [], this.REPORT_TINYID_WHITELIST = [], this._avgRTT.reset(), this._avgE2EDelay.reset(), this._rateMessageSent.reset(), this._rateMessageReceived.reset()
              }
          }]), a
      }(Xt),
      pu = function() {
          function e(t) {
              o(this, e);
              var n = new Ga(Pa);
              this._className = "ModuleManager", this._isReady = !1, this._startLoginTs = 0, this._moduleMap = new Map, this._innerEmitter = null, this._outerEmitter = null, this._checkCount = 0, this._checkTimer = -1, this._moduleMap.set(Ut, new mi(this, t)), this._moduleMap.set(zt, new su(this)), this._moduleMap.set(Jt, new du(this)), this._moduleMap.set(Yt, new Xi(this)), this._moduleMap.set(jt, new ou(this)), this._moduleMap.set(Nt, new Mi(this)), this._moduleMap.set(Ot, new Pi(this)), this._moduleMap.set(Lt, new fi(this)), this._moduleMap.set(Rt, new br(this)), this._moduleMap.set(wt, new Zr(this)), this._moduleMap.set(Gt, new li(this)), this._moduleMap.set(bt, new pi(this)), this._moduleMap.set(Ft, new yi(this)), this._moduleMap.set(qt, new Di(this)), this._moduleMap.set(Vt, new Ei(this)), this._moduleMap.set(Kt, new Ai(this)), this._moduleMap.set(xt, new Ni(this)), this._moduleMap.set(Bt, new bi(this)), this._moduleMap.set(Ht, new wi(this)), this._moduleMap.set($t, new au(this)), this._moduleMap.set(Wt, new ru(this));
              var a = t.instanceID,
                  s = t.oversea,
                  r = t.SDKAppID,
                  i = "instanceID:".concat(a, " oversea:").concat(s, " host:").concat(it(), " ") + "inBrowser:".concat(W, " inMiniApp:").concat(z, " SDKAppID:").concat(r, " UserAgent:").concat(Q);
              Ga.bindEventStatModule(this._moduleMap.get(qt)), n.setMessage("".concat(i)).end(), Se.info("SDK ".concat(i)), this._readyList = void 0, this._ssoLogForReady = null, this._initReadyList()
          }
          return s(e, [{
              key: "_startTimer",
              value: function() {
                  this._checkTimer < 0 && (this._checkTimer = setInterval(this._onCheckTimer.bind(this), 1e3))
              }
          }, {
              key: "stopTimer",
              value: function() {
                  this._checkTimer > 0 && (clearInterval(this._checkTimer), this._checkTimer = -1, this._checkCount = 0)
              }
          }, {
              key: "_onCheckTimer",
              value: function() {
                  this._checkCount += 1;
                  var e, t = C(this._moduleMap);
                  try {
                      for (t.s(); !(e = t.n()).done;) {
                          var n = m(e.value, 2)[1];
                          n.onCheckTimer && n.onCheckTimer(this._checkCount)
                      }
                  } catch (o) {
                      t.e(o)
                  } finally {
                      t.f()
                  }
              }
          }, {
              key: "_initReadyList",
              value: function() {
                  var e = this;
                  this._readyList = [this._moduleMap.get(Nt), this._moduleMap.get(wt)], this._readyList.forEach((function(t) {
                      t.ready((function() {
                          return e._onModuleReady()
                      }))
                  }))
              }
          }, {
              key: "_onModuleReady",
              value: function() {
                  var e = !0;
                  if (this._readyList.forEach((function(t) {
                          t.isReady() || (e = !1)
                      })), e && !this._isReady) {
                      this._isReady = !0, this._outerEmitter.emit(S.SDK_READY);
                      var t = Date.now() - this._startLoginTs;
                      Se.warn("SDK is ready. cost ".concat(t, " ms")), this._startLoginTs = Date.now();
                      var n = this._moduleMap.get(Vt).getNetworkType(),
                          o = this._ssoLogForReady.getStartTs() + ve;
                      this._ssoLogForReady.setNetworkType(n).setMessage(t).start(o).end()
                  }
              }
          }, {
              key: "login",
              value: function() {
                  0 === this._startLoginTs && (Ie(), this._startLoginTs = Date.now(), this._startTimer(), this._moduleMap.get(Vt).start(), this._ssoLogForReady = new Ga(ba))
              }
          }, {
              key: "onLoginFailed",
              value: function() {
                  this._startLoginTs = 0
              }
          }, {
              key: "getOuterEmitterInstance",
              value: function() {
                  return null === this._outerEmitter && (this._outerEmitter = new ki, Rr(this._outerEmitter), this._outerEmitter._emit = this._outerEmitter.emit, this._outerEmitter.emit = function(e, t) {
                      var n = arguments[0],
                          o = [n, {
                              name: arguments[0],
                              data: arguments[1]
                          }];
                      this._outerEmitter._emit.apply(this._outerEmitter, o)
                  }.bind(this)), this._outerEmitter
              }
          }, {
              key: "getInnerEmitterInstance",
              value: function() {
                  return null === this._innerEmitter && (this._innerEmitter = new ki, this._innerEmitter._emit = this._innerEmitter.emit, this._innerEmitter.emit = function(e, t) {
                      var n;
                      Le(arguments[1]) && arguments[1].data ? (Se.warn("inner eventData has data property, please check!"), n = [e, {
                          name: arguments[0],
                          data: arguments[1].data
                      }]) : n = [e, {
                          name: arguments[0],
                          data: arguments[1]
                      }], this._innerEmitter._emit.apply(this._innerEmitter, n)
                  }.bind(this)), this._innerEmitter
              }
          }, {
              key: "hasModule",
              value: function(e) {
                  return this._moduleMap.has(e)
              }
          }, {
              key: "getModule",
              value: function(e) {
                  return this._moduleMap.get(e)
              }
          }, {
              key: "isReady",
              value: function() {
                  return this._isReady
              }
          }, {
              key: "onError",
              value: function(e) {
                  Se.warn("Oops! code:".concat(e.code, " message:").concat(e.message)), new Ga(er).setMessage("code:".concat(e.code, " message:").concat(e.message)).setNetworkType(this.getModule(Vt).getNetworkType()).setLevel("error").end(), this.getOuterEmitterInstance().emit(S.ERROR, e)
              }
          }, {
              key: "reset",
              value: function() {
                  Se.log("".concat(this._className, ".reset")), Ie();
                  var e, t = C(this._moduleMap);
                  try {
                      for (t.s(); !(e = t.n()).done;) {
                          var n = m(e.value, 2)[1];
                          n.reset && n.reset()
                      }
                  } catch (o) {
                      t.e(o)
                  } finally {
                      t.f()
                  }
                  this._startLoginTs = 0, this._initReadyList(), this._isReady = !1, this.stopTimer(), this._outerEmitter.emit(S.SDK_NOT_READY)
              }
          }]), e
      }(),
      gu = function() {
          function e() {
              o(this, e), this._funcMap = new Map
          }
          return s(e, [{
              key: "defense",
              value: function(e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                  if ("string" != typeof e) return null;
                  if (0 === e.length) return null;
                  if ("function" != typeof t) return null;
                  if (this._funcMap.has(e) && this._funcMap.get(e).has(t)) return this._funcMap.get(e).get(t);
                  this._funcMap.has(e) || this._funcMap.set(e, new Map);
                  var o = null;
                  return this._funcMap.get(e).has(t) ? o = this._funcMap.get(e).get(t) : (o = this._pack(e, t, n), this._funcMap.get(e).set(t, o)), o
              }
          }, {
              key: "defenseOnce",
              value: function(e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                  return "function" != typeof t ? null : this._pack(e, t, n)
              }
          }, {
              key: "find",
              value: function(e, t) {
                  return "string" != typeof e || 0 === e.length || "function" != typeof t ? null : this._funcMap.has(e) ? this._funcMap.get(e).has(t) ? this._funcMap.get(e).get(t) : (Se.log("SafetyCallback.find: 找不到 func —— ".concat(e, "/").concat("" !== t.name ? t.name : "[anonymous]")), null) : (Se.log("SafetyCallback.find: 找不到 eventName-".concat(e, " 对应的 func")), null)
              }
          }, {
              key: "delete",
              value: function(e, t) {
                  return "function" == typeof t && (!!this._funcMap.has(e) && (!!this._funcMap.get(e).has(t) && (this._funcMap.get(e).delete(t), 0 === this._funcMap.get(e).size && this._funcMap.delete(e), !0)))
              }
          }, {
              key: "_pack",
              value: function(e, t, n) {
                  return function() {
                      try {
                          t.apply(n, Array.from(arguments))
                      } catch (r) {
                          var o = Object.values(S).indexOf(e);
                          if (-1 !== o) {
                              var a = Object.keys(S)[o];
                              Se.warn("接入侧事件 TIM.EVENT.".concat(a, " 对应的回调函数逻辑存在问题，请检查！"), r)
                          }
                          var s = new Ga(Xs);
                          s.setMessage("eventName:".concat(e)).setMoreMessage(r.message).end()
                      }
                  }
              }
          }]), e
      }(),
      hu = function() {
          function e(t) {
              o(this, e);
              var n = {
                  SDKAppID: t.SDKAppID,
                  unlimitedAVChatRoom: t.unlimitedAVChatRoom || !1,
                  scene: t.scene || "",
                  oversea: t.oversea || !1,
                  instanceID: rt()
              };
              this._moduleManager = new pu(n), this._safetyCallbackFactory = new gu
          }
          return s(e, [{
              key: "isReady",
              value: function() {
                  return this._moduleManager.isReady()
              }
          }, {
              key: "onError",
              value: function(e) {
                  this._moduleManager.onError(e)
              }
          }, {
              key: "login",
              value: function(e) {
                  return this._moduleManager.login(), this._moduleManager.getModule(Nt).login(e)
              }
          }, {
              key: "logout",
              value: function() {
                  var e = this;
                  return this._moduleManager.getModule(Nt).logout().then((function(t) {
                      return e._moduleManager.reset(), t
                  }))
              }
          }, {
              key: "destroy",
              value: function() {
                  var e = this;
                  return this.logout().finally((function() {
                      e._moduleManager.stopTimer(), e._moduleManager.getModule(Yt).dealloc();
                      var t = e._moduleManager.getOuterEmitterInstance(),
                          n = e._moduleManager.getModule(Ut);
                      t.emit(S.SDK_DESTROY, {
                          SDKAppID: n.getSDKAppID()
                      })
                  }))
              }
          }, {
              key: "on",
              value: function(e, t, n) {
                  e === S.GROUP_SYSTEM_NOTICE_RECEIVED && Se.warn("！！！TIM.EVENT.GROUP_SYSTEM_NOTICE_RECEIVED v2.6.0起弃用，为了更好的体验，请在 TIM.EVENT.MESSAGE_RECEIVED 事件回调内接收处理群系统通知，详细请参考：https://web.sdk.qcloud.com/im/doc/zh-cn/Message.html#.GroupSystemNoticePayload"), Se.debug("on", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().on(e, this._safetyCallbackFactory.defense(e, t, n), n)
              }
          }, {
              key: "once",
              value: function(e, t, n) {
                  Se.debug("once", "eventName:".concat(e)), this._moduleManager.getOuterEmitterInstance().once(e, this._safetyCallbackFactory.defenseOnce(e, t, n), n || this)
              }
          }, {
              key: "off",
              value: function(e, t, n, o) {
                  Se.debug("off", "eventName:".concat(e));
                  var a = this._safetyCallbackFactory.find(e, t);
                  null !== a && (this._moduleManager.getOuterEmitterInstance().off(e, a, n, o), this._safetyCallbackFactory.delete(e, t))
              }
          }, {
              key: "registerPlugin",
              value: function(e) {
                  this._moduleManager.getModule(Bt).registerPlugin(e)
              }
          }, {
              key: "setLogLevel",
              value: function(e) {
                  if (e <= 0) {
                      console.log(["", " ________  ______  __       __  __       __  ________  _______", "|        \\|      \\|  \\     /  \\|  \\  _  |  \\|        \\|       \\", " \\$$$$$$$$ \\$$$$$$| $$\\   /  $$| $$ / \\ | $$| $$$$$$$$| $$$$$$$\\", "   | $$     | $$  | $$$\\ /  $$$| $$/  $\\| $$| $$__    | $$__/ $$", "   | $$     | $$  | $$$$\\  $$$$| $$  $$$\\ $$| $$  \\   | $$    $$", "   | $$     | $$  | $$\\$$ $$ $$| $$ $$\\$$\\$$| $$$$$   | $$$$$$$\\", "   | $$    _| $$_ | $$ \\$$$| $$| $$$$  \\$$$$| $$_____ | $$__/ $$", "   | $$   |   $$ \\| $$  \\$ | $$| $$$    \\$$$| $$     \\| $$    $$", "    \\$$    \\$$$$$$ \\$$      \\$$ \\$$      \\$$ \\$$$$$$$$ \\$$$$$$$", "", ""].join("\n")), console.log("%cIM 智能客服，随时随地解决您的问题 →_→ https://cloud.tencent.com/act/event/smarty-service?from=im-doc", "color:#006eff"), console.log("%c从v2.11.2起，SDK 支持了 WebSocket，小程序需要添加受信域名！升级指引: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-02-upgradeguideline.html", "color:#ff0000");
                      console.log(["", "参考以下文档，会更快解决问题哦！(#^.^#)\n", "SDK 更新日志: https://cloud.tencent.com/document/product/269/38492\n", "SDK 接口文档: https://web.sdk.qcloud.com/im/doc/zh-cn/SDK.html\n", "常见问题: https://web.sdk.qcloud.com/im/doc/zh-cn/tutorial-01-faq.html\n", "反馈问题？戳我提 issue: https://github.com/tencentyun/TIMSDK/issues\n", "如果您需要在生产环境关闭上面的日志，请 tim.setLogLevel(1)\n"].join("\n"))
                  }
                  Se.setLevel(e)
              }
          }, {
              key: "createTextMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createTextMessage(e)
              }
          }, {
              key: "createTextAtMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createTextMessage(e)
              }
          }, {
              key: "createImageMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createImageMessage(e)
              }
          }, {
              key: "createAudioMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createAudioMessage(e)
              }
          }, {
              key: "createVideoMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createVideoMessage(e)
              }
          }, {
              key: "createCustomMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createCustomMessage(e)
              }
          }, {
              key: "createFaceMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createFaceMessage(e)
              }
          }, {
              key: "createFileMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createFileMessage(e)
              }
          }, {
              key: "createMergerMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createMergerMessage(e)
              }
          }, {
              key: "downloadMergerMessage",
              value: function(e) {
                  return e.type !== E.MSG_MERGER ? Pr(new Or({
                      code: co.MESSAGE_MERGER_TYPE_INVALID,
                      message: qo
                  })) : _t(e.payload.downloadKey) ? Pr(new Or({
                      code: co.MESSAGE_MERGER_KEY_INVALID,
                      message: Vo
                  })) : this._moduleManager.getModule(Ot).downloadMergerMessage(e).catch((function(e) {
                      return Pr(new Or({
                          code: co.MESSAGE_MERGER_DOWNLOAD_FAIL,
                          message: Ko
                      }))
                  }))
              }
          }, {
              key: "createForwardMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).createForwardMessage(e)
              }
          }, {
              key: "sendMessage",
              value: function(e, t) {
                  return e instanceof Dr ? this._moduleManager.getModule(Ot).sendMessageInstance(e, t) : Pr(new Or({
                      code: co.MESSAGE_SEND_NEED_MESSAGE_INSTANCE,
                      message: Io
                  }))
              }
          }, {
              key: "callExperimentalAPI",
              value: function(e, t) {
                  return "handleGroupInvitation" === e ? this._moduleManager.getModule(Gt).handleGroupInvitation(t) : Pr(new Or({
                      code: co.INVALID_OPERATION,
                      message: _a
                  }))
              }
          }, {
              key: "revokeMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).revokeMessage(e)
              }
          }, {
              key: "resendMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).resendMessage(e)
              }
          }, {
              key: "deleteMessage",
              value: function(e) {
                  return this._moduleManager.getModule(Ot).deleteMessage(e)
              }
          }, {
              key: "getMessageList",
              value: function(e) {
                  return this._moduleManager.getModule(wt).getMessageList(e)
              }
          }, {
              key: "setMessageRead",
              value: function(e) {
                  return this._moduleManager.getModule(wt).setMessageRead(e)
              }
          }, {
              key: "getConversationList",
              value: function() {
                  return this._moduleManager.getModule(wt).getConversationList()
              }
          }, {
              key: "getConversationProfile",
              value: function(e) {
                  return this._moduleManager.getModule(wt).getConversationProfile(e)
              }
          }, {
              key: "deleteConversation",
              value: function(e) {
                  return this._moduleManager.getModule(wt).deleteConversation(e)
              }
          }, {
              key: "pinConversation",
              value: function(e) {
                  return this._moduleManager.getModule(wt).pinConversation(e)
              }
          }, {
              key: "getMyProfile",
              value: function() {
                  return this._moduleManager.getModule(Lt).getMyProfile()
              }
          }, {
              key: "getUserProfile",
              value: function(e) {
                  return this._moduleManager.getModule(Lt).getUserProfile(e)
              }
          }, {
              key: "updateMyProfile",
              value: function(e) {
                  return this._moduleManager.getModule(Lt).updateMyProfile(e)
              }
          }, {
              key: "getBlacklist",
              value: function() {
                  return this._moduleManager.getModule(Lt).getLocalBlacklist()
              }
          }, {
              key: "addToBlacklist",
              value: function(e) {
                  return this._moduleManager.getModule(Lt).addBlacklist(e)
              }
          }, {
              key: "removeFromBlacklist",
              value: function(e) {
                  return this._moduleManager.getModule(Lt).deleteBlacklist(e)
              }
          }, {
              key: "getFriendList",
              value: function() {
                  var e = this._moduleManager.getModule(Pt);
                  return e ? e.getLocalFriendList() : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "addFriend",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.addFriend(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "deleteFriend",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.deleteFriend(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "checkFriend",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.checkFriend(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "getFriendProfile",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.getFriendProfile(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "updateFriend",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.updateFriend(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "getFriendApplicationList",
              value: function() {
                  var e = this._moduleManager.getModule(Pt);
                  return e ? e.getLocalFriendApplicationList() : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "acceptFriendApplication",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.acceptFriendApplication(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "refuseFriendApplication",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.refuseFriendApplication(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "deleteFriendApplication",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.deleteFriendApplication(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "setFriendApplicationRead",
              value: function() {
                  var e = this._moduleManager.getModule(Pt);
                  return e ? e.setFriendApplicationRead() : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "getFriendGroupList",
              value: function() {
                  var e = this._moduleManager.getModule(Pt);
                  return e ? e.getLocalFriendGroupList() : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "createFriendGroup",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.createFriendGroup(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "deleteFriendGroup",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.deleteFriendGroup(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "addToFriendGroup",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.addToFriendGroup(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "removeFromFriendGroup",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.removeFromFriendGroup(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "renameFriendGroup",
              value: function(e) {
                  var t = this._moduleManager.getModule(Pt);
                  return t ? t.renameFriendGroup(e) : Pr({
                      code: co.CANNOT_FIND_MODULE,
                      message: ma
                  })
              }
          }, {
              key: "getGroupList",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).getGroupList(e)
              }
          }, {
              key: "getGroupProfile",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).getGroupProfile(e)
              }
          }, {
              key: "createGroup",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).createGroup(e)
              }
          }, {
              key: "dismissGroup",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).dismissGroup(e)
              }
          }, {
              key: "updateGroupProfile",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).updateGroupProfile(e)
              }
          }, {
              key: "joinGroup",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).joinGroup(e)
              }
          }, {
              key: "quitGroup",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).quitGroup(e)
              }
          }, {
              key: "searchGroupByID",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).searchGroupByID(e)
              }
          }, {
              key: "getGroupOnlineMemberCount",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).getGroupOnlineMemberCount(e)
              }
          }, {
              key: "changeGroupOwner",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).changeGroupOwner(e)
              }
          }, {
              key: "handleGroupApplication",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).handleGroupApplication(e)
              }
          }, {
              key: "initGroupAttributes",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).initGroupAttributes(e)
              }
          }, {
              key: "setGroupAttributes",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).setGroupAttributes(e)
              }
          }, {
              key: "deleteGroupAttributes",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).deleteGroupAttributes(e)
              }
          }, {
              key: "getGroupAttributes",
              value: function(e) {
                  return this._moduleManager.getModule(Gt).getGroupAttributes(e)
              }
          }, {
              key: "getGroupMemberList",
              value: function(e) {
                  return this._moduleManager.getModule(bt).getGroupMemberList(e)
              }
          }, {
              key: "getGroupMemberProfile",
              value: function(e) {
                  return this._moduleManager.getModule(bt).getGroupMemberProfile(e)
              }
          }, {
              key: "addGroupMember",
              value: function(e) {
                  return this._moduleManager.getModule(bt).addGroupMember(e)
              }
          }, {
              key: "deleteGroupMember",
              value: function(e) {
                  return this._moduleManager.getModule(bt).deleteGroupMember(e)
              }
          }, {
              key: "setGroupMemberMuteTime",
              value: function(e) {
                  return this._moduleManager.getModule(bt).setGroupMemberMuteTime(e)
              }
          }, {
              key: "setGroupMemberRole",
              value: function(e) {
                  return this._moduleManager.getModule(bt).setGroupMemberRole(e)
              }
          }, {
              key: "setGroupMemberNameCard",
              value: function(e) {
                  return this._moduleManager.getModule(bt).setGroupMemberNameCard(e)
              }
          }, {
              key: "setGroupMemberCustomField",
              value: function(e) {
                  return this._moduleManager.getModule(bt).setGroupMemberCustomField(e)
              }
          }, {
              key: "setMessageRemindType",
              value: function(e) {
                  return this._moduleManager.getModule(bt).setMessageRemindType(e)
              }
          }]), e
      }(),
      _u = {
          login: "login",
          logout: "logout",
          destroy: "destroy",
          on: "on",
          off: "off",
          ready: "ready",
          setLogLevel: "setLogLevel",
          joinGroup: "joinGroup",
          quitGroup: "quitGroup",
          registerPlugin: "registerPlugin",
          getGroupOnlineMemberCount: "getGroupOnlineMemberCount"
      };

  function fu(e, t) {
      if (e.isReady() || void 0 !== _u[t]) return !0;
      var n = new Or({
          code: co.SDK_IS_NOT_READY,
          message: "".concat(t, " ").concat(Ma, "，请参考 https://web.sdk.qcloud.com/im/doc/zh-cn/module-EVENT.html#.SDK_READY")
      });
      return e.onError(n), !1
  }
  var mu = {},
      Mu = {};
  return Mu.create = function(e) {
      var n = 0;
      if (Ae(e.SDKAppID)) n = e.SDKAppID;
      else if (Se.warn("TIM.create SDKAppID 的类型应该为 Number，请修改！"), n = parseInt(e.SDKAppID), isNaN(n)) return Se.error("TIM.create failed. 解析 SDKAppID 失败，请检查传参！"), null;
      if (n && mu[n]) return mu[n];
      Se.log("TIM.create");
      var o = new hu(t(t({}, e), {}, {
          SDKAppID: n
      }));
      o.on(S.SDK_DESTROY, (function(e) {
          mu[e.data.SDKAppID] = null, delete mu[e.data.SDKAppID]
      }));
      var a = function(e) {
          var t = Object.create(null);
          return Object.keys(At).forEach((function(n) {
              if (e[n]) {
                  var o = At[n],
                      a = new k;
                  t[o] = function() {
                      var t = Array.from(arguments);
                      return a.use((function(t, o) {
                          return fu(e, n) ? o() : Pr(new Or({
                              code: co.SDK_IS_NOT_READY,
                              message: "".concat(n, " ").concat(Ma, "。")
                          }))
                      })).use((function(e, t) {
                          if (!0 === ft(e, kt[n], o)) return t()
                      })).use((function(t, o) {
                          return e[n].apply(e, t)
                      })), a.run(t)
                  }
              }
          })), t
      }(o);
      return mu[n] = a, Se.log("TIM.create ok"), a
  }, Mu.TYPES = E, Mu.EVENT = S, Mu.VERSION = "2.14.0", Se.log("TIM.VERSION: ".concat(Mu.VERSION)), Mu
}));