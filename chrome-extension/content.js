// content.js is injected into LeetCode problem pages

console.log("LeetSync: Content script loaded.");

// Inject the fetch interceptor into the page context
const script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');
script.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(script);

// Listen for messages from the injected script
window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source !== window) return;

  if (event.data.type && event.data.type === "LEETSYNC_SUBMISSION_ACCEPTED") {
    console.log("LeetSync: Received accepted submission from page interceptor!", event.data.payload);
    
    // Forward this to the background script to bypass CORS restrictions
    chrome.runtime.sendMessage({
      type: "PUSH_TO_GITHUB",
      payload: event.data.payload
    });
  }
});
