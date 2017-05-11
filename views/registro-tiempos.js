import React from 'react';
import {
    Picker,
    LayoutAnimation,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    UIManager
} from 'react-native';

import ViewApp from '../components-ui/view-app.js';
import UpdateTimeRecordsForm from '../components-ui/update-time-records-form.js';
import Button from '../components-core/Button.js';
import firebaseHandler from '../components-core/firebase-handler.js';

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class RegistroTiempos extends ViewApp {
    constructor () {
        super();
        this.state = {
            menuOpen: false,
            tiempos: []
        };
    }

    componentWillMount () {
        firebaseHandler.retrieveTimeRecordsData()
            .then((data) => this.setState({tiempos: data}));
    }

    render () {
        return (
            <View>
                <View style={this.state.menuOpen ? styles.menuContainer : styles.menuContainerHide}>
                    <UpdateTimeRecordsForm  navigator={this.props.navigator} tiempos={this.state.tiempos} />
                    <View style={{backgroundColor: '#0080FF', padding: 15}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Registro de tiempos</Text>
                    </View>
                </View>
                <Button position={styles.button} type='add' onPress={this.onAddButtonPress.bind(this)} />
            </View>
        );
    }

    renderAddRecordBar () {
        return(
            <View>
                {this.renderStylePicker()}
            </View>
        );
    }

    onAddButtonPress () {
        this.setState({
            menuOpen: (!this.state.menuOpen)
        });
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }
};

let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    menuContainer: {
        width: width
    },
    menuContainerHide: {
        height: height,
        width: width,
        position: 'absolute',
        top: -320
    },
    button: {
        position: 'absolute',
        right: width*1/8,
        top: height - 100
    }
});

module.exports = RegistroTiempos;
