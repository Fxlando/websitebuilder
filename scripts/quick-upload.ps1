# Quick Upload Script
# Simple script for manual uploads

Write-Host "🚀 Quick Upload to GitHub" -ForegroundColor Green

# Check for changes
$changes = git status --porcelain
if ([string]::IsNullOrEmpty($changes)) {
    Write-Host "✅ No changes to upload" -ForegroundColor Yellow
    exit 0
}

# Add and commit
git add .
git commit -m "Auto-upload: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push if remote exists
$remotes = git remote
if ($remotes -contains "origin") {
    git push
    Write-Host "✅ Successfully uploaded to GitHub!" -ForegroundColor Green
} else {
    Write-Host "⚠️  No remote configured. Changes committed locally." -ForegroundColor Yellow
} 