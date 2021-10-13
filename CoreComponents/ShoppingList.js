import React from 'react';
import { Text,StyleSheet, TextInput,View, Touchable, TouchableOpacity, SafeAreaView,CheckBox } from 'react-native';

const ShoppingList = props => {
    return (
        <SafeAreaView style={styles.safearea}>
            <View style={styles.container}>
                <View style={styles.headercontainer}> 
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput placeholder="Yazmaya Başlayın.." style={styles.textInput}></TextInput>

                </View>
                {/* {Kutucuk} */}
                <View />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>EKLE</Text>
                </TouchableOpacity>
                
                <Text style={styles.govdeText}>Alınacaklar</Text>

                <View style={styles.row}>
                    <View style={styles.buttonSol}>
                        <TouchableOpacity style={styles.kutucuk}>
                        </TouchableOpacity>
                    </View>
                
                    <Text style={styles.urunText}>Ekmek</Text>
                    
                    <TouchableOpacity style={styles.butonSag}>
                        <Text style={styles.sagText}>Sil</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.row}>
                    <View style={styles.buttonSol}>
                        <TouchableOpacity style={styles.kutucuk}>
                        </TouchableOpacity>
                    </View>
                
                    <Text style={styles.urunText}>Süt</Text>

                    <TouchableOpacity style={styles.butonSag}>
                        <Text style={styles.sagText}>Sil</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <View style={styles.buttonSol}>
                        <TouchableOpacity style={styles.kutucuk}>
                        </TouchableOpacity>
                    </View>
                
                    <Text style={styles.urunText}>Elma</Text>
                    <TouchableOpacity style={styles.butonSag}>
                        <Text style={styles.sagText}>Sil</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    urunText:{
        fontSize:18,
        flexGrow:1

    },
    row:{
        flexDirection:'row',
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
        alignItems:'center'

    },
    sagText:{
        color:'white',
        fontWeight:'bold'

    },
    butonSag:{
        backgroundColor:'#F95A49',
        borderRadius:5,
        width:50,
        height:25,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonSol:{
        alignItems:'center',
        marginLeft:5,
        marginRight:5
        
    },
    kutucuk:{
        width:20,
        height:20,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:5,

    },
    govdeText:{
        color:'#E97632',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        

    },

    buttonText:{
        fontSize:24,
        color:'white',
        fontWeight:'bold'

    },
    headercontainer:{
        justifyContent:'center',
        alignItems:'center'

    },
    headerText:{
        padding:10,
        fontSize:24,
        fontWeight:'bold',
        color:'#E97632',
        
    },
    safearea:{


    },
    container:{

    },
    textInput:{
        width:370,
        height:50,
        padding:10,
        borderWidth:2,
        borderColor:'rgba(0,0,0,0.3)',
        borderRadius:10,
        margin:10

    },
    button:{
        width:370,
        height:50,
        backgroundColor:'#E97632',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        margin:10
    },

});

export default ShoppingList;
