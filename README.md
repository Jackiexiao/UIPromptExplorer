# UI Prompt Explorer

A playful collection of UI themes prompts and design system for web applications, featuring a whimsical, sketchy aesthetic.

![UI Prompt Explorer](./public/themes/sketchy-dashboard.png)

## About

UI Prompt Explorer is a showcase of hand-drawn, sketch-style UI themes for various application types. Each theme features a unique, playful aesthetic with paper textures, hand-drawn elements, and sketch-like components to create a more human, creative digital experience.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Query
- **Form Handling**: React Hook Form with Zod validation

## Features

- Interactive theme gallery with categorized themes
- Detailed theme preview with design prompts
- Responsive design for all device sizes
- Playful animations and transitions
- Hand-drawn aesthetic with custom CSS styles
- Theme categories including:
  - Dashboards
  - Productivity apps
  - Portfolios
  - Blogs
  - Galleries
  - E-commerce
  - Social apps

## Architecture

The application follows a component-based architecture with the following structure:

- `/src`: Main source directory
  - `/components`: Reusable UI components
    - `/ui`: Shadcn UI components
  - `/data`: Theme data and utilities
  - `/hooks`: Custom React hooks
  - `/lib`: Utility functions and shared logic
  - `/pages`: Page components for routing

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or bun

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/UI Prompt Explorer.git
   cd UI Prompt Explorer
   ```

2. Install dependencies
   ```
   npm install
   # or
   bun install
   ```

3. Start the development server
   ```
   npm run dev
   # or
   bun dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Building for Production

```
npm run build
# or
bun run build
```

## Contributing

Contributions are welcome! Feel free to submit a pull request with new themes, improvements, or bug fixes.

## License

[MIT](LICENSE)
