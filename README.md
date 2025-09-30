# My Electron Peek AI

A desktop application built with Electron, React, and TypeScri## Project Structure

```text
my-electron-peek-ai/
├── src/
│   ├── lib/
│   │   ├── components/      # React components
│   │   │   ├── App.tsx     # Main application component
│   │   │   └── index.ts    # Component exports
│   │   ├── services/       # Business logic and services
│   │   │   ├── exampleService.ts
│   │   │   └── index.ts    # Service exports
│   │   └── index.ts        # Main library exports
│   ├── index.ts            # Electron main process
│   ├── main.tsx            # React application entry point
│   ├── preload.ts          # Electron preload script
│   ├── index.html          # HTML template
│   ├── index.css           # Global styles
│   └── App.css             # Component-specific styles
├── dist/                   # Built files
├── docs/                   # Documentation
├── forge.config.cjs        # Electron Forge configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # Node.js TypeScript config
├── package.json
└── README.md
```functionality.

## Description

This is an Electron application that provides AI capabilities in a desktop environment. Built using modern web technologies including React 19, TypeScript, and Vite for fast development and building. Features a modular architecture with organized components and services.

## Features

- **Desktop Application**: Native desktop experience built with Electron
- **TypeScript**: Full TypeScript support for better development experience
- **Modular Architecture**: Organized code structure with components and services
- **React UI**: Modern React-based user interface with Vite for fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Ant Design**: Enterprise-grade React UI component library
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Hot Reloading**: Development mode with live reloading

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/my-electron-peek-ai.git
   cd my-electron-peek-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the application:

   ```bash
   npm run build
   ```

## Usage

### Development

To run the application in development mode with hot reloading:

```bash
npm run dev
```

This will start the Vite development server on `http://localhost:3000` and launch the Electron app simultaneously.

### Production

To run the built application:

```bash
npm start
```

### Building

To build the application for production:

```bash
npm run build
```

### Packaging

To package the application for distribution:

```bash
npm run package
```

To create distributable packages:

```bash
npm run make
```

## Project Structure

```text
my-electron-peek-ai/
├── src/
│   ├── index.html
│   ├── index.js
│   ├── main.jsx
│   ├── App.jsx
│   ├── preload.js
│   └── ...
├── dist/          # Built files
├── docs/          # Documentation
├── forge.config.js
├── vite.config.js
├── package.json
└── README.md
```

## Technologies Used

- **Electron**: Desktop application framework (v38.2.0)
- **React**: UI library (v19.1.1) with TypeScript
- **TypeScript**: Type-safe JavaScript (v5.x)
- **Tailwind CSS**: Utility-first CSS framework
- **Ant Design**: Enterprise-grade React UI component library
- **Vite**: Build tool and development server (v6.3.6)
- **Node.js**: Runtime environment with ES modules

## Contributing to Development

### Adding Components

Add new React components to `src/lib/components/`:

```typescript
// src/lib/components/MyComponent.tsx
import React from 'react';

function MyComponent(): React.JSX.Element {
  return <div>My Component</div>;
}

export default MyComponent;
```

Update `src/lib/components/index.ts` to export the new component.

### Adding Services

Add new services to `src/lib/services/`:

```typescript
// src/lib/services/myService.ts
export const myService = {
  getData: () => {
    return 'Service data';
  }
};
```

Update `src/lib/services/index.ts` to export the new service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

### Dani Widodo

- Email: `work.daniarthurwidodo@gmail.com`

## Acknowledgments

- Electron Forge for application scaffolding
- Vite for fast development experience
- React community for excellent documentation
- TypeScript for type safety
