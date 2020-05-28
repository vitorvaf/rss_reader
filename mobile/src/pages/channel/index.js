import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import axios from 'axios';
import utils from '../../utils/utils';

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
        navigation.goBack();
    }

    async function searchChannel(url) {
        var Channel = {};
        fetch(url)
            .then(response => response.text())
            .then(async (response) => {
                Channel = await utils.parserXmlToJson(response);
                setChannel(Channel);
                console.log(channel.channel.title);
            }).catch((err) => {
                if (!err)
                    console.log('fetch', err);
            });
    }

    async function addChannel(){

        

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
            onPress= {() => addChannel()}>
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