let meme=document.createElement("img")
let url1="https://meme-api.herokuapp.com/gimme"
fetch(url1).then(response=>{
    //console.log(response.json())
    if(response.status==200)
    return response.json()
}).then(data =>{
    console.log(data)
    meme.src=data.url
    document.body.appendChild(meme)
})