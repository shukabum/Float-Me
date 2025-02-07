# Float Me - A Chrome Extension

Float Me is a Chrome extension that allows users to create a floating, always-on-top popup window of their current tab. This helps in multitasking, keeping important tabs accessible while working on other tasks.

## Features
- Open any active tab in a floating popup window
- Fullscreen popup mode for distraction-free browsing
- Ensures the floating window remains on top
- Simple and lightweight extension

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/float-me.git
   cd float-me
   ```
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the cloned `float-me` folder.
5. The extension will now be available in your Chrome toolbar.

## Usage
1. Click on the "Float Me" extension icon.
2. Press the **"Create Floating Window"** button.
3. Your current tab will open in a floating, always-on-top popup.
4. To close the floating window, simply close it like a normal tab.

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
"permissions": [
  "tabs",
  "windows"
]
```
These are necessary to create and manage floating windows.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any issues or suggestions, open an issue or reach out to [your email or GitHub].

