// On clicking remove button the item should be removed from DOM as well as localstorage.

var arr = JSON.parse(localStorage.getItem("coffee")) ||[];

console.log(arr);

let total = arr.reduce(function(sum,elem,index,arr){
    return sum + Number(elem.price);
},0);

console.log(total);

document.getElementById("total_amount").innerText=total;

arr.map(function(elem,index){

    let box=document.createElement("div");
        let image = document.createElement("img");
        image.src=elem.image;

        let title = document.createElement("p");


        title.innerText=elem.title;
        let price = document.createElement("p");

        price.innerText=elem.price;
        let btn = document.createElement("button");

        btn.innerText="Remove";

        btn.setAttribute("id","remove_coffee")

        btn.addEventListener("click",function(){
            removetocart(elem,index);
            
        })
        box.append(image,title,price,btn)

        document.querySelector("#bucket").append(box)
    
    })


    let removetocart=(elem,index)=>{
        

        console.log("in remove",elem,index);

        arr.splice(index,1);

        console.log(elem,index);

        localStorage.setItem("coffee",JSON.stringify(arr));

        window.location.reload();
    }
