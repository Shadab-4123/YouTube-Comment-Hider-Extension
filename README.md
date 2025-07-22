# YouTube Comment Hider

A simple and effective Chrome extension that hides the comment section on YouTube to help reduce distractions and stay focused on the content.

## 📦 Features

- ✅ Automatically hides YouTube comments
- 🎚️ Toggle comments on/off via the popup
- 💾 Saves your preference across sessions
- 🔁 Supports dynamic YouTube navigation (SPA)
- 🛠️ Works with multiple comment selectors for robust performance

---

## ⚙️ Installation Instructions

1. **Download or clone this repository** to your local machine.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in top-right).
4. Click **Load unpacked** and select the `youtube-comment-hider/` folder.
5. Visit any YouTube video to test the extension.
6. Click the extension icon in the toolbar to toggle comments on or off.

---

## 🔍 How It Works

- Injects a content script into YouTube pages.
- Detects and hides common comment section containers (`#comments`, `ytd-comments`, etc.).
- Uses a `MutationObserver` to handle dynamic YouTube navigation (SPA behavior).
- Allows real-time toggling through a simple popup UI.
- Saves your comment visibility preference using Chrome's `sync` storage.

---

## 🖥️ Popup UI

Includes a simple and clean popup with:

- Toggle switch to hide/show comments
- Visual status text
- Persistent setting using Chrome storage API

---

## 🧩 Customization Options

Feel free to enhance the extension with:

- 🔑 Keyboard shortcuts
- 📺 Option to hide related/recommended videos or live chat
- ✨ Blur or fade-out effects instead of hiding
- 🎨 Styling improvements to the popup interface

---

## 📸 Icons

Place your PNG icons in the `icons/` folder:
- `icon16.png` – Toolbar icon
- `icon48.png` – Extension management page
- `icon128.png` – Chrome Web Store (optional)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

Built using Chrome Extension APIs and a strong desire to eliminate distractions while learning or working on YouTube.

---

## 🔗 Related

- [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
- [YouTube DOM Structure Reference](https://developers.google.com/youtube)

---

