document.addEventListener('DOMContentLoaded', async () => {
    const loadingElement = document.getElementById('loading');
    const betsContainer = document.getElementById('bets-container');

    try {
        const response = await fetch('https://betsharp-proxy.vercel.app/api');
        if (!response.ok) throw new Error('API response not OK');

        const bets = await response.json();
        loadingElement.style.display = 'none';

        if (bets.length === 0) {
            betsContainer.innerHTML = '<p>No value bets found.</p>';
            return;
        }

        const list = document.createElement('ul');
        bets.forEach(bet => {
            const item = document.createElement('li');
            item.textContent = `${bet.homeTeam} vs ${bet.awayTeam} – ${bet.market} @ ${bet.odds} (EV: ${bet.ev}%)`;
            list.appendChild(item);
        });

        betsContainer.appendChild(list);
    } catch (error) {
        loadingElement.innerHTML = '<span class="error">Virhe API-haussa: Load failed</span>';
        console.error('Fetch error:', error);
    }
});
