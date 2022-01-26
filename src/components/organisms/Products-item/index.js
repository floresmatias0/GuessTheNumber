import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';

import {styles} from './styles';

const ProductItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{borderRadius: 6}}>
        <TouchableOpacity
          style={styles.containerTouchable}
          onPress={() => onSelected(item)}>
          <View style={styles.contentText}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
              <Text style={styles.details}>$ {item.price}</Text>
              <Text style={styles.details}>{item.weight}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default ProductItem;
