import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';
import ChartsPage from './pages/ChartsPage';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';
import './theme.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`app theme-${theme}`} data-theme={theme}>
      <Router>
        <Sidebar />
        <main style={{ marginLeft: '250px', padding: '1rem' }}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/kanban" element={<KanbanPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
