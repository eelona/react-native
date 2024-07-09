import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children, onPress}) {

  return (
    <Pressable
      style={(pressed) =>
        pressed
          ? [styles.buttonInnerContainer, styles.pressed]
          : styles.buttonInnerContainer
      }
      onPress={onPress}
      android_ripple={{ color: "purple" }}
    >
      <View style={styles.buttonOuterContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "lightpink",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
