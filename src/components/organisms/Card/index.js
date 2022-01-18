import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import CustomButton from '../../atoms/CustomButton';
import { styles } from './styles';

const Card = ({
    title,
    start,
    setStart,
    name,
    selectedName,
    number,
    selectedNumber,
    handleChangeName,
    addName,
    handleChangeNumber,
    addNumber,
    inputName,
    inputNumber
}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
			{!start && (
                <CustomButton
                    buttonContainer={{
                        backgroundColor: "#009688",
                        borderRadius: 5,
                        paddingVertical: 10,
                        marginVertical: 30,
                        marginHorizontal: 100
                    }}
                    onPress={() => setStart(start ? false : true)}
                    text={'Start Game'}
                />
			)}
			{start && !selectedName && !selectedNumber && (
				<View>
					<Text>{inputName}</Text>
					<TextInput
						onChangeText={handleChangeName}
						keyboardType='default'
						value={name}
						placeholder='John Doe'
					/>
					<CustomButton
						onPress={addName}
						text={'Send'}
					/>
				</View>
			)}
			{start && selectedName && !selectedNumber && (
				<View>
					<Text>{inputNumber}</Text>
					<TextInput
						onChangeText={handleChangeNumber}
						keyboardType='numeric'
						value={number.toString()}
						placeholder='23'
					/>
					<CustomButton
						onPress={addNumber}
						text={'Choiced!'}
					/>
				</View>
			)}
        </View>
    )
}

export default Card;