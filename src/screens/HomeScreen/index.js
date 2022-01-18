import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { styles } from './styles';
import guessImage from '../../assets/images/screen-0.jpg';
import Card from '../../components/organisms/Card';

const HomeScreen = ({navigation}) => {
  const {navigate} = navigation;

  const [start, setStart] = useState(false);

  const [number, setNumber] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(false);

  const [name, setName] = useState('');
  const [selectedName, setSelectedName] = useState(false);

  const resetGame = () => {
	setStart(false);
	setSelectedNumber(false);
	setSelectedName(false);
	setNumber(0)
	setName('')
  }

  const handleChangeName = (text) => {
	setName(text)
  }

  const addName = () => {
	if(name.trim().length !== 0) {
		setSelectedName(true)
	}
  }

  const handleChangeNumber = (num) => {
	setNumber(num)
  }

  const addNumber = () => {
	setSelectedNumber(true)
	navigate('Game', {
		player: name,
		number: number
	})
	return resetGame()
  }
  
    return (
      <View style={styles.container}>
		<ImageBackground source={guessImage} resizeMode="cover" style={styles.image}>
			<Card
			    title={'Press start to continue'}
				start={start}
				setStart={setStart}
				name={name}
				selectedName={selectedName}
				number={number}
				selectedNumber={selectedNumber}
				handleChangeName={handleChangeName}
				addName={addName}
				handleChangeNumber={handleChangeNumber}
				addNumber={addNumber}
				inputName={'What your name!'}
				inputNumber={'Choice a number to start'}
			/>
		</ImageBackground>
      </View>
    );
}

export default HomeScreen;