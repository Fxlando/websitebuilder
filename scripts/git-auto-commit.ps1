# Git Auto-Commit Script for Blob Token Landing Page
# This script automatically commits and pushes changes to GitHub

param(
    [string]$CommitMessage = "Auto-commit: Blob Token Landing Page updates",
    [switch]$Force,
    [switch]$CustomMessage
)

Write-Host "🚀 Starting automated Git upload for Blob Token Landing Page..." -ForegroundColor Green

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✅ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're in a Git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Not in a Git repository. Running setup..." -ForegroundColor Yellow
    & "$PSScriptRoot\setup-git.ps1"
}

# Check if there are any changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ No changes to commit. Repository is up to date." -ForegroundColor Green
    exit 0
}

Write-Host "📦 Changes detected. Preparing to commit..." -ForegroundColor Yellow

# Add all changes
Write-Host "📁 Adding all changes..." -ForegroundColor Yellow
git add -A

# Create commit
if ($CustomMessage) {
    $CommitMessage = Read-Host "Enter your commit message"
}

Write-Host "💾 Creating commit: $CommitMessage" -ForegroundColor Yellow
git commit -m $CommitMessage

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit created successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to create commit" -ForegroundColor Red
    exit 1
}

# Check if remote exists
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "⚠️  No remote repository configured." -ForegroundColor Yellow
    Write-Host "Please add a remote repository:" -ForegroundColor White
    Write-Host "git remote add origin <your-github-repo-url>" -ForegroundColor White
    exit 1
}

Write-Host "🌐 Pushing to remote repository..." -ForegroundColor Yellow

# Push to remote
if ($Force) {
    Write-Host "⚠️  Force pushing changes..." -ForegroundColor Yellow
    git push --force-with-lease origin master
} else {
    git push origin master
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your changes are now live on GitHub" -ForegroundColor Cyan
} else {
    Write-Host "❌ Failed to push to GitHub" -ForegroundColor Red
    Write-Host "💡 Try running: git push origin master" -ForegroundColor Yellow
    Write-Host "💡 Or use force push: npm run git:commit:force" -ForegroundColor Yellow
    exit 1
}

Write-Host "🎉 Automated upload completed successfully!" -ForegroundColor Green 