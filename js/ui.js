export function renderHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
    <div class="max-w-5xl mx-auto flex items-center gap-4 mb-10">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">LL</div>
      <div>
        <h1 class="text-3xl font-extrabold text-gray-800">LostLink</h1>
        <p class="text-gray-600 text-sm">Connecting people to lost and found items — easily.</p>
      </div>
    </div>
  `;
}

export function renderFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `LostLink ©️ 2025 — simple lost & found system built with HTML, CSS & JS.`;
}

export function renderReportForm() {
  const container = document.getElementById('reportFormContainer');
  container.innerHTML = `
    <div class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4 text-indigo-700">Report an Item</h2>
      <form id="reportForm" class="space-y-3">
        <input id="title" placeholder="Item title" class="w-full px-3 py-2 border rounded-lg" required>
        <textarea id="description" placeholder="Description" class="w-full px-3 py-2 border rounded-lg h-20 resize-none"></textarea>
        <input id="location" placeholder="Location" class="w-full px-3 py-2 border rounded-lg">
        <input id="contact" placeholder="Contact info (optional)" class="w-full px-3 py-2 border rounded-lg">
        <button type="submit" class="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition">Submit</button>
      </form>
    </div>
  `;
}

export function renderReportsList(reports) {
  const container = document.getElementById('reportsListContainer');
  container.innerHTML = `
    <div class="flex gap-3 mb-4">
      <input id="search" placeholder="Search items..." class="flex-1 px-3 py-2 border rounded-lg">
    </div>
    <div id="reportsList" class="grid md:grid-cols-2 gap-4"></div>
  `;

  const list = document.getElementById('reportsList');
  reports.forEach(r => {
    const div = document.createElement('div');
    div.className = 'bg-white p-4 rounded-xl shadow';
    div.innerHTML = `<h3 class="font-semibold">${r.title}</h3><p class="text-sm text-gray-600">${r.description}</p>`;
    list.appendChild(div);
  });
}
