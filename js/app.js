let main = document.querySelector("main");
main.classList.add("container");

let box = document.createElement("div");
let pages = document.createElement("div")
pages.classList.add("d-flex", "justify-content-center", "gap-2");
box.classList.add("d-flex", "justify-content-center", "flex-wrap", "gap-5");
main.appendChild(box);
main.appendChild(pages);
function render(Arr) {

}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

async function getPosts() {
    let data = await axios.get("/posts");
    // console.log(data.data);
    let res = data.data;

    // let pagesArr = [];
    // for(i of res){
    //     if(!pagesArr.includes(i.userId)){
    //         pagesArr.push(i.userId)
    //     }
    // }
    
    // for(i of pagesArr){
    //     page = document.createElement("button");
    //     page.textContent = i
    //     pages.appendChild(page);
    //     page.classList.add("btn", "btn-primary");
    // }

    // pages.addEventListener("click", (e)=>{
    //     for(i of data.data){
    //         if(i.userId == e.target.textContent){
    //             if(res.include(i.userId)){
    //                 res.push(i.userId);
    //             }
    //         }
    //     }
    // });



    // res = []

    for (i of res) {
        let card = document.createElement("div");
        let id = document.createElement("h2");
        let title = document.createElement("h3");
        let body = document.createElement("p");
        let button = document.createElement("button");

        card.classList.add("card", "text-center", "p-2");
        card.style.width = "24rem"
        body.style.display = "none";
        body.classList.add("alert", "alert-success")

        card.appendChild(id);
        card.appendChild(title);
        card.appendChild(button)
        card.appendChild(body);

        button.textContent = "Batafsil"
        button.classList.add("btn", "btn-success");
        id.textContent = `${i.id}`
        title.textContent = `${i.title}`;
        body.textContent = `${i.body}`;
        
        box.appendChild(card);
        
        button.id = i.id;

        button.addEventListener("click",()=>{
            for(i of data.data){
                if(i.id == button.id){
                    alert(i.body)
                }
            }
        })

        
    }

}

getPosts();