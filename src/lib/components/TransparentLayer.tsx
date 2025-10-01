import React, { useState } from 'react';
import { Button, Card, Modal, Slider, Switch } from 'antd';
// icons used elsewhere imported from lucide-react; remove unused ant-design icons
import { Settings, Eye, EyeOff } from 'lucide-react';

interface TransparentLayerProps {
  children?: React.ReactNode;
}

const TransparentLayer: React.FC<TransparentLayerProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(0.3);
  const [blur, setBlur] = useState(1);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // No native title bar - window controls removed. Use OS window controls or implement custom ones in UI.

  const layerStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0px',
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
    pointerEvents: isVisible ? 'auto' : 'none',
    cursor: 'move',
  };

  return (
    <>

      {/* App Controls */}
      <div className="fixed top-4 left-4 z-50 flex space-x-2 non-draggable">
        <Button
          type="primary"
          icon={<Settings size={16} />}
          onClick={() => setIsSettingsOpen(true)}
          size="small"
        >
          Settings
        </Button>
        <Button
          type={isVisible ? "default" : "primary"}
          icon={isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          onClick={() => setIsVisible(!isVisible)}
          size="small"
        >
          {isVisible ? 'Hide' : 'Show'} Layer
        </Button>
      </div>

      {/* Transparent Layer */}
      <div style={layerStyle} className="draggable-area">
        <Card
          className="max-w-md w-full mx-4 shadow-2xl non-draggable"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Transparent Layer Active x
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
        className="non-draggable"
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

