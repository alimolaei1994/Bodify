$ErrorActionPreference = "Stop"

Set-Location "C:\Users\10\Documents\Bodify"
$env:PATH += ";C:\Program Files\nodejs"

Write-Host "Running npm install..."
npm.cmd install --progress=false --legacy-peer-deps

