import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AppLayout from './layout/AppLayout';
import Dashboard from './Dashboard';
import SmsCampaignsPage from '../pages/SmsCampaigns/SmsCampaignsPage';
import CallCenterPage from '../pages/CallCenter/CallCenterPage';
import ChatbotsPage from '../pages/Chatbots/ChatbotsPage';
import TeamInboxPage from '../pages/TeamInbox/TeamInboxPage';
import AnalyticsPage from '../pages/Analytics/AnalyticsPage';
import SettingsPage from '../pages/Settings/SettingsPage';
import Login from '../pages/Login';

export default function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  if (!isAuthenticated) {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'sms':
        return <SmsCampaignsPage />;
      case 'calls':
        return <CallCenterPage />;
      case 'bots':
        return <ChatbotsPage />;
      case 'inbox':
        return <TeamInboxPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppLayout onPageChange={setCurrentPage}>
      {renderPage()}
    </AppLayout>
  );
}