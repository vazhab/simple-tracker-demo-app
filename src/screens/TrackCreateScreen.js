import '../_mockLocation';
import React, { useState, useEffect } from "react";
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { requestForegroundPermissionsAsync, Accuracy, watchPositionAsync } from 'expo-location';
import Map from "../components/Map";

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;