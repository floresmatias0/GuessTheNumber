import React, { useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text
} from 'react-native';
import ProductItem from '../../components/organisms/Products-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectedBreadAction, filteredBreadAction } from '../../store/actions/breads.actions';
import { styles } from './styles';

const Products = ({navigation}) => {

  const dispatch = useDispatch();
  const categoryBread = useSelector(state => state.breads.filteredBreads);
  const categorySelected = useSelector(state => state.categories.selected);

  useEffect(() => {
    dispatch(filteredBreadAction(categorySelected.id))
  }, [])

  const handleSelectedProduct = item => {
    dispatch(selectedBreadAction(item.id))
    navigation.navigate('ProductDetail', {
      name: item.name
    });
  };

  const renderProducts = ({item}) => <ProductItem item={item} onSelected={handleSelectedProduct} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={'#'}
          keyExtractor={item => '#' + item.id}
          data={categoryBread}
          renderItem={renderProducts}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Products;
