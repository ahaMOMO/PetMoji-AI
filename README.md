# PetMoji AI - AI Pet Meme Editor

Transform your pet photos into stunning AI art with just one click! Create memes, figurines, portraits, and more.

## Features

- 🐾 **AI-Powered Transformation** - Advanced AI creates stunning artwork from pet photos
- 🎨 **Popular Templates** - Pet Figurine, 9-Grid Meme, Pet Portrait, Cute ID Photo
- 🌍 **Multi-language Support** - English, Chinese, Japanese, Korean, Russian
- 🔐 **User Authentication** - Email/password and Google OAuth
- 📱 **Responsive Design** - Mobile-first, works on all devices
- 📁 **History Management** - View, re-edit, and download past creations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: React Context
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/petmoji-ai.git
cd petmoji-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
# Authentication
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# API
NEXT_PUBLIC_API_URL=http://localhost:3001

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   ├── history/            # Generation history
│   ├── templates/          # Templates gallery
│   └── profile/            # User profile
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Home page sections
│   ├── auth/               # Authentication forms
│   ├── history/            # History components
│   ├── profile/            # Profile components
│   ├── templates/          # Templates gallery
│   ├── ui/                 # shadcn/ui components
│   ├── template-card.tsx   # Template card component
│   ├── upload-dialog.tsx   # Upload dialog
│   └── generate-panel.tsx  # AI generation panel
├── lib/
│   ├── i18n/               # Internationalization
│   ├── auth/               # Authentication context
│   ├── templates.ts        # Template definitions
│   └── utils.ts            # Utility functions
├── hooks/
│   └── use-templates.ts    # Templates hook
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

### Render

1. Create a new Web Service
2. Connect your repository
3. Set build command: \`npm run build\`
4. Set start command: \`npm start\`
5. Configure environment variables

## API Integration

This frontend is designed to work with a Node.js backend API. Configure the API URL in your environment variables.

### Expected API Endpoints

- \`POST /api/auth/login\` - User login
- \`POST /api/auth/signup\` - User registration
- \`POST /api/auth/google\` - Google OAuth
- \`POST /api/analyze\` - Analyze pet photo
- \`POST /api/generate\` - Generate AI transformation
- \`GET /api/history\` - Get user's generation history

## License

MIT License - feel free to use for personal and commercial projects.
```
