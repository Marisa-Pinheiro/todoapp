import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Task from './Task';

const TaskList = ({
  taskItems,
  completeTask,
}: {
  taskItems: string[];
  completeTask: (index: number) => void;
}) => (
  <View style={styles.items}>
    {taskItems.length > 0 ? (
      taskItems.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
          <Task text={item} />
        </TouchableOpacity>
      ))
    ) : (
      <Text style={styles.emptyTasks}>Add a task!</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  items: {
    marginTop: 30,
  },
  emptyTasks: {
    marginTop: 8,
    fontSize: 26,
    fontWeight: '700',
    color: '#ffff',
    backgroundColor: '#00b493',
    width: '80%',
    textAlign: 'center',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: '3%',
    borderRadius: 10,
  },
});

export default TaskList;
