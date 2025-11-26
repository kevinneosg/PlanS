#!/bin/bash
# Vercel build script
npm run build
# Create the export-detail.json file that Vercel expects
mkdir -p .next
echo '{}' > .next/export-detail.json
