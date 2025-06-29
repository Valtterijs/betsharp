
fetch("https://pinnacle-odds.p.rapidapi.com/kit/v1/meta-periods?sport_id=1", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "pinnacle-odds.p.rapidapi.com",
    "x-rapidapi-key": "c6235a65a6msh2b7680dd0151b1ep15ceb1fsn1f2e1a3fce64"
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  document.body.innerHTML += `<pre>${JSON.stringify(data, null, 2)}</pre>`;
})
.catch(err => {
  console.error("API virhe:", err);
  document.body.innerHTML += `<p style="color:red;">Virhe API-haussa: ${err.message}</p>`;
});
