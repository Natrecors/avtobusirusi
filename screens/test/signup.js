
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const SignupScreenV2Test = () => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3006/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        Alert.alert('User registered successfully!');
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error signing up: ', error);
      Alert.alert('Failed to register user');
    }
  };

  return (
    <View style={{     flex: 1, justifyContent: 'center',padding: 16, }}>
      <TextInput
        placeholder="Username"
        value={name}
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
    </View>
  );
};

export default SignupScreenV2Test;
