import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const driver = () => {
  return (
    <>
    <View style={{

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
    <Text>Vamos realizar seu cadastro, só precisamos apenas de algumas informações</Text>
    <View>
      <Text>Informações pessoais</Text>
      <Text>Nome completo</Text>
      <TextInput/>
    </View>
    </>

  )
}

export default driver