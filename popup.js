document.getElementById("createWindow").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    chrome.windows.create(
      {
        tabId: tab.id,
        type: "popup",
        focused: true,
        width: 1000,
        height: 1000,
        left: 100,
        top: 100,
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
