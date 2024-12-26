import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import axios from 'axios';

export default function map() {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [markers, setMarkers] = useState([]);


    return (
        <View style={styles.container}>
          <MapView style={styles.map} initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}>
            {markers.map((marker, index) => (
              <Marker key={index} coordinate={marker} />
            ))}
            <Polyline coordinates={coordinates} strokeWidth={4} strokeColor="blue" />
          </MapView>
          <View style={styles.controls}>
            <TextInput
              style={styles.input}
              placeholder="Start Location (lng,lat)"
              value={startLocation}
              onChangeText={setStartLocation}
            />
            <TextInput
              style={styles.input}
              placeholder="End Location (lng,lat)"
              value={endLocation}
              onChangeText={setEndLocation}
            />
            <Button title="Get Route" onPress={fetchRoute} />
          </View>
        </View>
      );
    }