import React from 'react';
import { StyleSheet, Text, View,Alert,TouchableOpacity,Button } from 'react-native';

export default class Main extends React.Component {
  static navigationOptions = {
    title: "Page2",
  }

  onPressNext(){
    this.props.navigation.navigate('Page3');
  }

  render() {
    return (
        <View style={{flex: 1,alignContent:'center'}} >

          <Text
              style={styles.txt}>
              Page 2
          </Text>

          <View style={{flex:1}}>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.onPressNext()}>
            <Text>
              Next
            </Text>
          </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
   btn:{
      alignItems: 'center',
      height:50,
      backgroundColor: '#86A8E7',
      padding: 10,
      margin:10,
      borderRadius: 50,
      borderColor:'white',
      borderWidth : 1
  },
  txt:{
      textAlign: 'center',
      fontSize:50
  },

})