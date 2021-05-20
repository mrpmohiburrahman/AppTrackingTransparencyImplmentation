import React from "react";
import { SafeAreaView, Text } from "react-native";
import {NativeModules} from 'react-native';

export default class App extends React.Component {
  async componentDidMount() {
    let trackingStatus = await NativeModules.TrackingTransparency.getTrackingStatus();
    console.log(`trackingStatus: ${trackingStatus}`)    
    trackingStatus = await NativeModules.TrackingTransparency.requestTrackingPermission();
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>
          Requesting user-permission for App Tracking Transparency
        </Text>
      </SafeAreaView>
    );
  }
}
