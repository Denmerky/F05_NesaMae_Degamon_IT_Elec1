import React from 'react';
import { SafeAreaView } from 'react-native';
import CounterApp from './CounterApp'; // adjust path if in components folder

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterApp />
    </SafeAreaView>
  );
}