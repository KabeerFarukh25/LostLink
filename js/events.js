import { addReport, getReports, searchReports } from './data.js';
import { renderReportsList } from './ui.js';

export function attachEventHandlers() {
  const reportForm = document.getElementById('reportForm');
  reportForm.addEventListener('submit', e => {
    e.preventDefault();
    const newReport = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      location: document.getElementById('location').value,
      contact: document.getElementById('contact').value,
      timestamp: new Date().toISOString()
    };
    addReport(newReport);
    renderReportsList(getReports());
    reportForm.reset();
  });

  document.getElementById('search').addEventListener('input', e => {
    renderReportsList(searchReports(e.target.value));
  });
}
