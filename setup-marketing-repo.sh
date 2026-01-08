#!/bin/bash

# Script to set up the antipsyche-marketing repository

echo "Setting up antipsyche-marketing repository..."

# Create the marketing repo directory
cd ..
mkdir -p antipsyche-marketing
cd antipsyche-marketing

# Initialize git
git init

# Copy files from temporary location
cp -r /tmp/antipsyche-marketing/* .
cp /tmp/antipsyche-marketing/.gitignore .

# Create initial commit
git add .
git commit -m "Initial commit: Marketing strategy and good first issue templates"

echo "Marketing repository created successfully!"
echo ""
echo "Next steps:"
echo "1. Create a private GitHub repository named 'antipsyche-marketing'"
echo "2. Add the remote: git remote add origin https://github.com/yourusername/antipsyche-marketing.git"
echo "3. Push the initial commit: git push -u origin main"
echo ""
echo "Don't forget to return to the antipsyche directory and remove the marketing files!"