document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("input").value;
  if (value === "")
    return;
  console.log(value);
  
  // Get and display resource 
  const url = "http://localhost:4000" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      document.getElementById("response").innerHTML = JSON.stringify(json);
    });
});

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })