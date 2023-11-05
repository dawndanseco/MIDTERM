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
                <View style={styles.lineSeparator}></View> {/* Add a line separator */}

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
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 60,
        textAlign: 'center',
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
        height: 3, // Increase the height to make the separator thicker
        backgroundColor: '#6B88A5', // You can adjust the color and styling of the line
        marginVertical: 10, // Adjust the spacing as needed
    },
    incomeExpensesContainer: {
        flexDirection: 'row', // Display the income and expenses boxes side by side
        justifyContent: 'space-between', // Adjust the spacing between the boxes
    },
    incomeBox: {
        flex: 1, // Make the income box take half of the available width
        backgroundColor: '#6B88A5',
        padding: 20,
        borderRadius: 10,
        marginRight: 10, // Adjust the spacing between the boxes
    },
    expensesBox: {
        flex: 1, // Make the expenses box take half of the available width
        backgroundColor: '#3B4B69',
        padding: 20,
        borderRadius: 10,
    },
});

export default Homescreen;
