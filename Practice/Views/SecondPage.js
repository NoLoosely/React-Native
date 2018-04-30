import React from 'react';
import { StyleSheet, 
  Text,
  View,
    ScrollView,
      Image,

} from 'react-native';



export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.titleContainer}>
      <Text style={styles.title}>Tiger</Text>
      <View style={styles.image_text}>
        <Image style={styles.image} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Royal_Bengal_Tiger_at_Kanha_National_Park.jpg/220px-Royal_Bengal_Tiger_at_Kanha_National_Park.jpg"}} />
      </View>
      </View>

      <ScrollView>

      <Text style={styles.content}>
      The tiger (Panthera tigris) is the largest cat species, most recognizable for its pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. It is an apex predator, primarily preying on ungulates such as deer and bovids. It is territorial and generally a solitary but social predator, often requiring large contiguous areas of habitat that support its prey requirements. This, coupled with the fact that it is indigenous to some of the more densely populated places on Earth, has caused significant conflicts with humans.
      </Text>

     <Text style={styles.content}>
      Tiger populations once ranged widely across Eurasia, from the Black Sea in the west, to the Indian Ocean in the south, and from Kolyma to Sumatra in the east. Over the past 100 years, they have lost 93% of their historic range, and have been extirpated from Western and Central Asia, from the islands of Java and Bali, and from large areas of Southeast, South, and East Asia. Today, they range from the Siberian taiga to open grasslands and tropical mangrove swamps. The species has been classified as endangered in the IUCN Red List. Major reasons for population decline include habitat destruction, habitat fragmentation and poaching. The extent of area inhabited by tigers is estimated at less than 1,184,911 km2 (457,497 sq mi), a 41% decline from the area estimated in the mid-1990s.
      </Text>
 
      <View style={styles.contentTigerImage}>
      <Image style={styles.imageTiger}  source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/2012_Suedchinesischer_Tiger.JPG/770px-2012_Suedchinesischer_Tiger.JPG"}}/>
      <View style={styles.tigerText}>
      <Text>   The South China tiger is considered to be the most ancient of the tiger subspecies and is distinguished by a particularly narrow skull, long-muzzled nose, rhombus-like stripes and vivid orange colour.</Text>
      </View >
      </View >
      
      <Text/><Text/>

      <View style={styles.contentTigerImage}>
      <View style={styles.tigerText}>
      <Text>   There is no clear difference between the Malayan and the Indochinese tiger in pelage or skull size. It was proposed as a distinct subspecies on the basis of mtDNA and micro-satellite sequences that differs from the Indochinese tiger.</Text>
      </View >
      <View style={styles.centerImage}>
      <Image style={styles.imageTiger}  source={{uri: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Tiger_in_the_water.jpg"}}/>
      </View >
      </View >

      </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
  },

  //naslov i slika
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
    alignSelf: 'center',
    paddingLeft: 10,
    color: "#2980b9",
  },

  image:{
    width: 120,
    height: 120,
    
  },

  titleContainer:{
    flexDirection: 'row',
  },
  image_text:{
    padding: 10,
    paddingHorizontal: 10,
    paddingHorizontal: "10%",
  },

  //kraj

  //scroll dio
  content:{
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    padding: 10,
  },

  contentTigerImage:{
  flexDirection: 'row',
   padding: 0,
   backgroundColor: "#a6a6a6",
  },
  imageTiger:{
    width: 120,
    height: 120,
  },
  tigerText:{
    paddingTop: -10,
    paddingLeft: 5,
    paddingRight: 5,
    //ovo dvoje ispod omogucuje ispis teksta unutar view-a
    width: 0,
    flexGrow: 1,
  },
  centerImage:{
    justifyContent: "center",
  }

  //kraj

});