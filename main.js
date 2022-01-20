const links = {
    github: "rykasa",
    youtube: "maykbrito",
    instagram: "maykbrito",
    facebook: "maykbrito",
    twitter: "maykbrito"
}

function changeSocialMediaLinks(){
    for(let li of sm.children){
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://www.${social}.com/${links[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${links.github}`

    /*fetch acessa a api e pega um resposta dela, depois a promise (then()) pega essa
      resposta e transforma em uma nova resposta em json, depois usa-se essa nova resposta
      para acessar as informações do github*/
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })

}

getGitHubProfileInfos()