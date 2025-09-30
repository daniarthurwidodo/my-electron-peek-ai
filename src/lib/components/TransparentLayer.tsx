import React, { useState } from 'react';
import { Button, Card, Modal, Slider, Switch } from 'antd';
import { SettingOutlined, EyeOutlined, EyeInvisibleOutlined, MinusOutlined, CloseOutlined, BorderOutlined } from '@ant-design/icons';

interface TransparentLayerProps {
  children?: React.ReactNode;
}

const TransparentLayer: React.FC<TransparentLayerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(0.3);
  const [blur, setBlur] = useState(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Window control functions
  const minimizeWindow = () => {
    if (window.electronAPI?.minimizeWindow) {
      window.electronAPI.minimizeWindow();
    }
  };

  const maximizeWindow = () => {
    if (window.electronAPI?.maximizeWindow) {
      window.electronAPI.maximizeWindow();
    }
  };

  const closeWindow = () => {
    if (window.electronAPI?.closeWindow) {
      window.electronAPI.closeWindow();
    }
  };

  const layerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '32px',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    zIndex: 1000,
    display: isVisible ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <>
      {/* Custom Title Bar */}
      <div className="fixed top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-100 to-gray-200 border-b border-gray-300 z-[1002] flex items-center justify-between px-2 select-none">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 ml-2">Peek AI</span>
        </div>
        <div className="flex space-x-0">
          <button
            onClick={minimizeWindow}
            className="w-8 h-8 flex items-center justify-center hover:bg-yellow-400/20 text-gray-600 hover:text-yellow-600 transition-colors"
            title="Minimize"
          >
            <MinusOutlined className="text-xs" />
          </button>
          <button
            onClick={maximizeWindow}
            className="w-8 h-8 flex items-center justify-center hover:bg-green-400/20 text-gray-600 hover:text-green-600 transition-colors"
            title="Maximize"
          >
            <BorderOutlined className="text-xs" />
          </button>
          <button
            onClick={closeWindow}
            className="w-8 h-8 flex items-center justify-center hover:bg-red-500 text-gray-600 hover:text-white transition-colors"
            title="Close"
          >
            <CloseOutlined className="text-xs" />
          </button>
        </div>
      </div>

      {/* Window Controls - Always Visible */}
      <div className="fixed top-10 right-2 z-[1001] flex space-x-1 bg-white/80 backdrop-blur-sm rounded-md p-1 shadow-lg">
        {/* App controls can go here if needed */}
      </div>

      {/* App Controls */}
      <div className="fixed top-4 left-4 z-50 flex space-x-2">
        <Button
          type="primary"
          icon={<SettingOutlined />}
          onClick={() => setIsSettingsOpen(true)}
          size="small"
        >
          Settings
        </Button>
        <Button
          type={isVisible ? "default" : "primary"}
          icon={isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          onClick={() => setIsVisible(!isVisible)}
          size="small"
        >
          {isVisible ? 'Hide' : 'Show'} Layer
        </Button>
      </div>

      {/* Transparent Layer */}
      <div style={layerStyle}>
        <Card
          className="max-w-md w-full mx-4 shadow-2xl"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Transparent Layer Active
            </h2>
            <p className="text-gray-600 mb-4">
              This content appears on top of the transparent overlay.
            </p>
            {children || (
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  Opacity: {(opacity * 100).toFixed(0)}%
                </p>
                <p className="text-sm text-gray-500">
                  Blur: {blur}px
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Settings Modal */}
      <Modal
        title="Transparent Layer Settings"
        open={isSettingsOpen}
        onCancel={() => setIsSettingsOpen(false)}
        footer={[
          <Button key="reset" onClick={() => {
            setOpacity(0.3);
            setBlur(1);
          }}>
            Reset
          </Button>,
          <Button key="ok" type="primary" onClick={() => setIsSettingsOpen(false)}>
            OK
          </Button>,
        ]}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Opacity: {(opacity * 100).toFixed(0)}%
            </label>
            <Slider
              min={0.1}
              max={1}
              step={0.1}
              value={opacity}
              onChange={setOpacity}
              tooltip={{ formatter: (value) => `${(value! * 100).toFixed(0)}%` }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Blur: {blur}px
            </label>
            <Slider
              min={0}
              max={10}
              step={0.5}
              value={blur}
              onChange={setBlur}
              tooltip={{ formatter: (value) => `${value}px` }}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Layer Visible</span>
            <Switch
              checked={isVisible}
              onChange={setIsVisible}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TransparentLayer;
