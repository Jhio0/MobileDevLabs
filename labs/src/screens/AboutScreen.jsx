import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen(navigation) {
  const appName = 'Your App Name';
  const authorName = 'Your Name';
  const currentDate = new Date().toDateString();

  return (
    <MainLayout>
      <SafeAreaView>
        <Text>{appName}</Text>
        <Text>Author: {authorName}</Text>
        <Text>Current Date: {currentDate}</Text>
        <Button
              title="Go to About"
              onPress={() => navigation.navigate('Home')}
          />
      </SafeAreaView>
    </MainLayout>
   
  );
}

export default AboutScreen;