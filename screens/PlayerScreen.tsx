import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlayerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="chevron-back-outline" size={24} color="#fff" />
        <Text style={styles.headerText}>NOW PLAYING</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="share-social-outline" size={20} color="#fff" style={{ marginRight: 15 }} />
          <Icon name="ellipsis-vertical-outline" size={20} color="#fff" />
        </View>
      </View>

      <Image source={require('../assets/images/dua-lipa.jpeg')} style={styles.albumArt} />

      <Text style={styles.songTitle}>NEW RULES</Text>
      <Text style={styles.artist}>Dua Lipa</Text>

      <View style={styles.controls}>
        <Icon name="shuffle-outline" size={25} color="#fff" />
        <Icon name="play-skip-back-outline" size={25} color="#fff" />
        <TouchableOpacity style={styles.playButton}>
          <Icon name="pause" size={28} color="#3b1d63" />
        </TouchableOpacity>
        <Icon name="play-skip-forward-outline" size={25} color="#fff" />
        <Icon name="repeat-outline" size={25} color="#fff" />
      </View>

      <View style={styles.progressBar}>
        <Text style={styles.timeText}>2:05</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.timeText}>3:45</Text>
      </View>

      <View style={styles.buttons}>
        <Icon name="heart-outline" size={24} color="#fff" />
        <Icon name="musical-notes-outline" size={24} color="#fff" />
        <Icon name="download-outline" size={24} color="#fff" />
        <Icon name="ellipsis-horizontal" size={24} color="#fff" />
      </View>

      <View style={styles.queueCard}>
        <Image source={require('../assets/images/alan.jpg')} style={styles.queueImage} />
        <View>
          <Text style={styles.queueTitle}>Sing Me To Sleep</Text>
          <Text style={styles.queueArtist}>Alan Walker</Text>
        </View>
        <Text style={styles.queueText}>Queue</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b1d63',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  albumArt: {
    width: 250,
    height: 250,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  songTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#a78bfa',
    borderRadius: 30,
    padding: 15,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeText: {
    color: '#ccc',
    fontSize: 12,
  },
  progressContainer: {
    flex: 1,
    height: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  progressFill: {
    width: '60%',
    height: 5,
    backgroundColor: '#a78bfa',
    borderRadius: 5,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  queueCard: {
    backgroundColor: '#5e3aa3',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  queueImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  queueTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  queueArtist: {
    color: '#ccc',
    fontSize: 12,
  },
  queueText: {
    color: '#a78bfa',
    marginLeft: 'auto',
  },
});

export default PlayerScreen;
