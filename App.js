import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from './sections/header';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
