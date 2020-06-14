import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import companiesStyles from '../styles/sections/companiesList.scss';
import appStyle from '../styles/app.scss';

const customData = require('../assets/data/companies.json');

function Item({url}) {
  return (
    <TouchableOpacity  
        style={{flex:1/4,
        aspectRatio:1, paddingHorizontal:5}}>
        <Image style={companiesStyles.sponsorsContainer__image} resizeMode='contain' source={{ uri: url }}></Image>
    </TouchableOpacity>
  )
}

export default class CompaniesList extends React.Component {
    render() { 
        return (
            <View style={[appStyle.mainSidePadding, companiesStyles.sponsorsContainer, appStyle.endSectionBorder]}>
                <FlatList
                    data={customData}
                    numColumns={4}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                    renderItem={({ item }) => <Item id={item.id} url={item.src} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}