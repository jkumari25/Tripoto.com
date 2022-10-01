document.querySelector("#cont").addEventListener("click",payme)

function payme(){
    var cn = document.querySelector("#cn").value
    var mm = document.querySelector("#mm").value
    var cvv = document.querySelector("#cvv").value

    if(cn=="" && cn.length==16)
    {
        alert("Enter Card Number !")
    }
    else if(mm="")
    {
        alert("Enter year !")
    }
    else if(cvv=="")
    {
        alert("Enter CVV !")
    }
    else
    {
        alert("Room Booked")
        localStorage.setItem("cartList", JSON.stringify([]));
        window.location.href = "../index.html"
    }
}