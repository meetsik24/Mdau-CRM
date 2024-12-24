import React from 'react';
import { User, Circle } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Wilson',
    role: 'Support Agent',
    status: 'Online',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Mike Brown',
    role: 'Support Agent',
    status: 'Busy',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Team Lead',
    status: 'Away',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

const statusColors = {
  Online: 'text-green-500',
  Busy: 'text-red-500',
  Away: 'text-yellow-500'
};

export default function TeamMembers() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Team Members</h2>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center space-x-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              <div className="flex items-center">
                <Circle className={`h-3 w-3 mr-2 fill-current ${statusColors[member.status]}`} />
                <span className="text-sm text-gray-500">{member.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}