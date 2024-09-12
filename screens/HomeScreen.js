import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login');
    }).catch((error=> alert(error.message)))
  }
  return (
    <View style={styles.container}>
      <Text>Email : {auth.currentUser?.email}</Text>

      <TouchableOpacity
        onPress={handleSignOut}
        style={[styles.button, styles.outlineButton]}>
        <Text style={styles.outlineButtonTxt}>Çıkış yap</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '50%',
    marginTop: 50,
  },
  outlineButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#1e90ff',
  },
  outlineButtonTxt: {
    color: '#1e90ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})