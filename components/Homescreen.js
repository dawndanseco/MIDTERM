import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';

const Homescreen = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    return (
        <ImageBackground
            source={require('.././assets/homescreenbg.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.greetingStyle}>Good Morning,</Text>
                <View style={styles.lineSeparator}></View>

                <View style={styles.incomeExpensesContainer}>
                    <View style={styles.incomeBox}>
                        <Text style={styles.boxTitle}>Income</Text>
                        <Text style={styles.amount}>{income}</Text>
                    </View>
                    <View style={styles.expensesBox}>
                        <Text style={styles.boxTitle}>Expenses</Text>
                        <Text style={styles.amount}>{expenses}</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        padding: 30,
    },
    boxTitle: {
        color: '#3B4B69',
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    imageStyle: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },
    greetingStyle: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    lineSeparator: {
        height: 3, 
        backgroundColor: '#6B88A5', 
        marginVertical: 10, 
    },
    incomeExpensesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    incomeBox: {
        flex: 1, 
        backgroundColor: '#6B88A5',
        padding: 20,
        borderRadius: 10,
        marginRight: 10, 
    },
    expensesBox: {
        flex: 1, 
        backgroundColor: '#3B4B69',
        padding: 20,
        borderRadius: 10,
    },
});

export default Homescreen;
