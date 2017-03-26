import _ from 'lodash';
import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

module.exports = class RutinesListView extends Component {
    constructor () {
        super();

        this.ds = new ListView.DataSource({rowHasChanged: function(r1, r2) { return  r1 !== r2; }});
    }

    componentWillMount () {
        var rutinesNames = _.map(this.props.rutines, 'rutineName');

        this.state = {
            dataSource: this.ds.cloneWithRows(rutinesNames),
        };
    }

    render () {
        return (
            <ListView {...this.getListViewProps()} />
        );
    }

    getListViewProps (rowData) {
        return {
            dataSource: this.state.dataSource,
            renderRow: this.renderRow.bind(rowData)
        };
    }

    renderRow (rowData) {
        return (
            <TouchableHighlight style={styles.row} onPress={() => console.warn('esto me tendria q mandar a la lista de ejercicios de esta rutina')} >
                <Text>
                    {rowData}
                </Text>
            </TouchableHighlight>
        );
    }
};

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        padding: 20
    }
});
