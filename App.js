import React, {useState} from 'react';
import { View, ScrollView } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Header from './sections/header';
import Banner from './sections/banner';
import CompaniesList from './sections/companies-list';

import appStyle from './styles/app.scss';

//Function to fetch custom font
const fetchFonts = () => {
  return Font.loadAsync({
    'Valera-Round': require('./assets/fonts/VarelaRound-Regular.ttf')
  });
}

console.disableYellowBox = true;

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Load in custom font
  if(!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  } else {
    return (
      <View style={appStyle.container}>
          <ScrollView>
            <Header />
            <Banner />
            <CompaniesList />
          </ScrollView>
      </View>
    );
  }
}

