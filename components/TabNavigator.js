import React from 'react'
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { orange } from '../utils/colors'
import Decks from './Decks'
import NewDeck from './NewDeck'

const TabNavigator = createBottomTabNavigator(
    {
        Decks: {
            screen: Decks,
            navigationOptions:{
                tabBarLabel:'Decks',
                tabBarIcon:({ focused, horizontal, tintColor }) => {
                    return <Ionicons style={{ color: orange }} name={'logo-buffer'} size={25} />;
                }
            }         
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions:{
                tabBarLabel:'New',
                tabBarIcon:({ focused, horizontal, tintColor }) => {
                    return <Ionicons style={{ color: orange }} name={'md-add'} size={25} />;
                }
            }  
        }
    }    
)


export default TabNavigator;

