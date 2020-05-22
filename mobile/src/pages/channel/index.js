import React from 'react';
import { View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logo from '../../assets/icon.png';
import styles from './styles';

export default function Channel() {
    const navigation = useNavigation();


    function navigationBack() {
        navigation.goBack();
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
                    placeholder="+ Add url"
                    style={styles.input}>
                </TextInput>
            </View>

            <View style={styles.channel}>
                <Image
                    source={{ uri: 'https://s3-sa-east-1.amazonaws.com/nexojornal/www/rss/logo.png' }}
                    style={styles.channelImage}>
                </Image>
                <Text style={styles.channelName}>Nexo Jornal</Text>
                <Text style={styles.channelDescription}>Informação clara e bem explicada você encontra aqui. Nexo, leitura obrigatória para quem quer entender o contexto das principais notícias do Brasil e do mundo.</Text>
            </View>


        </View>
    );
}