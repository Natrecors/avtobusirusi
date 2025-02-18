// SignupScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createTables, addUser, exportDatabase } from './dataBase';

const SignupScreenT = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    createTables();
  }, []);

  const handleSignUp = () => {
    if (username && email && password) {
      addUser(username, email, password);
      Alert.alert('User registered successfully!', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Users'),
        },
      ]);
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      Alert.alert('Please fill in all fields');
    }
  };

  return (
    <View style={{     flex: 1,justifyContent: 'center',padding: 16, }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Export Database" onPress={exportDatabase} />
    </View>
  );
};

export default SignupScreenT;
