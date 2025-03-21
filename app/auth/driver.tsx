import { View, Text } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const driver = () => {
  return (
    <>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-start ',
      alignItems: 'center',
      backgroundColor: '#0000' ,
      height: 86
    }}>
      <MaterialIcons name='arrow-back' color={'#fff'} size={24}/>
      <Text
      style={{
        marginLeft: 16,
      color: '#FFF',
      fontSize: 22,
      }}>
        </Text>
        <Text>Cadastro de novo motorista</Text>
    </View>
    <Text>Driver</Text>
    </>

  )
}

export default driver