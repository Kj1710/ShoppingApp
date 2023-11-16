import { ScrollView, StyleSheet, Text, View, Image , Pressable, } from 'react-native'
import React from 'react'

// react navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"
import Separator from '../Components/Separator'

type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">

const Details = ({route}: DetailsProps) => {
  const {product} = route.params
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View>
        <Text style={[styles.name,]}>{product.title}</Text>

        <View style={[styles.rowContainer, styles.ratingContainer]}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{product.rating.rate} ★</Text>
          </View>
          <Text style={styles.ratingCount}>({product.rating.count})</Text>
        </View>

        <View style={[styles.rowContainer, styles.descriptionContainer]}>
          <Text style={styles.descriptionTitle}>Description:</Text>
           <Text style={styles.descriptionText}> {product.description}</Text>
            </View>

        <View style={[styles.rowContainer, styles.priceContainer]}>
          <Text style={styles.originalPrice}>
           Best Price: ${product.price.toLocaleString()}
          </Text>
        </View>
      </View>
    </ScrollView>

    {/* Sticky bottom view for Add to Cart and Buy Now */}
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#2e2e2e' : '#008c00' },
        ]}
        // TODO: onPress={handleAddToCart}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? '#2e2e2e' : '#4bb550' },
        ]}
        // TODO: onPress={handleBuyNow}
      >
        <Text style={styles.buttonText}>Buy Now</Text>
      </Pressable>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
    marginLeft:30,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  name: {
    marginTop:20,
    marginLeft:6,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 20,
    textDecorationColor:"#2e2e2e",
    // fontWeight: '500',
  },
  ratingContainer: {
    marginVertical: 12,
  },
  priceContainer: {
    
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 6,
    backgroundColor: '#deffeb',
  },
  rating: {
    marginLeft:10,
    marginRight: 8,
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',
  },
  ratingText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 14,
    color: '#878787',
  },
  descriptionContainer: {
    maxWidth: 350, 
    marginTop: 3,
    flexWrap: 'wrap',  // Adjust this value based on your design
    marginLeft:10 
  },
  descriptionTitle: {
    marginTop:4,
    fontSize: 23,
    fontWeight: '500',
    marginBottom: 2, // Add space after the title
    
  },
  descriptionText: {
    fontSize: 19,
    color: '#333',
    justifyContent:"space-evenly",
    marginBottom:15,
   
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    marginTop: 4,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
    justifyContent:'center',
    alignItems:"center"
  },
});


export default Details