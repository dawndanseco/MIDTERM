import { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Numpad from '.././components/NumPad';
import Categories from '.././components/Categories';

const OptionList = (props) => {
  const [selected, setSelected] = useState('');
  const [income, setIncome] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);

  return (
    <View style={{position:'absolute',width:"100%",height:"100%",flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>
      <View style={{
        position:'absolute',
        width:"100%",
        height:"100%",
        backgroundColor:'#3B4B69',
        opacity: 0.9
        }}></View>
      <Key 
        text="Add Income" 
        onPress={() =>  {
          console.log("income");
          setSelected("1");
          setModalVisible(true);
        }} />
      <Key 
        text="Add Expense" 
        onPress={() => {
          console.log("Expense");
          setSelected("2");
          setModalVisible1(true);
        }} />
      <Key 
        text="Add Budget" 
        onPress={() =>  {
          console.log("Budget");
          setSelected("3");
          setModalVisible1(true);
        }} />
      <Key 
        text="Cancel" 
        onPress={() => props.cancel()} style={{backgroundColor:'#FF5763'}}
      />
      <View style={{margin:50}}></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <Numpad 
          enterClick={() => {setModalVisible(false);props.cancel();}} 
          updateIncome={(x) => setIncome(x)}/>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible1}
      >
        <Categories cancel={() => setModalVisible1(false)}/>
      </Modal>
    </View>
  );
};

const Key = ({ text, onPress, style }) => (
  <TouchableOpacity style={[styles.key, style]} onPress={onPress}>
    <Text style={styles.keyText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  key: {
    width:"70%",
    borderRadius: 30,
    backgroundColor: '#98B9D2',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    elevation: 10,
  },
  keyText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default OptionList;
