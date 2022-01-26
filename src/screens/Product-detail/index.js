import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './styles';

const ProductDetail = ({navigation, route}) => {
  const {product} = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerDetail}>
        <Text style={styles.title}>Detalles</Text>
            <View style={styles.containerText}>
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>{product.weight}</Text>
                <Text style={styles.text}>$ {product.price}</Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
