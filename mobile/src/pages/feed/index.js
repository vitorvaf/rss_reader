import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native'

import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native'
import { getItems, countUnread } from '../../data/repository/itemRepository';

import styles from './styles';
import logo from '../../assets/icon.png';

export default function Feed() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    async function loadItems() {
        if (loading) {
            return false;
        }

        if (total > 0 && items.length === total) {
            return;
        }
        
        setLoading(true);
        
        var response = await getItems();

        if (response._array.length) {
            setItems([...items, ...response._array]);        
            var qtd = await countUnread();
            console.log(qtd);
            setTotal(response._array.length);            
        }

        setLoading(false);
    }

    function navigationToChannel() {
        navigation.navigate('Channel');
    };

    function navigationToItem(item) {
        navigation.navigate('Item', { item });
    }

    useEffect(() => {
        loadItems();
    }, []);

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigationToChannel() }}>
                    <Image style={styles.logo} source={logo} />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="search"></TextInput>
                <Text style={styles.headerText}>{total} unread</Text>
            </View>
            <FlatList
                style={styles.itemList}
                data={items}
                keyExtractor={item => String(item.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadItems}
                onEndReachedThreshold={0.2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigationToItem(item)}>
                        <View style={styles.itemList}>
                            <Text style={styles.title}>{item.title}</Text>
                            <HTML
                                html={item.description} />
                        </View>
                    </TouchableOpacity>
                )} />
        </View>

    );
}