import { 
  getEnv,
  hasProxy,
  ENV_TYPE,
} from '../shared';

import initNativeApi from './initNativeApi';

let hzbank = {
  getEnv,
  ENV_TYPE,
};

initNativeApi(hzbank);

if (hasProxy) {
  hzbank = new Proxy(hzbank, {
    get(target, key) {
      if (key in target) {
        return target[key];
      } else {
        console.warn(`支付宝小程序暂不支持 my.${key.toString()}`);
        return target[key];
      }
    }
  });
} else {
  Object.keys(hzbank).forEach(key => {
    defineReactive(hzbank, key, hzbank[key]);
  });

  function defineReactive(data, key, val) {
    Object.defineProperty(data, key, {
      get() {
        return val;
      }
    });
  }
}

export default hzbank;