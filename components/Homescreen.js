import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Homescreen = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <ImageBackground
            source={require('.././assets/homescreenbg.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.greetingStyle}>Good Morning, User</Text>
                <View style={styles.lineSeparator}></View>

                <View style={styles.MonthandDateContainer}>
                    <View style={styles.MonthandDate}>
                        <Text style={styles.MonthandDateText}>November</Text>
                    </View>
                    <View style={styles.oblongSpace}></View>
                    <View style={styles.MonthandDate}>
                        <Text style={styles.MonthandDateText}>Today</Text>
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
                <View style={styles.todaysExpenseContainer}>
                    <Text style={styles.dateText}>{currentDate}</Text>
                    <View style={styles.todaysEx}>
                        <Text style={styles.todaysExText}>Today's Expenses:</Text>
                        <Text style={styles.todaysExTextRecord}>No record for today.</Text>
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
        height: 5,
        backgroundColor: '#6B88A5',
        marginVertical: 10,
        borderRadius: 13,
    },
    MonthandDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    MonthandDate: {
        height: 26,
        width: 130,
        borderRadius: 13,
        backgroundColor: '#3B4B69',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    oblongSpace: {
        width: 80,
    },
    MonthandDateText: {
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    expensesBox: {
        flex: 1,
        backgroundColor: '#3B4B69',
        padding: 20,
        borderRadius: 10,
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
        elevation: 5, 
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todaysExpenseContainer: {
        alignItems: 'flex-start',
        marginTop: 20,
    },
    dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
    },
    todaysEx: {
        width: 340,
        height: 60,
        backgroundColor: '#B3D2DD',
        marginTop: 10,
        borderRadius: 13,
        shadowColor: 'black', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2, 
        elevation: 5, 
    },
    todaysExText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3B4B69',
        marginLeft: 10,
        marginTop: 10,
    },
    todaysExTextRecord: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3B4B69',
        marginLeft: 10,
        marginTop: 5,
        alignSelf: 'center',
    },
});

export default Homescreen;
