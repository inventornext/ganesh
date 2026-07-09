import * as THREE from "three/webgpu";
import { TSL as $ } from "three/webgpu";

import { RectAreaLightTexturesLib }
from "three/addons/lights/RectAreaLightTexturesLib.js";

import { RectAreaLightHelper }
from "three/addons/helpers/RectAreaLightHelper.js";

THREE.RectAreaLightNode.setLTC(
    RectAreaLightTexturesLib.init()
);

const renderer = await new THREE.WebGPURenderer().init();

document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth/window.innerHeight,
0.1,
100
);

camera.position.set(0,0,2);
