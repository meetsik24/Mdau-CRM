import React from 'react';
import { MessageSquare, Phone, Bot } from 'lucide-react';

const channels = [
  {
    name: 'SMS',
    usage: 45,
    icon: MessageSquare,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    name: 'Phone Calls',
    usage: 30,
    icon: Phone,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    name: 'Chatbots',
    usage: 25,
    icon: Bot,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  }
];

export default function TopChannels() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Top Channels</h2>
      <div className="space-y-4">
        {channels.map((channel) => (
          <div key={channel.name} className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg ${channel.bgColor}`}>
              <channel.icon className={`h-5 w-5 ${channel.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium">{channel.name}</span>
                <span className="text-sm text-gray-500">{channel.usage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full bg-${channel.color.split('-')[1]}-600`}
                  style={{ width: `${channel.usage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}