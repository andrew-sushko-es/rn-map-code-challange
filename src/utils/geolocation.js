import Geolocation from '@react-native-community/geolocation';

export const getCurrentPosition = (cb, errorCb) => {
  Geolocation.getCurrentPosition(({coords}) => {
    const {latitude, longitude} = coords;
    cb({latitude, longitude});
  }, (err) => {
    if(errorCb) {
      errorCb(err)
    }
  });
};
