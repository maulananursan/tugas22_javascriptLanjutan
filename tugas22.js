var kalimat = "Saya ingin belajar bersama"
data = kalimat.split(" ")

data.forEach(function (item, index, array){
	console.log("Item :", item, "Index ke", index)
})

