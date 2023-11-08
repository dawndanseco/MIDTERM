import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Homescreen = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const currentDate = new Date().toLocaleDateString();

    return (
        <ImageBackground
            source={require('.././assets/homescreenbg.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.greetingStyle}>Good Morning, User</Text>
                <View style={styles.lineSeparator}></View>

                <View style={styles.oblongContainer}>
                    <View style={styles.oblong}>
                        <Text style={styles.oblongText}>November</Text>
                    </View>
                    <View style={styles.oblongSpace}></View>
                    <View style={styles.oblong}>
                        <Text style={styles.oblongText}>Today</Text>
                    </View>
                </View>
                <View style={styles.incomeExpensesContainer}>
                    <View style={styles.incomeBox}>
                        <Text style={styles.boxTitle}>Income</Text>
                        <View style={styles.amountContainer}>
                            <Icon name="arrow-up" size={14} color="white" />
                            <Text style={styles.amount}>{income}</Text>
                        </View>
                    </View>
                    <View style={styles.expensesBox}>
                        <Text style={styles.boxTitle}>Expenses</Text>
                        <View style={styles.amountContainer}>
                            <Icon name="arrow-down" size={14} color="white" />
                            <Text style={styles.amount}>{expenses}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.todayExpenseContainer}>
                    <Text style={styles.dateText}>{currentDate}</Text>
                    {/* Add a rectangle beneath the date */}
                    <View style={styles.rectangle}></View>
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
        height: 5,
        backgroundColor: '#6B88A5',
        marginVertical: 10,
        borderRadius: 13,
    },
    oblongContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    oblong: {
        height: 26,
        width: 130,
        borderRadius: 13,
        backgroundColor: '#3B4B69',
        justifyContent: 'center',
        alignItems: 'center',
    },
    oblongSpace: {
        width: 80,
    },
    oblongText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todayExpense: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
    },
    rectangle: {
        width: 340,
        height: 54, 
        backgroundColor: '#B3D2DD', 
        marginTop: 10,
        borderRadius: 13,
    },
});

export default Homescreen;
