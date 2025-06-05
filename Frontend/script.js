setInterval(async () => {
  const res = await fetch('/api/fire/latest');
  const data = await res.json();
  document.getElementById('status').innerText = 
    data.fireDetected ? '🔥 Fire Detected!' : '✅ All Clear';
}, 3000);
