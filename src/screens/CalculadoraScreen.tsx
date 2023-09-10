/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import BotonCal from '../components/BotonCal';
import {useCalculadora} from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    botonDEl,
    btnRestar,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        {/*Fila de Botones */}
        <BotonCal texto="C" color="#9B9B9B" accion={limpiar} />
        <BotonCal texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
        <BotonCal texto="del" color="#9B9B9B" accion={botonDEl} />
        <BotonCal texto="/" color="#FF9427" accion={btnDividir} />
      </View>
      <View style={styles.fila}>
        {/*Fila de Botones */}
        <BotonCal texto="7" accion={armarNumero} />
        <BotonCal texto="8" accion={armarNumero} />
        <BotonCal texto="9" accion={armarNumero} />
        <BotonCal texto="X" color="#FF9427" accion={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        {/*Fila de Botones */}
        <BotonCal texto="4" accion={armarNumero} />
        <BotonCal texto="5" accion={armarNumero} />
        <BotonCal texto="6" accion={armarNumero} />
        <BotonCal texto="-" color="#FF9427" accion={btnRestar} />
      </View>
      <View style={styles.fila}>
        {/*Fila de Botones */}
        <BotonCal texto="1" accion={armarNumero} />
        <BotonCal texto="2" accion={armarNumero} />
        <BotonCal texto="3" accion={armarNumero} />
        <BotonCal texto="+" color="#FF9427" accion={btnSumar} />
      </View>
      <View style={styles.fila}>
        {/*Fila de Botones */}
        <BotonCal texto="0" ancho accion={armarNumero} />
        <BotonCal texto="." accion={armarNumero} />
        <BotonCal texto="=" color="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
