document.addEventListener("DOMContentLoaded", async () => {
    const loadingText = document.getElementById("loading");
    const betsContainer = document.getElementById("value-bets");

    try {
        const response = await fetch("https://betsharp-proxy.vercel.app/api");
        if (!response.ok) throw new Error("Load failed");

        const data = await response.json();
        loadingText.style.display = "none";

        if (!data || data.length === 0) {
            betsContainer.innerHTML = "<p>No value bets found.</p>";
            return;
        }

        const list = document.createElement("ul");
        data.forEach(period => {
            const item = document.createElement("li");
            item.textContent = `${period.description} (${period.short_description})`;
            list.appendChild(item);
        });
        betsContainer.appendChild(list);
    } catch (error) {
        loadingText.innerHTML = `<span id="error">Virhe API-haussa: ${error.message}</span>`;
    }
});
