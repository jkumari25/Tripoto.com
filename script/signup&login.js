
function login() {
	let arr = JSON.parse(localStorage.getItem("user")) || [];
	let name = document.getElementById("l_name").value;
	let password = document.getElementById("l_password").value;

	if (name == ""||password == "") {
		alert("Fields cannot be empty");
	} else {
		alert(
			`${name}, Congratulations! Login successful`,
		);
		window.location.href = "index.html";
	}
}

function signup() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let phone = document.getElementById("phone").value;

	let obj = {
		name,
		email,
        password,
        phone,
	}
	let arr =JSON.parse(localStorage.getItem("user"))||[];
	 arr.push(obj);
	localStorage.setItem("user", JSON.stringify(arr));

	if (name == "" || email == "" || password == "" || phone == "") { 
		alert('Fields cannot be empty');
	}
	else {
		alert(`${name}, Congratulations! you have successfully signup, now please Login`)
		 open_login(event);
	}
}

function open_signup(e) {
	e.preventDefault();
	console.log(123);
	let inputs = document.getElementById("in1");
	let margin = document.getElementById("in2");
	let btn = document.getElementById("in3");
	let btn_link = document.getElementById("in4");
	
	let l_inputs = document.getElementById("l1");
	let l_margin = document.getElementById("l2");
	let l_btn = document.getElementById("l3");
	let l_btn_link = document.getElementById("l4");
	
	inputs.classList.remove("not-seen-button");
	margin.classList.remove("not-seen-button");
	btn.classList.remove("not-seen-button");
	btn_link.classList.remove("not-seen-button");

	l_inputs.classList.add("not-seen-button");
	l_margin.classList.add("not-seen-button");
	l_btn.classList.add("not-seen-button");
	l_btn_link.classList.add("not-seen-button");
};

function open_login(e){
	e.preventDefault();
	console.log(123);
	let inputs = document.getElementById("in1");
	let margin = document.getElementById("in2");
	let btn = document.getElementById("in3");
	let btn_link = document.getElementById("in4");

	let l_inputs = document.getElementById("l1");
	let l_margin = document.getElementById("l2");
	let l_btn = document.getElementById("l3");
	let l_btn_link = document.getElementById("l4");
	
	
	inputs.classList.add("not-seen-button");
	margin.classList.add("not-seen-button");
	btn.classList.add("not-seen-button");
	btn_link.classList.add("not-seen-button");

	l_inputs.classList.remove("not-seen-button");
	l_margin.classList.remove("not-seen-button");
	l_btn.classList.remove("not-seen-button");
	l_btn_link.classList.remove("not-seen-button");
};


