import React, {Component} from 'react';
import {
    Text,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

class Button extends Component {
    render () {
        return (
            <View style={this.props.position}>
                <TouchableHighlight onPress={this.props.onPress}>
                    {this.renderButtonContent()}
                </TouchableHighlight>
            </View>
        );
    }

    renderButtonContent () {
        let type = this.props.type;
        let button = {
            add: {
                content: '+',
                style: {
                    fontSize: 50
                }
            },
            default: {
                content: this.props.text,
                style: {
                    fontSize: 20,
                    color: 'red'
                }
            }
        };

        return <Text style={this.props.textStyle || button[type].style}>{button[type].content}</Text>
    }
};

Button.defaultProps = {
    type: 'default'
}

module.exports = Button;
