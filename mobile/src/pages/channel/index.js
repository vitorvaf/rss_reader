import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import channelModel from '../../models/channelModel';
import itemModel from '../../models/itemModel';
import utils from '../../utils/utils';
import { create, getChannels, getByName } from '../../data/repository/channelRepository';
import { createItem, getItems } from '../../data/repository/itemRepository';

export default function Channel() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    const [channel, setChannel] = useState({
        channel: {
            title: '',
            description: '',
            image: {
                uri: ''
            }
        }
    });



    function navigationBack() {
        navigation.navigate('Feed');
    }

    async function searchChannel(url) {
        var Channel = {};
        fetch(url)
            .then(response => response.text())
            .then(async (data) => {
                Channel = await utils.parserXmlToJson(data);
                try {
                    var newChannel = new channelModel(
                        Channel.channel.title,
                        Channel.channel.link,
                        Channel.channel.description,
                        Channel.channel.content,
                        Channel.channel.image.url);

                    var channel_id = await create(newChannel);

                    Channel.channel.item.map(async (item) => {                        
                        let obj = new itemModel(
                            item.title,
                            item.creator,
                            item.link,
                            item.pubdate,
                            item.description,
                            item.content,
                            channel_id,
                            false,
                            false
                        );
                        let id = await createItem(obj);
                        return id;
                    });

                } catch (error) {
                    console.log(error)
                }
                setChannel(Channel);

            }).catch((err) => {
                console.log('fetch', err);
            });
    }    


    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigationBack() }}>
                    <Feather name="arrow-left" size={25} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={styles.form}>
                <TextInput
                    placeholder=" Add url"
                    style={styles.input}
                    onChangeText={text => setText(text)}
                    defaultValue={text}>

                </TextInput>
                <TouchableOpacity
                    style={styles.plus}
                    onPress={() => { searchChannel(text) }}>
                    <Feather name="plus" size={25} color="#000" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => addChannel()}>
                <View style={styles.channel}>
                    <Image
                        source={{ uri: channel.channel.image.url }}
                        style={styles.channelImage}>
                    </Image>
                    <Text style={styles.channelName}> {channel.channel.title} </Text>
                    <Text style={styles.channelDescription}>{channel.channel.description}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}