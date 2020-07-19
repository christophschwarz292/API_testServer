
// Get the button, and when the user clicks on it, execute myFunction
let getButton = document.getElementById("getRequest")
let postButton = document.getElementById("postRequest")

// set API url
//let url = "http://localhost:3000";
let url = "http://192.168.2.106:3000";


// fetch Get request
function sendGetRequest() {
   let myFetch = fetch(url, {
    method: 'GET'
    });
    
    myFetch.then(function(response) {
      response.text().then(function(text) {
        console.log(`server response:  ${text}`);
      });
    });
  }

// fetch Post request
function sendPostRequest() {
  let myFetch = fetch(url, {
    method: 'POST'
    });
   
   myFetch.then(function(response) {
     response.text().then(function(text) {
       console.log(`server response:  ${text}`);
     });
   });
 }


// Get the button, and when the user clicks on it, execute myFunction
getButton.onclick = function() {
  sendGetRequest();
}

// Get the button, and when the user clicks on it, execute myFunction
postButton.onclick = function() {
  sendPostRequest();
}

