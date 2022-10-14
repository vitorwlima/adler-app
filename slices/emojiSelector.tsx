import {useState} from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'




export default function EmojiSelector() {
    
    const [mood,setMood] = useState(0)

    
    return (
       
       <>
            <Text style={styles.text}>Como você está?</Text>
            <View style={styles.container}>
                <TouchableOpacity style={mood === 1 ? styles.activeBtn : styles.button} onPress={() => setMood(1)}>
                    <Image source={require('../assets/emojis/1emoji.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={mood === 2 ? styles.activeBtn : styles.button} onPress={() => setMood(2)}>
                    <Image source={require('../assets/emojis/2emoji.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={mood === 3 ? styles.activeBtn : styles.button} onPress={() => setMood(3)}>
                    <Image source={require('../assets/emojis/3emoji.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={mood === 4 ? styles.activeBtn : styles.button} onPress={() => setMood(4)}>
                    <Image source={require('../assets/emojis/4emoji.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={mood === 5 ? styles.activeBtn : styles.button} onPress={() => setMood(5)}>
                    <Image source={require('../assets/emojis/5emoji.png')} />
                </TouchableOpacity>
            </View>
       </> 
        
    )
}

const styles = StyleSheet.create({
    
    text: {
        fontSize: 14,
        marginRight: 205
    },
    
    container: {
        display: 'flex',
        flexDirection: 'row',
    },

    button: {
        margin: 10,
        opacity: 0.5 // tava pensando em começar com eles c essa opacidade e qnd clicar mudar pra 1 o que clicou
    },

    activeBtn: {
        margin: 10,
        opacity: 1
        
    }
})

