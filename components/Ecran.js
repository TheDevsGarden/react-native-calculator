import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

class Ecran extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.ecran}>{this.props.texte}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ecran: {
    minHeight: "4rem",
    fontSize: 40,
    margin: 5,
    padding: 10,
    width: "100vw",
    backgroundColor: "#eceff1",
  },
});

export default Ecran;
