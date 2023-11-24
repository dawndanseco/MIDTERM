import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar from '.././components/NavBar';
import Numpad from '.././components/NumPad';
import OptionList from '.././components/OptionList';

const Homescreen = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [homeData, setHomeData] = useState(null);
  const [personData, setPersonData] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  const fetchHomeData = async () => {
    try {
      const response = await fetch('HOME_API_ENDPOINT');
      const data = await response.json();
      setHomeData(data);
    } catch (error) {
      console.error('Error fetching Home API data:', error);
    }
  };

  const fetchPersonData = async () => {
    try {
      const response = await fetch('PERSON_API_ENDPOINT');
      const data = await response.json();
      setPersonData(data);
    } catch (error) {
      console.error('Error fetching Person API data:', error);
    }
  };

  const fetchAccountData = async () => {
    try {
      const response = await fetch('ACCOUNT_API_ENDPOINT');
      const data = await response.json();
      setPersonData(data);
    } catch (error) {
      console.error('Error fetching Account API data:', error);
    }
  };

  const fetchCircularButtonData = async () => {
  };

  useEffect(() => {
    fetchHomeData();
    fetchPersonData();
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <View style={styles.backgroundImage}>
        <Text style={{
          marginLeft: 10,
          marginTop: 50,
          fontSize: 25,
          fontWeight: 'bold',
        }}>Good Morning, </Text>
        <Text style={{
          marginLeft: 10,
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 5,
        }}>Dawn Danseco!</Text>

        <View style={styles.lineSeparator}></View>

        <View style={{marginHorizontal:15}}>

        <View style={{
          flexDirection:"row",
          justifyContent:'space-between',
          marginVertical:10}}>

          <View style={{
            backgroundColor:'#6B88A5',
            width:"49%",
            alignItems:'center',
            borderRadius:20,
            padding:5}}>
            <Text style={styles.MonthandDateText}>November</Text>
          </View>

          <View style={{
            backgroundColor:'#6B88A5',
            width:"49%",
            alignItems:'center',
            borderRadius:20,
            padding:5}}>
            <Text style={styles.MonthandDateText}>Today</Text>
          </View>
        </View>
        
        <View style={{
          flexDirection:"row",
          justifyContent:'space-between',
          marginVertical:5}}>

          <View style={{
            backgroundColor:'#3B4B69',
            width:"49%",
            alignItems:'center',
            borderRadius:20,
            padding:20}}>

            <Text style={styles.boxTitle}>Income</Text>
            <View style={styles.amountContainer}>
              <Icon name="arrow-up" size={25} color="white" />
              <Text style={styles.amount}> ₱ {income}</Text>
            </View>
          </View>
          <View style={{
            backgroundColor:'#3B4B69',
            width:"49%",alignItems:'center',
            borderRadius:20,
            padding:20}}>
            <Text style={styles.boxTitle}>Expenses</Text>
            <View style={styles.amountContainer}>
              <Icon name="arrow-down" size={25} color="white" />
              <Text style={styles.amount}> ₱ {expenses}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.lineSeparator}></View>

      <View style={{padding:10}}>
          <Text style={{
            fontSize: 17,
            fontWeight: 'bold'}}
          >
            {currentDate}
          </Text>
          <View style={styles.todaysEx}>
            <Text style={styles.todaysExText}>Today's Expenses:</Text>
            {personData ? (
              <Text style={styles.todaysExTextRecord}>
                Data from Person API: {JSON.stringify(personData)}
              </Text>
            ) : (
              <Text style={styles.todaysExTextRecord}>No record for today.</Text>
            )}
          </View>
      </View>
        
      <ImageBackground
        source={require('.././assets/welcomereminder.png')}
        style={styles.backgroundImageReminder}
      ></ImageBackground>

      <NavBar 
        homeButton={() => setModalVisible1(true)} 
        centerButton={() => setModalVisible(true)}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <OptionList cancel={() => setModalVisible(false)} />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
      >
        <Numpad 
          enterClick={() => setModalVisible1(false)} 
          updateIncome={(x) => setIncome(x)}/>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor:'#F4F6F1'
    },
    boxTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    lineSeparator: {
        height: 5,
        width: "100%",
        backgroundColor: '#6B88A5',
        marginVertical: 10,
        borderRadius: 13,
    },
    MonthandDateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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
    todaysEx: {
        width: "100%",
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
        height: 200,
        width: 300,
        position: 'absolute',
        bottom: 70,
        right: 0,
    },
});

export default Homescreen;
