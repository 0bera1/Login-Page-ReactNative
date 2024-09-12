import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Animated, Easing } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [showText, setShowText] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('Home');
            }
        });
    }, [])

    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0
    const textFadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity 0 for the text

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(`${user.email} adlı kullanıcı giriş yaptı`)
            })
            .catch((error) => alert(error.message))
    }

    const handleSignUp = () => {
        if (password.length < 6) {
            alert("Şifre 6 karakterden fazla olmalı");
            return;
        } else {
            if (password !== confirmPassword) {
                alert("Şifreler eşleşmiyor!");
                return;
            }
            else {
                auth.createUserWithEmailAndPassword(email, password)
                    .then(userCredentials => {
                        const user = userCredentials.user;
                        console.log('Kullanıcı: ', user.email)
                        alert("Kayıt olma işlemi başarılı!")
                        setShowConfirmPassword(false);
                        setShowButton(true);
                    })
                    .catch((error) => alert(error.message));
            }
        }
    }

    const showConfirmPasswordField = () => {
        setShowConfirmPassword(true);
        setShowButton(false);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true
        }).start();
        Animated.timing(textFadeAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => setShowText(true));
    };

    const hideConfirmPasswordField = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => {
            setShowConfirmPassword(false);
            setShowButton(true);
        });
        Animated.timing(textFadeAnim, {
            toValue: 0,
            duration: 500,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(() => setShowText(false));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='E-mail giriniz...'
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType='email-address'
                    autoCapitalize="none" 
                />
                <TextInput
                    style={styles.input}
                    placeholder='Şifre giriniz...'
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />

                {showConfirmPassword && (
                    <Animated.View style={[styles.animatedInputContainer, { opacity: fadeAnim }]}>
                        <TextInput
                            style={styles.input}
                            placeholder='Şifreyi tekrar giriniz...'
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={text => setConfirmPassword(text)}
                        />
                    </Animated.View>
                )}

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={handleLogin}>
                        <Text style={styles.buttonTxt}>Giriş Yap</Text>
                    </TouchableOpacity>
                    {showButton && (
                        <TouchableOpacity
                            onPress={showConfirmPasswordField}
                            style={[styles.button, styles.outlineButton]}>
                            <Text style={styles.outlineButtonTxt}>Kayıt Ol</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {showConfirmPassword && (
                    <>
                        <TouchableOpacity
                            onPress={handleSignUp}
                            style={[styles.button, styles.outlineButton]}>
                            <Text style={styles.outlineButtonTxt}>Kaydı Tamamla</Text>
                        </TouchableOpacity>
                        <Animated.View style={{ opacity: textFadeAnim }}>
                            <TouchableOpacity onPress={hideConfirmPasswordField}>
                                <Text style={styles.text}>Kayıt Olmayı İptal Et</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    InputContainer: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 15,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonTxt: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    outlineButton: {
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#1e90ff',
    },
    outlineButtonTxt: {
        color: '#1e90ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    animatedInputContainer: {
        width: '100%',
    },
    text: {
        color: '#1e90ff',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});
