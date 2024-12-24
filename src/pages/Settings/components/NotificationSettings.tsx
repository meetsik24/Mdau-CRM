import React from 'react';
import { Bell, Mail, Phone } from 'lucide-react';

const notifications = [
  {
    id: 'email',
    label: 'Email Notifications',
    description: 'Receive email notifications for important updates',
    icon: Mail
  },
  {
    id: 'sms',
    label: 'SMS Notifications',
    description: 'Get SMS alerts for critical events',
    icon: Phone
  },
  {
    id: 'push',
    label: 'Push Notifications',
    description: 'Enable browser push notifications',
    icon: Bell
  }
];

export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <notification.icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{notification.label}</h3>
                  <p className="text-sm text-gray-500">{notification.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}