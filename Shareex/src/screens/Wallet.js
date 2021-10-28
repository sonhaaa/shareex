import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { windowWidth, windowHeight } from '../constants';

export default function Wallet() {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                marginTop: 48,
                alignItems: 'flex-end'
            }}>
                <Text style={{ fontSize: 60, lineHeight: 70 }}>20</Text>
                <Text style={{ fontSize: 20, lineHeight: 23, marginBottom: 8, marginLeft: 8 }}>SHAX</Text>
            </View>
            <Text style={{ marginTop: 8, color: '#C4C4C4' }}>20 lượt quyên góp</Text>
            <Text style={{ marginTop: 8, color: '#C4C4C4' }}>5 Tổ chức đang quyên góp</Text>
            

            <View style={styles.listView}>
                <Text style={styles.title}>Quy đổi</Text>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text style={{ marginLeft: 20, color: "#757DB6" }}>Quy đổi thành tiền mặt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text style={{ marginLeft: 20, color: "#757DB6" }}>Quy đổi thành đồng tiền ảo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text style={{ marginLeft: 20, color: "#757DB6" }}>Đổi Voucher</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemContainer}>
                    <Text style={{ marginLeft: 20, color: "#757DB6" }}>Tặng bạn bè</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	listView: {
		width: windowWidth - 16,
		borderRadius: 10,
		marginTop: 24,
        justifyContent: 'center',
	},
	title: {
		lineHeight: 19,
		fontSize: 18,
		marginLeft: 24,
	},
    place: {
        fontSize: 16, 
        lineHeight: 19, 
        color: 'black', 
        fontStyle: 'normal', 
        marginLeft: 10
    },
    itemContainer: { 
        width: windowWidth - 16, 
        height: 50, 
        borderRadius: 10, 
        overflow: 'hidden', 
        backgroundColor: '#CDD1F1', 
        marginTop: 8, 
        justifyContent: 'center' }
});
