'use strict';

import React from 'react';

import {
    // ViroScene,
    ViroARScene,
    Viro3DObject,
    ViroAmbientLight,
    ViroARPlane,
    ViroBox,
    ViroMaterials
} from 'react-viro';

const ChairAndBoxSceneAR = () => {
    const _onLoadStart = () => {
        console.log("Chair loading has started");
    }

    const _onLoadEnd = () => {
        console.log("Chair loading has finished");
    }

    const _onError = (event) => {
        console.log("Chair loading failed with error: " + event.nativeEvent.error);
    }

    ViroMaterials.createMaterials({
        heart: {
            lightingModel: "Blinn",
            diffuseTexture: require('./res/Chair_diffuse.jpg'),
        },
    });

    return (
        <ViroARScene displayPointCloud>
            <ViroAmbientLight color="#fff" />
            <Viro3DObject
                source={require('./res/chair.vrx')}
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
            <ViroBox
                position={[0.0, 3, -10]}
                height={2}
                length={2}
                width={2}
                materials={["heart"]} />
        </ViroARScene>
    )
};

export default ChairAndBoxSceneAR;
