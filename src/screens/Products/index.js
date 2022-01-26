import React from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import ProductItem from '../../components/organisms/Products-item';
import {BREADS} from '../../utils/data/breads';
import {styles} from './styles';

const Products = ({navigation, route}) => {
  const breads = BREADS.filter(
    bread => bread.category === route.params.categoryId,
  );

  const handleSelectedProduct = item => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      name: item.name,
      product: item,
    });
  };

  const renderProducts = ({item}) => (
    <ProductItem item={item} onSelected={handleSelectedProduct} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={'#'}
          keyExtractor={item => '#' + item.id}
          data={breads}
          renderItem={renderProducts}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
