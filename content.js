// Function to hide comments
function hideComments() {
  const selectors = [
    '#comments',
    'ytd-comments',
    '#comments-section',
    'ytd-comments-header-renderer',
    'ytd-comment-thread-renderer'
  ];
  
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.display = 'none';
    });
  });
}

// Function to show comments
function showComments() {
  const selectors = [
    '#comments',
    'ytd-comments',
    '#comments-section',
    'ytd-comments-header-renderer',
    'ytd-comment-thread-renderer'
  ];
  
  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      element.style.display = '';
    });
  });
}

// Function to check if comments should be hidden
function checkAndHideComments() {
  chrome.storage.sync.get(['hideComments'], function(result) {
    if (result.hideComments !== false) { // Default to true
      hideComments();
    }
  });
}

// Observer for dynamic content loading
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.addedNodes.length > 0) {
      checkAndHideComments();
    }
  });
});

// Start observing
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check
checkAndHideComments();

// Listen for messages from popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "toggleComments") {
    if (request.hide) {
      hideComments();
    } else {
      showComments();
    }
  }
});

// Check when URL changes (for single-page app navigation)
let currentUrl = location.href;
new MutationObserver(() => {
  if (location.href !== currentUrl) {
    currentUrl = location.href;
    setTimeout(checkAndHideComments, 1000); // Delay for page load
  }
}).observe(document, {subtree: true, childList: true});
