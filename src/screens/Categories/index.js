import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import CategoryItem from '../../components/organisms/Categories-item';
import {CATEGORIES} from '../../utils/data/categories';

import {styles} from './styles';

const Categories = ({navigation}) => {
  const handleSelectedCategory = item => {
    navigation.navigate('Products', {
      categoryId: item.id,
      name: item.title,
      color: item.color,
    });
  };

  const renderCategories = ({item}) => (
    <CategoryItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          key={'#'}
          keyExtractor={item => '#' + item.id}
          data={CATEGORIES}
          renderItem={renderCategories}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Categories;
