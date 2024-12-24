import React from 'react';
import { Phone, User, Clock, CheckCircle, XCircle } from 'lucide-react';

const callHistory = [
  {
    id: 1,
    agent: 'Sarah Wilson',
    customer: 'John Doe',
    duration: '8:45',
    status: 'Completed',
    timestamp: '2024-02-20T14:30:00'
  },
  {
    id: 2,
    agent: 'Mike Brown',
    customer: 'Alice Smith',
    duration: '3:12',
    status: 'Missed',
    timestamp: '2024-02-20T13:15:00'
  }
];

export default function CallHistory() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Calls</h2>
      <div className="space-y-4">
        {callHistory.map((call) => (
          <div key={call.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  call.status === 'Completed' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {call.status === 'Completed' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{call.agent}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>{call.duration}</span>
                    <span>•</span>
                    <span>{new Date(call.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                call.status === 'Completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {call.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}