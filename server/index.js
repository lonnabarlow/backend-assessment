const express = require("express");
const cors = require("cors");

const ctrl = ("./controller")


const app = express();
let fortunes = ["Your future is bright!", 
        "You will succeed in life",
        "The past does not dictate your future", 
        "You can make tommorrow anything you want!",
        "Tomorrow is a new day!",
];

let affirmationsArr = []

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  
  let randomIndex1 = Math.floor(Math.random() * fortunes.length);
  let randomFortune1 = fortunes[randomIndex1];

  res.status(200).send(randomFortune1);

});
app.post("/api/affirmations", (req, res) => {
  console.log(req.body)
  let affirmation = req.body.affirmation
  affirmationsArr.push(affirmation)
  res.status(200).send(affirmation)
})



app.delete("/api/fortune/", (req, res) => {
  console.log(req.body)
  let existingFortune = req.body.fortune
  for(let i = 0; i < fortunes.length; i++) {
    if(fortunes[i] === existingFortune){
      fortunes.splice(i, 1)
      res.status(200).send({fortunes: fortunes, itemDeleted: existingFortune})
      return
    }
  }
  res.status(200).send("fortune not found")
})



app.put("/api/fortune/", (req, res) => {
  let existingFortune = req.body.fortune
  let newFortune = req.body.fortune
  for(let i = 0; i < fortune.length; i++) {
    if(fortune[i].fortune === existingFortune) {
      fortune[i].fortune = newFortune
      res.status(200).send("fortune updated!")
      return
    }
  }
  res.status(400).send("Oh no, fortune not found!")
})
console.log(fortunes)

app.listen(4000, () => console.log("Server running on 4000"));
