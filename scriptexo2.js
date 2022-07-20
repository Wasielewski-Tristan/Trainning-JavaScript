// var imgWiki = document.querySelector("#imgWiki");
// var butWiki = document.querySelector("#butWiki");

// butWiki.addEventListener("click", function(event){ 
// fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
//     .then(response => response.blob())
//     .then(function (myBlob) {
//         var objectURL = URL.createObjectURL(myBlob);
//         imgWiki.src = objectURL;
//     });
// });




// var studentsList = document.querySelector("#studentsList");
// fetch("https://pachyderme.net/students.json")
//     .then(response => response.json())
//     .then(function (Json) {
//         console.log(Json);
//         Json.students.forEach(function (student)
//         {
//             console.log(student.firstname)
//         studentsList.innerHTML += `<li> 
//         Prénom :${student.firstname} <br> 
//         Nom: ${student.lastname} <br> 
//         Genre: ${student.sex} <br> 
//         GitHub: ${student.githubid} 
//         </li> <br>`
//         })
//     });

var saveBut = document.querySelector("#save")

saveBut.addEventListener("click", saveName);

function saveName(event) {
	localStorage.setItem("promoName", JSON.stringify(saveNameInput.value))
}