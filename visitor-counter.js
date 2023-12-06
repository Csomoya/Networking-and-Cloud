function visitorCounter(){
  fetch("https://lxb8nl1cy9.execute-api.us-east-1.amazonaws.com")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}