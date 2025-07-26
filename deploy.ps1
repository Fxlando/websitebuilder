# Deployment Script for Blob Token Website
Write-Host "🚀 Deploying Blob Token Website to Netlify..." -ForegroundColor Green

# Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "out") {
    Write-Host "✅ Build successful! Output in 'out' directory" -ForegroundColor Green
    
    # Deploy to Netlify
    Write-Host "🌐 Deploying to Netlify..." -ForegroundColor Yellow
    netlify deploy --dir=out --prod
    
    Write-Host "🎉 Deployment complete!" -ForegroundColor Green
    Write-Host "📱 Your website should now be live!" -ForegroundColor Cyan
} else {
    Write-Host "❌ Build failed! Check the build output above." -ForegroundColor Red
} 