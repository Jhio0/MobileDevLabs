import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './forms/ToDoList';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from './forms/ToDoForm';

function HomeScreen({ tasks, addTask, navigation}) {
  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
          />
      </SafeAreaView>
    </MainLayout>

  );
}

export default HomeScreen;