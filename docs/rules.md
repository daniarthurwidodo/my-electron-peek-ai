# Rules & Guidelines

This document outlines the development rules, coding standards, and guidelines for the My Electron Peek AI project.

## Development Principles

### Code Quality

- **TypeScript First**: All code must be written in TypeScript with strict type checking
- **ESLint Compliance**: Code must pass all ESLint rules without warnings
- **Clean Code**: Follow clean code principles and maintain readability
- **DRY Principle**: Don't Repeat Yourself - reuse code through utilities and components

### Architecture Rules

- **Modular Design**: Keep components small, focused, and reusable
- **Separation of Concerns**: UI logic separate from business logic
- **Single Responsibility**: Each module/function should have one clear purpose
- **Dependency Injection**: Use proper dependency management

## File Organization

### Directory Structure

```text
src/
├── lib/
│   ├── components/     # React components only
│   ├── services/       # Business logic and API calls
│   └── utils/          # Utility functions (if needed)
├── types/              # TypeScript type definitions
├── index.ts            # Electron main process
├── main.tsx            # React entry point
├── preload.ts          # Electron preload script
└── *.ts                # Other Electron-specific files
```

### Naming Conventions

- **Files**: PascalCase for components, camelCase for utilities
- **Components**: PascalCase (e.g., `TransparentLayer.tsx`)
- **Functions**: camelCase (e.g., `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_OPACITY`)
- **Types**: PascalCase with 'Type' suffix (e.g., `UserType`)

## Component Guidelines

### React Best Practices

- Use functional components with hooks
- Prefer custom hooks for reusable logic
- Avoid class components unless absolutely necessary
- Use TypeScript interfaces for props

### Component Structure

```typescript
interface ComponentNameProps {
  // Define props interface
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic here

  return (
    // JSX here
  );
};

export default ComponentName;
```

### State Management

- Use `useState` for local component state
- Use `useContext` for shared state when needed
- Avoid prop drilling with context providers
- Keep state as close to usage as possible

## Service Layer Guidelines

### Service Structure

```typescript
// services/exampleService.ts
import { logger } from './logger';

export const exampleService = {
  async getData(): Promise<DataType> {
    try {
      logger.info('Fetching data');
      // Implementation
      return data;
    } catch (error) {
      logger.error('Failed to fetch data', error);
      throw error;
    }
  }
};
```

### Error Handling

- Always wrap async operations in try-catch blocks
- Log errors appropriately using Pino logger
- Provide meaningful error messages
- Don't expose internal errors to users

## Styling Guidelines

### Tailwind CSS

- Use utility-first approach
- Follow mobile-first responsive design
- Use consistent spacing scale
- Avoid arbitrary values when possible

### Component Styling

- Prefer Tailwind classes over custom CSS
- Use CSS modules for complex component styles
- Maintain consistent color palette
- Follow accessibility guidelines

## Electron-Specific Rules

### Main Process

- Keep main process lightweight
- Use IPC for communication with renderer
- Handle all security considerations
- Follow Electron security best practices

### Renderer Process

- Never use Node.js APIs directly
- Use contextBridge for secure IPC communication
- Keep renderer process focused on UI
- Handle uncaught errors gracefully

## Logging Standards

### Pino Logger Usage

```typescript
import { logger } from '../services/logger';

// Different log levels
logger.debug('Debug information');
logger.info('General information');
logger.warn('Warning messages');
logger.error('Error messages');
```

### When to Log

- **Debug**: Development troubleshooting information
- **Info**: Important application events
- **Warn**: Potentially harmful situations
- **Error**: Application errors and exceptions

## Testing Guidelines

### Unit Tests

- Test components in isolation
- Mock external dependencies
- Cover happy path and error scenarios
- Maintain >80% code coverage

### Integration Tests

- Test component interactions
- Test service integrations
- Test Electron IPC communication
- Use appropriate test runners

## Git Workflow

### Commit Messages

- Use conventional commit format
- Start with type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Keep messages concise but descriptive
- Reference issue numbers when applicable

### Branch Naming

- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Documentation: `docs/description`
- Use kebab-case for descriptions

## Performance Guidelines

### React Performance

- Use `React.memo` for expensive components
- Optimize re-renders with `useMemo` and `useCallback`
- Lazy load components with `React.lazy`
- Avoid unnecessary renders

### Bundle Optimization

- Keep bundle size under 5MB
- Use dynamic imports for code splitting
- Optimize images and assets
- Monitor bundle analyzer regularly

## Security Considerations

### Electron Security

- Enable context isolation
- Use preload scripts for secure IPC
- Validate all IPC messages
- Keep dependencies updated

### Data Protection

- Never store sensitive data in local storage
- Use secure IPC for sensitive operations
- Follow OWASP guidelines
- Implement proper input validation

## Documentation Requirements

### Code Documentation

- Add JSDoc comments for public APIs
- Document complex business logic
- Include usage examples
- Keep documentation up-to-date

### README Updates

- Update README for new features
- Document setup and installation steps
- Include troubleshooting guides
- Maintain changelog

## Code Review Checklist

### Before Submitting

- [ ] TypeScript compilation passes
- [ ] ESLint passes with no warnings
- [ ] Tests pass and coverage maintained
- [ ] Documentation updated
- [ ] Commit message follows conventions

### Review Criteria

- [ ] Code follows established patterns
- [ ] Security considerations addressed
- [ ] Performance implications considered
- [ ] Error handling implemented
- [ ] Logging appropriate for operations
