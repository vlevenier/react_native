import React from 'react';
import { View,StyleSheet,Image,Text } from 'react-native';



const PokemonInterface = ( {uri = null,nombre} ) => {
  
    
    const imagen_pokemon = !uri ? ( 
        <View style={styles.profileImage}>
            <Text> Cargando </Text>
        </View>
     ) : (
        <View style={styles.profileImage}>
            <Image source={{uri:uri.front_default}} style={styles.image} resizeMode="contain"></Image>
        </View>     

     );

return(
         <View>
                     {imagen_pokemon}
                      <View style={ styles.poke_description }> 

                         <Text style={ styles.poke_title }>{nombre}</Text>

                     </View>
                     <View>
                     <View style={styles.statsContainer}>
                             <View style={styles.statsBox}>
                                 <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                                 <Text style={[styles.text, styles.subText]}>Posts</Text>
                             </View>
                             <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                 <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                                 <Text style={[styles.text, styles.subText]}>Followers</Text>
                             </View>
                             <View style={styles.statsBox}>
                                 <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                                 <Text style={[styles.text, styles.subText]}>Following</Text>
                             </View>
                     </View>
                     </View>
        </View>

        

   
);




};

const styles = StyleSheet.create({
    profileImage: {
        width: 300,
        height: 300,
        
        alignItems:'center',
        borderRadius: 50,
        overflow: "hidden",
        textAlign:'center',
        borderColor:'black',
        backgroundColor: 'white',
        borderWidth:5,
        justifyContent: "space-between",
        marginTop:50,
    
    },
    image: {
        flex: 1,
        
        height: 300,
        width: 300,
      
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    poke_description:{
        marginTop:40
     },
    poke_title:{
         textAlign:'center',
         fontSize:45,
         fontWeight:'bold',
         color:'white'
         
    }


});
export default PokemonInterface;