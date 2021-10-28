import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { windowWidth, windowHeight } from '../constants';

export default function Donation() {
    const tempData = [
        {id: 1, imgUri: 'https://isuzu-vietnam.com/wp-content/uploads/2020/10/IMG_6923.jpeg', logoUri: 'https://alojob.vn/Img/Recruiter_Avatar/Lang-tre-em-SOS-Viet-Nam-2019-10-16-10-10-39.jpg', name: 'Làng trẻ em SOS', people: '100', times: '320'},
        {id: 2, imgUri: 'https://www.hoanmydanang.com/upload/hoanmydanang.com/Hinh%20anh/Tin%20tuc/Tin%20Hoan%20My/Lang%20hi%20vong/L%c3%a0ng%20Hy%20V%e1%bb%8dng%20TP%20%c4%90%c3%a0%20N%e1%ba%b5ng%20(7).JPG', logoUri: 'https://i.ytimg.com/vi/LfUEhNJxnIs/maxresdefault.jpg', name: 'Làng Hy Vọng', people: '120', times: '150'},
        {id: 3, imgUri: 'https://nld.mediacdn.vn/2016/tincd-dao-1480774815358.jpg', logoUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbr--X4Cb30Ef9billRU7cTDz8hGFE_BCizipUuyOfLTad5ycmoYXtj8q1auGld9tYc4s&usqp=CAU', name: 'Hội người Khuyết tật', people: '173', times: '230'},
    ]

    return (
        <ScrollView style={{ width: windowWidth, height: windowHeight}}>
            <View style={{alignItems: 'center'}}>
                <View style={{
                    width: windowWidth - 16,
                    marginTop: 24,
                }}>
                    <Text style={{
                        fontSize: 18,
                        lineHeight: 28
                    }}>Bạn đang quyên góp</Text>
                    <Image 
                        source={{ uri: "https://vnanet.vn/Data/Articles/2020/11/22/5145923/vna_potal_ky_niem_74_nam_ngay_thanh_lap_hoi_chu_thap_do_viet_nam_23111946_%E2%80%93_23112020_to_chuc_hoi_co_hoat_dong_thuc_tien_va_co_xat_trong_moi_hoan_stand.jpg" }}
                        style={{
                            marginTop: 8,
                            width: '100%',
                            height: 108,
                            borderRadius: 10
                        }}
                        />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                        <Image 
                            style={{ width: 36, height: 36, borderRadius: 10}}
                            source={{ uri: 'https://inbienquangcao.vn/wp-content/uploads/2021/01/Logo-ho%CC%A3%CC%82i-chu%CC%9B%CC%83-tha%CC%A3%CC%82p-%C4%91o%CC%89-vector.jpg' }} />
                        <View style={{ display: 'flex', justifyContent: 'center'}}>
                            <Text style={styles.place}>Hội Chữ Thập Đỏ</Text>
                            <Text style={styles.count}>200 người quyên góp - 400 lượt quyên góp</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    width: windowWidth - 16,
                    marginTop: 24,
                }}>
                    <Text style={{
                        fontSize: 18,
                        lineHeight: 28
                    }}>Tổ chức Xã hội</Text>
                    {tempData.map(item => (
                        <View key={item.id} style={{ marginBottom: 20}}>
                            <Image 
                                source={{ uri: item.imgUri }}
                                style={{
                                    marginTop: 8,
                                    width: '100%',
                                    height: 108,
                                    borderRadius: 10
                                }}
                                />
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                                <Image 
                                    style={{ width: 36, height: 36, borderRadius: 10}}
                                    source={{ uri: item.logoUri }} />
                                <View style={{ display: 'flex', justifyContent: 'center'}}>
                                    <Text style={styles.place}>{item.name}</Text>
                                    <Text style={styles.count}>{item.people} người quyên góp - {item.times} lượt quyên góp</Text>
                                </View>
                            </View>
                        </View>
                    ))}

                    
                </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		// alignItems: 'center',
	},
	listView: {
		width: windowWidth - 16,
		borderRadius: 10,
		marginTop: 24
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
    count: { 
        fontSize: 10, 
        lineHeight: 19, 
        color: '#C4C4C4', 
        fontStyle: 'normal', 
        marginLeft: 10 
    }
});
