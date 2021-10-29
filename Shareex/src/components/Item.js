import React from 'react'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native'

export default function Item({uri, width, height}) {
    return (
      <View style={{ 
        width,
        height, 
        backgroundColor: 'white',
        marginRight: 8,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
      }} >
          <Image 
            style={{
                width: 80,
                height: 80,
                marginTop: 20
            }}
            source={{
              uri: uri,
            }}
            resizeMethod="scale"
            resizeMode="center"
            />
          <TouchableOpacity style={{
            width: '100%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EAEAEA'
          }}
            onPress={ ()=>{ Linking.openURL('https://shobee-source.vercel.app/')}}
          >
            <Text style={{}}>MUA NGAY</Text>
          </TouchableOpacity>
      </View>
    )
}
