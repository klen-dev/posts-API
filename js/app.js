let main = document.querySelector("main");
main.classList.add("container");

let box = document.createElement("div");
box.classList.add("d-flex", "justify-content-evenly", "flex-wrap", "gap-5");
main.appendChild(box);

function render(Arr) {

}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

async function getPosts() {
    let res = ""
    let data = await axios.get("/posts");
    console.log(data.data);
    for (i of data.data) {
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

        button.addEventListener("click", (e)=>{
            // body.classList.toggle("d-block")
            alert(`body.textContent = ${i.body}`)
        })

        button.textContent = "Batafsil"
        button.classList.add("btn", "btn-success");
        id.textContent = `${i.id}`
        title.textContent = `${i.title}`;
        

        box.appendChild(card);
    }
    
}

getPosts();