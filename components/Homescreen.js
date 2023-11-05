import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

                <View style={styles.dateContainer>
                    <View></View>
                </View>
                <View style={styles.incomeExpensesContainer}>
                    <View style={styles.incomeBox}>
                        <Text style={styles.boxTitle}>Income</Text>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}>{income}</Text>
                            <Icon name="arrow-up" size={14} color="white" />
                        </View>
                    </View>
                    <View style={styles.expensesBox}>
                        <Text style={styles.boxTitle}>Expenses</Text>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}>{expenses}</Text>
                            <Icon name="arrow-down" size={14} color="white" />
                        </View>
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
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    greetingStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    lineSeparator: {
        height: 3,
        backgroundColor: '#6B88A5',
        marginVertical: 10,
    },
    dateContainer: {
        height: 26,
        width: 129,
        borderRadius: 13,
        backgroundColor: '#3B4B69',
        marginBottom: 10, 
    },
    incomeExpensesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    incomeBox: {
        flex: 1,
        backgroundColor: '#6B88A5',
        padding: 20,
        borderRadius: 13,
        marginRight: 10,
    },
    expensesBox: {
        flex: 1,
        backgroundColor: '#3B4B69',
        padding: 20,
        borderRadius: 13,
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Homescreen;
