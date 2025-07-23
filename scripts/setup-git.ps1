# Git Setup Script for Automatic Uploads
# This script sets up Git repository and configures automatic uploads

param(
    [string]$RepoUrl = "",
    [string]$Branch = "main"
)

Write-Host "🔧 Setting up Git repository for automatic uploads..." -ForegroundColor Green

try {
    # Check if git is installed
    $gitVersion = git --version 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green

    # Initialize git repository if not already initialized
    if (-not (Test-Path ".git")) {
        Write-Host "📁 Initializing Git repository..." -ForegroundColor Blue
        git init
        if ($LASTEXITCODE -ne 0) {
            throw "Failed to initialize git repository"
        }
    } else {
        Write-Host "✅ Git repository already initialized" -ForegroundColor Green
    }

    # Set up git configuration if not already set
    $userName = git config user.name
    $userEmail = git config user.email
    
    if ([string]::IsNullOrEmpty($userName)) {
        Write-Host "👤 Setting up Git user name..." -ForegroundColor Blue
        $name = Read-Host "Enter your name for Git commits"
        git config user.name $name
    }
    
    if ([string]::IsNullOrEmpty($userEmail)) {
        Write-Host "📧 Setting up Git user email..." -ForegroundColor Blue
        $email = Read-Host "Enter your email for Git commits"
        git config user.email $email
    }

    # Set up remote repository if URL is provided
    if (-not [string]::IsNullOrEmpty($RepoUrl)) {
        Write-Host "🔗 Setting up remote repository..." -ForegroundColor Blue
        git remote add origin $RepoUrl
        if ($LASTEXITCODE -ne 0) {
            Write-Host "⚠️  Failed to add remote. It might already exist." -ForegroundColor Yellow
        }
    }

    # Create initial commit if repository is empty
    $commitCount = git rev-list --count HEAD 2>$null
    if ($LASTEXITCODE -ne 0 -or $commitCount -eq "0") {
        Write-Host "📝 Creating initial commit..." -ForegroundColor Blue
        git add .
        git commit -m "Initial commit: Project setup"
    }

    # Set up branch
    $currentBranch = git branch --show-current
    if ($currentBranch -ne $Branch) {
        Write-Host "🌿 Setting up branch: $Branch" -ForegroundColor Blue
        git checkout -b $Branch
    }

    # Create .gitignore if it doesn't exist
    if (-not (Test-Path ".gitignore")) {
        Write-Host "📄 Creating .gitignore file..." -ForegroundColor Blue
        @"
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Production builds
.next/
out/
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
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
    }

    Write-Host "✅ Git setup completed successfully!" -ForegroundColor Green
    Write-Host "💡 To use automatic uploads, run: .\scripts\git-auto-commit.ps1" -ForegroundColor Cyan
    Write-Host "💡 To set up remote repository: git remote add origin <your-repo-url>" -ForegroundColor Cyan

} catch {
    Write-Host "❌ Error during Git setup: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
} 