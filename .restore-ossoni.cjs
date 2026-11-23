const fs = require('fs');

const sourcePath = 'src/Pages/iPhoneM.jsx';
let text = fs.readFileSync(sourcePath, 'utf8');

const sections = [];
let cursor = 0;
while (cursor < text.length) {
    const start = text.indexOf('<section', cursor);
    if (start < 0) break;

    let depth = 0;
    let end = start;
    for (; end < text.length; end++) {
        if (text.startsWith('<section', end)) {
            depth++;
            end += 7;
        } else if (text.startsWith('</section>', end)) {
            depth--;
            if (depth === 0) {
                end += 10;
                break;
            }
        }
    }

    sections.push({ start, end });
    cursor = end;
}

let result = '';
cursor = 0;
for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    const number = String(index + 1).padStart(2, '0');
    result += text.slice(cursor, section.start);
    result += `<OssoniSection${number} />`;
    cursor = section.end;
}
result += text.slice(cursor);

result = result.replace(/import React from 'react'\r?\n(?:import .+\r?\n)+/, "import React from 'react'\n");

const sectionImports = sections.map((_, index) => {
    const number = String(index + 1).padStart(2, '0');
    return `import OssoniSection${number} from './OssoniSections/Section${number}'`;
}).join('\n');

result = result.replace(
    "import React from 'react'",
    `import React from 'react'\n${sectionImports}`,
);

fs.writeFileSync('src/Components/Ossoni.jsx', result, 'utf8');
console.log(`Restored Ossoni.jsx with ${sections.length} section components`);
