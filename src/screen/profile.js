import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUserInformation } from '../context/User';
import  PhotoCom  from '../components/Commons/Photo/PhotoCom';
import TextInput from '../components/Commons/TextInput';
import colors from '../config/colors';
import { useAuthState } from '../context/AuthUserContext';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
const profile = ({navigation, route}) => {
    AntDesignIcon.loadFont();
  const { photo,name,updateName,email,updateEmail,telefono,updateTelefono } = useUserInformation();
  
  const { logout } = useAuthState();
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
            
        </View>

        <View style={{ alignSelf: "center" }}>
            <PhotoCom uri={photo} />
           
           
            <View style={styles.add}>
                <TouchableOpacity
                onPress={() => navigation.navigate('camera')}> 
                  <AntDesignIcon name="arrowright" color={colors.white} size={60} />   
                </TouchableOpacity>
            </View>
        </View>

        {/* <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>Julie</Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Photographer</Text>
        </View>

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
        </View> */}



              <TextInput
                   value={name}
                   placeholder="Escribe tu nombre"
                   labelTag="Nombre"
                   onChange={(text) => updateName(text)}
               />
              <TextInput
                     value={email}
                     placeholder="Escribe tu correo"
                     labelTag="Correo"
                     onChange={(text) => updateEmail(text)}
              />

                <TextInput
                     value={telefono}
                     placeholder="Escribe tu Telefono"
                     labelTag="Telefono"
                     onChange={(text) => updateTelefono(text)}
              />            

              



            <View style={ styles.containerLogout }>

             <TouchableOpacity style={styles.btnLogout} onPress={ () => logout() } >

                    <Text style={styles.textLogout} > Cerrar Sesion </Text>

             </TouchableOpacity>

            </View>
             


        
 
    </ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
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
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    btnLogout:{
         marginTop: 40,
         backgroundColor: 'red',
         color:colors.white,
         width:150,
         height:40,
         borderRadius:20,
         textAlignVertical:'center',
         textAlign:'center',
        
    },
    containerLogout:{
         alignItems:'center',
         margin:5,
         textAlign:'center'
    },
    textLogout:{
        color:colors.white,
        textAlign:'center',
        textAlignVertical:'center',
        marginTop:10,
    }
});

export default profile;