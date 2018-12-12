const API = {

  requestPhoto(position) {
    console.log("Pidiendo foto en", position);
    return fetch("http://localhost:4000/api/photo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(position)
    })
      .catch(console.error)

  }

}

export default API
