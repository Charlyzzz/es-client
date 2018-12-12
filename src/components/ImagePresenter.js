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
    const channel = socket.channel("photos", {})
    channel.join()
      .receive("ok", resp => { console.log("Joined successfully") })
      .receive("error", resp => { console.log("Unable to join", resp) })
    channel.on("new_photo", this.onNewPhoto)
  }

  onNewPhoto({ filename }) {
    const newPhoto = { date: new Date(), url: filename }
    const photos = [...this.state.photos, newPhoto]
    this.setState({ photos })
  }

  render() {
    const { photos } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <Collapsible accordion >
          {
            photos.map(({ date }, index) =>
              <CollapsibleItem header={date.toDateString()} key={index}>
                <img src="http://localhost:4000/images/image.jpg" width="100%" />
              </CollapsibleItem>
            )
          }
        </Collapsible>
      </div>
    )
  }
}
