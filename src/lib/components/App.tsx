import React from 'react';
import { Button, Card } from 'antd';
import { TransparentLayer, TitleBar } from '../components';
import '../../App.css';

// const { Title, Paragraph } = Typography;

function App(): React.JSX.Element {
  return (
    <>
      {/* Custom Title Bar */}
      <TitleBar title="My Electron Peek AI" />
      
      <div 
        className="min-h-screen p-8 draggable-area" 
        style={{ 
          background: 'transparent',
          cursor: 'move',
          paddingTop: '40px'
        }}
      >
        {/* Transparent Layer Component */}
        <TransparentLayer>
          <div className="max-w-md mx-auto">
            <Card 
              className="non-draggable"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.06)', 
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'default'
              }}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">🎭 Transparent Overlay</h3>
                <p className="text-sm text-gray-200">
                  This is a customizable transparent layer with blur effects!
                </p>
                <div className="mt-4">
                  <Button type="primary">Primary Action</Button>
                </div>
              </div>
            </Card>
          </div>
        </TransparentLayer>
      </div>
    </>
  );
}

export default App;
