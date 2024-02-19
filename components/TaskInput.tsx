import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';

const TaskInput = ({
  task,
  setTask,
  handleAddTask,
}: {
  task: string;
  setTask: (text: string) => void;
  handleAddTask: () => void;
}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.writeTaskWrapper}>
    <TextInput
      style={styles.input}
      placeholder={'Add a task!'}
      value={task}
      onChangeText={setTask}
    />
    <TouchableOpacity onPress={handleAddTask}>
      <View style={styles.addWrapper}>
        <Text>+</Text>
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#e4e4e4',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e4e4e4',
    borderWidth: 1,
  },
});

export default TaskInput;
