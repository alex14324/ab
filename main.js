fetch("data.json").then(res=>{
	if(res.ok){
		return res.json();
	}
}).then(data=>{
	console.log(data);
	alldata(data.data);
})

var main=document.querySelector(".parent");
console.log(main);

function alldata(hi){
	for(var i=0; i<hi.length; i++){
var child=document.createElement("div");
child.classList.add("child");
console.log(child);
main.appendChild(child);


var image=document.createElement("img");
image.src="man.svg";
image.alt=hi[i].name;

child.appendChild(image);

var name=document.createElement("h2");
name.textContent=hi[i].name;

child.appendChild(name);

var button=document.createElement("a");
button.href="resume.html?id="+hi[i].id;
button.textContent="view profile";
child.appendChild(button);
}
}
