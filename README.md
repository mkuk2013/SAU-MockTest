# SAU Mock Test Web Application

A comprehensive, secure, and mobile-responsive Mock Test System for Sindh Agriculture University Tando Jam (SAU) Pre-Entry Test Preparation.

## 🚀 Features

### 🔐 Security Features
- **Password Protection**: Access control with password `saubatch2k26`
- **User Validation**: Name and email verification
- **Duplicate Prevention**: Prevents multiple attempts from same email/IP
- **IP Tracking**: Automatic user IP detection and logging

### 📱 User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Accessibility**: Keyboard navigation and screen reader friendly

### 🧠 Test Features
- **100 Questions**: Comprehensive question set with 4 options each
- **100 Minutes Timer**: Real-time countdown with automatic submission
- **Question Navigation**: Previous, Next, and direct question access
- **Flag System**: Mark questions for review
- **Clear Response**: Option to clear selected answers
- **Question Palette**: Visual overview of all questions with status indicators

### 📊 Results & Analytics
- **Instant Results**: Immediate score calculation and status
- **Detailed Statistics**: Correct, incorrect, and unattempted counts
- **Review Answers**: Complete answer review with correct/incorrect highlighting
- **PDF Export**: Generate downloadable PDF reports
- **Time Tracking**: Monitor time taken for completion

### 💾 Database Integration
- **Supabase Ready**: Full integration with Supabase PostgreSQL
- **Data Storage**: Comprehensive test data logging
- **Demo Mode**: Works offline for testing without database

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup for better accessibility
- **CSS3**: Modern styling with CSS custom properties
- **JavaScript (ES6+)**: Modern JavaScript features
- **jQuery**: Enhanced DOM manipulation
- **Bootstrap 5**: Responsive framework
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library

### Backend/Database
- **Supabase**: PostgreSQL database with real-time features
- **RESTful API**: Standard HTTP methods for data operations

### Additional Libraries
- **jsPDF**: Client-side PDF generation
- **IPify API**: IP address detection

## 📋 Database Schema

### Table: `sau_mocktest_result1`

| Column Name | Data Type | Description |
|-------------|-----------|-------------|
| `userName` | TEXT | Name of the test-taker |
| `userEmail` | TEXT | Email of the test-taker |
| `userIP` | TEXT | IP Address of the device |
| `score` | INTEGER | Marks obtained |
| `totalMarks` | INTEGER | Always 100 |
| `passingMarks` | INTEGER | Always 50 |
| `status` | TEXT | Pass / Fail |
| `timeTakenSeconds` | INTEGER | Time taken to complete test |
| `timestamp` | TIMESTAMP | Date and time of test submission |
| `answers` | JSON/TEXT | Submitted answers |
| `flaggedQuestions` | TEXT | Flagged questions during test |

## 🚀 Setup Instructions

### Option 1: Demo Mode (No Database Required)
1. Download the `sau_mock_test.html` file
2. Open it in any modern web browser
3. The system will run in demo mode with simulated database operations

### Option 2: Full Setup with Supabase

#### Step 1: Create Supabase Project
1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

#### Step 2: Create Database Table
Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE sau_mocktest_result1 (
    id SERIAL PRIMARY KEY,
    userName TEXT NOT NULL,
    userEmail TEXT NOT NULL UNIQUE,
    userIP TEXT NOT NULL,
    score INTEGER NOT NULL,
    totalMarks INTEGER DEFAULT 100,
    passingMarks INTEGER DEFAULT 50,
    status TEXT NOT NULL,
    timeTakenSeconds INTEGER NOT NULL,
    timestamp TIMESTAMP DEFAULT NOW(),
    answers TEXT NOT NULL,
    flaggedQuestions TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE sau_mocktest_result1 ENABLE ROW LEVEL SECURITY;

-- Allow insert for anonymous users
CREATE POLICY "Allow insert for anonymous users" ON sau_mocktest_result1
    FOR INSERT TO anon
    WITH CHECK (true);

-- Allow read for authenticated users (optional)
CREATE POLICY "Allow read for authenticated users" ON sau_mocktest_result1
    FOR SELECT TO authenticated
    USING (true);
```

#### Step 3: Configure the Application
1. Open `sau_mock_test.html`
2. Find these lines in the JavaScript section:
```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';
const demoMode = true;
```
3. Replace with your Supabase credentials:
```javascript
const SUPABASE_URL = 'https://your-actual-project.supabase.co';
const SUPABASE_ANON_KEY = 'your-actual-anon-key';
const demoMode = false;
```

## 🎮 Usage Instructions

### For Test Takers
1. **Access the Test**
   - Open the web page
   - Enter password: `saubatch2k26`
   - Provide your name and email

2. **Taking the Test**
   - Read each question carefully
   - Select your answer by clicking on the option
   - Use navigation buttons to move between questions
   - Flag questions you want to review later
   - Monitor the timer in the top-left corner

3. **Question Palette**
   - Blue: Current question
   - Green: Attempted questions
   - Orange: Flagged questions
   - White: Not attempted

4. **Completing the Test**
   - Click Submit on the last question
   - Review your results
   - Download PDF report if needed
   - Review answers to see correct/incorrect responses

### For Administrators
1. **Monitor Database**
   - Access Supabase dashboard
   - View submitted test results
   - Export data for analysis

2. **Customize Questions**
   - Modify the `generateQuestions()` function
   - Replace dummy questions with actual content
   - Update correct answers accordingly

## 🔧 Customization

### Adding Real Questions
Replace the `generateQuestions()` function with your actual questions:

```javascript
function generateQuestions() {
    questions = [
        {
            id: 1,
            subject: 'Biology',
            question: 'What is photosynthesis?',
            options: [
                'Process of making food using sunlight',
                'Process of breathing in plants',
                'Process of water absorption',
                'Process of seed germination'
            ],
            correctAnswer: 0 // Index of correct option (0-3)
        },
        // Add more questions...
    ];
}
```

### Styling Customization
Modify CSS custom properties in the `:root` selector:

```css
:root {
    --primary-color: #2563eb;     /* Main theme color */
    --secondary-color: #64748b;   /* Secondary color */
    --success-color: #10b981;     /* Success/correct color */
    --danger-color: #ef4444;      /* Error/incorrect color */
    --warning-color: #f59e0b;     /* Warning/flag color */
}
```

### Timer Customization
Change the test duration:

```javascript
let timeLeft = 6000; // 100 minutes in seconds
// Change to desired duration, e.g., 7200 for 120 minutes
```

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with large screen layout
- **Tablet**: Optimized layout with touch-friendly controls
- **Mobile**: Compact design with essential features prioritized

## 🔒 Security Features

1. **Password Protection**: Initial access control
2. **Email Validation**: Prevents duplicate test attempts
3. **IP Tracking**: Additional security layer
4. **Browser Protection**: Warns users before leaving during test
5. **Data Validation**: Client and server-side validation

## 🐛 Troubleshooting

### Common Issues

1. **Password Not Working**
   - Ensure you're using: `saubatch2k26`
   - Check for extra spaces or typos

2. **Database Connection Errors**
   - Verify Supabase credentials
   - Check internet connection
   - Ensure RLS policies are configured correctly

3. **PDF Generation Issues**
   - Ensure modern browser (Chrome, Firefox, Safari, Edge)
   - Check if pop-up blockers are disabled

4. **Timer Issues**
   - Refresh the page and restart
   - Check system clock accuracy

### Browser Compatibility
- **Recommended**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Minimum**: Any browser with ES6 support

## 📄 License

This project is created for educational purposes for Sindh Agriculture University Tando Jam.

## 🤝 Support

For technical support or questions:
1. Check the troubleshooting section
2. Review browser console for error messages
3. Ensure all dependencies are loaded correctly

## 🔄 Version History

- **v1.0.0**: Initial release with full feature set
  - Complete test interface
  - Supabase integration
  - PDF generation
  - Mobile responsiveness
  - Dark/Light theme support

---

**Note**: This is a complete, single-file web application that can be deployed on any web server or used locally. No additional build process or dependencies are required beyond the CDN libraries included in the HTML file.