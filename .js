let currentType = localStorage.getItem('currentType') || 'lost';
const reports = JSON.parse(localStorage.getItem('lostlink_reports') || '[]');

const form = document.getElementById('reportForm');
const lostBtn = document.getElementById('lostBtn');
const foundBtn = document.getElementById('foundBtn');
const list = document.getElementById('reportsList');
const searchInput = document.getElementById('search');
const filterType = document.getElementById('filterType');

// --- Type switcher ---
function setActive(type) {
  currentType = type;
  localStorage.setItem('currentType', type);

  if (type === 'lost') {
    lostBtn.className = 'flex-1 py-2 rounded-lg bg-indigo-600 text-white font-medium';
    foundBtn.className = 'flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium';
  } else {
    foundBtn.className = 'flex-1 py-2 rounded-lg bg-green-600 text-white font-medium';
    lostBtn.className = 'flex-1 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium';
  }
}

lostBtn.onclick = () => setActive('lost');
foundBtn.onclick = () => setActive('found');
setActive(currentType);

// --- Form submission ---
form.onsubmit = (e) => {
  e.preventDefault();
  const reader = new FileReader();
  const file = document.getElementById('image').files[0];
  reader.onloadend = () => {
    const report = {
      id: Date.now(),
      type: currentType,
      title: document.getElementById('title').value.trim(),
      description: document.getElementById('description').value.trim(),
      location: document.getElementById('location').value.trim(),
      contact: document.getElementById('contact').value.trim(),
      image: reader.result || null,
      timestamp: new Date().toLocaleString(),
    };
    reports.unshift(report);
    localStorage.setItem('lostlink_reports', JSON.stringify(reports));
    renderReports();
    form.reset();
    alert('✅ Report submitted successfully!');
  };
  if (file) reader.readAsDataURL(file);
  else reader.onloadend();
};

// --- Render reports ---
function renderReports() {
  list.innerHTML = '';
  const query = searchInput.value.toLowerCase();
  const typeFilter = filterType.value;

  const filtered = reports.filter(r =>
    (typeFilter === 'all' || r.type === typeFilter) &&
    (r.title.toLowerCase().includes(query) ||
     r.description.toLowerCase().includes(query) ||
     r.location.toLowerCase().includes(query))
  );

  if (filtered.length === 0) {
    list.innerHTML = '<div class="p-6 bg-white rounded-xl shadow text-gray-500 text-center">No reports found.</div>';
    return;
  }

  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = `rounded-2xl p-4 shadow hover:shadow-lg transition ${
      r.type === 'lost' ? 'bg-red-50' : 'bg-green-50'
    }`;
    card.innerHTML = `
      <div class="flex gap-3">
        <div class="w-24 h-24 border rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
          ${
            r.image
              ? `<img src="${r.image}" class="w-full h-full object-cover">`
              : '<span class="text-gray-400 text-sm">No image</span>'
          }
        </div>
        <div class="flex-1">
          <h3 class="font-semibold text-lg">${r.title}</h3>
          <p class="text-sm text-gray-500 mb-1">${r.type === 'lost' ? '🟥 Lost' : '🟩 Found'} • ${r.timestamp}</p>
          <p class="text-sm text-gray-700 mb-1">${r.description || '(no description)'}</p>
          <p class="text-sm text-gray-600"><strong>Location:</strong> ${r.location || '—'}</p>
          <p class="text-sm text-gray-600"><strong>Contact:</strong> ${r.contact || '—'}</p>
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

searchInput.oninput = renderReports;
filterType.onchange = renderReports;

renderReports();