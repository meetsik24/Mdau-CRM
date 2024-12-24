import React from 'react';
import { MessageSquare, User, Clock } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'John Doe',
    message: 'Hi, I need help with my order #12345',
    timestamp: '2024-02-20T10:30:00',
    status: 'New'
  },
  {
    id: 2,
    sender: 'Alice Smith',
    message: 'When will my package arrive?',
    timestamp: '2024-02-20T09:45:00',
    status: 'In Progress'
  }
];

export default function MessagesList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="font-medium">{message.sender}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{message.message}</p>
                    <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2 py-1 text-sm rounded-full ${
                  message.status === 'New' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {message.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}