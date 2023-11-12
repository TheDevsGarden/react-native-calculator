import React from "react";
import { View, StyleSheet } from "react-native";
import Touche from "./Touche";

class Clavier extends React.Component {
  handleOnPress = (touche) => {
    this.props.onPress(touche);
  };

  render() {
    return (
      <View style={styles.clavier}>
        <View style={styles.ensembleBoutons}>
          <View style={styles.row}>
            <Touche
              texte="C"
              onPress={(touche) => {
                this.props.onPress(touche);
              }}
            />
            <Touche
              texte="+-"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="<-"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="/"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
          </View>
          <View style={styles.row}>
            <Touche
              texte="7"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="8"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="9"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="*"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
          </View>
          <View style={styles.row}>
            <Touche
              texte="4"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="5"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="6"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="-"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
          </View>
          <View style={styles.row}>
            <Touche
              texte="1"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="2"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="3"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="+"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
          </View>
          <View style={styles.row}>
            <Touche
              texte="0"
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              texte="."
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
            <Touche
              style={styles.egal}
              texte="="
              onPress={(touche) => {
                this.handleOnPress(touche);
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clavier: {
    flex: 3,
    width: "100%",
    backgroundColor: "#474F59",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 5,
  },
  ensembleBoutons: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  egal: {
    flex: 3,
    width: "100px",
    backgroundColor: "#EFF1F1",
    borderRadius: 5,
  },
});

export default Clavier;
