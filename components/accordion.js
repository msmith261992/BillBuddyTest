import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

import accordionStyle from '../styles/components/accordion.scss';
import Accordion from 'react-native-collapsible/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as Animatable from 'react-native-animatable';

let accordionData = null;

export default class AccordionComponent extends React.Component {
    state = {
        activeSections: [],
    };

    //Populate each header 
    _renderHeader = (section, _, isActive) => {
        return (
            <Animatable.View
                duration={200}
                style={accordionStyle.header}
            >
                <Text style={[accordionStyle.header__text, isActive ? accordionStyle.active : accordionStyle.inactive ]}>{section.title}</Text>
                <FontAwesomeIcon style={accordionStyle.header__arrowIcon} icon={ faChevronDown }  size={ 20 } transform={{ rotate: isActive ? 180 : 0}} />
            </Animatable.View>
            
        );
    };

    //Populate content underneath each header
    _renderContent(section, _, isActive) {
        return (
            <Animatable.View
                duration={50}
                style={accordionStyle.content}
            >
                <Animatable.Text style={accordionStyle.content__text} animation={isActive ? 'fadeInDown' : undefined}>
                    {section.content}
                </Animatable.Text>
            </Animatable.View>
        );
    }
    
    //Trigger pressed drop down
    _updateSections = activeSections => {
        this.setState({ activeSections });
    };

    render() { 
        if (this.props.data !== null) {
            accordionData = this.props.accordionData;
        }

       return (
            <Accordion
                sections={accordionData}
                containerStyle={accordionStyle.accordionContainer}
                sectionContainerStyle={accordionStyle.accordionSection}
                touchableComponent={TouchableOpacity}
                activeSections={this.state.activeSections}
                renderSectionTitle={this._renderSectionTitle}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        );
    }
}