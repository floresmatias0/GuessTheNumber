import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 4,
    borderRadius: 6,
    margin: 15,
  },
  containerTouchable: {
    flex: 1,
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  name: {
    fontFamily: 'BarlowCondensed-SemiBoldItalic',
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  details: {
    fontFamily: 'BarlowCondensed-SemiBoldItalic',
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  contentText: {
    flexGrow: 0.5,
    backgroundColor: "#0000007f",
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  }
});
