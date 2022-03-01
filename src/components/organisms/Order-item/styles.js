import {StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 8,
    borderRadius: 6,
    backgroundColor: '#00a680',
    margin: 20
  },
  header: {
    flex: 0.5,
  },
  date: {
    fontFamily: 'BarlowCondensed-SemiBoldItalic',
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
  },
  details: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10
  },
});
