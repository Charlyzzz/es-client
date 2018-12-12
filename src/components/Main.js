import React from 'react';
import Canvas from './Canvas';
import ImagePresenter from './ImagePresenter';
import API from '../api';

const Main = () => {
  return (
    <div className="main_container">
      <div className='canvas'>
        <Canvas
          requestPhoto={API.requestPhoto} />
      </div>
      <div className='presenter'>
        <ImagePresenter />
      </div>
    </div>
  )
}

export default Main
