var body = document.getElementById("body");
let colorArray = ["blue", "lightblue", "yellow", "green", "green","gold","turqoise"];
let changeBgColor = () => {
    body.style.backgroundColor = colorArray[Math.ceil(Math.random()*5)];
    console.log("test");
}
