import _ from 'lodash';
import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class RutinesListView extends Component {
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

    componentWillReceiveProps (nextProps) {
        var rutinesNames = _.map(nextProps.rutines, 'rutineName');

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

    renderRow (rowData, section1, index) {
        return (
            <TouchableHighlight style={(index % 2) ? styles.row : styles.secondaryRow} onPress={() => console.warn('esto me tendria q mandar a la lista de ejercicios de esta rutina')} >
                <Text>
                    {rowData}
                </Text>
            </TouchableHighlight>
        );
    }
};

RutinesListView.propTypes = {
    rutines: React.PropTypes.arrayOf(React.PropTypes.object)
};

const styles = StyleSheet.create({
    row: {
        padding: 20
    },
    secondaryRow: {
        padding: 20,
        backgroundColor: '#CEECF5'
    }
});

module.exports = RutinesListView;