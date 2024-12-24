import React from 'react';
import { MessageSquare, Clock, CheckCircle, Users } from 'lucide-react';

const metrics = [
  {
    label: 'Total Messages',
    value: '1,284',
    change: '+8%',
    icon: MessageSquare,
  },
  {
    label: 'Avg. Response Time',
    value: '2.5m',
    change: '-12%',
    icon: Clock,
  },
  {
    label: 'Resolution Rate',
    value: '94%',
    change: '+5%',
    icon: CheckCircle,
  },
  {
    label: 'Active Agents',
    value: '12',
    change: '+1',
    icon: Users,
  },
];

export default function InboxMetrics() {
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