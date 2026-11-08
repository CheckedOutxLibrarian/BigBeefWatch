const matchups = [
  {
    title: 'Kendrick Lamar',
    rival: 'Drake',
    metrics: [
      { name: 'Flow', value: 96, start: '#fbbf24', end: '#f59e0b' },
      { name: 'Wordplay', value: 94, start: '#34d399', end: '#10b981' },
      { name: 'Storytelling', value: 92, start: '#60a5fa', end: '#2563eb' },
      { name: 'Impact', value: 97, start: '#fb7185', end: '#f43f5e' },
      { name: 'Presence', value: 90, start: '#a78bfa', end: '#7c3aed' }
    ]
  },
  {
    title: 'Joey Bada$$',
    rival: 'Westcoast',
    metrics: [
      { name: 'Lyricism', value: 88, start: '#22d3ee', end: '#0891b2' },
      { name: 'Concept', value: 86, start: '#f472b6', end: '#ec4899' },
      { name: 'Warmth', value: 83, start: '#fbbf24', end: '#f59e0b' },
      { name: 'Momentum', value: 84, start: '#34d399', end: '#10b981' },
      { name: 'Legacy', value: 87, start: '#818cf8', end: '#4f46e5' }
    ]
  }
];

const matchupGrid = document.getElementById('matchup-grid');

function renderMetric(metric) {
  return `
    <div class="metric-row">
      <div class="metric-name">${metric.name}</div>
      <div class="meter" aria-label="${metric.name} score ${metric.value}">
        <span class="meter-fill" style="--value: ${metric.value}%; --start: ${metric.start}; --end: ${metric.end};"></span>
      </div>
      <div class="metric-score">${metric.value}</div>
    </div>
  `;
}

function renderMatchup(matchup) {
  const metricsMarkup = matchup.metrics.map(renderMetric).join('');

  return `
    <article class="matchup-card card">
      <div class="matchup-header">
        <h3>${matchup.title}</h3>
        <span class="vs-pill">vs ${matchup.rival}</span>
      </div>
      <div class="metric-list">${metricsMarkup}</div>
      <div class="legend">
        Viewer-style scorecard based on lyrical craft, resonance, and overall presence.
      </div>
    </article>
  `;
}

matchupGrid.innerHTML = matchups.map(renderMatchup).join('');
