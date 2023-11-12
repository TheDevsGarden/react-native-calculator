import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Ecran from "./components/Ecran";
import Clavier from "./components/Clavier";
import Touche from "./components/Touche";

export default class App extends React.Component {
  state = {
    equation: "",
  };

  handleOnPress = (touche) => {
    if (touche == "C") {
      this.vider();
    } else if (touche == "=") {
      this.calculer();
    } else if (touche == "+-") {
      //ajouter le changement de signe
    } else if (touche == "<-") {
      this.backspace();
    } else {
      this.addNum(touche);
    }
  };

  addNum(num) {
    this.setState({ equation: this.state.equation + num });
  }

  vider() {
    this.setState({ equation: "" });
  }

  backspace() {
    this.setState({ equation: this.state.equation.slice(0, -1) });
  }

  calculer() {
    this.vider();
    let resultat = eval(this.state.equation);
    this.setState({ equation: "" + resultat });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {/* <View style={styles.wrapper}> */}
        <Ecran texte={this.state.equation} />
        <Clavier
          onPress={(touche) => {
            this.handleOnPress(touche);
          }}
        />
        {/* <Touche /> */}
        {/* </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68736F",
    height: "100vh",
    width: "100vw",
  },
});
