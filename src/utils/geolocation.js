import Geolocation from '@react-native-community/geolocation';

export const getCurrentPosition = (cb) => {
  Geolocation.getCurrentPosition(({coords}) => {
    const {latitude, longitude} = coords;
    cb({latitude, longitude});
  });
};
