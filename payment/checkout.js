let render = () => {
    let products = JSON.parse(localStorage.getItem("products"))
    let container = document.getElementById("container")

    products.forEach(({email,name,price,city,date,count})=> {
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        h3.innerText=name
        let b = document.createElement("p")
        h3.innerText=email
        let p = document.createElement("p")
        h3.innerText=price
        let q = document.createElement("p")
        h3.innerText=city
        let r = document.createElement("p")
        h3.innerText=date
        let s = document.createElement("p")
        h3.innerText=count

        div.append(h3,b,p,q,r,s)
        container.append(div)
    });
}
render()