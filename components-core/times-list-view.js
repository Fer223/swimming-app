import _ from 'lodash';
import React, { Component } from 'react';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

class TimesListView extends Component {
    constructor () {
        super();

        this.ds = new ListView.DataSource({rowHasChanged: function(r1, r2) { return  r1 !== r2; }});
    }

    componentWillMount () {
        this.setState({
            dataSource: this.ds.cloneWithRows(this.props.tiempos)
        });
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            dataSource: this.ds.cloneWithRows(nextProps.tiempos),
        });
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
        var row = null;

        if(index > 0) {
            row = (
                <View style={(index % 2) ? styles.row : styles.secondaryRow}>
                    <Text>
                        {rowData.estilo}
                    </Text>
                    <Text>
                        {rowData.metros}
                    </Text>
                    <Text>
                        {rowData.nombre}
                    </Text>
                    <Text>
                        {rowData.tiempo}
                    </Text>
                </View>
            );
        }

        return row;
    }
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

module.exports = TimesListView;
