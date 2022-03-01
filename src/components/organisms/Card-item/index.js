
   
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.text}>Precio: ${item.price}</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-outline" size={20} color='#fff' />
          </TouchableOpacity>
        </View>
    </View>
  );
};



export default CartItem;