# Git Setup Script for Blob Token Landing Page
# This script initializes Git repository and configures it for automated uploads

param(
    [string]$UserName = "Blob Token Team",
    [string]$UserEmail = "team@blobtoken.com"
)

Write-Host "🚀 Setting up Git repository for Blob Token Landing Page..." -ForegroundColor Green

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Initialize Git repository if not already initialized
if (-not (Test-Path ".git")) {
    Write-Host "📁 Initializing Git repository..." -ForegroundColor Yellow
    git init
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

# Configure Git user
Write-Host "👤 Configuring Git user..." -ForegroundColor Yellow
git config user.name $UserName
git config user.email $UserEmail
Write-Host "✅ Git user configured: $UserName <$UserEmail>" -ForegroundColor Green

# Create .gitignore if it doesn't exist
if (-not (Test-Path ".gitignore")) {
    Write-Host "📝 Creating .gitignore file..." -ForegroundColor Yellow
    @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Next.js
.next/
out/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# next.js build output
.next

# nuxt.js build output
.nuxt

# vuepress build output
.vuepress/dist

# Serverless directories
.serverless

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
    Write-Host "✅ .gitignore file created" -ForegroundColor Green
} else {
    Write-Host "✅ .gitignore file already exists" -ForegroundColor Green
}

# Add all files to Git
Write-Host "📦 Adding files to Git..." -ForegroundColor Yellow
git add -A

# Create initial commit if no commits exist
if (-not (git rev-parse --verify HEAD 2>$null)) {
    Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
    git commit -m "Initial commit: Blob Token Landing Page"
    Write-Host "✅ Initial commit created" -ForegroundColor Green
} else {
    Write-Host "✅ Repository already has commits" -ForegroundColor Green
}

Write-Host "🎉 Git setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository" -ForegroundColor White
Write-Host "2. Add remote: git remote add origin <your-repo-url>" -ForegroundColor White
Write-Host "3. Push to GitHub: git push -u origin master" -ForegroundColor White
Write-Host ""
Write-Host "You can now use the automated upload system:" -ForegroundColor Cyan
Write-Host "- npm run git:commit (automatic commit and push)" -ForegroundColor White
Write-Host "- npm run git:commit:force (force push)" -ForegroundColor White
Write-Host "- npm run git:commit:custom \"message\" (custom commit message)" -ForegroundColor White 