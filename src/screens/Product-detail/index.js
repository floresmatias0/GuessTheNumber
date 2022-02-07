import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

import {styles} from './styles';

const ProductDetail = ({navigation}) => {
  const bread = useSelector(state => state.breads.selected);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerDetail}>
        <Text style={styles.title}>Detalles</Text>
            <View style={styles.containerText}>
                <Text style={styles.text}>{bread.name}</Text>
                <Text style={styles.text}>{bread.description}</Text>
                <Text style={styles.text}>{bread.weight}</Text>
                <Text style={styles.text}>$ {bread.price}</Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
