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
        const userLocation = document.querySelector("p#user-location").textContent = data;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserLocation();

function GetUserCompany() {
    axios.get(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.company;
        const userCompany = document.querySelector("p#user-company").textContent = data;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserCompany();

function GetUserName() {
    axios.get(url, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => {
        const data = response.data.name;
        const userName = document.querySelector("h2#user-name").textContent = data;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetUserName();