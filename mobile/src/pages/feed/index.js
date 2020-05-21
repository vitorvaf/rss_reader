import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import HTML from 'react-native-render-html';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import logo from '../../assets/icon.png';

export default function Feed() {

    const navigation = useNavigation();

    function navigationToChannel() {
        navigation.navigate('Channel');
    };

    function navigationToItem(item) {
        navigation.navigate('Item', { item });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => { navigationToChannel() }}>
                    <Image style={styles.logo} source={logo} />
                </TouchableOpacity>
                <TextInput style={styles.input} placeholder="search"></TextInput>
                <Text style={styles.headerText}>15 unread</Text>
            </View>
            <ScrollView >
                <TouchableOpacity onPress={() => navigationToItem()}>
                    <View style={styles.itemList}>
                        <Text style={styles.title}>
                            Por que agentes que pesquisam o coronavírus estão sendo detidos
                        </Text>
                        <HTML
                            html='<img src=https://www.nexojornal.com.br/incoming/imagens/testes1/alternates/BASE_LANDSCAPE_SMALL/testes/> <p>Prefeitos barraram iniciativa financiada pelo Ministério da Saúde em cerca de 40 municípios por não terem sido informados sobre ela. Universidade que conduz estudo critica ‘burocracia’</p>' />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigationToItem()}>
                    <View style={styles.itemList}>
                        <Text style={styles.title}>
                            Como a pressão motivou o governo a adiar a prova do Enem
                 </Text>
                        <HTML
                            html={'<img src=https://www.nexojornal.com.br/incoming/imagens/Como-a-press%C3%A3o-do-Congresso-motivou-adiamento-do-Enem/alternates/BASE_LANDSCAPE_SMALL/Como%20a%20press%C3%A3o%20do%20Congresso%20motivou%20adiamento%20do%20Enem/> <p>Exame estava previsto para novembro, mas derrotas na Câmara e no Senado forçaram Ministério da Educação a mudar de posição</p>'}
                            imagesMaxWidth={Dimensions.get('window').width} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigationToItem()}>
                    <View style={styles.itemList}>
                        <Text style={styles.title}>
                            A cotação do dólar historicamente e durante a pandemia
                 </Text>
                        <HTML
                            html='<img src=https://www.nexojornal.com.br/incoming/imagens/Veja-em-gr%C3%A1ficos-a-cota%C3%A7%C3%A3o-do-d%C3%B3lar-historicamente-e-durante-a-pandemia/alternates/BASE_LANDSCAPE_SMALL/Veja%20em%20gr%C3%A1ficos%20a%20cota%C3%A7%C3%A3o%20do%20d%C3%B3lar%20historicamente%20e%20durante%20a%20pandemia/> <p>Em 14 de maio de 2020, moeda americana atingiu o maior valor desde 1994. Fechamento a R$ 5,94 representa um aumento de 48% desde o início do ano</p>' />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );
}