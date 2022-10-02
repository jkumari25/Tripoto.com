let tourismData=[
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274341_1664213448_living_root_bridge.jpg",
        description:" Traditional Sustainable Practices in India That We Must Revive To Save The Planet."
    },
    {
      image_url:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664274477_green_escape.jpeg",
      description:"Watch Green Escape:An Unparalled Road Trip Across India Done Responsibility"
    },
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366418_north.jpg",
        description:"Watch: Reviving Kath Kuni Architecture With North"
    },
    {
       image_url:"https://cdn1.tripoto.com/media/filter/tst/img/1516992/Image/1664366571_tent_1.jpg",
       description:"Watch: Working With Locals At Nayalap"
    },
    
];

let luxuryData=[
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284466_1501572387_vedicvillage1.jpg",
        description:"Unwind At The Vedic Village Spa Resort In Kolkata",
        title:"LUXURY STAYS",
        review:"By  Aakanksha Magan"
    },
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664284743_1633518714_267103469.jpg",
        description:"This Hotel In Kolkata Overlooks Victoria Memorial",
        title:"LUXURY STAYS",
        review:"By  Kadambari Bhatte (curlytravelmess)"
    },
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1661513462_1661510413_pench.jpg",
        description:"Stay At These Incredible Eco-Friendly Resorts In India",
        title:"LUXURY STAYS",
        review:"By  Tanvi Shah"
    },
    {
        image_url:"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1664285490_1504715462_29636144.jpg",
        description:"Fall In Love At Mayfair,Darjeeling",
        title:"LUXURY STAYS",
        review:"By  Sonalika Debnath"
    },

]



let product= ()=>{
    let container= document.getElementById("post-tourism");
    container.innerHTML=null;

    tourismData.forEach(({image_url,description})=>{
     let div= document.createElement("div");
     div.setAttribute("class","tour");

     let img= document.createElement("img");
     img.src=image_url;

     let desc= document.createElement("p");
     desc.innerText= description;

     div.append(img,desc);
     container.append(div);
    })
}
product();

let luxury= () =>{

    let container= document.getElementById("luxury-stay");
    container.innerHTML=null;

    luxuryData.forEach(({image_url,title,description,review}) =>{
       
        let div= document.createElement("div");
        div.setAttribute("class","stay");

        let img= document.createElement("img");
        img.src= image_url;

        let t1= document.createElement("h3");
        t1.innerText= title;

        let desc= document.createElement("p");
        desc.innerText= description;

        let rev= document.createElement("p");
        rev.innerText= review;

        div.append(img,t1,desc,rev);
        container.append(div);

    })
}
luxury();

// adding event listener to button:-

let elements = document.querySelectorAll(".price>button");

// adding the event listener by looping

elements.forEach(function(ele) {
    ele.addEventListener('click', function() {
        location.href ="../payment/payment.html";
        
    });
})

