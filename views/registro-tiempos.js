import React from 'react';
import {
    AsyncStorage,
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
import TimesListView from '../components-core/times-list-view.js';

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
        AsyncStorage.getItem('userId', (err, res) => {
            firebaseHandler.retrieveTimeRecordsData(res)
                .then((data) => this.setState({tiempos: data}))
                .catch(() => this.setState({tiempos: []}))
        });
    }

    componentWillUpdate (nextProps, nextState){
        AsyncStorage.getItem('userId', (err, res) => {
            firebaseHandler.retrieveTimeRecordsData(res)
                .then((data) => this.setState({tiempos: data}))
                .catch(() => this.setState({tiempos: []}))
        });
    }

    render () {

        return (
            <View>
                <View style={this.state.menuOpen ? styles.menuContainer : styles.menuContainerHide}>
                    <UpdateTimeRecordsForm  {...this.getUpdateTimeRecordsFormProps()}  />
                    <View style={{backgroundColor: '#0080FF', padding: 15}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Registro de tiempos</Text>
                    </View>
                </View>
                {this.loadAndRender()}
                <Button position={styles.button} type='add' onPress={this.onAddButtonPress.bind(this)} />
            </View>
        );
    }

    loadAndRender () {
        let element;

        if (this.state.tiempos) {
            element = <TimesListView tiempos={this.state.tiempos} />;
        } else {
            element = <Text>Cargando...</Text>;
        }

        return element
    }

    renderAddRecordBar () {
        return(
            <View>
                {this.renderStylePicker()}
            </View>
        );
    }

    getUpdateTimeRecordsFormProps () {
        return {
            navigator: this.props.navigator,
            tiempos: this.state.tiempos,
            callback: this.updateTimeRecordsFormCallback.bind(this)
        };
    }

    onAddButtonPress () {
        this.setState({
            menuOpen: (!this.state.menuOpen)
        });
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    }

    updateTimeRecordsFormCallback () {
        this.setState({menuOpen: !this.state.menuOpen})
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
