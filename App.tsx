import * as React from 'react';
import MapView, {Marker, MarkerAnimated} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

interface CoordinateType {
  latitude: number,
  longitude: number
}

export default function App() {
  const coords = {
    latitude: 37.78825, 
    longiture: -122.4324
  }

  const [latitudeMarker, setlatitudeMarker] = React.useState(0); 
  const [longitudeMarker, setlongitudeMarker] = React.useState(0); 
  
  const [cords, setCords] = React.useState<CoordinateType[] | null>(null); 

  React.useEffect(() => {
    let temp = [ {latitude: 37.78825, longitude: -122.4324}, 
                 {latitude: 35.78825, longitude: -122.4324},
                 {latitude: 34.78825, longitude: -122.4324},
                 {latitude: 31.78825, longitude: -122.4324},]
    setCords(temp)
  }, [])

  return (
    <View style={styles.container}>
      <Text> Example Map: </Text>
      <MapView style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}> 
        {cords && cords.map((coords, i) => {
          return <Marker
            key={`#marker${i}`}
            onPress={(e) => {
              console.log(e)
            }}
            draggable
            coordinate={{
              latitude: coords.latitude,
              longitude: coords.longitude,
            }}
            title={"Example Marker"}
            description={"Example Marker"}
          />
        })}

      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width/2,
    height: Dimensions.get('window').height/2,
  },
});