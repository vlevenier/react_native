import React from 'react';
import {View, StyleSheet, Image} from 'react-native';


const PhotoCom = ( {uri = null} ) => 
{    

    const return_photo = !uri ? ( 
        <View style={styles.profileImage}>
            <Image source={require("../../../img/profile-pic.jpg")} style={styles.image} resizeMode="center"></Image>
        </View>
     ) : (
        <View style={styles.profileImage}>
            <Image source={{uri:uri}} style={styles.image} resizeMode="center"></Image>
        </View>     

     );

return(
    <View>

        {return_photo}

    </View>
   
);
                
}
export default PhotoCom;


const styles = StyleSheet.create({
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },


});