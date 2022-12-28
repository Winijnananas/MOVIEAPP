import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
//import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function InfomovieScreen({ navigation, route: { params: { item } } }) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Detail ♥</Text> */}
                <Image source={{ uri: item.bigurl }} style={styles.poster} resizeMode="cover" />
                <View style={styles.containDetail}>
                    <View style={styles.containTitle}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop:5,flexDirection: "row",shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 1, }}>{item.title}</Text>

                        <View style={{
                            width: 50, height: 48, backgroundColor: "#474747", borderRadius: 25, justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, marginTop: 8, fontWeight: 'bold',color:'#fff' }}>{item.rate}</Text>
                        </View>
                    </View>
                    <View style={styles.containDetailtwo}>
                    <Text style={{color:"#4d4b4b",fontWeight:'bold'}}>YEAR : {item.year}</Text>
                    <Text style={{color:"#4d4b4b",fontWeight:'500'}}>Time : {item.time}</Text>
                </View>
                </View>
                
                
                <View style={styles.containTitle}>
                <Text style={[styles[item.type], styles.type]}>{item.type}</Text>
               
               
                
                </View>
                
            

                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Overview 🗒️</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'center' }}>{item.desc}</Text>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labeltile}>Trailer 🎞️</Text>
                </View>
                <View style={styles.containDetail}>
                    
                    <YoutubePlayer
                    height={220}
                    play={false}
                    videoId={item.idyt}
                    />
                    
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Producer 🎥</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'left' }}>{item.produce}</Text>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Actor 🎭</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'left' }}>{item.nameactor.join(" , ")}</Text>
                </View>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 5 }}
                    onPress={() => navigation.navigate('App')}
                >
                    <Text style={{
                        backgroundColor: "#BF1700", padding: 10, fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', width: "100%", borderRadius: 0, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 5,
                        shadowRadius: 4.65,
                    }}>Back to Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF',
    },
    poster: {
        width: "100%",
        height: 281,
        justifyContent: "flex-start",
        backgroundColor: "red",

    },
    labeltile: {
        fontSize: 20, fontWeight: 'bold'
    },
    labelOverview: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'

    },
    containDetail: {
        padding:4,
        flex: 1,
    },
    containDetailtwo: {
        padding:4,
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    containTitle: {
        flexWrap: "wrap",
        padding: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Action: {
        backgroundColor: '#ff4000',
        width: "20%", textAlign: 'center', borderRadius: 0, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Funny: {
        backgroundColor: '#33ff33',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    ActionAdventure: {
        backgroundColor: '#ff751a',
        width: "35%", textAlign: 'center', borderRadius: 10, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Fantasy: {
        backgroundColor: '#c653c6',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    Comedy:{
        backgroundColor: '#ffcc99',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    War:{
        backgroundColor: '#ff6633',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Romance:{
        backgroundColor: '#ff3385',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Horror:{
        backgroundColor: '#6b6b47',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Animation:{
        backgroundColor: '#ccff99',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },


});