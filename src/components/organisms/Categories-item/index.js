import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {styles} from './styles';

const CategoryItem = ({item, onSelected}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={item.image} resizeMode="cover" style={styles.image} imageStyle={{ borderRadius: 6}}>
        <TouchableOpacity 
          style={styles.containerTouchable}
          onPress={() => onSelected(item)}
        >
              <View>
                  <Text style={styles.title}>{item.title}</Text>
              </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default CategoryItem;