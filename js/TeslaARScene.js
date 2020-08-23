'use strict';

import React from 'react';

import {
    ViroARScene,
    Viro3DObject,
    ViroAmbientLight,
} from 'react-viro';

const TeslaARScene = () => {
    const _onLoadStart = () => {
        console.log("Tesla loading has started");
    }

    const _onLoadEnd = () => {
        console.log("Tesla loading has finished");
    }

    const _onError = (event) => {
        console.log("Tesla loading failed with error: " + event.nativeEvent.error);
    }

    return (
        <ViroARScene displayPointCloud>
            <ViroAmbientLight color="#fff" />
            <Viro3DObject
                source={require('./res/tesla_car_animated.vrx')}
                type="VRX"
                position={[0.0, 0.0, -10]}
                scale={[0.05, 0.05, 0.05]}
                onLoadStart={_onLoadStart}
                onLoadEnd={_onLoadEnd}
                onError={_onError}
            />
        </ViroARScene>
    )
};

export default TeslaARScene;
