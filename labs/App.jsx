import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './src/components/ToDoList';
import ToDoForm from './src/components/ToDoForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

function App() {
  const Stack = createStackNavigator();

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog',
  ]);
  
  const addTask = (taskText) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;