import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import socket from '../socket'



export default class ImagePresenter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    };

    this.onNewPhoto = this.onNewPhoto.bind(this);
  }

  componentWillMount() {
    this.props.allPhotos().then(this.setPhotos)
    const channel = socket.channel("photos", {})
    channel.join()
      .receive("ok", resp => { console.log("Joined successfully") })
      .receive("error", resp => { console.log("Unable to join", resp) })
    channel.on("new_photo", this.onNewPhoto)
  }

  setPhotos = (photos) => {
    this.setState({photos: [...this.state.photos, ...photos]})
  }

  onNewPhoto(photo) {
    const photos = [...this.state.photos, photo]
    this.setState({ photos })
  }

  render() {
    const { photos } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <h4>Imágenes</h4>
        <Collapsible accordion >
          {
            photos.map(({ moment }, index) =>
              <CollapsibleItem header={new Date(moment).toLocaleString()} key={index}>
                <img src="http://localhost:4000/images/image.jpg" alt="" width="100%" />
              </CollapsibleItem>
            )
          }
        </Collapsible>
      </div>
    )
  }
}
