import React, { Component } from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';
import background from '../background'

const UP = "ArrowUp"
const DOWN = "ArrowDown"
const RIGHT = "ArrowRight"
const LEFT = "ArrowLeft"
const ENTER = "Enter"
const STEPS = 16
const ROTATION_ANGLE = Math.PI / STEPS
const MAX_POSITION = 8;
const MIN_POSITION = 0;

class Canvas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      x: 4,
      y: 4
    }
    const loader = new THREE.ObjectLoader();
    loader.load('file://src/background.jpg', console.log)
    this.registerKeyPressedListener()
  }

  registerKeyPressedListener = () => {
    window.addEventListener("keydown", this.keyPressed)
  }

  keyPressed = ({ key }) => {
    const { x, y } = this.state;
    switch (key) {
      case UP:
        this.updatePosition(x, y + 1);
        break;
      case DOWN:
        this.updatePosition(x, y - 1);
        break;
      case LEFT:
        this.updatePosition(x - 1, y);
        break;
      case RIGHT:
        this.updatePosition(x + 1, y);
        break;
      case ENTER:
        this.props.requestPhoto(this.state);
        break;
      default:
    }
  }

  updatePosition = (newX, newY) => {
    const x = this.clamp(newX)
    const y = this.clamp(newY)
    this.setState({ x, y })
  }

  clamp(value) {
    return Math.min(Math.max(value, MIN_POSITION), MAX_POSITION);
  }

  render() {
    const width = 800
    const height = 500
    const cameraPosition = new THREE.Vector3(0, 0, 0);
    const boxPosition = new THREE.Vector3(0, 0, -2);
    const cilynderPosition = new THREE.Vector3(0, 0, -8);
    const { x, y } = this.state
    const cubeRotation = new THREE.Euler((y - 4) * ROTATION_ANGLE, - (x - 4) * ROTATION_ANGLE)

    return (
      <div>
        <React3 mainCamera="camera" width={width} height={height} >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={cameraPosition} />
            <mesh position={boxPosition} rotation={cubeRotation}>
              <boxGeometry width={1} height={1} depth={1} />
              <meshNormalMaterial wireframe={false} />
            </mesh>
            <mesh position={cilynderPosition}>
              <cylinderGeometry height={2} radialSegments={32} openEnded={2} />
              <meshNormalMaterial wireframe={true} />
            </mesh>
          </scene>
        </React3>
        <p className="intro center-align">
          Press <code>🡨 🡪 🡩 🡫</code> on your keyboard to move the camera around.
        </p>
        <p className="intro center-align">
          Position {x} {y}
        </p>
      </div>
    );
  }
}

export default Canvas;
