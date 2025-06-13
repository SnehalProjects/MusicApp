import React from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const recentlyPlayed = [
  { title: 'Who Says', artist: 'Selena Gomez', image: require('../assets/images/selena.jpg') },
  { title: 'SORRY', artist: 'Justin Bieber', image: require('../assets/images/sorry.jpg') },
  { title: 'Sing Me To Sleep', artist: 'Alan Walker', image: require('../assets/images/dua-lipa.jpeg') },
];

const recommended = [
  { title: 'Magenta Riddim', artist: 'Dj Snake', image: require('../assets/images/magneta.jpg'), liked: false },
  { title: 'Friends', artist: 'Anne Marie', image: require('../assets/images/alan.jpg'), liked: true },
  { title: 'Alone', artist: 'Marshmello', image: require('../assets/images/sorry.jpg'), liked: false },
  { title: 'New Rules', artist: 'Dua Lipa', image: require('../assets/images/dua-lipa.jpeg'), liked: true },
  { title: 'You Belong With Me', artist: 'Taylor Swift', image: require('../assets/images/selena.jpg'), liked: true },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search} placeholder="Search Song" placeholderTextColor="#ccc" />
      <Text style={styles.heading}>RECENTLY PLAYED</Text>
      <FlatList
        data={recentlyPlayed}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.song}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
        )}
      />
      <Text style={styles.heading}>RECOMMENDED MUSIC</Text>
      <FlatList
        data={recommended}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.recommendation}>
            <Image source={item.image} style={styles.thumb} />
            <View>
              <Text style={styles.song}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
            <Ionicons
              name={item.liked ? 'heart' : 'heart-outline'}
              size={20}
              color={item.liked ? 'red' : 'white'}
              style={{ marginLeft: 'auto' }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3b1d63', padding: 16 },
  search: {
    backgroundColor: '#8053d1',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    marginBottom: 20,
  },
  heading: { color: 'white', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  card: { marginRight: 10 },
  image: { width: 100, height: 100, borderRadius: 10 },
  song: { color: 'white', fontSize: 14, marginTop: 5 },
  artist: { color: '#bbb', fontSize: 12 },
  recommendation: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  thumb: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
});
