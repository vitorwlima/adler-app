import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export default function EmojiSelector() {
  const [mood, setMood] = useState(0);
  const allMoods = [
    { id: 1, source: require("../assets/emojis/1emoji.png") },

    { id: 2, source: require("../assets/emojis/2emoji.png") },

    { id: 3, source: require("../assets/emojis/3emoji.png") },

    { id: 4, source: require("../assets/emojis/4emoji.png") },

    { id: 5, source: require("../assets/emojis/5emoji.png") },
  ];

  return (
    <View>
      <Text style={styles.text}>Como você está?</Text>
      <View style={styles.container}>
        {allMoods.map((currentMood) => {
          return (
            <TouchableOpacity
              key={currentMood.id}
              style={
                mood === currentMood.id ? styles.activeButton : styles.button
              }
              onPress={() => setMood(currentMood.id)}
            >
              <Image source={currentMood.source} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    marginLeft: 10,
  },

  container: {
    display: "flex",
    flexDirection: "row",
  },

  button: {
    opacity: 0.5,
    margin: 10,
  },

  activeButton: {
    opacity: 1,
    margin: 10,
  },
});
