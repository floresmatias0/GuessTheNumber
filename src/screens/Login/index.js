import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction, signUpAction } from '../../store/actions/auth.actions';
import CustomButton from '../../components/atoms/CustomButton';

const AuthScreen = () => {
    const dispatch = useDispatch();
    const errorAuth = useSelector(state => state.auth.error);
    // const state = useSelector(state => state.auth);
    // console.warn(state)

    const [isLoggedIn, setLoggedIn] = useState(null);

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <Text style={styles.title}>{isLoggedIn ? 'Registrate' : 'Iniciar sesion'}</Text>
            <View>
                <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                    if(isLoggedIn) dispatch(signUpAction(values.email, values.password))
                    else dispatch(signInAction(values.email, values.password))
                }}>
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="JohnDoe@mail.com"
                            style={styles.inputName}
                            keyboardType='email-address'
                        />
                        <TextInput
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={styles.inputName}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                        <TouchableOpacity onPress={() => setLoggedIn(!isLoggedIn)}>
                            <Text style={styles.linkText}>{isLoggedIn ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta? registrate'}</Text>
                        </TouchableOpacity>
                        <CustomButton onPress={handleSubmit} text="Entrar"/>
                    </View>
                )}
                </Formik>
                <Text style={styles.error}>{errorAuth}</Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default AuthScreen;
