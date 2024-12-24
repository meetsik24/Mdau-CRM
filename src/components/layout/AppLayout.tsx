import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface AppLayoutProps {
  children: React.ReactNode;
  onPageChange: (page: string) => void;
}

export default function AppLayout({ children, onPageChange }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar onPageChange={onPageChange} />
      <div className="ml-64">
        <Header />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}