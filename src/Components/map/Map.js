import React from 'react';
import {StyleSheet, View} from "react-native";
import Mapbox from "@rnmapbox/maps";


Mapbox.setAccessToken('sk.eyJ1IjoiYmF0aXNodGF4aSIsImEiOiJjbHJ5Z3J6bWoxOTQzMmpteGxxNzdybmNiIn0.L6OCUZKOOJ4Du1uoUGDsGQ');


const Map = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView
                    style={styles.map}
                    zoomEnabled={true}
                    styleURL="mapbox://styles/mapbox/streets-v12"
                    rotateEnabled={true}
                >
                    <Mapbox.Camera
                        zoomLevel={15}
                        centerCoordinate={[10.181667, 36.806389]}
                        pitch={60}
                        animationMode={'flyTo'}
                        animationDuration={6000}
                    />
                    <Mapbox.PointAnnotation
                        id="marker"
                        coordinate={[10.181667, 36.806389]}
                    >
                        <View/>
                    </Mapbox.PointAnnotation>
                </Mapbox.MapView>
            </View>
        </View>
    );
};

export default Map;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
    },
    map: {
        flex: 1
    }
});
