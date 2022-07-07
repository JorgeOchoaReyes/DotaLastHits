import React, { useState } from "react";
import { AppRegistry, StyleSheet, Dimensions, View } from "react-native";
import { GameLoop, GameLoopUpdateEventOptionType } from "react-native-game-engine";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
const RADIUS = 25;

const BestGameEver = () => {
  const [x, setX] = useState(WIDTH/2); 
  const [y, setY] = useState(HEIGHT/2); 
  const [startTime, setstartTime] = useState(new Date()); 

  const [e_x, sete_x] = useState(WIDTH/2);
  const [e_y, sete_y] = useState(0);   

  const updateHandler = ({ touches, screen, time}: GameLoopUpdateEventOptionType ) => {
    let move = touches.find(x => x.type === "move");

    let endTime = new Date();
    let timeDiff = endTime.getTime() - startTime.getTime(); 
    timeDiff /= 1000;
    let seconds = Math.round(timeDiff);
    sete_y(e_y + seconds)
    if (move) {
      setX(x + move.delta!.pageX)
      setY(y + move.delta!.pageY)

    y
    };
  }

  return (
    <GameLoop style={styles.container} onUpdate={updateHandler}>
      <View style={[styles.player, { left: x, top: y }]} />

      <View style={[styles.player, { left: e_x, top: e_y }]} />
    </GameLoop>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  player: {
    position: "absolute",
    backgroundColor: "red",
    width: RADIUS * 2,
    height: RADIUS * 2,
  },  
  enemy: {
    position: "absolute",
    backgroundColor: "green",
    width: RADIUS * 2,
    height: RADIUS * 2,
  },
});

  
export default BestGameEver; 