
// // let addbtn = document.querySelector("#add")
// // let subbtn = document.querySelector("#sub")
// // let qty = document.querySelector("#qtybox")
// // console.log(qty)
// // addbtn.addEventListener("click",()=>{
// //     qty.value=parseInt(qty.value) + 1;
// // })
// // subbtn.addEventListener("click",()=>{
// //     if(qty.value <= 0){
// //         qty.value=0;
// //     }
// //     else{
// //         qty.value=parseInt(qty.value) - 1;
// //     }
    
// })
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("click").innerHTML = clicks;
};




let form = document.querySelector("form").addEventListener("submit",adddata)
document.getElementById("submit").onclick = function () {
  location.href = "checkout.html";
};
 function Product(name,price,city,date,count){
   this.name=name;
   this.price=price;
   this.city=city;
  // this.image=image;
  this.date=date;
  this.count=count;
  
}

function adddata(){
  event.preventDefault()
  // console.log("data")

  let email=document.getElementById("Email").value;
  let name=document.getElementById("Name").value;
  let price=document.getElementById("Number").value;
  let city=document.getElementById("city").value;
  let date=document.getElementById("date").value;
  let count=document.getElementById("count").value;

  // console.log(brand,name,price,city)

  let productdata=new Product(email,name,price,city,date,count)

  let products=JSON.parse(localStorage.getItem("products"))||[]

  products.push(productdata)

  localStorage.setItem("products",JSON.stringify(products))
}


let imgheadphonezone=document.querySelector(".heaadphoneimg");
// headphonedata=["p1.png","p2.png","p3.png","p4.png","p5.png","shopbop13.png"]
headphonedata=["https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638779569_lead_form_b.png","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780161_81560674_2277835225653225_1344805676027971175_n.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780172_53740016_406746356756470_2717841112631033733_n.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780219_4pic.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780229_67f9a8bb_72de_473a_8973_0ef5962097ab.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780241_6pic.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780259_30591798_1847841535514277_1318628884849098752_n.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780183_3ed75a9c_c2ef_4283_8dbb_5642a8479b18.jpg","https://cdn1.tripoto.com/media/filter/nxxl/img/2163002/Image/1638780270_46389696_311805892754634_1833046609768742912_o.jpeg"]
display(imgheadphonezone,headphonedata);

function display(x,data){
  let i=0;
  setInterval(()=>{
      if(i>=data.length-1){
          x.src=data[i];
          i=0;
      }
      else{
      x.src=data[i];
          i++;
      }
  },1000)
//  console.log(imgheadphonezone)
}

