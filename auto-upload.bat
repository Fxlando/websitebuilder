@echo off
echo 🚀 Starting automatic Git upload...
powershell -ExecutionPolicy Bypass -File scripts\git-auto-commit.ps1
pause 