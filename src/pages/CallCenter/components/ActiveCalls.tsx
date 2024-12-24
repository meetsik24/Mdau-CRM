import React from 'react';
import { Phone, User, Clock } from 'lucide-react';

const activeCalls = [
  {
    id: 1,
    agent: 'Sarah Wilson',
    customer: 'John Doe',
    duration: '5:23',
    status: 'In Progress'
  },
  {
    id: 2,
    agent: 'Mike Brown',
    customer: 'Alice Smith',
    duration: '2:45',
    status: 'In Progress'
  },
  {
    id: 2,
    agent: 'Innocent Singo',
    customer: 'Magotech Tanzania',
    duration: '2;49',
    status: 'Pending'
  }
];

export default function ActiveCalls() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Active Calls</h2>
      <div className="space-y-4">
        {activeCalls.map((call) => (
          <div key={call.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="font-medium">{call.agent}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                    <Clock className="h-4 w-4" />
                    <span>{call.duration}</span>
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {call.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}