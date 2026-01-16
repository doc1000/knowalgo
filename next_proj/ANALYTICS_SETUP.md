# Analytics & Error Tracking Setup

## ✅ What's Been Set Up

### 1. Google Analytics
- ✅ Analytics component created (`components/Analytics.tsx`)
- ✅ Automatically tracks page views
- ✅ Tracks button clicks and link clicks
- ✅ Works with static export
- ✅ **Configured**:
  - Stream Name: Knowledge Algorithms
  - Stream URL: https://www.knowledgealgorithms.com
  - Measurement ID: `G-2HMTB2L10X`
  - Stream ID: 13313916729

### 2. Error Tracking
- ✅ Error boundary component (`components/ErrorBoundary.tsx`)
- ✅ Global error handlers for unhandled errors
- ✅ Error logging utility (`lib/errorTracking.ts`)
- ✅ User-friendly error page

### 3. Event Tracking
- ✅ Button clicks tracked
- ✅ Link clicks tracked
- ✅ Custom events can be added easily

## 🚀 Setup Instructions

### Google Analytics Setup

1. **Create a Google Analytics account** (if you don't have one):
   - Go to https://analytics.google.com/
   - Create a new property
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add your Measurement ID**:
   - Copy `.env.example` to `.env.local`
   - Replace `G-XXXXXXXXXX` with your actual Measurement ID:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

3. **Test it**:
   - Run `npm run dev`
   - Open your site
   - Check Google Analytics Real-Time reports to see if events are coming through

### Optional: Sentry Setup

1. **Create a Sentry account**:
   - Go to https://sentry.io/
   - Create a new project
   - Get your DSN

2. **Install Sentry**:
   ```bash
   npm install @sentry/nextjs
   ```

3. **Initialize Sentry**:
   - Follow Sentry's Next.js setup guide
   - Uncomment Sentry code in `lib/errorTracking.ts`

## 📊 What Gets Tracked

### Automatic Tracking
- **Page views**: Every page navigation
- **Errors**: JavaScript errors and unhandled promise rejections
- **Button clicks**: "GET IN TOUCH" and "READ MORE" buttons
- **Link clicks**: Email, GitHub, and LinkedIn links

### Custom Events

You can track custom events anywhere in your code:

```typescript
import { logEvent } from '@/lib/errorTracking';

// Track a custom event
logEvent('custom_event_name', {
  category: 'engagement',
  label: 'specific_action',
});
```

## 🔍 Viewing Analytics

### Google Analytics
1. Go to https://analytics.google.com/
2. Select your property
3. View reports:
   - **Real-Time**: See current visitors
   - **Events**: See button/link clicks
   - **Pages**: See page views

### Error Tracking
- Errors are logged to the browser console (development)
- Errors are sent to Google Analytics as events
- If Sentry is set up, errors will appear in Sentry dashboard

## 🧪 Testing

1. **Test Analytics**:
   - Click buttons and links
   - Navigate between pages
   - Check Google Analytics Real-Time reports

2. **Test Error Tracking**:
   - Open browser console
   - Trigger an error (e.g., `throw new Error('test')`)
   - Verify error appears in console and Analytics

## 📝 Notes

- Analytics only loads if `NEXT_PUBLIC_GA_ID` is set
- No tracking in development unless explicitly enabled
- All tracking respects user privacy (no PII collected)
- Error boundary shows user-friendly error page
- Error details only shown in development mode
