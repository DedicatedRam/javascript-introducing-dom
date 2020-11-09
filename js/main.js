// IIFE 

(function (){
    console.info("Hello console")
    console.dir(document)           // more complex objects
    console.info(document.getElementById("myHeading"))
    document.getElementById("myHeading").innerHTML = "Ollie"

    document.querySelector("nav ul li").setAttribute("class", "currentPage")
    document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk")

    //document.getElementById("myTestEvent").onclick = function () {
   //     console.info("DOM Event")
    //}

    document.getElementById("myTestEvent").addEventListener("click", myFunc)

    function myFunc(ev){
        console.info("Hello from the addList")
        console.dir(ev)
    }

    document.querySelector(".red").addEventListener("click", function(){
        document.querySelector("body").setAttribute("class", "redBack")
    })
})()

    
