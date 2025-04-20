# Watch2Give – Vendor Dashboard

The Vendor Dashboard is a **Progressive Web App (PWA)** built using **Next.js**, **React**, and **Tailwind CSS**, designed for vendors to manage tokens, perform actions, and track engagement with users on the Watch2Give platform.

---

##  Visual Design

- **Gradient Background:** Vibrant transition from orange (#FF8C4B) to deep purple (#2C1668)
- **Card-Based UI:** Dark purple cards (#2D2A5E), rounded corners
- **Mobile-Responsive:** Mobile-first layout
- **Color Palette:** Purple, coral, teal, amber

---

## Component Architecture

- `VendorDashboard` – Main container
- `TokenActions` – Buttons for Redeem, Stake, Restock
- `QrScanner` – QR code scanner integration
- `PhotoUpload` – Photo capture and file upload

---

##  Key Features

### 1. Token Management

- Manual or QR code input
- Token state tracked via `useState`
- QR camera scanner toggled via `isScanning`

### 2. Action Selection

- Options: `Redeem`, `Stake`, `Restock`
- Visual feedback on selected action
- Managed by `selectedAction` state

### 3. Photo Upload

- Upload from device or capture via camera
- Live camera via `navigator.mediaDevices.getUserMedia`
- Captured photos stored in `uploadedPhotos`

### 4. Streak Tracking System

- 5-Day streak logic powered by `localStorage`
- Updates only once per 24–36hr window
- Flame icons reflect progress visually

```ts
const hoursSinceLastActivity = (now - lastActivity) / 3600000;
if (hoursSinceLastActivity <= 36) {
  // Valid streak logic
}
```

### 5. Responsive Header

- Centered dashboard title, logo left, streak flames right
- Uses flexbox and absolute positioning

### 6. Mobile Menu

- Full-screen overlay
- Controlled via `menuOpen` state

### 7. Form Validation

- Token must be entered
- Action must be selected
- Photo required for Restock action
- Errors shown via toast & inline status

---

## State Management

- **User Input:** `token`, `selectedAction`, `uploadedPhotos`
- **UI Logic:** `menuOpen`, `isScanning`, `showPhotoUpload`, `statusMessage`
- **Persistent:** `streakCount` from `localStorage`

---

## 🛠 Technical Notes

- Tailwind CSS for styling
- Toast notifications via built-in components
- Accessibility considered (semantic HTML, ARIA labels)
- Ready for further backend/API expansion

---

## 🔮 Future Features

- ✅ Token verification with backend
- ✅ Transaction history
- ✅ Offline PWA mode
- ✅ Vendor authentication
- ✅ Advanced camera editing (filters, cropping)

---

## Installation & Running Locally

```bash
git clone https://github.com/yourusername/vendor-dashboard.git
cd vendor-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev

# Open in your browser
http://localhost:3000
```

---

## 📁 Folder Structure

```
vendor-dashboard/
├── app/
├── components/
├── hooks/
├── lib/
├── public/
├── styles/
├── pages/...
└── tailwind.config.ts
```

---

## 🔗 Part of the Watch2Give Ecosystem

This dashboard is one of three core components:
1.  User Frontend – Ad-watching + engagement
2.  Vendor Dashboard – Token + proof management (this repo)
3.  Monitor Dashboard – Admin & AI agents for oversight

---
