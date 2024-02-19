import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header: React.FC = () => {
  return (
    <View style={styles.items}>
      <Text style={styles.title}>Marisa's To Do</Text>
      <Text style={styles.sectionDescription}>What do I have to do today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 5,
    color: '#ffff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '500',
    color: '#ffff',
  },

  items: {
    marginTop: 30,
  },
});

export default Header;
