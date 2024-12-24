import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Phone, 
  BarChart2,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const stats = [
  {
    title: 'Active Campaigns',
    value: '24',
    change: '+12%',
    isPositive: true,
    icon: MessageSquare
  },
  {
    title: 'Total Customers',
    value: '14,394',
    change: '+3.2%',
    isPositive: true,
    icon: Users
  },
  {
    title: 'Call Duration',
    value: '2.4h',
    change: '-1.1%',
    isPositive: false,
    icon: Phone
  },
  {
    title: 'Response Rate',
    value: '89%',
    change: '+4.5%',
    isPositive: true,
    icon: BarChart2
  }
];

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Monitor your communication metrics in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <span className={`flex items-center text-sm ${
                stat.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.isPositive ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}