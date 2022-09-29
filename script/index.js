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



let product= ()=>{
    let container= document.getElementById("post-tourism");
    container.innerHTML=null;

    tourismData.forEach(({image_url,description})=>{
     let div= document.createElement("div");
     div.setAttribute("class","tour");

     let img= document.createElement("img");
     img.src=image_url;

     let desc= document.createElement("h3");
     desc.innerText= description;

     div.append(img,desc);
     container.append(div);
    })
}
product();