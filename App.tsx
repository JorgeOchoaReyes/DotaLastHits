import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./render";
import { MoveFinger } from "./system"

export default class BestGameEver extends PureComponent {

  render() {
    return (
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40,  200], renderer: <Finger position={[40, 200]} />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Finger position={[100, 200]} />}, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 200], renderer: <Finger position={[160, 200]} />}, //-- is supplied with the entity - it won't get displayed.
          4: { position: [220, 200], renderer: <Finger position={[220, 200]} />},
          5: { position: [280, 200], renderer: <Finger position={[280, 200]} />}
        }}>

        <StatusBar hidden={true} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
