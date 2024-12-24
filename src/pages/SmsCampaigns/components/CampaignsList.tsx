import React from 'react';
import { MessageSquare, MoreVertical, Users, Clock } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    name: 'Summer Sale Announcement',
    status: 'Active',
    recipients: 2500,
    sentAt: '2024-02-20T10:00:00',
    deliveryRate: 98.5,
  },
  {
    id: 2,
    name: 'Customer Feedback Survey',
    status: 'Scheduled',
    recipients: 1800,
    sentAt: '2024-02-22T15:00:00',
    deliveryRate: 0,
  },
];

export default function CampaignsList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Campaigns</h2>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{campaign.name}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {campaign.recipients.toLocaleString()} recipients
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {new Date(campaign.sentAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-sm rounded-full ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.status}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreVertical className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}