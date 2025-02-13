import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./PatikaCards.style";

const PatikaCards = ({product}) => {
    return (
        <View style = {styles.container}>
           <Image style = {styles.image} source={{uri: product.imgURL}}></Image>
           <Text style= {styles.title} numberOfLines={2}>{product.title}</Text>
           <Text style= {styles.text}>{product.price}</Text>
           {product.inStock === false && (<Text style={styles.stock}>STOKTA YOK</Text>)}
        </View>
    )
}

export default PatikaCards;