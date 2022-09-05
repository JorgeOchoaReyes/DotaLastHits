import React, { Component, useState } from 'react';
import { StatusBar, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import {Constants} from './constants/index';
import Bird from './entities/Bird';
import Wall from "./entities/Wall";
import Physics from './entities/Physics';

const App = () => {
  // const [running, setRunning] = useState(true); 
  // let gameEngine: any = ""; 

  // const setUpWorld = () => {
  //   let engine = Matter.Engine.create({ enableSleeping: false });
  //   let world = engine.world;

  //   let bird = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 4, Constants.MAX_HEIGHT / 2, 50, 50);
  //   let floor = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT - 25, Constants.MAX_WIDTH, 50, { isStatic: true });
  //   let ceiling = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, 25, Constants.MAX_WIDTH, 50, { isStatic: true });

  //   let [pipe1Height, pipe2Height] = generatePipes();

  //   let pipe1 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), pipe1Height / 2, Constants.PIPE_WIDTH, pipe1Height, { isStatic: true });
  //   let pipe2 = Matter.Bodies.rectangle( Constants.MAX_WIDTH - (Constants.PIPE_WIDTH / 2), Constants.MAX_HEIGHT - (pipe2Height / 2), Constants.PIPE_WIDTH, pipe2Height, { isStatic: true });

  //   let [pipe3Height, pipe4Height] = generatePipes();

  //   let pipe3 = Matter.Bodies.rectangle( Constants.MAX_WIDTH * 2 - (Constants.PIPE_WIDTH / 2), pipe3Height / 2, Constants.PIPE_WIDTH, pipe3Height, { isStatic: true });
  //   let pipe4 = Matter.Bodies.rectangle( Constants.MAX_WIDTH * 2 - (Constants.PIPE_WIDTH / 2), Constants.MAX_HEIGHT - (pipe4Height / 2), Constants.PIPE_WIDTH, pipe4Height, { isStatic: true });


  //   Matter.World.add(world, [bird, floor, ceiling, pipe1, pipe2, pipe3, pipe4]);

  //   Matter.Events.on(engine, 'collisionStart', (event) => {
  //     var pairs = event.pairs;
  //     gameEngine.dispatch({ type: "game-over"});      
  //   });

  //   return {
  //       physics: { engine: engine, world: world },
  //       bird: { body: bird, size: [50, 50], color: 'red', renderer: Bird},
  //       floor: { body: floor, size: [Constants.MAX_WIDTH, 50], color: "green", renderer: Wall },
  //       ceiling: { body: ceiling, size: [Constants.MAX_WIDTH, 50], color: "green", renderer: Wall },
  //       pipe1: { body: pipe1, size: [Constants.PIPE_WIDTH, pipe1Height], color: "green", renderer: Wall },
  //       pipe2: { body: pipe2, size: [Constants.PIPE_WIDTH, pipe2Height], color: "green", renderer: Wall },
  //       pipe3: { body: pipe3, size: [Constants.PIPE_WIDTH, pipe3Height], color: "green", renderer: Wall },
  //       pipe4: { body: pipe4, size: [Constants.PIPE_WIDTH, pipe4Height], color: "green", renderer: Wall }
  //   }
  // }

  // const onEvent = (e: any) => {
  //   console.log(e.type)
  //   if (e.type === "game-over") {
  //       setRunning(false); 
  //   }
  // }

  // const reset = () => {
  //     gameEngine.swap(setUpWorld());
  //     setRunning(true)
  // }   

  // const entities = setUpWorld();

  return (
    <View style={styles.container}>
        {/* <GameEngine
            ref={(ref) => { gameEngine = ref; }}
            style={styles.gameContainer}
            running={running}
            systems={[Physics]}
            onEvent={onEvent}
            entities={entities}>
            <StatusBar hidden={true} />
        </GameEngine> */}
        {/* {
        running === false && <TouchableOpacity style={styles.fullScreenButton} onPress={reset}>
                    <View style={styles.fullScreen}>
                        <Text style={styles.gameOverText}>Game Over</Text>
                    </View>
                </TouchableOpacity>
        } */}
    </View>
  );
}

export default App; 

export const randomBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generatePipes = () => {
  let topPipeHeight = randomBetween(100, (Constants.MAX_HEIGHT / 2) - 100);
  let bottomPipeHeight = Constants.MAX_HEIGHT - topPipeHeight - Constants.GAP_SIZE;

  let sizes = [topPipeHeight, bottomPipeHeight]

  if (Math.random() < 0.5) {
      sizes = sizes.reverse();
  }


  return sizes;
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffffff',
  },
  gameContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
  },
  gameOverText: {
      color: 'white',
      fontSize: 48
  },
  fullScreen: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'black',
      opacity: 0.8,
      justifyContent: 'center',
      alignItems: 'center'
  },
  fullScreenButton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1
  }
});