import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const MusicLandingScreen = () => {
  return (
    <LinearGradient
       colors={['#3C1E64', '#4B2A8C', '#3D6FB4']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ flex: 1 ,alignItems: 'center',paddingTop: 60,}}
    >
      <Text style={styles.mainText}>Find Your</Text>
      <Text style={styles.mainText}>Favourite </Text>
      <Text style={styles.highlight}>Music</Text>
      

      <Text style={styles.subText}>
        Find Your Latest Favourite Music{'\n'}From Our Collection
      </Text>

      <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
        <LinearGradient
          colors={['#6ad4ff', '#458dfd']}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ flex: 1, justifyContent: 'flex-end',  }}>
        <Image
          source={require('./assets/images/bg.png')}
          style={styles.image}
          resizeMode="cover"
        />
</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace', 
    padding:5,
    fontWeight : 'bold'
  },
  highlight: {
    color: '#6ad4ff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace', 
    padding:5
  },
  subText: {
    color: '#ccc',
    fontSize: 15,
    marginTop: 14,
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: 'sans-serif'
  },
  buttonWrapper: {
    marginTop: 25,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
    fontFamily: 'orbitron'
  },
  image: {
    width: width * 1.1,
    height: width * 1.1,
  },
});

export default MusicLandingScreen;
