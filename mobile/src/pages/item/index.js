import React from 'react';
import { View, TouchableOpacity, Dimensions, Text } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

import { readItem } from '../../data/repository/itemRepository';



export default function Item() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;

    async function navigationBack() {
        await readItem(item.id);
        navigation.navigate('Feed');
    };

    function likedItem() {

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigationBack() }}>
                    <Feather name="arrow-left" size={25} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { likedItem() }}>
                    <Feather name="heart" size={25} color="#000" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{item.title} </Text>
                    <Text style={styles.itemAuthor}>{item.creator}</Text>
                    <Text style={styles.itemPublishDate}>{item.pubDate}</Text>
                    <HTML html={item.description}
                        imagesMaxWidth={Dimensions.get('window').width} />
                    <HTML
                        html={item.content} imagesMaxWidth={Dimensions.get('window').width} />
                </View>
            </ScrollView>
        </View>
    );
}