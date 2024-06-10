let button = document.querySelector(".button")
let ul = document.querySelector('.ul')
let loading = document.querySelector('.loading')
button.addEventListener('click', () => {
   
    messege(showData);
});


function messege(callback) {
    ul.style.display ="block"
     loading.innerHTML = "loading.."
    setTimeout(() => {
    const fetched = fetch("https://dummyjson.com/posts")
        fetched.then(data => data.json().then(resul => {
        let titles = resul.posts
        callback(titles)
            
            
        })).catch(err => {
            showErorr(err)
        })
    

    }, 5000)
    
}

function showData(title) {
    if (title) {
        ul.innerHTML = "";
        title.map((eachTitle => {
        
        let list = document.createElement('li');
        list.innerHTML = eachTitle.body;
        ul.appendChild(list)
    }))
   }
}
    
function showErorr(err) {
    if (err) {
        let list = document.createElement('li');
        list.innerHTML = "Failed to fetch the details, please enter a corrct URL";
        ul.appendChild(list)
    }
}

       
   





     