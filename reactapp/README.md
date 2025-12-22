# Loan Manager - React Application

A professional loan management system built with React that allows users to track and manage loan applications with an intuitive interface.

## Features

- **Loan List View**: Display all loans with status indicators
- **Add New Loans**: Form to create new loan entries
- **Status Management**: Track loan status (Pending, Approved, Rejected)
- **Responsive Design**: Mobile-friendly interface
- **Professional UI**: Clean, modern design with gradient backgrounds
- **Navigation**: Seamless routing between pages

## Technology Stack

- **React 19.2.3**: Frontend framework
- **React Router DOM 5.3.4**: Client-side routing
- **Context API**: State management
- **CSS3**: Styling with gradients and animations
- **Jest & React Testing Library**: Testing framework

## Project Structure

```
reactapp/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navigation.js      # Navigation bar component
│   │   ├── LoanList.js        # Loan listing component
│   │   ├── AddLoan.js         # Add loan form component
│   │   └── Footer.js          # Footer component
│   ├── context/
│   │   └── LoanContext.js     # Global state management
│   ├── tests/
│   │   └── App.test.js        # Test suite
│   ├── App.js                 # Main application component
│   ├── App.css                # Application styles
│   ├── index.js               # Application entry point
│   └── setupTests.js          # Test configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd reactapp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:8081`

4. **Run tests:**
   ```bash
   npm test
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

### Adding a New Loan
1. Click "Add Loan" in the navigation
2. Fill in the loan details:
   - Loan Name (e.g., "Home Loan", "Business Loan")
   - Loan Amount (numeric value)
   - Status (Pending, Approved, Rejected)
3. Click "Add Loan" to save

### Viewing Loans
- Navigate to "Loan List" to see all loans
- Each loan displays as a card with name, amount, and status
- Status is color-coded for easy identification

## Testing

The application includes comprehensive test coverage:
- ✅ Loan list page rendering
- ✅ Adding new loans
- ✅ Form field validation
- ✅ Navigation between pages
- ✅ Form submission handling
- ✅ Empty state handling

Run tests with: `npm test`

## Design Features

- **Modern UI**: Gradient backgrounds and smooth animations
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Professional Typography**: Clean, readable fonts
- **Color-coded Status**: Visual indicators for loan status
- **Hover Effects**: Interactive elements with smooth transitions
- **Sticky Navigation**: Always accessible navigation bar

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Loan Manager** - Professional loan management made simple.