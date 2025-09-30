import React from 'react';
import { Button, Card, Typography } from 'antd';
import { TransparentLayer } from '../components';
import '../../App.css';

// const { Title, Paragraph } = Typography;

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Transparent Layer Component */}
      <TransparentLayer>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">🎭 Transparent Overlay</h3>
          <p className="text-sm text-gray-600">
            This is a customizable transparent layer with blur effects!
          </p>
        </div>
      </TransparentLayer>
    </div>
  );
}

export default App;
