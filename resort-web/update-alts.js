const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walkDir(d) {
  const files = fs.readdirSync(d);
  files.forEach(f => {
    const fullPath = path.join(d, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Update alt="..." for literal strings
      const literalRegex = /alt="([^"]+)"/g;
      content = content.replace(literalRegex, (match, p1) => {
        if (!p1.toLowerCase().includes('ashirvad resort')) {
          changed = true;
          return `alt="Ashirvad Resort wayanad - ${p1}"`;
        }
        return match;
      });

      // Update alt={`...`}
      const templateRegex = /alt=\{`([^`]+)`\}/g;
      content = content.replace(templateRegex, (match, p1) => {
        if (!p1.toLowerCase().includes('ashirvad resort')) {
          changed = true;
          return `alt={\`Ashirvad Resort wayanad - ${p1}\`}`;
        }
        return match;
      });
      
      // Update alt={variable} 
      const varRegex = /alt=\{([a-zA-Z0-9_.]+)\}/g;
      content = content.replace(varRegex, (match, p1) => {
        changed = true;
        return `alt={\`Ashirvad Resort wayanad - \${${p1}}\`}`;
      });

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + fullPath);
      }
    }
  });
}

walkDir(dir);
