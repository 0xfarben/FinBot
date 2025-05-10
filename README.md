# FinBot - Financial Analysis Interface

A modern, AI-powered financial analysis interface built with Next.js and TypeScript. FinBot provides a user-friendly interface for interacting with financial data and analysis tools.

<p align="center">
  <img src="https://github.com/user-attachments/assets/7c62bbb2-6a17-41e2-ba40-85911946b5eb" alt="FinBot_picture" width="650"/>
</p>
<!-- <img src="https://github.com/user-attachments/assets/7c62bbb2-6a17-41e2-ba40-85911946b5eb" alt="FinBot Screenshot" width="600"/> -->

## 🚀 Features

- **Modern UI**: Clean and responsive interface built with Next.js and Tailwind CSS
- **AI Integration**: OpenAI-powered financial analysis and recommendations
- **Real-time Updates**: Live data updates and notifications
- **Dark Mode**: Support for both light and dark themes
- **Markdown Support**: Rich text formatting for financial reports
- **Code Highlighting**: Syntax highlighting for technical analysis
- **Type Safety**: Full TypeScript implementation

## 🛠️ Technology Stack

- **Framework**: Next.js 14.2.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **AI Integration**: OpenAI
- **State Management**: React Hooks
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+
- pnpm 8.6.3+
- Git

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd FinBot
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```env
GROQ_API_KEY=your-api-key
```

## 🏗️ Project Structure

```
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── lib/               # Utility functions and shared code
├── public/            # Static assets
├── uploads/           # File upload directory
├── .next/             # Next.js build output
├── node_modules/      # Dependencies
├── package.json       # Project configuration
└── tsconfig.json      # TypeScript configuration
```

## 🚀 Development

1. Start the development server:
```bash
pnpm dev
```

2. Build for production:
```bash
pnpm build
```

3. Start production server:
```bash
pnpm start
```

## 📝 Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint
- `pnpm lint:fix`: Fix ESLint issues
- `pnpm type-check`: Run TypeScript type checking
- `pnpm format:write`: Format code with Prettier
- `pnpm format:check`: Check code formatting

## 🎨 UI Components

The project uses Radix UI components for a consistent and accessible user interface:
- Alert Dialog
- Dialog
- Dropdown Menu
- Label
- Select
- Separator
- Switch
- Tooltip

## 🔒 Security

- Environment variable protection
- API key management
- Secure file uploads
- Input validation

## 🧪 Testing

1. Run type checking:
```bash
pnpm type-check
```

2. Run linting:
```bash
pnpm lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please open an issue in the repository or contact the development team.

## 🔄 Integration with Main Project

FinBot is designed to work seamlessly with the main financial analysis platform. It communicates with the backend through REST APIs and WebSocket connections for real-time updates.

### Key Integration Points:
- Stock data visualization
- Technical analysis tools
- Trading strategy interface
- Risk management dashboard
- Real-time market updates 
