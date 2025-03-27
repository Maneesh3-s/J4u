import {StyleSheet, Text, View, ImageBackground, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';

const LandingPage = () => {
  const targetDate = new Date('2025-10-19T12:00:00').getTime(); // Set to 12 PM
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {days: 0, hours: 0, minutes: 0, seconds: 0};
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogin = () => {
    if (username === 'Jaishna' && password === 'Iloveyou') {
      Alert.alert('Success', 'Login successful!');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <ImageBackground
      source={{uri: 'https://thumbs.dreamstime.com/b/tree-love-37616637.jpg'}}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.heading}>Our Day</Text>
        <Text style={styles.countdown}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{' '}
          {timeLeft.seconds}s
        </Text>
      </View>
      <View style={styles.overlay2}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#ccc"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.loginButton} onPress={handleLogin}>Login</Text>
      </View>
    </ImageBackground>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a semi-transparent overlay for readability
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  overlay2: {
    top: '10%',
    borderRadius: 10,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  countdown: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    color: 'black',
  },
  loginButton: {
    marginTop: 60,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
});
