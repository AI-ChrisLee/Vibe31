#!/bin/bash

# Membership Landing Page Template Setup Script

echo "🚀 Setting up your Membership Landing Page..."
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "📋 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✅ Created .env.local"
    echo ""
    echo "⚠️  Please edit .env.local and add your API keys!"
    echo ""
else
    echo "✅ .env.local already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your API keys"
echo "2. Update /variants/*.config.ts with your content"
echo "3. Customize /src/config/site.config.ts"
echo "4. Run 'npm run dev' to start development"
echo ""
echo "Happy building! 🎉"