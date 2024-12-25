
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {  Link } from 'expo-router';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Sarvin Golchin!</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color: 'blue'}}>Go To Profile</Link>
      <Text style={styles.text2}>Developmental Psychologist</Text>
      

    </View>
    
  )
}


const styles = StyleSheet.create ({
  container:{
    backgroundColor: '#e6ffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text1:{
    fontSize: 80,
    textAlign: 'center',
  },
  text2:{
    fontSize: 30,
    marginTop: 85,
  }
})