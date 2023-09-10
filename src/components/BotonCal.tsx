import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: ( numeroTexto : string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BotonCal = (props: Props) => {
  return (
    <TouchableOpacity onPress={() => props.accion(props.texto)}>
      <View
        style={[
          styles.boton,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: props.color ?? '#2D2D2D',
            width: props.ancho ? 180 : 80,
          },
        ]}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.botonTexto,
            color: props.color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {props.texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BotonCal;
