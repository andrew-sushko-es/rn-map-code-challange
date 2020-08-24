import React from 'react';
import PropTypes from 'prop-types';
import {PROVIDER_GOOGLE} from 'react-native-maps';

import * as S from './styled';

const Map = (props) => {
  const {coords, isGoogleMap, otherProps} = props;
  const {latitude, longitude} = coords;

  return (
    <S.MapContainer
      provider={isGoogleMap ? PROVIDER_GOOGLE : null}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      {...otherProps}>
      <S.MapMarker coordinate={coords} />
    </S.MapContainer>
  );
};

export default Map;

Map.defaultProps = {
  isGoogleMap: true,
};

Map.propTypes = {
  coords: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  }).isRequired,
  isGoogleMap: PropTypes.bool,
};
