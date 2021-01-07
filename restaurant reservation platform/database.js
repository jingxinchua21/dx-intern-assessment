const days = document.getElementById("days");
	const hours = document.getElementById("hours");
	const name = document.getElementById("name");
	const phone = document.getElementById("phone");	
	const person = document.getElementById("person");

	const addbtn = document.getElementById("addbtn");
	const updatebtn = document.getElementById("updatebtn");	
	const removebtn = document.getElementById("removebtn");
	
	const database = firebase.database();
	
	addbtn.addEventListener("click",(e)=>{
		e.preventDefault();
		
		database.ref("/users/" + id.value).set({
			
			days: days.value,
			hours: hours.value,
			name: name.value,
			phone: phone.value,
			person: person.value
			
		});
	});
	