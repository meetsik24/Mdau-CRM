import React from 'react';
import AccountSettings from './components/AccountSettings';
import NotificationSettings from './components/NotificationSettings';
import ApiKeys from './components/ApiKeys';

export default function SettingsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account and application settings</p>
      </div>
      <div className="space-y-8">
        <AccountSettings />
        <NotificationSettings />
        <ApiKeys />
      </div>
    </div>
  );
}