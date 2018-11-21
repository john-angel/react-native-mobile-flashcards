import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Deck extends Component{
   
    render(){
        const id = this.props.navigation.getParam('id', '0')
        return(
            <View>
                <Text>{id}</Text>
                <Text># cards</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz')}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NewQuestion')}>
                    <Text>Add question</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

export default Deck;