const button = document.querySelector(".button");
const ul = document.querySelector(".ul")
const titleContainer = document.querySelector(".titleContainer");


button.addEventListener("click",gettingData)

async function gettingData() {
    try {
        const data = await fetch("https://dummyjson.com/posts");
        const responce = await data.json();
        let title = responce.posts;
        showDetails(title);
    }
    catch(error) {
        showErorr(error)
    }
}



function showDetails(title) {
    if (title) {
        ul.innerHTML = ""
    title.map((eachTItle => {
        let listItem = document.createElement('li')
        listItem.innerHTML = eachTItle.body;
        ul.appendChild(listItem)
    }))
   }
}

function showErorr(error) {
    if (error) {
        let errorMessege = document.createElement("h4")
        errorMessege.innerHTML = "Request Time out"
        titleContainer.appendChild(errorMessege)
        
    }
}