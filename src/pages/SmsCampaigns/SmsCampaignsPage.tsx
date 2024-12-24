import React from 'react';
import CampaignsList from './components/CampaignsList';
import CampaignMetrics from './components/CampaignMetrics';
import NewCampaignButton from './components/NewCampaignButton';

export default function SmsCampaignsPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SMS Campaigns</h1>
          <p className="text-gray-600">Manage and monitor your SMS campaigns</p>
        </div>
        <NewCampaignButton />
      </div>
      <CampaignMetrics />
      <CampaignsList />
    </div>
  );
}