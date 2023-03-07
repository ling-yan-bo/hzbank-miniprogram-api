// 支付宝专有 API

const noPromiseApis = [
  // 键盘
  'hideKeyboard',

  // 跳转支付宝卡包
  'openCardList',
  'openMerchantCardList',
  'openCardDetail',
  'openVoucherList',
  'openMerchantVoucherList',
  'openVoucherDetail',
  'openKBVoucherDetail',
  'openTicketList',
  'openTicketDetail',

  // webview
  'createWebViewContext',

  // websocket
  'offSocketOpen',
  'offSocketError',
  'offSocketMessage',
  'offSocketClose',

  // 获取基础库版本好
  'SDKVersion',

  // 网络
  'offNetworkStatusChange',

  // 振动
  'vibrate',

  // 加速度计
  'offAccelerometerChange',

  // 陀螺仪
  'offGyroscopeChange',

  // 罗盘
  'offCompassChange',

  // 权限引导
  'showAuthGuide',

  // 自定义通用菜单
  'hideAddToDesktopMenu',
  'hideAllAddToDesktopMenu',
  'hideFavoriteMenu',
  'hideAllFavoriteMenu',

  // 当前运行版本
  'getRunScene',
];

const needPromiseApis = [
  // 交互反馈
  'alert',
  'confirm',
  'prompt',

  // 联系人
  'choosePhoneContact',

  // 选择城市
  'chooseCity',

  // 选择日期
  'datePicker',

  // 级联选择
  'multiLevelSelect',

  // 获取用户手机号
  'getPhoneNumber',

  // 唤起支付
  'tradePay',

  // 支付代扣签约
  'paySignCenter',

  // 会员开卡授权
  'addCardAuth',

  // 芝麻认证
  'startZMVerify',

  // 文本风险识别
  'textRiskIdentification',

  // 刷脸认证
  'ap.faceVerify',

  // 营销反作弊
  'ap.preventCheat',

  // 压缩图片
  'compressImage',

  // 摇一摇
  'watchShake',

  // 获取服务器时间
  'getServerTime',

  // 数据安全
  'rsa',

  // 隐藏标题栏上的“返回首页”图标。
  'hideBackHome',

  // 获取导航栏背景色。
  'getTitleColor',

  // select 的组件
  'optionsSelect',

  // 自定义 onLocatedComplete 函数，可以监听该页面地理位置定位完的回调
  'onLocatedComplete',

  // 该接口用于修改 my.chooseCity 中的默认定位城市的名称。
  'setLocatedCity',

  // 态设置窗口的背景色。
  'setBackgroundColor',

  // 动态设置下拉背景的字体、加载图形的样式。
  'setBackgroundTextStyle',

  // 设置页面是否支持下拉（小程序内页面默认支持下拉）。
  'setCanPullDown',

  // 配置 optionMenu 导航栏的额外图标，点击后触发 onOptionMenuClick。
  'setOptionMenu',

  // 取消监听截屏事件。
  'offUserCaptureScreen',

  // 移除寻找到新的蓝牙设备事件的监听。
  'offBluetoothDeviceFound',

  // 移除低功耗蓝牙设备的特征值变化事件的监听。
  'offBLECharacteristicValueChange',

  // 移除低功耗蓝牙连接状态变化事件的监听。
  'offBLEConnectionStateChanged',

  // 移除本机蓝牙状态变化的事件的监听。
  'offBluetoothAdapterStateChange'

];

export {
  noPromiseApis,
  needPromiseApis,
};
