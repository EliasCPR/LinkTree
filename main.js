'mode strict'; 

const links = {
    "nome": "Elias Mateus",
    "img": "download.jfif",
    "links": [
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/profile.php?id=100038417583504"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/elias-oliveira-9aa4b51b1/"
        },
        {
            "titulo": "Instagram",
            "url": " https://www.instagram.com/eliascpr123/"
        },
        {
            "titulo": "GitHub",
            "url": "https://github.com/EliasCPR"
        }
    ]
}

const imagem = document.getElementById("avatar");
imagem.src = links["img"];

const titulo = document.getElementById("titulo");
titulo.innerText = links["nome"];


for (let index = 0; index < links["links"].length; index++) {
    
    const div = document.getElementById("linkTree");
    const tagA = document.createElement('a');
    tagA.href = links["links"][index]["url"];
    tagA.innerText = links["links"][index]["titulo"];
    div.appendChild(tagA); 

}


