# Float Me - A Chrome Extension

![image](https://github.com/user-attachments/assets/5b42f7a4-0352-49c3-8f42-7914069522fc)

Float Me is a Chrome extension that allows users to create a floating, always-on-top popup window of their current tab. This helps in multitasking, keeping important tabs accessible while working on other tasks.

## Why Float Me?
- **Distraction-Free Browsing**: Keep important tabs open in a separate, always-on-top window to avoid unnecessary switching.
- **Enhanced Productivity**: Work on multiple tasks efficiently without losing focus on your primary workspace.
- **Seamless Multitasking**: Keep reference material, video calls, or coding documentation visible while working in another window.
- **Lightweight and Fast**: Minimal impact on browser performance while providing a useful utility.

## Features
- Open any active tab in a floating popup window
- Fullscreen popup mode for distraction-free browsing
- Ensures the floating window remains on top
- Simple and lightweight extension

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/shukabum/Float-Me.git
   cd float-me
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the cloned `float-me` folder.
5. The extension will now be available in your Chrome toolbar.

## Usage
1. Click on the "Float Me" extension icon.
2. Press the **"Switch"** button.
3. Your current tab will open in a floating, always-on-top popup.
4. To close the floating window, simply press `ctrl + w` it like a normal tab.

## Code Overview
### `background.js`
Handles extension lifecycle and ensures the floating window stays on top.

### `popup.js`
Manages user interaction when clicking the extension icon.

### `manifest.json`
Defines extension permissions and behavior.

## Permissions
The extension requires the following permissions:
```json
{
  "permissions": [
    "tabs",
    "windows"
  ]
}
```
These are necessary to create and manage floating windows.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, open an issue or reach out to [shibs1773@gmail.com].

