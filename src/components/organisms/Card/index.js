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
			{!start && (
				<View style={styles.containerCardName}>
					<Text style={styles.title}>{title}</Text>
					<CustomButton
						buttonContainer={{
							backgroundColor: "#009688",
							borderRadius: 5,
							padding: 10,
							marginVertical: 20,
						}}
						onPress={() => setStart(start ? false : true)}
						text={'Start Game'}
					/>
				</View>
			)}
			{start && !selectedName && !selectedNumber && (
				<View style={styles.containerCardName}>
					<Text style={styles.textName}>{inputName}</Text>
					<TextInput
						onChangeText={handleChangeName}
						keyboardType='default'
						value={name}
						placeholder='John Doe'
						style={styles.inputName}
					/>
					<CustomButton
						buttonContainer={{
							backgroundColor: "#009688",
							marginVertical: 10,
							padding: 10,
							borderRadius: 5
						}}
						onPress={addName}
						text={'Send'}
					/>
				</View>
			)}
			{start && selectedName && !selectedNumber && (
				<View style={styles.containerCardName}>
					<Text style={styles.textName}>{inputNumber}</Text>
					<TextInput
						onChangeText={handleChangeNumber}
						keyboardType='numeric'
						placeholder='23'
						style={styles.inputName}
					/>
					<CustomButton
						onPress={addNumber}
						text={'Choiced!'}
						buttonContainer={{
							backgroundColor: "#009688",
							marginVertical: 10,
							padding: 10,
							borderRadius: 5
						}}
					/>
				</View>
			)}
        </View>
    )
}

export default Card;