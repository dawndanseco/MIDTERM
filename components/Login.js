import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    return (
        <ImageBackground
            source={require('.././assets/LOGO.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.welcomeStyle}>Welcome!</Text>
                <Text style={styles.textStyle}>
                    tipidU
                    <Image
                        source={require('.././assets/LOGO.png')}
                        style={styles.imageStyle}
                    />
                </Text>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginLabel}>Login to your account</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'darkblue' : '#3B4B69',
                            },
                            styles.loginButton,
                        ]}
                        onPress={() => {
                            // Handle login action here
                        }}
                    >
                        {({ pressed }) => (
                            <Text style={styles.loginButtonText}>
                                {pressed ? 'Logging In...' : 'Log In'}
                            </Text>
                        )}
                    </Pressable>
                </View>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    welcomeStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textStyle: {
        color: '#3B4B69',
        fontSize: 60,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 20,
    },
    imageStyle: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },
    loginContainer: {
        backgroundColor: '#B3D2DD',
        flex: 1,
        padding: 50,
        borderRadius: 50,
        marginTop: 150,
    },
    loginLabel: {
        fontSize: 18,
        marginBottom: 5,
        fontWeight: 'bold',
        alignContent: 'flex-start',
    },
    inputField: {
        height: 40,
        borderColor: '#F4F6F1',
        backgroundColor: '#F4F6F1',
        borderWidth: 1,
        borderRadius: 13,
        paddingHorizontal: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    loginButton: {
        padding: 15,
        borderRadius: 13,
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    signupContainer: {
        marginTop: 20,
        alignSelf: 'center',
    },
    signupText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupLink: {
        color: '#3B4B69',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
});

export default Login;
