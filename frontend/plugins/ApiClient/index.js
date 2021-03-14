/* eslint-disable func-names */
export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
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
