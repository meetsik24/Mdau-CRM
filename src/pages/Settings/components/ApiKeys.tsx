import React from 'react';
import { Key, Copy, RefreshCw } from 'lucide-react';

export default function ApiKeys() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">API Keys</h2>
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Key className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Production API Key</h3>
                  <p className="text-sm text-gray-500">Use this key for live environment</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Copy className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
              sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Key className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-medium">Test API Key</h3>
                  <p className="text-sm text-gray-500">Use this key for testing</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Copy className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <RefreshCw className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm">
              sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}