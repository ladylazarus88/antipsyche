#!/usr/bin/env node

/**
 * Script to save Claude conversation context and summary
 * This helps preserve important decisions and context from Claude Code sessions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const CONVERSATION_DIR = 'claude-conversations';
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
const SESSION_ID = `session-${TIMESTAMP}-${Date.now()}`;

// Ensure conversation directory exists
if (!fs.existsSync(CONVERSATION_DIR)) {
  fs.mkdirSync(CONVERSATION_DIR, { recursive: true });
}

// Function to save conversation context
function saveConversationContext() {
  const contextFile = path.join(CONVERSATION_DIR, `${SESSION_ID}-context.md`);
  
  // Context to save (you can expand this based on your needs)
  const context = `# Claude Conversation Context
Session ID: ${SESSION_ID}
Date: ${new Date().toISOString()}


`

  fs.writeFileSync(contextFile, context);
  console.log(`✅ Saved conversation context to: ${contextFile}`);
  return contextFile;
}

// Function to create summary
function createSummary() {
  const summaryFile = path.join(CONVERSATION_DIR, `${SESSION_ID}-summary.md`);
  
  const summary = `# Claude Session Summary
Session ID: ${SESSION_ID}
Date: ${new Date().toISOString()}


`;

  fs.writeFileSync(summaryFile, summary);
  console.log(`✅ Saved session summary to: ${summaryFile}`);
  return summaryFile;
}

// Function to save current file states
function saveFileSnapshots() {
  const snapshotFile = path.join(CONVERSATION_DIR, `${SESSION_ID}-snapshots.md`);
  
  const snapshots = `# File Snapshots
Session ID: ${SESSION_ID}
Date: ${new Date().toISOString()}

## Key Files at End of Session

### .gitignore
\`\`\`
${fs.readFileSync('.gitignore', 'utf8')}
\`\`\`

### CLAUDE.md
\`\`\`
${fs.readFileSync('CLAUDE.md', 'utf8')}
\`\`\`

### package.json (excerpt)
\`\`\`json
${JSON.stringify(JSON.parse(fs.readFileSync('package.json', 'utf8')), null, 2).split('\n').slice(0, 20).join('\n')}
...
\`\`\`
`;

  fs.writeFileSync(snapshotFile, snapshots);
  console.log(`✅ Saved file snapshots to: ${snapshotFile}`);
  return snapshotFile;
}

// Main execution
console.log('🤖 Saving Claude conversation context...\n');

try {
  const contextFile = saveConversationContext();
  const summaryFile = createSummary();
  const snapshotFile = saveFileSnapshots();
  
  console.log('\n✨ Successfully saved conversation data:');
  console.log(`   - Context: ${contextFile}`);
  console.log(`   - Summary: ${summaryFile}`);
  console.log(`   - Snapshots: ${snapshotFile}`);
  console.log('\n📁 All files saved in:', CONVERSATION_DIR);
} catch (error) {
  console.error('❌ Error saving conversation:', error.message);
  process.exit(1);
}