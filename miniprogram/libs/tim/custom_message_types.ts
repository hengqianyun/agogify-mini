export default class CustomMessageTypes {

  static NEED_SERVICE = 'NEED_SERVICE';
  /// 销售通知客户进行支付操作
  static PAY = 'PAY';

  /// 客户通知销售支付已完成
  static PAY_FINISHED = 'PAY_FINISHED';

  /// 客户通知assistant进入房间
  static JOIN_ASSISTANT_ROOM = 'JOIN_ASSISTANT_ROOM'

  /// 客户通知销售订单确认完毕
  static ORDER_COMPLETE = 'ORDER_COMPLETE'

  /// 客户通知销售支付取消
  static PAY_CANCELED = 'PAY_CANCELED';

  /// 销售通知客户进入视频
  static START_VIDEO = 'START_VIDEO';

  /// 销售通知客户端离开视频
  static DISPOSE = "DISPOSE";

  static LEAVED_ROOM = "LEAVED_ROOM"

  static NOW_BUSY = 'NOW_BUSY'

  /// 客户通知销售取消通话
  static HANG_UP = 'HANG_UP'

  /// 客户通知销售自己已经通过预约进入房间
  static RESERVE_ENTER_ROOM = 'RESERVE_ENTER_ROOM';

  /// 是否ready 进入房间
  static READY_ENTER_ROOM = 'READY_ENTER_ROOM';

  /// 销售通知客户重试
  static RETRY = 'RETRY';

  /// 倒计时校准
  static TIMELEFT_CHECK = 'TIMELEFT_CHECK';

  /// 询问订单状态
  static ASK_FOR_ORDER_STATE = 'ASK_FOR_ORDER_STATE'
  static TELLING_THE_ORDER_STATE = 'TELLING_THE_ORDER_STATE'

  /// 客户没有查询到订单信息，通知销售重新发送
  static RE_SEND = 'RE_SEND'

  /// 销售通知用户扫描完毕
  static SCAN_FINISH = 'SCAN_FINISH'

  static CHECK_ONLINE = 'CHECK_ONLINE';

  static RESERVE = 'RESERVE';
  static CUSTOMER_IN = 'CUSTOMER_IN';
  static CUSTOMER_OUT = 'CUSTOMER_OUT';
}