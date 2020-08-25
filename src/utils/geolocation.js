import Geolocation from '@react-native-community/geolocation';

// It is wrapper for geolocation.getCurrentPosition just in case to easily replace geolocation library if needed
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
