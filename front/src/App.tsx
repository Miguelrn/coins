import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-1">
          <LandingPage />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;