document.getElementById("confirm").addEventListener("click",confirmFun);


function confirmFun(){

    event.preventDefault();

    //1

    setTimeout(function(){

        console.log("confirm");

        alert("Your order is accepted");
    },0)

    //2

    setTimeout(function(){
        console.log("confirm");

        alert("Your order is being Prepared");
    },3000)


    //3

    setTimeout(function(){

        console.log("confirm");

        alert("Your order is being packed");
    },8000)

    //4

    setTimeout(function(){
        console.log("confirm");
        alert("Your order is out for delivery");
    },10000)


    //5

    setTimeout(function(){
        
        console.log("confirm");

        alert("Order delivered");
    },12000)

}