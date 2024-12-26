async function fetchBattleCard(battletag, platform = 'pc', region = 'eu') {
    const formattedTag = battletag.replace('#', '-');
    const url = `https://ow-api.com/v1/stats/${platform}/${region}/${formattedTag}/profile`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();

        // Populate card
        document.getElementById('nameplate').style.setProperty(
            '--bg-namePlate',
            `url(${data.levelIcon || 'https://example.com/default-background.png'})`
        );
        document.getElementById('playerIcon').src = data.icon || 'https://example.com/default-icon.png';
        document.getElementById('playerName').textContent = data.name || 'Unknown Player';
        document.getElementById('playerTitle').textContent = `Level ${data.level || '0'}`;
        document.getElementById('rank').textContent = data.rating || 'Unranked';
        document.getElementById('rankIcon').src = data.ratingIcon || 'https://example.com/default-rank-icon.png';
        document.getElementById('gamesWon').textContent = data.gamesWon || '0';
    } catch (error) {
        console.error('Error fetching battle card:', error);
    }
}

// Fetch your card dynamically
fetchBattleCard('Aarontendo#2585');
