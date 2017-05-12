import React, {Component} from 'react';
import {
    AsyncStorage,
    View,
    Text,
    TextInput,
    Picker,
    StyleSheet
} from 'react-native';

import _ from 'lodash';
import Button from '../components-core/Button.js';
import firebaseHandler from '../components-core/firebase-handler.js';

class UpdateTimeRecordsForm extends Component {
    constructor () {
        super();

        this.state = {
            nombre: 'nombre',
            metros: '',
            estilo: 'Croll',
            tiempo: '00:00',
            userId: ''
        };
    }

    componentWillMount () {
        AsyncStorage.getItem('userId', (err, res) => {this.setState({userId: res})});
    }

    render () {
        let state = this.state;
        let formData = {
            nombre: state.nombre,
            metros: state.metros,
            estilo: state.estilo,
            tiempo: state.tiempo
        };

        return (
            <View style={styles.container}>
                <TextInput {...this.getNameInputProps()} />
                <View style={styles.mts}>
                    <TextInput {...this.getMetersInputProps()} />
                    <Text>mts</Text>
                </View>
                {this.renderStylePicker()}
                {this.renderSelectTimeBlock()}
                <Button text='Guardar' onPress={this.handleGuardarOnPress.bind(this, formData)} />
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
                <TextInput
                    onChangeText={(tiempo) => this.setState({tiempo: tiempo})}
                    value={this.state.tiempo}
                />
                <Button text='ir a cronometro' onPress={this.onIrCronometroPress.bind(this)}/>
            </View>
        );
    }

    handleGuardarOnPress (formData) {
        firebaseHandler.pushNewRecord(this.getTimeArray(formData), this.state.userId);
        this.props.callback();
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

    getTimeArray (formData) {
        var timeArray = _.cloneDeep(this.props.tiempos);

        timeArray.push(formData);

        return timeArray;
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0080FF',
        padding: 30
    }
});

module.exports = UpdateTimeRecordsForm;
