chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.duplicate(tab.id, function(tab2) {
  	chrome.tabs.executeScript(tab2.id, {file: "replaceStuff.js"});
  }); // This works!
});