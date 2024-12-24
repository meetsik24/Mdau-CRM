import React from 'react';
import CallMetrics from './components/CallMetrics';
import ActiveCalls from './components/ActiveCalls';
import CallHistory from './components/CallHistory';

export default function CallCenterPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Call Center</h1>
        <p className="text-gray-600">Monitor and manage your call center operations</p>
      </div>
      <CallMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ActiveCalls />
        <CallHistory />
      </div>
    </div>
  );
}