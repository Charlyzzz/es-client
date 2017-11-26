import React, {Component} from 'react';
import React3 from 'react-three-renderer';
import * as THREE from 'three';

const UP = "ArrowUp"
const DOWN = "ArrowDown"
const RIGHT = "ArrowRight"
const LEFT = "ArrowLeft"
const STEPS = 8
const ROTATION_ANGLE = Math.PI / STEPS

class Canvas extends Component {
  
  constructor(props){
    super(props)
    this.state = { cubeRotation: new THREE.Euler() }
    this.registerKeyPressedListener()
  }

  registerKeyPressedListener = () => {
    window.addEventListener("keydown", this.keyPressed)
  }

  keyPressed = ({ key }) => {
    switch(key) {
      case UP:
        this.rotateCubeX(ROTATION_ANGLE)
        break;
      case DOWN:
      this.rotateCubeX(-ROTATION_ANGLE)
        break;
      case LEFT:
      this.rotateCubeY(ROTATION_ANGLE)
        break;
      case RIGHT:
      this.rotateCubeY(-ROTATION_ANGLE)
        break;
      default:
    }
  }

  rotateCubeX = (angle) => { this.rotateCube(angle, 0) }
  rotateCubeY = (angle) => { this.rotateCube(0, angle) }

  rotateCube = (x, y) => {
    this.setState({ cubeRotation: new THREE.Euler( this.state.cubeRotation.x - x, this.state.cubeRotation.y - y) })
  }

  render() {
    const width = 800
    const height = 500
    const cameraPosition = new THREE.Vector3(0, 0, 0);
    const boxPosition = new THREE.Vector3(1, 0, -2);
    const cilynderPosition = new THREE.Vector3(0, 0, -8);
    

    return (      
      <div className="center-align">      
        <p className="App-intro">
          Press <code>🡨 🡪 🡩 🡫</code> on your keyboard to move the camera around.
        </p>
        <React3 mainCamera="camera" width={width} height={height} >
          <scene>
            <perspectiveCamera
              name="camera"
              fov={75}
              aspect={width / height}
              near={0.1}
              far={1000}
              position={cameraPosition}/>
              <mesh position={boxPosition} rotation={this.state.cubeRotation}>
                <boxGeometry width={1} height={1} depth={1}/>
                <meshNormalMaterial wireframe={false}/>
              </mesh>
              <mesh position={cilynderPosition}  rotation={this.state.cubeRotation}>
                <cylinderGeometry height={2} radialSegments={32} openEnded={2}/>
                <meshNormalMaterial wireframe={true}/>
              </mesh>
          </scene>
        </React3>
      </div>
    );
  }
}

export default Canvas;
