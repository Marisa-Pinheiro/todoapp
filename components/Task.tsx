import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TaskProps {
  text: string;
}

const Task: React.FC<TaskProps> = ({text}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: '#00b493',
    opacity: 0.4,
    marginRight: 20,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 18,
  },
});

export default Task;
