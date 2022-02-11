

const body = document.querySelector("body")
const buttn = document.querySelector("button")


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });


buttn.addEventListener("click", onclick)
};

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data
        alert(data)
    });
    console.log(data)
}

let fortune = {
   fortune: "Time for change"
}
document.getElementById("text").onclick = function () {
    axios.post('http://localhost:4000/api/fortune/')
     "Time for change"
    .then(function (response){
        const data = response.data
        alert(data)
    })
};
    


// axios.delete('http://localhost:4000/api/fortune/', fortune)
//     .then(function (response))

//         console.log("fortune deleted")
    
// let fortuneUpdated = {
//     newFortune: "You are enough"
// }
// axios.put('http://localhost:4000/api/fortune/', fortuneUpdated)
// .then(function (response))



app.listen(4000, () => console.log("Server is happily running on port 4000"))
       
