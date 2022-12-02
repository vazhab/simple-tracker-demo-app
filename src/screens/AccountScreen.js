import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={{ fontSize: 48 }}>AccounScreen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;