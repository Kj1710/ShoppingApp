import { Image, StyleSheet, Text, View ,Pressable } from 'react-native'
import React, { PropsWithChildren } from 'react'

type ProductProps=PropsWithChildren<{
    product :Product
}>

const ProductItem = ({product}:ProductProps) => {
  return (
    <View style={styles.container}>
    <Image source={{ uri: product.image }} style={styles.image} />

    <View  >
      
      <Text style={styles.name}>{product.title}</Text>
     
      <View style={[styles.rowContainer, styles.ratingContainer]}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{product.rating.rate} ★</Text>
        </View>
        <Text style={styles.ratingCount}>({product.rating.count})</Text>
        
      </View>

      <View style={[styles.rowContainer, styles.priceContainer]}>
        <Text style={styles.originalPrice}>
          ${product.price.toLocaleString()}
        </Text>
      </View>

      
    </View>
  </View>
);
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flexDirection: 'row',
      },
      textContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      rowContainer: {
        flexDirection: 'row',
      },
      image: {
        width: 90,
        height: 150,
        resizeMode: 'contain',
    
        marginRight: 12,
      },
      name: {
        marginBottom: 4,
        fontSize: 15,
        fontWeight: '500',
        // flexShrink: 1,
        flexWrap: 'wrap',
        maxWidth: '90%',
      
      },
      ratingContainer: {
        marginTop:10,
        marginBottom: 8,
      },
      priceContainer: {
        marginBottom: 20,
      },
      rating: {
        borderRadius: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        backgroundColor: '#008c00',
    
        marginRight: 4,
      },
      ratingText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
      },
      ratingCount: {
        color: '#878787',
      },
      originalPrice: {
        fontSize: 20,
        marginRight: 4,
        fontWeight: '600',
        marginTop: 15,
        color: 'rgba(0, 0, 0, 0.5)',
      },
   
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 8,
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
})