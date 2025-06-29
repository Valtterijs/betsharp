
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.style.padding = "1rem";
  container.innerHTML = "<h2>Loading value bets...</h2>";
  document.body.appendChild(container);

  fetch("https://betsharp-proxy.vercel.app/api/odds")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      container.innerHTML = "<h2>Value Bets</h2>";
      if (!Array.isArray(data) || data.length === 0) {
        container.innerHTML += "<p>No value bets found.</p>";
        return;
      }

      const list = document.createElement("ul");
      data.forEach((bet) => {
        const item = document.createElement("li");
        item.innerHTML = `
          <strong>${bet.match}</strong><br>
          Market: ${bet.market} - Selection: ${bet.selection}<br>
          Odds: ${bet.odds} - Real Prob: ${bet.realProb}%<br>
          EV: ${bet.ev.toFixed(2)}%
        `;
        list.appendChild(item);
      });
      container.appendChild(list);
    })
    .catch((err) => {
      container.innerHTML = `<p style="color:red;">Virhe API-haussa: ${err.message}</p>`;
    });
});
