import React, {Component} from 'react';
import { TouchableHighlight ,View, Text, StyleSheet, Image } from 'react-native';
//import img from './img/test.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});


export default class Row extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                    <Image style={styles.photo} />
                    <Text style={styles.text}>
                    {` ${this.props.name} \n ${this.props.email} \n ${this.props.phone} \n ${this.props.address}`}
                    </Text>
            </View>
        );
    }
}