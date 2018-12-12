const API = {

  requestPhoto(position) {
    return fetch("http://localhost:4000/api/photo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(position)
    })
      .catch(console.error)
  },
  allPhotos() {
    return fetch("http://localhost:4000/api/photos")
      .then(response => response.json())
      .then(data => data.photos)
      .catch(console.error)
  }

}

export default API
