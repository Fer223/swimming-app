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

    renderSelectedTabContent () {
        return (
            <View style={styles.tabContent}>
                <RutinesListView {...this.getRutinesListViewProps()} />
            </View>
        );
    }

    getRutinesListViewProps () {
        return {
            rutines: this.props.rutines[this.state.selectedTab].rutinas,
            handleRoutinePress: this.props.handleTabElementPress
        };
    }

    getTabStyle (index) {
        return (this.state.selectedTab === index) ? styles.selectedTab : styles.tab;
    }
};

const styles = StyleSheet.create({
    tab: {
        width: 120,
        padding: 15
    },
    selectedTab: {
        width: 120,
        padding: 15,
        borderBottomWidth: 3,
        borderBottomColor: 'black'
    },
    tabs: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row'
    },
    tabContent:  {
        flexDirection: 'column',
        flexWrap:'wrap',
        width: 500
    },
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
});
