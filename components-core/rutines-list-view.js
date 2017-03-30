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
            dataSource: this.ds.cloneWithRows(rutinesNames)
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

    getListViewProps () {
        return {
            dataSource: this.state.dataSource,
            renderRow: this.renderRow.bind(this)
        };
    }

    renderRow (rowData, section1, index) {
        return (
            <TouchableHighlight {...this.getRowProps(index)} >
                <Text>
                    {rowData}
                </Text>
            </TouchableHighlight>
        );
    }

    getRowProps (index) {
        return {
            style: (index % 2) ? styles.row : styles.secondaryRow,
            onPress: this.props.handleRoutinePress.bind(this, this.props.rutines[index].rutineContent)
        };
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