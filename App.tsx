import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './src/navigation/TabNavigation';
import Container from './src/components/Container';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <TabNavigation />
  );
}

export default App;
