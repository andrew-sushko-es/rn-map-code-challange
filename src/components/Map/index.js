import React from 'react';
import PropTypes from 'prop-types';
import {PROVIDER_GOOGLE} from 'react-native-maps';

import * as S from './styled';

const Map = (props) => {
  const {userCoords, isGoogleMap, otherProps} = props;
  const {latitude, longitude} = userCoords;

  const coordsIsSetted = !!userCoords.latitude && !!userCoords.longitude;

  const regionProp = coordsIsSetted
    ? {
        initialRegion: {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      }
    : {};

  return (
    <S.MapContainer
      provider={isGoogleMap ? PROVIDER_GOOGLE : null}
      {...regionProp}
      {...otherProps}>
      {coordsIsSetted && <S.MapMarker coordinate={userCoords} />}
    </S.MapContainer>
  );
};

export default Map;

Map.defaultProps = {
  isGoogleMap: true,
};

Map.propTypes = {
  userCoords: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }).isRequired,
  isGoogleMap: PropTypes.bool,
};
