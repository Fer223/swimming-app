import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

module.exports = class TabbedArea extends Component {

    render () {
        return (
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                {this.props.tabs.map(this.renderTab)}
            </View>
        );
    }

    renderTab (tab, index) {
        return (
            <TouchableHighlight key={index} onPress={() => console.warn('laputa')} >
                <Text>{tab.text}</Text>
            </TouchableHighlight>
        );
    }

    onTabPress () {
        console.warn('tab apretada');
    }
};

// const styles = StyleSheet.create({
//     tab: {
//
//     }
// });
