import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';

const Signup = () => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [isPressed, setIsPressed] = useState(false);

    return (
        <ImageBackground
            source={require('.././assets/SIGNUPBG.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.welcomeStyle}>Sign up!</Text>
                <View style={styles.loginContainer}>
                    <Text style={styles.loginLabel}>Create an account</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Full Name"
                        value={fullname}
                        onChangeText={text => setFullName(text)}
                    />
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
                    <TextInput
                        style={styles.inputField}
                        placeholder="Re-type Password"
                        secureTextEntry={true}
                        value={repassword}
                        onChangeText={text => setRePassword(text)}
                    />
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'darkblue' : '#3B4B69',
                            },
                            styles.loginButton,
                        ]}
                        onPress={() => {
                            // Handle signup action here
                        }}
                    >
                        {({ pressed }) => (
                            <Text style={styles.loginButtonText}>
                                {pressed ? 'Signing Up...' : 'Sign Up'}
                            </Text>
                        )}
                    </Pressable>
                </View>
                <View style={styles.signupContainer}>
                    <Text style={styles.signupText}>
                        Already have an account? <Text style={styles.signupLink}>Log in</Text>
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
        padding: 30,
    },
    welcomeStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    loginContainer: {
        flex: 1,
        padding: 30,
        borderRadius: 50,
        marginTop: 200,
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

export default Signup;
