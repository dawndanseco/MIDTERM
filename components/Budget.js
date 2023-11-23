import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CircularButton, HomeButton, AccountButton } from './NavBar';

const Budget = () => {
  const incomeValue = '₱500';
  const expensesValue = '₱200';

  return (
    <ImageBackground
      source={require('../assets/homescreenbg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>What items are you searching for?</Text>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="I'm looking for..."
          />
          <Icon name="search" size={20} style={styles.searchIcon} />
        </View>
        <Text style={styles.budgetText}>Your budget for today is:</Text>
        <View style={styles.rectanglesContainer}>
          <View style={styles.incomeRectangle}>
            <Icon name="arrow-up" size={20} color="green" style={styles.arrowIcon} />
            <Text style={[styles.valueText, styles.incomeValueText]}>{incomeValue}</Text>
            <Text style={styles.rectangleText}>Income</Text>
          </View>
          <View style={styles.expenseRectangle}>
            <Icon name="arrow-down" size={20} color="red" style={styles.arrowIcon} />
            <Text style={[styles.valueText, styles.expenseValueText]}>{expensesValue}</Text>
            <Text style={styles.rectangleText}>Expenses</Text>
          </View>
        </View>
      </View>
      <CircularButton onPress={() => console.log('Circular button pressed')} />
      <HomeButton onPress={() => console.log('Home button pressed')} />
      <AccountButton onPress={() => console.log('Account button pressed')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
    color: 'black',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 271,
    height: 30,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
    color: '#B3D2DD',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderColor: '#B3D2DD',
    backgroundColor: '#B3D2DD',
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 10,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  budgetText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  rectanglesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  incomeRectangle: {
    width: '48%',
    height: 100,
    backgroundColor: '#4E6B89',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  expenseRectangle: {
    width: '48%',
    height: 100,
    backgroundColor: '#3A5167',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  rectangleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  valueText: {
    fontSize: 18,
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    marginRight: 5,
  },
  incomeValueText: {
    fontSize: 24,
  },
  expenseValueText: {
    fontSize: 24,
  },
});

export default Budget;
