export const STORAGE_KEY = 'lostlinkReports';

export function addReport(report) {
  const reports = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  reports.push(report);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

export function getReports() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function searchReports(query) {
  return getReports().filter(r =>
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.description.toLowerCase().includes(query.toLowerCase()) ||
    r.location.toLowerCase().includes(query.toLowerCase())
  );
}
