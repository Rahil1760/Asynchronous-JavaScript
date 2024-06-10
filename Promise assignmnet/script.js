let button = document.querySelector('.button');
let ul = document.querySelector(".ul")
let loading = document.querySelector(".loading")
button.addEventListener("click",display)



loading.style.display = "none";

const test = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject("Request Time Out")
    }, 5000)
       
      const fetchAPI = fetch("https://dummyjson.com/posts");
    fetchAPI.then(data => data.json().then(output => resolve(output)))  
    
    
})


function display() {
    loading.style.display = "block"
     loading.innerHTML = "Loading...."
    setTimeout(() => {
        test.then(output => { displayData(output.posts) })
    }, 2000);
    test.catch(err=>displayErorr(err))

}



function displayData(title) {
    ul.innerHTML = "";
    title.map((eachTitle => {
        
        let list = document.createElement('li');
        list.innerHTML = eachTitle.body;
        ul.appendChild(list)
    }))
}
function displayErorr(err) {
    if (err) {
        let list = document.createElement('li');
        list.innerHTML = "Request Time out";
        ul.appendChild(list)
    }
}