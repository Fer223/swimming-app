import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import RutinesListView from './rutines-list-view.js';

module.exports = class TabbedArea extends Component {
    constructor () {
        super();

        this.state = {
            selectedTab: 0
        };
    }

    render () {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map(this.renderTab.bind(this))}
                {this.renderSelectedTabContent()}
            </View>
        );
    }

    renderTab (tab, index) {
        return (
            <TouchableHighlight style={this.getTabStyle(index)} key={index} onPress={this.onTabPress.bind(this, index)} >
                <Text style={styles.text}>{tab}</Text>
            </TouchableHighlight>
        );
    }

    onTabPress (index) {
        this.setState({
            selectedTab: index
        });
    }

    renderSelectedTabContent () {       //ESTA MIERDA NO ESTA RE RENDERIZANDO EL CONTENIDO DEL TAB
        return (
            <View style={styles.tabContent}>
                <RutinesListView rutines={this.getSelectedRutines()} />
            </View>
        );
    }

    getSelectedRutines () {
        return this.props.rutines[this.state.selectedTab].rutinas;
    }

    getTabStyle (index) {
        return (this.state.selectedTab === index) ? styles.selectedTab : styles.tab;
    }
};

const styles = StyleSheet.create({
    tab: {
        borderWidth: 1,
        width: 120,
        padding: 15,
        backgroundColor: '#8282FE'
    },
    selectedTab: {
        borderWidth: 1,
        width: 120,
        padding: 15,
        backgroundColor: '#4D4DC9'
    },
    tabs: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    tabContent:  {
        flexDirection: 'column',
        flexWrap:'wrap',
        width: 500
    },
    text: {
        color: 'white',
        fontSize: 15
    }
});
