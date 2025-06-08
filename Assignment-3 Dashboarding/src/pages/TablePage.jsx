const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Editor' },
  { id: 3, name: 'Charlie', role: 'Viewer' },
];

export default function TablePage() {
  return (
    <div>
      <h2>👥 Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}><td>{user.id}</td><td>{user.name}</td><td>{user.role}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
