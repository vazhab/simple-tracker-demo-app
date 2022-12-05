import React from "react";
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];

    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            points.push({
                latitude: 41.72048 + i * 0.001,
                longitude: 44.77253 + i * 0.001
            });
        } else {
            points.push({
                latitude: 41.72048 - i * 0.002,
                longitude: 44.77253 + i * 0.002
            });
        }
    }

    return <MapView
        style={styles.map}
        initialRegion={{
            latitude: 41.72048,
            longitude: 44.77253,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
    >
        <Polyline coordinates={points} />
    </MapView>
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;