import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

export default function ItemSpec({uri, width, height}) {
    return (
      <TouchableOpacity style={{ 
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
          <View style={{
            width: '100%',
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EAEAEA'
          }}>
            <Text style={{}}>Quyên góp đến 15%</Text>

          </View>
      </TouchableOpacity>
    )
}
