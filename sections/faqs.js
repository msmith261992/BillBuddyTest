import React from 'react';
import { Text, View } from 'react-native';

import faqStyle from '../styles/sections/faqs.scss';
import appStyle from '../styles/app.scss';

import AccordionComponent from '../components/accordion';

const data = require('../assets/data/accordion.json');

export default class Faqs extends React.Component {
    render() { 
        return (
            <View style={[appStyle.mainSidePadding, appStyle.newSectionVerticalPadding, faqStyle.faqContainer]}>
                <Text style={appStyle.sectionTitle}>Energy Switching FAQs</Text>
                <AccordionComponent accordionData={data} />
            </View>
        );
    }
}