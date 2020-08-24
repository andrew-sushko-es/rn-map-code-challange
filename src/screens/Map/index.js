import React, {useEffect, useState} from 'react';

import {getCurrentPosition} from 'utils/geolocation';
import {isIOS} from 'utils/common';

import Map from 'components/Map';

import * as S from './styled';

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    getCurrentPosition((coords) => {
      setCoordinates(coords);
    });
  }, []);

  const coordsIsSetted = !!coordinates.latitude && !!coordinates.longitude;

  return (
    <S.Container>
      {coordsIsSetted && <Map coords={coordinates} isGoogleMap={!isIOS()} />}
    </S.Container>
  );
};

export default MapScreen;
