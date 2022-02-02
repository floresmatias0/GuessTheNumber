import React, { useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import { Formik } from 'formik';
import { styles } from './styles';
// import LoggedContext from '../../context/LoggedContext';

const AuthScreen = () => {
    // const { isLoggedIn, setLoggedIn } = useContext(LoggedContext);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Inicia sesion</Text>
        <View>
            <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
                console.warn(values)
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View>
                <TextInput
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="JohnDoe@mail.com"
                    style={styles.inputName}
                />
                <TextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={styles.inputName}
                />
                <Button onPress={handleSubmit} title="Entrar" />
                </View>
            )}
            </Formik>
        </View>
        </View>
    );
};

export default AuthScreen;
