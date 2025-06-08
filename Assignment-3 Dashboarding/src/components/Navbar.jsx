import './Navbar.css';

export default function Navbar({ theme, setTheme }) {
  return (
    <div className="navbar">
      <h3>Welcome Admin</h3>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </div>
  );
}
