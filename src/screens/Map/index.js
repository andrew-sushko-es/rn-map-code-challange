import React, {useEffect, useState, useContext} from 'react';
import {ThemeContext} from 'styled-components'

import {getCurrentPosition} from 'utils/geolocation';
import {isIOS} from 'utils/common';
import {showFlashMessage, MESSAGE_TYPES} from 'utils/flashMessages'

import Map from 'components/Map';

import * as S from './styled';

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState({});
  const theme = useContext(ThemeContext);

  useEffect(() => {
    getCurrentPosition((coords) => {
      setCoordinates(coords);
    }, (error) => {
      showFlashMessage(
        error.message,
        MESSAGE_TYPES.ERROR,
        theme,
      )
    });
  }, []);


  return (
    <S.Container>
      <Map userCoords={coordinates} isGoogleMap={!isIOS()} />
    </S.Container>
  );
};

export default MapScreen;
