# Swift Translator Playwright Test Suite

**Student ID:** IT23199576

## Project Overview

This is an automated UI test suite for the **Swift Translator** (https://www.swifttranslator.com/) using Playwright. The suite includes 35 comprehensive test cases covering:
- **24 Positive Functional Tests** - Valid inputs that should produce correct Sinhala translations
- **1 Positive UI Test** - UI-specific test case
- **10 Negative Functional Tests** - Invalid/malformed inputs that should fail gracefully

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **macOS** (or Linux/Windows with adjustments)

## Installation Steps

### Step 1: Clone or Navigate to Project
```bash
cd /Users/dilshanherath/Desktop/ITPM/Swift-Translator-Play-Wright
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- Playwright framework
- Test runners and reporters
- Browser drivers

### Step 3: Verify Installation
```bash
npx playwright --version
```

## Running the Tests

### Run All Tests (Headed Mode - Live Demonstration)
```bash
npx playwright test --headed
```
This will:
- Open a browser window
- Run each test case with 1-second slowdown per action
- Display real-time text input and translations
- Show a summary report in the terminal

### Run Tests in Headless Mode (Background)
```bash
npx playwright test
```

### Run Specific Test
```bash
npx playwright test -g "Pos_Fun_0001"
```

### View Test Report
```bash
npx playwright show-report
```

## Test Case Categories

### Positive Functional Tests (Pos_Fun_0001 to Pos_Fun_0024)
**Purpose:** Verify correct translation of valid Sinhala romanized text

**Examples:**
- `oyaata kohomadha?` → `ඔයාට කොහොමද?` (How are you?)
- `mama bath kaala ivara velaa vathura bonavaa` → Valid Sinhala output

**Expected Behavior:** Output contains valid Sinhala Unicode characters

### Positive UI Test (Pos_UI_0001)
**Purpose:** Test specific UI interaction scenarios

**Example:**
- Input: `mama rata yatsama`
- Expected: Valid Sinhala translation output

**Expected Behavior:** Output contains valid Sinhala Unicode characters

### Negative Functional Tests (Neg_Fun_0001 to Neg_Fun_0010)
**Purpose:** Verify translator fails gracefully with invalid inputs

**Examples:**
- `mamahetagedharaenawaa` (no spaces - malformed)
- `mama heta udhee @5 ta gedhara yanawaa` (special characters)
- `uba heta u123dhee mokadha karanne ban ?` (numbers mixed in)

**Expected Behavior:** Output does NOT contain consecutive Sinhala characters (translation fails)

## Test Configuration

### playwright.config.ts

Key settings:
```typescript
headless: false          // Show browser window
slowMo: 1000           // 1 second delay between actions (for visibility)
workers: 1             // Run tests sequentially (not in parallel)
```

### Timeout Settings
- **Page load timeout:** Standard Playwright default (30s)
- **Translation wait:** 4 seconds per test (in convert function)

## Test Assertions

### Positive Tests
```typescript
expect(output).toMatch(/[\u0D80-\u0DFF]{2,}/)
```
Checks that output contains at least 2 consecutive Sinhala Unicode characters

### Negative Tests
```typescript
expect(output).not.toMatch(/[\u0D80-\u0DFF]{2,}/)
```
Checks that output does NOT contain consecutive Sinhala characters

## Expected Test Results

When you run `npx playwright test --headed`:

1. **Browser opens** - Shows swifttranslator.com
2. **Tests execute sequentially** - Each test:
   - Fills textarea with input
   - Waits 4 seconds for API conversion
   - Checks output against assertions
3. **Results displayed** - Pass/Fail indicators in terminal
4. **Report generated** - HTML report opens automatically

### Sample Output
```
✓ Pos_Fun_0001 - oyaata kohomadha? (2.5s)
✓ Pos_Fun_0002 - mama bath kaala ivara velaa vathura bonavaa (2.3s)
✗ Neg_Fun_0001 - mamahetagedharaenawaa (1.8s)
  Expected not to match /[\u0D80-\u0DFF]{2,}/
```

## Troubleshooting

### Issue: Tests run but no browser opens
**Solution:** Run with `--headed` flag:
```bash
npx playwright test --headed
```

### Issue: Tests timeout
**Solution:** Increase timeout in playwright.config.ts:
```typescript
timeout: 60000 // 60 seconds per test
```

### Issue: Website not responding
**Solution:** Verify internet connection and website availability:
```bash
curl https://www.swifttranslator.com/
```

### Issue: Port already in use
**Solution:** Kill the process and restart:
```bash
npx playwright test --headed
```

## Project Structure
```
Swift-Translator-Play-Wright/
├── README.md                    # This file
├── package.json                 # Dependencies
├── playwright.config.ts         # Test configuration
├── tests/
│   └── example.spec.ts         # All test cases
└── playwright-report/           # Auto-generated test reports
```

## Key Files

- **[tests/example.spec.ts](tests/example.spec.ts)** - Contains all 35 test scenarios
- **[playwright.config.ts](playwright.config.ts)** - Browser and test configuration
- **[package.json](package.json)** - Project dependencies and scripts

## Running Tests in Different Browsers

### Chrome (Default)
```bash
npx playwright test --headed --project=chromium
```

### Firefox
```bash
npx playwright test --headed --project=firefox
```

### Safari
```bash
npx playwright test --headed --project=webkit
```

## Notes

- Tests run **sequentially** (not in parallel) to avoid rate limiting
- Each test waits **4 seconds** for the translator API to respond
- Browser actions are slowed to **1 second** each for visibility
- All test results are saved in `playwright-report/` directory

## Contact

**Student ID:** IT23199576

---

**Last Updated:** January 31, 20