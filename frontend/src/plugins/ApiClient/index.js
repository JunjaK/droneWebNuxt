/* eslint-disable func-names,no-param-reassign */
import store from 'store2';

export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    /* header AppVersion 체크 */
    if (!store.get('appVersion')) {
      store.set('appVersion', config.headers.common.AppVersion);
    } else if (config.headers.common.AppVersion !== store.get('appVersion')) {
      store.set('appVersion', config.headers.common.AppVersion);
      window.location.reload(true);
    }
    console.log('axios config request hook');
    return config;
  });
  $axios.onResponse((response) => {
    console.log('axios config response hook');
    return response;
  });
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/500');
    }
  });
}
