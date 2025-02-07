document.getElementById("createWindow").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.windows.create(
      {
        tabId: tab.id,
        type: "popup",
        focused: true,
        state: "fullscreen",
      },
      (newWindow) => {
        const floatingWindowId = newWindow.id;
        ensureWindowOnTop(floatingWindowId);
      }
    );
  });
});

function ensureWindowOnTop(windowId) {
  setInterval(() => {
    chrome.windows.get(windowId, (window) => {
      if (window && window.focused === false) {
        chrome.windows.update(windowId, { focused: true });
      }
    });
  }, 1000);
}
