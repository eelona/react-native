import{
    View, 
    Image, 
    Text,
    ScrollView, 
    StyleSheet, 
    useWindowDimensions
} from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/color';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    const{width, height} = useWindowDimensions();
    const isPortrait = height > width;
    let imageSize = isPortrait ? 300 : 150;
    let borderRadius = isPortrait ? 150 : 75;
    

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: borderRadius
    };
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image 
                        style={styles.image} 
                        source={require('../assets/images/success.png')}/>
                </View>
                <View>
                    <Text style={styles.summaryText}>
                        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                        rounds to guess the number{' '}
                        <Text style={styles.highlight}>{userNumber}</Text>.
                    </Text>
                    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>     
                </View>
            </View>
        </ScrollView>
    );
}
export default GameOverScreen;

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        
    },
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        // width:deviceWidth < 380 ? 150:300,
        // height:deviceWidth < 380 ? 150:300,
        // borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24
    },
    highlight:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500
    }
});