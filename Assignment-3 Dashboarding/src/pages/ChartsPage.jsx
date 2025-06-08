import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
];

export default function ChartsPage() {
  return (
    <div>
      <h2>📈 User Growth</h2>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="users" stroke="#007bff" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
