import React from 'react';
import { Phone, Clock, UserCheck, BarChart2 } from 'lucide-react';

const metrics = [
  {
    label: 'Total Calls',
    value: '1,284',
    change: '+8%',
    icon: Phone,
  },
  {
    label: 'Avg. Call Duration',
    value: '4m 32s',
    change: '-2%',
    icon: Clock,
  },
  {
    label: 'Active Agents',
    value: '12',
    change: '+1',
    icon: UserCheck,
  },
  {
    label: 'Resolution Rate',
    value: '94%',
    change: '+5%',
    icon: BarChart2,
  },
];

export default function CallMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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