import React, {useEffect, useMemo, useState} from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../../config/colors';
import Axios from 'axios';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PokemonInterface from '../../components/Commons/PokemonInterface';
import Loading from '../../components/Commons/Loading';


const styles = StyleSheet.create({
  container: {backgroundColor: '#2c3e50', flex: 1,alignItems:'center',},
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
  },

});

const Pokemon = ({
  navigation,
  route: {
    params: {name, uri},
  },
}) => {

    console.log(name);
  const [currentData, updateCurrentData] = useState([]);
  const [isLoading, updateIsLoading] = useState(false);
  const {top} = useSafeAreaInsets();
  

  const fetchData = async (uri) => {
    updateIsLoading(true);
    try {
        const {status, data} = await Axios.get(uri);
      

      if (status === 200) {
         //updateCurrentData(data);
          
          updateCurrentData(data);
         //console.log(data.back_default);
        }
    } catch (error) {
         alert(error);
        //console.log({error});
        updateCurrentData([]);
    }

    updateIsLoading(false);
  };

   useEffect(() => {
     fetchData(uri);
  }, [uri]);

   const [
     uri_pokemon,
     name_pokemon,
     
   ] = useMemo(() => {
        
        
        if(currentData?.sprites){
            return [currentData.sprites,name]
        } 
    return [    
       
        null,''
     ];
   }, [currentData])
  return (
      <Loading isLoading={isLoading} color={colors.white}>

            <View style={[styles.container, {paddingTop: top}]}>
                 <PokemonInterface uri={uri_pokemon} nombre={name_pokemon}></PokemonInterface>
            </View>


      </Loading>
    
  );
};

export default Pokemon;
