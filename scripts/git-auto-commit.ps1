# Git Auto Commit and Push Script
# This script automatically commits and pushes changes to GitHub

param(
    [string]$CommitMessage = "Auto-commit: Task completed $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')",
    [switch]$Force = $false
)

# Set error action preference
$ErrorActionPreference = "Stop"

Write-Host "Starting automatic Git commit and push..." -ForegroundColor Green

try {
    # Check if we're in a git repository
    $gitStatus = git status 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Not in a git repository. Please initialize git first." -ForegroundColor Red
        exit 1
    }

    # Check if there are any changes to commit
    $changes = git status --porcelain
    if ([string]::IsNullOrEmpty($changes)) {
        Write-Host "No changes to commit. Working directory is clean." -ForegroundColor Yellow
        exit 0
    }

    # Add all changes
    Write-Host "Adding all changes..." -ForegroundColor Blue
    git add .
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to add changes"
    }

    # Commit changes
    Write-Host "Committing changes with message: $CommitMessage" -ForegroundColor Blue
    git commit -m $CommitMessage
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to commit changes"
    }

    # Check if remote exists
    $remotes = git remote
    if ($remotes -contains "origin") {
        # Push to remote
        Write-Host "Pushing to remote repository..." -ForegroundColor Blue
        if ($Force) {
            git push --force-with-lease
        } else {
            git push
        }
        
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Push failed. You may need to pull changes first or resolve conflicts." -ForegroundColor Yellow
            Write-Host "Try running: git pull origin $(git branch --show-current)" -ForegroundColor Cyan
            exit 1
        }
        
        Write-Host "Successfully pushed changes to GitHub!" -ForegroundColor Green
    } else {
        Write-Host "No remote repository configured. Changes committed locally." -ForegroundColor Yellow
        Write-Host "To set up remote: git remote add origin <your-repo-url>" -ForegroundColor Cyan
    }

} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "Git auto-commit completed successfully!" -ForegroundColor Green 