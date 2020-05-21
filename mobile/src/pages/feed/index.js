import React from 'react';
import { View, Text, Image, TextInput } from 'react-native'
import { WebView } from 'react-native-webview';

import styles from './styles';
import logo from '../../assets/icon.png';

export default function Feed() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <TextInput style={styles.input} placeholder="search"></TextInput>
                <Text style={styles.headerText}>15 unread</Text>
            </View>

            <View style={styles.itemList}>
                <Text style={styles.title}>
                    Por que agentes que pesquisam o coronavírus estão sendo detidos
                </Text>
                <WebView 
                    style = { styles.description }
                    containerStyle={ styles.content }                    
                    source={{ html: '<img src=https://www.nexojornal.com.br/incoming/imagens/testes1/alternates/BASE_LANDSCAPE_SMALL/testes/> <p>Prefeitos barraram iniciativa financiada pelo Ministério da Saúde em cerca de 40 municípios por não terem sido informados sobre ela. Universidade que conduz estudo critica ‘burocracia’</p>' }} />            
            </View>

            <View style={styles.itemList}>
                <Text style={styles.title}>
                    Por que agentes que pesquisam o coronavírus estão sendo detidos
                </Text>
                <WebView 
                    style = { styles.description }
                    containerStyle={ styles.content }                    
                    source={{ html: '<img src=https://www.nexojornal.com.br/incoming/imagens/testes1/alternates/BASE_LANDSCAPE_SMALL/testes/> <p>Prefeitos barraram iniciativa financiada pelo Ministério da Saúde em cerca de 40 municípios por não terem sido informados sobre ela. Universidade que conduz estudo critica ‘burocracia’</p>' }} />            
            </View>

            <View style={styles.itemList}>
                <Text style={styles.title}>
                    Por que agentes que pesquisam o coronavírus estão sendo detidos
                </Text>
                <WebView 
                    style = { styles.description }
                    containerStyle={ styles.content }                    
                    source={{ html: '<img src=https://www.nexojornal.com.br/incoming/imagens/testes1/alternates/BASE_LANDSCAPE_SMALL/testes/> <p>Prefeitos barraram iniciativa financiada pelo Ministério da Saúde em cerca de 40 municípios por não terem sido informados sobre ela. Universidade que conduz estudo critica ‘burocracia’</p>' }} />            
            </View>
        </View>
    );
}