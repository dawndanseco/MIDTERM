
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg, { Circle, Path } from 'react-native-svg';

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
                <Text style={styles.greetingStyle}>Good Morning, </Text>
                <Text style={styles.greetingStyle}>Dawn Danseco!</Text>
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
                            <Icon name="arrow-up" size={25} color="white" />
                            <Text style={styles.amount}> ₱ {income}</Text>
                        </View>
                    </View>
                    <View style={styles.expensesBox}>
                        <Text style={styles.boxTitle}>Expenses</Text>
                        <View style={styles.amountContainer}>
                            <Icon name="arrow-down" size={25} color="white" />
                            <Text style={styles.amount}> ₱ {expenses}</Text>
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
                <View style={styles.lineSeparator}></View>
                <View style={styles.bottomButtonsContainer}>
                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'darkblue' : '#3B4B69',
                            },
                            styles.circularButton,
                        ]}
                        onPress={() => {
                            // Handle Home button press
                        }}
                    >
                        <Svg width="40" height="40" viewBox="0 0 40 40">
                            <Circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" fill="#3B4B69" />
                            <Path d="M18 12V28M12 18H28" stroke="white" strokeWidth="2" />
                        </Svg>
                    </Pressable>

                    <Pressable
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? 'darkblue' : '#3B4B69',
                            },
                            styles.circularButton,
                        ]}
                        onPress={() => {
                            // Handle Add button press
                        }}
                    >
                        <Svg width="80" height="80" viewBox="0 0 40 40">
                            <Circle cx="20" cy="20" r="19" stroke="#3B4B69" strokeWidth="2" fill="#6B88A5" />
                            <Path d="M20 12V28M12 20H28" stroke="white" strokeWidth="2" />
                        </Svg>
                    </Pressable>
                </View>
            </View>
            <ImageBackground
                source={require('.././assets/welcomereminder.png')}
                style={styles.backgroundImageReminder}
            ></ImageBackground>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 30,
        marginTop: 40,
    },
    boxTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
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
        marginBottom: 20,
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
        width: 40,
    },
    MonthandDateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    incomeExpensesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
    },
    incomeBox: {
        flex: 1,
        backgroundColor: '#6B88A5',
        padding: 20,
        borderRadius: 13,
        marginRight: 30,
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
        borderRadius: 13,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    amount: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    todaysExpenseContainer: {
        alignItems: 'flex-start',
        marginTop: 5,
    },
    dateText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    todaysEx: {
        width: 300,
        height: 60,
        backgroundColor: '#B3D2DD',
        marginTop: 10,
        borderRadius: 13,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        marginBottom: 10,
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
    backgroundImageReminder: {
        height: 210,
        width: 271,
        position: 'absolute',
        top: 470,
        left: 65,
    },
    circularButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#3B4B69',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        top: 330,
        right: 95,
    },
});

export default Homescreen;