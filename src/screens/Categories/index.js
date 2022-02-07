import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList
} from 'react-native';
import CategoryItem from '../../components/organisms/Categories-item';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategoryAction } from '../../store/actions/category.actions';
import { styles } from './styles';

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.categories.categories);
  // const category = useSelector(state => state.categories.selected);
  
  const handleSelectedCategory = item => {
    dispatch(selectCategoryAction(item.id))
    navigation.navigate('Products', {
      name: item.title,
      color: item.color,
    });
  };

  const renderCategories = ({item}) => <CategoryItem item={item} onSelected={handleSelectedCategory} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={'#'}
          keyExtractor={item => '#' + item.id}
          data={categoryBreads}
          renderItem={renderCategories}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
