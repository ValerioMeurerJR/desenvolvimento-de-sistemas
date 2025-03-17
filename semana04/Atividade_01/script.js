async function loadProfile(){
    const username = document.getElementById("username").value;
    if(!username){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "VOCE PRECISA DIGITAR UM USUÁRIO!!!",
          });
        return;
    }
    const response = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET'
    })
    const user = await response.json();

    const profileElement = document.createElement("div");
    profileElement.classList.add("profile-item")
    profileElement.innerHTML = `
    <img src="${user.avatar_url}" />
    <h2>${user.name || user.login}</h2>    
    <p>${user.bio || ''}</p>    
    <p>public_repos: ${user.public_repos}</p>    
    <p>followers: ${user.followers}</p>    
    <p>following: ${user.following}</p>    
    `;
    
    const profiles = document.getElementById("profiles");
    profiles.appendChild(profileElement)


}