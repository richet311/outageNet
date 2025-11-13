document.addEventListener('DOMContentLoaded', () => {
  const outageMap = L.map('outageMap').setView([29.7604, -95.3698], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(outageMap);

  L.marker([29.7604, -95.3698])
    .addTo(outageMap)
    .bindPopup('Houston outage sample')
    .openPopup();
});


