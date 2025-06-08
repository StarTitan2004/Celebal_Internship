import { Link } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/kanban">Kanban</Link>
      </nav>
    </div>
  );
}
