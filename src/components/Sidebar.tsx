import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Bot, 
  Inbox, 
  BarChart2, 
  Settings,
  MessageCircle,
  Users,
  PieChart,
  Zap
} from 'lucide-react';

const menuItems = [
  { icon: MessageSquare, label: 'SMS Campaigns', href: '#sms' },
  { icon: Phone, label: 'Call Center', href: '#calls' },
  { icon: Bot, label: 'Chatbots', href: '#bots' },
  { icon: Inbox, label: 'Team Inbox', href: '#inbox' },
  { icon: BarChart2, label: 'Analytics', href: '#analytics' },
  { icon: Settings, label: 'Settings', href: '#settings' }
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <MessageCircle className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">CommHub</span>
        </div>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}