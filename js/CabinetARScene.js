'use strict';

import React from 'react';

import {
    ViroARScene,
    Viro3DObject,
    ViroAmbientLight,
} from 'react-viro';

const CabinetARScene = () => {
    const _onLoadStart = () => {
        console.log("Cabinet loading has started");
    }

    const _onLoadEnd = () => {
        console.log("Cabinet loading has finished");
    }

    const _onError = (event) => {
        console.log("Cabinet loading failed with error: " + event.nativeEvent.error);
    }

    return (
        <ViroARScene displayPointCloud>
            <ViroAmbientLight color="#fff" />
            <Viro3DObject
                source={require('./res/cabinet.vrx')}
                resources={[
                    require('./res/Chair_diffuse.jpg'),
                ]}
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

export default CabinetARScene;
