import React from 'react';
import { View, TouchableOpacity,Dimensions, Text } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HTML from 'react-native-render-html';



export default function Item() {
    const navigation = useNavigation();

    function navigationBack() {
        navigation.goBack();
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

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Como a pandemia impulsiona a fortuna de Jeff Bezos</Text>
                <Text style={styles.itemAuthor}>autor</Text>
                <Text style={styles.itemPublishDate}>22/05/2018</Text>
                <HTML html='<img src=https://www.nexojornal.com.br/incoming/imagens/Jeff_Bezos/alternates/BASE_LANDSCAPE_SMALL/Jeff_Bezos/> <p>Patrimônio do bilionário americano cresce com aumento do valor de mercado da Amazon. Empresa expande atividades em meio a denúncias trabalhistas e acusações de práticas de concentração de mercado</p>'
                    imagesMaxWidth={Dimensions.get('window').width} />

            </View>
        </View>
    );
}