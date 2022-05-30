// Add the coffee to local storage with key "coffee"

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`;

// console.log(url);

fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    appenditems(res.menu.data);
})
.catch(function(err){
    console.log(err);
})


var arr = JSON.parse(localStorage.getItem("coffee")) ||[];



let appenditems=(data)=>{

    data.map(function(elem){
        let box=document.createElement("div");
        let image = document.createElement("img");

        image.src=elem.image;
        let title = document.createElement("p");

        title.innerText=elem.title;
        let price = document.createElement("p");

        price.innerText=elem.price;
        let btn = document.createElement("button");

        btn.innerText="Add to Bucket";
        btn.setAttribute("id","add_to_bucket")

        btn.addEventListener("click",function(){
            addtocart(elem);
            count();
        })
        box.append(image,title,price,btn)
        document.querySelector("#menu").append(box)
    
    })
}

let addtocart=(elem)=>{
   arr.push(elem);
    // console.log(arr.length);
    // console.log(data);
    localStorage.setItem("coffee",JSON.stringify(arr))
}

let num = document.getElementById("coffee_count").innerText;
function count(){

    +(num)++;

    document.querySelector("#coffee_count").innerText=`${num}`;

}