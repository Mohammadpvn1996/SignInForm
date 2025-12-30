# SignInForm

A modern, internationalized sign-up form built with Next.js 16, featuring email/phone authentication, social login, and comprehensive validation.

## Features

- 🌍 **Internationalization (i18n)**: Full support for English and Persian (Farsi) with RTL layout support
- 🎨 **Modern UI**: Built with Shadcn UI components and Tailwind CSS
- 🌓 **Theme Support**: Light and dark mode with smooth transitions
- 📱 **Multiple Auth Methods**: Email and phone number authentication
- 🔐 **Social Authentication**: Google sign-in integration
- ✅ **Form Validation**: Real-time validation using React Hook Form and Zod
- ♿ **Accessible**: Built with accessibility best practices
- 📦 **Type Safe**: Full TypeScript support

## Tech Stack

- **Framework**: Next.js 16.1.1
- **Language**: TypeScript
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Styling**: Tailwind CSS 4
- **Form Management**: React Hook Form 7 with Zod validation
- **Internationalization**: next-intl 4.6.1
- **Theme**: next-themes
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SignInForm
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
SignInForm/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── [locale]/          # Internationalized routes
│   │   │   └── auth/
│   │   │       └── sign-up/   # Sign-up page
│   │   └── globals.css        # Global styles
│   ├── Components/             # Reusable components
│   │   ├── Layout/            # Layout components
│   │   ├── Shadcn/            # Shadcn UI components
│   │   ├── LanguageSwitcher.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   ├── Main/                  # Feature-specific components
│   │   └── Auth/
│   │       └── SignUp/        # Sign-up feature
│   │           ├── Components/
│   │           ├── utils/
│   │           └── SignUp.tsx
│   ├── i18n/                  # Internationalization config
│   ├── lib/                   # Utility functions
│   ├── messages/              # Translation files
│   │   ├── en.json
│   │   └── fa.json
│   └── middleware.ts          # Next.js middleware
└── public/                    # Static assets
```

## Internationalization

The project supports multiple languages with automatic RTL layout for right-to-left languages:

- **English (en)**: Default locale
- **Persian/Farsi (fa)**: RTL layout enabled

Translation files are located in `src/messages/`. To add a new language:

1. Add the locale to `src/i18n/config.ts`
2. Create a new translation file in `src/messages/`
3. Update the routing configuration if needed

## Components

### SignUp Form Components

- **SignUpHeader**: Header section with title and description
- **SocialAuthSection**: Social authentication buttons (Google, etc.)
- **EmailAuthSection**: Email/phone input with validation
- **ActionButtons**: Continue and guest access buttons
- **TermsAndPrivacy**: Terms of service and privacy policy links

### Validation

The form includes comprehensive validation:
- Email format validation
- Phone number format validation and formatting
- Real-time error messages
- Touch-based validation (errors show after user interaction)

## Styling

The project uses Tailwind CSS 4 with custom configuration. Shadcn UI components are styled using CSS variables for theming.

### Theme Variables

Theme colors are defined in `src/app/globals.css` and support both light and dark modes.

## Development

### Code Style

- TypeScript strict mode enabled
- ESLint configured with Next.js rules
- Components follow React best practices
- All components are client components where needed

### Adding New Features

1. Create feature components in `src/Main/`
2. Add translations to `src/messages/`
3. Update routing in `src/app/[locale]/`

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]
