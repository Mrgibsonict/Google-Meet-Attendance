var contextMenuItem = {
    "id": "saveAttendance",
    "title": "Save Attendance",
    "documentUrlPatterns": ["https://meet.google.com/*"],
    "contexts": ["page"]
};

chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status === 'complete') {
    if(tab.url.startsWith("https://meet.google.com/") && tab.url.includes("-")){
		chrome.tabs.executeScript(tab.id, {file: "js/startAttendance.js"})
	}
  }
});