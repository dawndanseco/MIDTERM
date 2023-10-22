import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                tipidU
                <Image
                    source={require('.././assets/LOGO.png')}
                    style={styles.imageStyle}
                />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6F1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: '#3B4B69',
        fontSize: 60,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },
});

export default Welcome;
