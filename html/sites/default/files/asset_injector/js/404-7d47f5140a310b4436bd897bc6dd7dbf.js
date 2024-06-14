var mess = document.getElementById("error_messages")
mess.style.margin = "0"; 

var count = mess.getElementsByTagName("li")

var rando = Math.floor(Math.random() * count.length);
console.log('rando: ' + rando)
for(i=0;i < count.length;i++) {
	if(rando == i) {
	  count[i].style.display = 'block'
	} else {
	  count[i].style.display = 'none'
	}
}