async function fetchBattleCard(battletag, platform = 'pc', region = 'eu') {
    const formattedTag = battletag.replace('#', '-');
    const url = `https://ow-api.com/v1/stats/${platform}/${region}/${formattedTag}/profile`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Populate the card
        document.getElementById('playerIcon').src = data.icon;
        document.getElementById('playerName').textContent = data.name;
        document.getElementById('playerLevel').textContent = data.level;
        document.getElementById('rank').textContent = data.rating || 'N/A';
        document.getElementById('rankIcon').src = data.ratingIcon || '';
        document.getElementById('gamesWon').textContent = data.gamesWon;
    } catch (error) {
        console.error('Error fetching battle card:', error);
    }
}

// Fetch data for your battletag
fetchBattleCard('Aarontendo#2585');
