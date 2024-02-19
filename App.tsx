import React, {useState} from 'react';
import {Dimensions, Keyboard, SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App(): React.JSX.Element {
  const [task, setTask] = useState<string>('');
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task.trim() !== '') {
      setTaskItems([...taskItems, task]);
      setTask('');
    }
  };

  const completeTask = (index: number) => {
    var itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const screenHeight = Dimensions.get('window').height;
  const backgroundStyle = {
    backgroundColor: '#6233d9',
    paddingHorizontal: 10,
    height: screenHeight,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <TaskList taskItems={taskItems} completeTask={completeTask} />
      </ScrollView>
      <TaskInput task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </SafeAreaView>
  );
}

export default App;
