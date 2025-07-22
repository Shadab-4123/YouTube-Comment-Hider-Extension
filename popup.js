document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const status = document.getElementById('status');
  
  // Load saved state
  chrome.storage.sync.get(['hideComments'], function(result) {
    const hideComments = result.hideComments !== false; // Default to true
    toggleSwitch.checked = hideComments;
    updateStatus(hideComments);
  });
  
  // Handle toggle change
  toggleSwitch.addEventListener('change', function() {
    const hideComments = toggleSwitch.checked;
    
    // Save state
    chrome.storage.sync.set({hideComments: hideComments});
    
    // Update status
    updateStatus(hideComments);
    
    // Send message to content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "toggleComments",
        hide: hideComments
      });
    });
  });
  
  function updateStatus(hideComments) {
    status.textContent = hideComments ? 'Comments are hidden' : 'Comments are visible';
  }
});
