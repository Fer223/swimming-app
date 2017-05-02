import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Picker,
    StyleSheet
} from 'react-native';

import Button from '../components-core/Button.js';

class UpdateTimeRecordsForm extends Component {
    constructor () {
        super();

        this.state = {
            nombre: 'nombre',
            metros: '',
            estilo: 'Croll',
            tiempo: '00:00'
        };
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput {...this.getNameInputProps()} />
                <View style={styles.mts}>
                    <TextInput {...this.getMetersInputProps()} />
                    <Text>mts</Text>
                </View>
                {this.renderStylePicker()}
                {this.renderSelectTimeBlock()}
            </View>
        );
    }

    renderStylePicker () {
        return (
            <Picker
            selectedValue={this.state.estilo}
            onValueChange={(estilo) => this.setState({estilo: estilo})}>
            <Picker.Item label="Croll" value="Croll" />
            <Picker.Item label="Espalda" value="Espalda" />
            <Picker.Item label="Pecho" value="Pecho" />
            <Picker.Item label="Mariposa" value="Mariposa" />
            </Picker>
        );
    }

    renderSelectTimeBlock () {
        return (
            <View>
                <TextInput defaultValut={this.props.timeResults} />
                <Button text='ir a cronometro' onPress={this.onIrCronometroPress.bind(this)}/>
            </View>
        );
    }

    onIrCronometroPress () {
        this.props.navigator.push({
            id: 'Cronometro'
        });
    }

    getNameInputProps () {
        return {
            onChangeText: (nombre) => this.setState({nombre: nombre}),
            value: this.state.nombre
        };
    }

    getMetersInputProps () {
        return {
            keyboardType: 'numeric',
            onChangeText: (mts)=> this.setState({metros: mts}),
            value: this.state.metros
        };
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0080FF',
        padding: 30
    }
});

module.exports = UpdateTimeRecordsForm;
