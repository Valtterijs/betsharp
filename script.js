
document.addEventListener("DOMContentLoaded", () => {
    const loadingMessage = document.getElementById("loading");
    const resultsDiv = document.getElementById("results");

    fetch("https://pinnacle-odds.p.rapidapi.com/kit/v1/meta-periods?sport_id=1", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "pinnacle-odds.p.rapidapi.com",
            "x-rapidapi-key": "c6235a65a6msh2b7680dd0151b1ep15cebfjsn1f2e1a3fce64"
        }
    })
    .then(response => response.json())
    .then(data => {
        loadingMessage.style.display = "none";
        resultsDiv.innerHTML = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
    })
    .catch(error => {
        loadingMessage.textContent = "Error loading data.";
        console.error(error);
    });
});
