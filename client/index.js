

const body = document.querySelector("body")
const buttn = document.querySelector("button")


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
    
}

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data
        alert(data)
        console.log(data)
    });
}

let affirmationDisplay = document.querySelector("#affirmationDisplay")
let newAffirmation = document.querySelector("#affirmation")
const addAffirmation = () => {
    axios.post('http://localhost:4000/api/affirmations/', { 
    affirmation: newAffirmation.value
    })
    .then(function (response){
        const data = response.data
        newAffirmation.value = ""
     affirmationDisplay.innerHTML = data
    })
}

 document.getElementById("affirmationBtn").onclick = function(){
     addAffirmation()
 }
    
newAffirmation.addEventListener("keypress" , function (e) {
    if (e.key === 'Enter') {
        addAffirmation()
    }
});

let deleteText = document.querySelector("#deleteText")
document.getElementById("deleteFortune").onclick = function(){ 
    axios.delete('http://localhost:4000/api/fortune/', {
        data: { fortune: deleteText.value }
    })
        .then(function (response){
            const data = response.data
            alert(JSON.stringify(data))
        })

}

    
    
// let fortuneUpdated = {
//     newFortune: "You are enough"
// }
// axios.put('http://localhost:4000/api/fortune/', fortuneUpdated)
// .then(function (response))



       
