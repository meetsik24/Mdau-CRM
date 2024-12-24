import React from 'react';
import MessagesList from './components/MessagesList';
import InboxMetrics from './components/InboxMetrics';
import TeamMembers from './components/TeamMembers';

export default function TeamInboxPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Team Inbox</h1>
        <p className="text-gray-600">Collaborate on customer communications</p>
      </div>
      <InboxMetrics />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MessagesList />
        </div>
        <div>
          <TeamMembers />
        </div>
      </div>
    </div>
  );
}