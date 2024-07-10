import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/color";

function Card({children}){
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
     card:{
        padding:16,
        justifyContent:'center',
        alignItems:'center',
        marginTop:deviceWidth < 300 ? 18 : 36,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius:8,
        shadowColor:'black',
        shadowOffset:{width:2, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});