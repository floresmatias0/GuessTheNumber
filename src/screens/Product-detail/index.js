import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from '../../components/atoms/CustomButton';
import { addItemAction } from '../../store/actions/cart.actions';

import { styles } from './styles';

const ProductDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const bread = useSelector(state => state.breads.selected);

  const addProductInCart = (item) => {
    return dispatch(addItemAction(item));
  }
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
            <CustomButton 
              onPress={() => addProductInCart(bread)}
              text="Buy"
            />
        </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
