import React from 'react';
import { TrendingUp, Users, MessageSquare, Phone } from 'lucide-react';

const metrics = [
  {
    label: 'Total Users',
    value: '24.8k',
    change: '+12%',
    icon: Users,
  },
  {
    label: 'Messages Sent',
    value: '156.2k',
    change: '+8%',
    icon: MessageSquare,
  },
  {
    label: 'Call Minutes',
    value: '2,845',
    change: '+15%',
    icon: Phone,
  },
  {
    label: 'Growth Rate',
    value: '18.2%',
    change: '+2.4%',
    icon: TrendingUp,
  },
];

export default function AnalyticsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.label} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <metric.icon className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-green-600">{metric.change}</span>
          </div>
          <h3 className="text-gray-600 text-sm">{metric.label}</h3>
          <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
        </div>
      ))}
    </div>
  );
}