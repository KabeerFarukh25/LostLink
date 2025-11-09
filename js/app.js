import { renderHeader, renderFooter, renderReportForm, renderReportsList } from './ui.js';
import { getReports } from './data.js';
import { attachEventHandlers } from './events.js';

renderHeader();
renderFooter();
renderReportForm();
renderReportsList(getReports());
attachEventHandlers();
