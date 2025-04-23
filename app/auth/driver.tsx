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
    <Text style={{
          fontSize: 24,
          paddingHorizontal: 25,
          paddingVertical: 18
        }}>
        Vamos realizar seu cadastro, só precisamos apenas de algumas informações</Text>
    <View style={{paddingHorizontal: 25}}>
      <Text style={{
        fontSize: 22,
        fontWeight: 'bold' ,
        marginBottom: 16
      }}
      >Informações pessoais</Text>
      <Text style={{ fontSize: 18}}>Nome completo</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Email</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Telefone/Whatsapp</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Senha</Text>
      <TextInput/>
    </View>
    <View style={{paddingHorizontal: 25, paddingVertical: 18}}>
    <Text style={{
        fontSize: 22,
        fontWeight: 'bold' ,
        marginBottom: 16
      }}
    >Informações so Veículo</Text>
      <Text style={{ fontSize: 18}}>Marca</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Modelo</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Ano</Text>
      <TextInput/>
      <Text style={{ fontSize: 18}}>Placa</Text>
      <TextInput/>
    </View>
    </>

  )
}

export default driver