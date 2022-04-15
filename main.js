const url = "https://api.github.com/users/bw3sley";
const token = "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"

function GetUserImage() {
    axios.get(url, {
        headers: {
            'Authorization': `token ${token}` 
        }
      })
    .then(response => {
        const data = response.data.avatar_url;

        const userImageOne = document.querySelector("img#SideImages").setAttribute("src", data);
        const userImageTwo = document.querySelector("img#PostImages").setAttribute("src", data);
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserImage();

function GetUserLocation() {
    axios.get(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.location;
        const userLocation = document.querySelector("p#user-location").textContent = data
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserLocation();