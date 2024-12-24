import React from 'react';
import { 
  MessageSquare, 
  Phone, 
  Bot, 
  Inbox, 
  BarChart2, 
  Settings,
  MessageCircle,
  Layout
} from 'lucide-react';

interface SidebarProps {
  onPageChange: (page: string) => void;
}

const menuItems = [
  { icon: Layout, label: 'Dashboard', id: 'dashboard' },
  { icon: MessageSquare, label: 'SMS Campaigns', id: 'sms' },
  { icon: Phone, label: 'Call Center', id: 'calls' },
  { icon: Bot, label: 'Chatbots', id: 'bots' },
  { icon: Inbox, label: 'Team Inbox', id: 'inbox' },
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' }
];

export default function Sidebar({ onPageChange }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <MessageCircle className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">CommHub</span>
        </div>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors text-left"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}