const fs = require('fs');

async function analyze() {
  const html = fs.readFileSync('/home/pranav/.gemini/antigravity-ide/brain/50436063-fe55-41a4-af44-aee5cda389b5/.system_generated/steps/5/content.md', 'utf-8');
  
  // Extract just the body text to see the content structure
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) {
    console.log("No body found");
    return;
  }
  
  let body = bodyMatch[1];
  
  // Replace tags with simple indicators
  body = body.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  body = body.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '[SVG]');
  
  // Extract all text nodes with their tag names
  const tagRegex = /<([a-z0-9]+)[^>]*>([\s\S]*?)<\/\1>/gi;
  
  // Simply strip all HTML tags but keep some structure
  const cleanText = body
    .replace(/<[^>]+>/g, '\n')
    .replace(/\n\s+\n/g, '\n')
    .replace(/\n+/g, '\n')
    .trim();
    
  console.log("--- TEXT CONTENT ---");
  console.log(cleanText.substring(0, 2000));
}

analyze();
