// $( document ).ready(function() {

// });

// class LogName {
// 	constructor(name){
// 		this.name = name; 
// 	}
// 	sayName(){
// 		console.log(this.name + ' basgf');
// 	}
// }

// const talk = new LogName('Eysteinn');
// talk.sayName();


var r = new XMLHttpRequest();

r.open("GET", "path/to/api", true);
r.onreadystatechange = function() {
	if (r.readyState != 4 || r.status != 200) return; 
	const response = JSON.parse(r.responseText)
	const container = document.createElement("div");
	const image = document.createElement("img");
	const title = document.createElement("h1");
	image.src = JSON.parse(r.response);
	title.inneHTML = response.original_title;
	container.append(image);
	container.append(title);
	document.body.append(container);
}

r.send("banana=yellow");