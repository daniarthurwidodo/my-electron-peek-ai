import React from 'react';
import { Button, Card, Typography } from 'antd';
import '../../App.css';

const { Title, Paragraph } = Typography;

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <div className="text-center mb-8">
            <Title level={1} className="text-blue-600 mb-4">
              Welcome to My Electron Peek AI
            </Title>
            <Paragraph className="text-gray-600 text-lg">
              A modern desktop application built with Electron, React, TypeScript, Tailwind CSS, and Ant Design.
            </Paragraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200" size="small">
              <Title level={4} className="text-blue-600 mb-2">🚀 Modern Tech Stack</Title>
              <Paragraph className="text-sm text-gray-600">
                Built with the latest technologies including React 19, TypeScript, and Electron.
              </Paragraph>
            </Card>

            <Card className="border-green-200" size="small">
              <Title level={4} className="text-green-600 mb-2">🎨 Beautiful UI</Title>
              <Paragraph className="text-sm text-gray-600">
                Styled with Tailwind CSS and Ant Design components for a modern look.
              </Paragraph>
            </Card>

            <Card className="border-purple-200" size="small">
              <Title level={4} className="text-purple-600 mb-2">⚡ Fast Development</Title>
              <Paragraph className="text-sm text-gray-600">
                Hot reloading and optimized builds with Vite for rapid development.
              </Paragraph>
            </Card>

            <Card className="border-orange-200" size="small">
              <Title level={4} className="text-orange-600 mb-2">🔧 Modular Architecture</Title>
              <Paragraph className="text-sm text-gray-600">
                Clean, organized code structure with reusable components and services.
              </Paragraph>
            </Card>
          </div>

          <div className="text-center">
            <Button type="primary" size="large" className="mr-4">
              Get Started
            </Button>
            <Button size="large">
              Learn More
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
