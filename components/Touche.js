import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

class Touche extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.touche}
        onPress={() => {
          this.props.onPress(this.props.texte);
        }}
      >
        <Text style={styles.texte}>{this.props.texte}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touche: {
    height: "90%",
    width: "24%",
    backgroundColor: "#EFF1F1",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  texte: {
    color: "black",
    fontSize: "3rem",
  },
});

export default Touche;
