var savechanges = document.getElementById('savechanges');

savechanges.addEventListener('click', function(){
	var id = document.getElementById('idinput').value;
	console.log(id)
	fetch("/views/edit/" + id, {
		method: 'put',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			'fullName': document.getElementById('fullNameinput').value,
			'email': document.getElementById('emailinput').value,
			'address': document.getElementById('addressinput').value
		})
	})
	.then(res => { 
		if (res.ok) return res.json()
	})
	.then(data => {
		console.log(data);
	})
})