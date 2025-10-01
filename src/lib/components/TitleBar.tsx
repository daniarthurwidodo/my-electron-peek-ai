import { Button } from 'antd';
import { Minus, Square, X, Move } from 'lucide-react';

interface TitleBarProps {
  title?: string;
  showWindowControls?: boolean;
  className?: string;
}

function TitleBar({ 
  title = "My Electron Peek AI", 
  showWindowControls = true,
  className = ""
}: TitleBarProps) {
  const handleMinimize = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.minimizeWindow();
    }
  };

  const handleMaximize = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.maximizeWindow();
    }
  };

  const handleClose = () => {
    if ((window as any).electronAPI) {
      (window as any).electronAPI.closeWindow();
    }
  };

  return (
    <div 
      className={`
        flex items-center justify-between h-8 px-3 
        bg-gray-800/80 backdrop-blur-sm border-b border-gray-600/50
        text-white text-sm select-none
        title-bar
        ${className}
      `}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        cursor: 'move',
      }}
    >
      {/* Left side - App Icon and Title */}
      <div className="flex items-center space-x-2 title-bar">
        <Move size={14} className="text-gray-400" />
        <span className="font-medium truncate">{title}</span>
      </div>

      {/* Center - Draggable area */}
      <div className="flex-1 title-bar" />

      {/* Right side - Window Controls */}
      {showWindowControls && (
        <div className="flex items-center space-x-1 non-draggable">
          <Button
            type="text"
            size="small"
            icon={<Minus size={12} />}
            onClick={handleMinimize}
            className="
              h-6 w-6 p-0 text-gray-400 hover:text-white 
              hover:bg-gray-700/50 border-0 non-draggable
            "
            style={{
              cursor: 'pointer',
              minWidth: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <Button
            type="text"
            size="small"
            icon={<Square size={12} />}
            onClick={handleMaximize}
            className="
              h-6 w-6 p-0 text-gray-400 hover:text-white 
              hover:bg-gray-700/50 border-0 non-draggable
            "
            style={{
              cursor: 'pointer',
              minWidth: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
          <Button
            type="text"
            size="small"
            icon={<X size={12} />}
            onClick={handleClose}
            className="
              h-6 w-6 p-0 text-gray-400 hover:text-white 
              hover:bg-red-500/70 border-0 non-draggable
            "
            style={{
              cursor: 'pointer',
              minWidth: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default TitleBar;
