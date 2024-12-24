import React from 'react';
import AnalyticsOverview from './components/AnalyticsOverview';
import PerformanceChart from './components/PerformanceChart';
import TopChannels from './components/TopChannels';

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track and analyze your communication metrics</p>
      </div>
      <AnalyticsOverview />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <div>
          <TopChannels />
        </div>
      </div>
    </div>
  );
}