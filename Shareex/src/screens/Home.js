import React from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import Carousel from 'react-native-banner-carousel-updated';
import Item from '../components/Item';
import ItemBrand from '../components/ItemBrand';
import ItemSpec from '../components/ItemSpec';
import { windowWidth, windowHeight } from '../constants';


const images = [
    "https://jeju.com.vn/wp-content/uploads/2018/01/banner-1600x450.jpg",
    "https://forum.uan.vn/uploads/default/original/2X/2/2433a948af3135ee485cc7bad847fce30910fefb.jpeg",
    "https://lienquan.garena.vn/files/upload/images/LyLy/CLEARMen_IngameBanner-iPhone-real.jpg"
];
  

export default function Home() {
    const tempDataRecently = [
		{id: 1, imgUri: 'https://cf.shopee.vn/file/9f0ff389d13a27c003799880238e45a3', percent: 15},
		{id: 2, imgUri: 'https://images.careerbuilder.vn/employer_folders/lot2/256052/134939bioderma.jpg', percent: 15},
		{id: 3, imgUri: 'https://jeju.com.vn/wp-content/uploads/2015/06/3ce-logo.jpg', percent: 15},
		{id: 4, imgUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg', percent: 15},
		{id: 5, imgUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg', percent: 15}
	]

    const tempDataPopular = [
		{id: 1, imgUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZk3ZMcaa20LDlaTwbM7rz1fc6rZtE9PKFhV7CuR9ckRPIqYuO0ah9-Rt2q5NXIcm2NA&usqp=CAU', percent: 15},
		{id: 2, imgUri: 'https://www.fastretailing.com/employment/images/sns/logo_uniqlo.gif', percent: 20},
		{id: 3, imgUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg', percent: 15},
		{id: 4, imgUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg', percent: 15},
		{id: 5, imgUri: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg', percent: 15}
	]

    const tempDataShopee = [
		{id: 1, imgUri: 'http://file.hstatic.net/200000076361/collection/cuckoo-logo_f957f6eea4f04b8b8b12ab935f284c2d.jpg', percent: 15},
		{id: 2, imgUri: 'data:image/png;base64,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', percent: 15},
		{id: 3, imgUri: 'http://azpro512.com/wp-content/uploads/2017/05/logo-Clear.jpg', percent: 15},
	]

    const tempDataLazada = [
		{id: 1, imgUri: 'https://1000logos.net/wp-content/uploads/2019/06/MAC-Logo.png', percent: 30},
		{id: 2, imgUri: 'https://images.careerbuilder.vn/employer_folders/lot2/256052/134939bioderma.jpg', percent: 15},
		{id: 3, imgUri: 'https://amis.misa.vn/wp-content/uploads/2021/08/apple-logo.jpg', percent: 15},
		{id: 4, imgUri: 'https://i.ytimg.com/vi/uau1MWvXDyU/hqdefault.jpg', percent: 20,}
	]

    const renderPage = (image, index) => {
        return (
            <View key={index}>
                <Image style={{ width: windowWidth, height: '100%' }} source={{ uri: image }} />
            </View>
        );
    }

    return (
        <ScrollView 
        style={{ width: windowWidth, height: windowHeight }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
			<View style={styles.container}>
				<StatusBar hidden />
				<View style={{ 
					width: windowWidth - 16,
					height: 141,
					borderRadius: 10,
					marginTop: 8,
					overflow: 'hidden'
				}}>
					<Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={windowWidth}
                        useNativeDriver={true}
                    >
                        {images.map((image, index) => renderPage(image, index))}
                    </Carousel>

				</View>
					<View style={styles.listView}>
					<Text style={styles.title}>Xem gần đây</Text>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={tempDataRecently}
						renderItem={({ item }) => <Item uri={item.imgUri} width={138} height={149} />}
						keyExtractor={item => item.id}
					/>
				</View>


				<View style={styles.listView}>
					<Text style={styles.title}>Thương hiệu phổ biến</Text>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={tempDataPopular}
						renderItem={({ item }) => <ItemSpec uri={item.imgUri} width={284} height={149}/>}
						keyExtractor={item => item.id}
					/>
				</View>

				<View style={styles.listView}>
					<Text style={styles.title}>Shopee</Text>
					<FlatList
						horizontal
						showsHorizontalScrollIndicator={false}
						data={tempDataShopee}
						renderItem={({ item }) => <ItemBrand uri={item.imgUri} width={138} height={149} percent={item.percent}/>}
						keyExtractor={item => item.id}
					/>
					
				</View>

				<View style={styles.listView}>
					<Text style={styles.title}>Lazada</Text>
					<FlatList
						key={'#'}
						horizontal
						data={tempDataLazada}
						showsHorizontalScrollIndicator={false}
						scrollb
						renderItem={({ item }) => <ItemBrand uri={item.imgUri} width={138} height={149} percent={15}/>}
						keyExtractor={item => item.id}
					/>
				</View>
				<View style={{height: 40}}></View>
			</View>
        </ScrollView>
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
		marginTop: 24
	},
	title: {
		lineHeight: 19,
		fontSize: 18,
		marginLeft: 24,
	}
});
