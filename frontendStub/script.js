document.getElementById("resourceSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("resourceInput").value;
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
      document.getElementById("response1").innerHTML = JSON.stringify(json);
    });
});

document.getElementById("postSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const netid = document.getElementById("postNetidInput").value;
  const schedule = document.getElementById("postScheduleInput").value;
  if (netid === "")
    return;
  if (schedule === "")
    return;

  const url = "http://localhost:4000/schedule/" + netid;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: schedule,
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.getElementById("response2").innerHTML = JSON.stringify(json);
  })
})

document.getElementById("getSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const netid = document.getElementById("getInput").value;
  if (netid === "")
    return;

  const url = "http://localhost:4000/schedule/" + netid;
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    document.getElementById("response3").innerHTML = JSON.stringify(json);
  })
})
