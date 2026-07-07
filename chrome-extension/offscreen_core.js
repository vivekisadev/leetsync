/* ============================================================
   THEME DEFINITIONS
   ============================================================ */
const THEMES = {
  tokyoNight: {
    label: 'Tokyo Night', bg:'#1a1b26', chrome:'#16161e', text:'#a9b1d6',
    comment:'#565f89', string:'#9ece6a', keyword:'#bb9af7', func:'#7aa2f7',
    number:'#ff9e64', cls:'#2ac3de', punct:'#89ddff', variable:'#c0caf5',
    lineNum:'#3b3f58', dots:['#f7768e','#e0af68','#9ece6a']
  },
  dracula: {
    label:'Dracula', bg:'#282a36', chrome:'#21222c', text:'#f8f8f2',
    comment:'#6272a4', string:'#f1fa8c', keyword:'#ff79c6', func:'#50fa7b',
    number:'#bd93f9', cls:'#8be9fd', punct:'#f8f8f2', variable:'#f8f8f2',
    lineNum:'#6272a4', dots:['#ff5555','#f1fa8c','#50fa7b']
  },
  nord: {
    label:'Nord', bg:'#2e3440', chrome:'#272c36', text:'#d8dee9',
    comment:'#616e88', string:'#a3be8c', keyword:'#81a1c1', func:'#88c0d0',
    number:'#b48ead', cls:'#8fbcbb', punct:'#eceff4', variable:'#d8dee9',
    lineNum:'#4c566a', dots:['#bf616a','#ebcb8b','#a3be8c']
  },
  monokai: {
    label:'Monokai', bg:'#272822', chrome:'#1e1f1c', text:'#f8f8f2',
    comment:'#75715e', string:'#e6db74', keyword:'#f92672', func:'#a6e22e',
    number:'#ae81ff', cls:'#66d9ef', punct:'#f8f8f2', variable:'#f8f8f2',
    lineNum:'#5b5c56', dots:['#f92672','#e6db74','#a6e22e']
  },
  githubDark: {
    label:'GitHub Dark', bg:'#0d1117', chrome:'#161b22', text:'#c9d1d9',
    comment:'#8b949e', string:'#a5d6ff', keyword:'#ff7b72', func:'#d2a8ff',
    number:'#79c0ff', cls:'#ffa657', punct:'#c9d1d9', variable:'#c9d1d9',
    lineNum:'#484f58', dots:['#ff5f56','#ffbd2e','#27c93f']
  },
  oneDark: {
    label:'One Dark', bg:'#282c34', chrome:'#21252b', text:'#abb2bf',
    comment:'#5c6370', string:'#98c379', keyword:'#c678dd', func:'#61afef',
    number:'#d19a66', cls:'#e5c07b', punct:'#abb2bf', variable:'#e06c75',
    lineNum:'#495162', dots:['#e06c75','#e5c07b','#98c379']
  },
  synthwave: {
    label:"Synthwave '84", bg:'#241b2f', chrome:'#1a1425', text:'#f4eee4',
    comment:'#848bbd', string:'#ff8b39', keyword:'#f97e72', func:'#36f9f6',
    number:'#f97e72', cls:'#fede5d', punct:'#f4eee4', variable:'#f4eee4',
    lineNum:'#4d4470', dots:['#ff5f9e','#fede5d','#36f9f6']
  },
  catppuccin: {
    label:'Catppuccin', bg:'#1e1e2e', chrome:'#181825', text:'#cdd6f4',
    comment:'#6c7086', string:'#a6e3a1', keyword:'#cba6f7', func:'#89b4fa',
    number:'#fab387', cls:'#f9e2af', punct:'#cdd6f4', variable:'#f38ba8',
    lineNum:'#585b70', dots:['#f38ba8','#f9e2af','#a6e3a1']
  },
  gruvbox: {
    label:'Gruvbox', bg:'#282828', chrome:'#1d2021', text:'#ebdbb2',
    comment:'#928374', string:'#b8bb26', keyword:'#fb4934', func:'#fabd2f',
    number:'#d3869b', cls:'#8ec07c', punct:'#ebdbb2', variable:'#ebdbb2',
    lineNum:'#665c54', dots:['#fb4934','#fabd2f','#b8bb26']
  },
  solarized: {
    label:'Solarized Dark', bg:'#002b36', chrome:'#00212a', text:'#93a1a1',
    comment:'#586e75', string:'#2aa198', keyword:'#268bd2', func:'#b58900',
    number:'#d33682', cls:'#cb4b16', punct:'#93a1a1', variable:'#839496',
    lineNum:'#264f57', dots:['#dc322f','#b58900','#2aa198']
  },
  ayuDark: {
    label:'Ayu Dark', bg:'#0b0e14', chrome:'#0d1017', text:'#bfbdb6',
    comment:'#5c6773', string:'#aad94c', keyword:'#ff8f40', func:'#ffb454',
    number:'#d2a6ff', cls:'#59c2ff', punct:'#bfbdb6', variable:'#bfbdb6',
    lineNum:'#4d5566', dots:['#f28779','#ffb454','#aad94c']
  },
  palenight: {
    label:'Palenight', bg:'#292d3e', chrome:'#232635', text:'#a6accd',
    comment:'#676e95', string:'#c3e88d', keyword:'#c792ea', func:'#82aaff',
    number:'#f78c6c', cls:'#ffcb6b', punct:'#89ddff', variable:'#f07178',
    lineNum:'#4b526d', dots:['#f07178','#ffcb6b','#c3e88d']
  },
  nightOwl: {
    label:'Night Owl', bg:'#011627', chrome:'#010e1a', text:'#d6deeb',
    comment:'#637777', string:'#ecc48d', keyword:'#c792ea', func:'#82aaff',
    number:'#f78c6c', cls:'#7fdbca', punct:'#d6deeb', variable:'#addb67',
    lineNum:'#4b6479', dots:['#ef5350','#f9c859','#addb67']
  },
  rosePine: {
    label:'Rosé Pine', bg:'#191724', chrome:'#14121f', text:'#e0def4',
    comment:'#6e6a86', string:'#f6c177', keyword:'#c4a7e7', func:'#9ccfd8',
    number:'#eb6f92', cls:'#ebbcba', punct:'#908caa', variable:'#e0def4',
    lineNum:'#524f67', dots:['#eb6f92','#f6c177','#9ccfd8']
  },
  cobalt2: {
    label:'Cobalt2', bg:'#193549', chrome:'#122738', text:'#ffffff',
    comment:'#0088ff', string:'#3ad900', keyword:'#ffee80', func:'#ffc600',
    number:'#ff628c', cls:'#9effff', punct:'#e1efff', variable:'#e1efff',
    lineNum:'#3f7ba7', dots:['#ff628c','#ffc600','#3ad900']
  },
  shadesOfPurple: {
    label:'Shades of Purple', bg:'#2d2b55', chrome:'#232145', text:'#ffffff',
    comment:'#a599e9', string:'#a5ff90', keyword:'#ff9d00', func:'#fad000',
    number:'#f8d000', cls:'#9effff', punct:'#ffffff', variable:'#9effff',
    lineNum:'#6a67a3', dots:['#ff628c','#fad000','#a5ff90']
  },
  vesper: {
    label:'Vesper', bg:'#101010', chrome:'#0a0a0a', text:'#ffffff',
    comment:'#66686c', string:'#99ffe4', keyword:'#ff8080', func:'#ffc799',
    number:'#ffc799', cls:'#a0a0a0', punct:'#ffffff', variable:'#ffffff',
    lineNum:'#4d4d4d', dots:['#ff8080','#ffc799','#99ffe4']
  },
  horizon: {
    label:'Horizon', bg:'#1c1e26', chrome:'#16171f', text:'#cbced0',
    comment:'#6c6f93', string:'#b8e248', keyword:'#ee64ae', func:'#26bbd9',
    number:'#fab795', cls:'#fac29a', punct:'#cbced0', variable:'#cbced0',
    lineNum:'#3c3e4b', dots:['#e95678','#fab795','#b8e248']
  },
  panda: {
    label:'Panda', bg:'#292a2b', chrome:'#1b1c1d', text:'#e6e6e6',
    comment:'#676b79', string:'#19f9d8', keyword:'#ff75b5', func:'#45a9f9',
    number:'#ffb86c', cls:'#6fc1ff', punct:'#e6e6e6', variable:'#ff9ac1',
    lineNum:'#575a63', dots:['#ff75b5','#ffb86c','#19f9d8']
  },
  githubLight: {
    label:'GitHub Light', bg:'#ffffff', chrome:'#f6f8fa', text:'#24292e',
    comment:'#6a737d', string:'#032f62', keyword:'#d73a49', func:'#6f42c1',
    number:'#005cc5', cls:'#22863a', punct:'#24292e', variable:'#e36209',
    lineNum:'#d1d5da', dots:['#ff5f56','#ffbd2e','#27c93f'], light:true
  },
  solarizedLight: {
    label:'Solarized Light', bg:'#fdf6e3', chrome:'#eee8d5', text:'#657b83',
    comment:'#93a1a1', string:'#2aa198', keyword:'#268bd2', func:'#b58900',
    number:'#d33682', cls:'#cb4b16', punct:'#657b83', variable:'#586e75',
    lineNum:'#c9c2a8', dots:['#dc322f','#b58900','#2aa198'], light:true
  },
  rosePineDawn: {
    label:'Rosé Pine Dawn', bg:'#faf4ed', chrome:'#f2e9e1', text:'#575279',
    comment:'#9893a5', string:'#ea9d34', keyword:'#907aa9', func:'#286983',
    number:'#d7827e', cls:'#56949f', punct:'#797593', variable:'#575279',
    lineNum:'#dfdad9', dots:['#b4637a','#ea9d34','#56949f'], light:true
  }
};

const FONT_MAP = {
  jetbrains: "'JetBrains Mono', Menlo, Consolas, monospace",
  fira: "'Fira Code', Menlo, Consolas, monospace",
  source: "'Source Code Pro', Menlo, Consolas, monospace",
  ibmplex: "'IBM Plex Mono', Menlo, Consolas, monospace",
  space: "'Space Mono', Menlo, Consolas, monospace",
  roboto: "'Roboto Mono', Menlo, Consolas, monospace",
  inconsolata: "'Inconsolata', Menlo, Consolas, monospace"
};

const SHADOWS = {
  none: 'none',
  soft: '0 20px 40px -18px rgba(0,0,0,0.35)',
  medium: '0 30px 60px -20px rgba(0,0,0,0.55), 0 10px 20px -8px rgba(0,0,0,0.4)',
  large: '0 45px 100px -20px rgba(0,0,0,0.65), 0 20px 45px -10px rgba(0,0,0,0.55)'
};

const BACKGROUNDS = [
  {label:'Aurora', css:'linear-gradient(135deg,#0f2027,#203a43,#2c5364)'},
  {label:'Violet', css:'linear-gradient(135deg,#7f2ee6,#3b0fa3)'},
  {label:'Sunset', css:'linear-gradient(135deg,#ff6a00,#ee0979)'},
  {label:'Ocean', css:'linear-gradient(135deg,#2193b0,#6dd5ed)'},
  {label:'Peach', css:'linear-gradient(135deg,#ffecd2,#fcb69f)'},
  {label:'Emerald', css:'linear-gradient(135deg,#134e5e,#71b280)'},
  {label:'Candy', css:'linear-gradient(135deg,#ee9ca7,#ffdde1)'},
  {label:'Midnight', css:'linear-gradient(135deg,#020024,#090979,#00d4ff)'},
  {label:'Flame', css:'linear-gradient(135deg,#f83600,#f9d423)'},
  {label:'Cotton Candy', css:'linear-gradient(135deg,#a18cd1,#fbc2eb)'},
  {label:'Slate', css:'linear-gradient(160deg,#232526,#414345)'},
  {label:'Mesh Aurora', css:'radial-gradient(at 15% 20%, #7c8cff 0, transparent 55%), radial-gradient(at 85% 10%, #ff7cd4 0, transparent 55%), radial-gradient(at 80% 85%, #22d3ee 0, transparent 55%), #0a0a10'},
  {label:'Mesh Sunrise', css:'radial-gradient(at 20% 20%, #ffd36e 0, transparent 55%), radial-gradient(at 85% 15%, #ff8e8e 0, transparent 55%), radial-gradient(at 75% 85%, #ff6fb0 0, transparent 55%), #2a1b3d'},
  {label:'Paper', css:'linear-gradient(135deg,#fdfbfb,#ebedee)'},
  {label:'Noir', css:'#111114'},
  {label:'Pure White', css:'#ffffff'}
];

/* ============================================================
   TOKENIZER / SYNTAX HIGHLIGHTER
   ============================================================ */
const LANG_CONFIG = {
  javascript: { line:'//', block:['/*','*/'], kw:['const','let','var','function','return','if','else','for','while','do','switch','case','break','continue','class','extends','new','this','super','import','export','default','from','async','await','try','catch','finally','throw','typeof','instanceof','in','of','yield','static','get','set','null','undefined','true','false','void','delete'] },
  typescript: { line:'//', block:['/*','*/'], kw:['const','let','var','function','return','if','else','for','while','do','switch','case','break','continue','class','extends','implements','interface','type','enum','new','this','super','import','export','default','from','async','await','try','catch','finally','throw','typeof','instanceof','in','of','yield','static','get','set','null','undefined','true','false','void','delete','public','private','protected','readonly','as','namespace','declare'] },
  python: { line:'#', block:null, kw:['def','return','if','elif','else','for','while','break','continue','class','import','from','as','try','except','finally','raise','with','pass','lambda','yield','global','nonlocal','assert','del','is','in','not','and','or','None','True','False','self','async','await'] },
  html: { markup:true },
  css: { css:true },
  json: { line:null, block:null, kw:['true','false','null'] },
  bash: { line:'#', block:null, kw:['if','then','else','elif','fi','for','while','do','done','case','esac','function','return','exit','export','local','echo','read','in','break','continue'] },
  go: { line:'//', block:['/*','*/'], kw:['func','return','if','else','for','range','switch','case','break','continue','package','import','var','const','type','struct','interface','map','chan','go','defer','select','default','nil','true','false','iota'] },
  rust: { line:'//', block:['/*','*/'], kw:['fn','let','mut','return','if','else','for','while','loop','match','break','continue','struct','enum','impl','trait','pub','use','mod','crate','self','Self','as','ref','move','async','await','where','dyn','static','const','true','false','None','Some','Ok','Err'] },
  java: { line:'//', block:['/*','*/'], kw:['public','private','protected','class','interface','extends','implements','static','final','void','return','if','else','for','while','do','switch','case','break','continue','new','this','super','import','package','try','catch','finally','throw','throws','null','true','false','abstract','enum','instanceof'] },
  cpp: { line:'//', block:['/*','*/'], kw:['int','float','double','char','bool','void','return','if','else','for','while','do','switch','case','break','continue','class','struct','public','private','protected','new','delete','this','namespace','using','include','template','typename','const','static','virtual','override','nullptr','true','false','auto','vector','string','map','set','unordered_map','unordered_set'] },
  php: { line:'//', block:['/*','*/'], kw:['function','return','if','else','elseif','for','foreach','while','do','switch','case','break','continue','class','extends','implements','public','private','protected','static','new','this','namespace','use','try','catch','finally','throw','echo','print','null','true','false','array','as'] },
  ruby: { line:'#', block:null, kw:['def','end','return','if','elsif','else','unless','for','while','until','case','when','break','next','class','module','require','require_relative','new','self','nil','true','false','do','yield','begin','rescue','ensure','attr_accessor','puts'] },
  sql: { line:'--', block:['/*','*/'], kw:['SELECT','FROM','WHERE','INSERT','INTO','VALUES','UPDATE','SET','DELETE','JOIN','LEFT','RIGHT','INNER','OUTER','ON','GROUP','BY','ORDER','HAVING','AS','AND','OR','NOT','NULL','CREATE','TABLE','PRIMARY','KEY','FOREIGN','REFERENCES','DROP','ALTER','LIMIT','DISTINCT','COUNT','SUM','AVG','MAX','MIN'] },
  yaml: { line:'#', block:null, kw:['true','false','null'] },
  plain: { line:null, block:null, kw:[] }
};

function escapeHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// Generic tokenizer for C-like / Python-like languages
function tokenizeGeneric(code, cfg){
  const kwSet = new Set(cfg.kw || []);
  const tokens = [];
  let i = 0;
  const n = code.length;

  while(i < n){
    const ch = code[i];

    // line comment
    if(cfg.line && code.startsWith(cfg.line, i)){
      let j = i;
      while(j < n && code[j] !== '\n') j++;
      tokens.push({t:'comment', s:code.slice(i,j)});
      i = j; continue;
    }
    // block comment
    if(cfg.block && code.startsWith(cfg.block[0], i)){
      let j = code.indexOf(cfg.block[1], i + cfg.block[0].length);
      if(j === -1) j = n; else j += cfg.block[1].length;
      tokens.push({t:'comment', s:code.slice(i,j)});
      i = j; continue;
    }
    // strings
    if(ch === '"' || ch === "'" || ch === '`'){
      let j = i+1;
      while(j < n && code[j] !== ch){
        if(code[j] === '\\') j++;
        j++;
      }
      j = Math.min(j+1, n);
      tokens.push({t:'string', s:code.slice(i,j)});
      i = j; continue;
    }
    // numbers
    if(/[0-9]/.test(ch) && (i===0 || !/[A-Za-z0-9_$]/.test(code[i-1]))){
      let j = i;
      while(j < n && /[0-9a-fA-Fx\._]/.test(code[j])) j++;
      tokens.push({t:'number', s:code.slice(i,j)});
      i = j; continue;
    }
    // identifiers / keywords / functions
    if(/[A-Za-z_$]/.test(ch)){
      let j = i;
      while(j < n && /[A-Za-z0-9_$]/.test(code[j])) j++;
      const word = code.slice(i,j);
      let k = j;
      while(k < n && code[k] === ' ') k++;
      if(kwSet.has(word)){
        tokens.push({t:'keyword', s:word});
      } else if(code[k] === '('){
        tokens.push({t:'func', s:word});
      } else if(/^[A-Z]/.test(word) && word.length>1){
        tokens.push({t:'cls', s:word});
      } else {
        tokens.push({t:'plain', s:word});
      }
      i = j; continue;
    }
    // whitespace / punctuation / operators - group whitespace runs
    if(ch === ' ' || ch === '\t'){
      let j = i;
      while(j<n && (code[j]===' '||code[j]==='\t')) j++;
      tokens.push({t:'plain', s:code.slice(i,j)});
      i = j; continue;
    }
    if(ch === '\n'){
      tokens.push({t:'nl', s:'\n'});
      i++; continue;
    }
    // single punctuation/operator char
    tokens.push({t:'punct', s:ch});
    i++;
  }
  return tokens;
}

function tokenizeCss(code){
  const tokens = [];
  let i=0; const n=code.length;
  while(i<n){
    if(code.startsWith('/*',i)){
      let j = code.indexOf('*/', i+2);
      j = j===-1? n : j+2;
      tokens.push({t:'comment', s:code.slice(i,j)}); i=j; continue;
    }
    if(code[i]==='\n'){ tokens.push({t:'nl',s:'\n'}); i++; continue; }
    if(code[i]==='"' || code[i]==="'"){
      const q=code[i]; let j=i+1;
      while(j<n && code[j]!==q) j++;
      j=Math.min(j+1,n);
      tokens.push({t:'string', s:code.slice(i,j)}); i=j; continue;
    }
    if(code[i]==='.' || code[i]==='#'){
      let j=i+1;
      while(j<n && /[A-Za-z0-9_\-]/.test(code[j])) j++;
      tokens.push({t:'cls', s:code.slice(i,j)}); i=j; continue;
    }
    if(/[A-Za-z\-]/.test(code[i])){
      let j=i;
      while(j<n && /[A-Za-z0-9\-]/.test(code[j])) j++;
      const word = code.slice(i,j);
      // property if followed by ':'
      let k=j; while(k<n && code[k]===' ') k++;
      if(code[k]===':'){
        tokens.push({t:'func', s:word});
      } else {
        tokens.push({t:'keyword', s:word});
      }
      i=j; continue;
    }
    if(/[0-9]/.test(code[i])){
      let j=i;
      while(j<n && /[0-9a-zA-Z%\.]/.test(code[j])) j++;
      tokens.push({t:'number', s:code.slice(i,j)}); i=j; continue;
    }
    if(code[i]===' '||code[i]==='\t'){
      let j=i; while(j<n&&(code[j]===' '||code[j]==='\t')) j++;
      tokens.push({t:'plain', s:code.slice(i,j)}); i=j; continue;
    }
    tokens.push({t:'punct', s:code[i]}); i++;
  }
  return tokens;
}

function tokenizeHtml(code){
  const tokens = [];
  let i=0; const n=code.length;
  while(i<n){
    if(code.startsWith('<!--', i)){
      let j = code.indexOf('-->', i);
      j = j===-1? n : j+3;
      tokens.push({t:'comment', s:code.slice(i,j)}); i=j; continue;
    }
    if(code[i]==='\n'){ tokens.push({t:'nl',s:'\n'}); i++; continue; }
    if(code[i]==='<'){
      // find end of tag
      let j = code.indexOf('>', i);
      if(j===-1) j = n; else j++;
      const tagStr = code.slice(i,j);
      // break tag into pieces: <, /, tagname, attrs..., >
      let k=0; const tn = tagStr.length;
      // leading </ or <
      let m = tagStr.match(/^<\/?/);
      tokens.push({t:'punct', s:m[0]});
      k = m[0].length;
      // tag name
      let nameMatch = tagStr.slice(k).match(/^[A-Za-z0-9\-]+/);
      if(nameMatch){
        tokens.push({t:'keyword', s: nameMatch[0]});
        k += nameMatch[0].length;
      }
      // rest: attributes and strings
      let rest = tagStr.slice(k);
      let p = 0;
      while(p < rest.length){
        const c = rest[p];
        if(c==='"' || c==="'"){
          let q=p+1;
          while(q<rest.length && rest[q]!==c) q++;
          q=Math.min(q+1, rest.length);
          tokens.push({t:'string', s:rest.slice(p,q)});
          p=q; continue;
        }
        if(/[A-Za-z\-]/.test(c)){
          let q=p;
          while(q<rest.length && /[A-Za-z0-9\-]/.test(rest[q])) q++;
          tokens.push({t:'func', s:rest.slice(p,q)});
          p=q; continue;
        }
        tokens.push({t:'punct', s:c});
        p++;
      }
      i=j; continue;
    }
    // text content
    let j=i;
    while(j<n && code[j]!=='<' && code[j]!=='\n') j++;
    if(j>i){ tokens.push({t:'plain', s:code.slice(i,j)}); i=j; continue; }
    tokens.push({t:'punct', s:code[i]}); i++;
  }
  return tokens;
}

function parseHighlightRanges(str){
  const set = new Set();
  if(!str) return set;
  str.split(',').forEach(part=>{
    part = part.trim();
    if(!part) return;
    const m = part.match(/^(\d+)\s*-\s*(\d+)$/);
    if(m){
      let a = +m[1], b = +m[2];
      if(a > b) { const tmp=a; a=b; b=tmp; }
      for(let i=a; i<=b; i++) set.add(i);
    } else if(/^\d+$/.test(part)){
      set.add(+part);
    }
  });
  return set;
}

function highlightToHtml(code, lang, theme, highlightSet){
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.plain;
  let tokens;
  if(cfg.markup) tokens = tokenizeHtml(code);
  else if(cfg.css) tokens = tokenizeCss(code);
  else tokens = tokenizeGeneric(code, cfg);

  const colorMap = {
    comment: theme.comment, string: theme.string, keyword: theme.keyword,
    func: theme.func, number: theme.number, cls: theme.cls,
    punct: theme.punct, variable: theme.variable, plain: theme.text
  };

  // split into lines
  const lines = [[]];
  for(const tok of tokens){
    if(tok.t === 'nl'){ lines.push([]); continue; }
    lines[lines.length-1].push(tok);
  }

  const hlOverlay = theme.light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';

  return lines.map((lineTokens, idx) => {
    const isHl = highlightSet && highlightSet.has(idx+1);
    const hlStyle = isHl
      ? ` style="background:${hlOverlay}; box-shadow:inset 3px 0 0 ${theme.keyword}; margin:0 -24px; padding:0 24px;"`
      : '';
    if(lineTokens.length === 0) return `<div class="line"${hlStyle}>&nbsp;</div>`;
    const html = lineTokens.map(tok=>{
      const color = colorMap[tok.t] || theme.text;
      const safe = escapeHtml(tok.s).replace(/ /g, '&nbsp;');
      if(tok.t === 'plain') return `<span style="color:${theme.text}">${safe}</span>`;
      return `<span style="color:${color}">${safe}</span>`;
    }).join('');
    return `<div class="line"${hlStyle}>${html}</div>`;
  }).join('');
}

/* ============================================================
   STATE + RENDER
   ============================================================ */
let state = {
  theme: 'tokyoNight',
  bg: 0,
  customBg: { mode:'gradient', c1:'#7c8cff', c2:'#ff7cd4', angle:135, imageData:null },
  lang: 'javascript',
  fontFamily: 'jetbrains',
  fontSize: 15,
  lineHeight: 1.65,
  padding: 24,
  shadow: 'medium',
  showChrome: true,
  showFname: true,
  showLines: true,
  roundedCorners: true,
  highlightLines: '',
  noise: false,
  showWatermark: true,
  watermarkText: 'Codeship',
  exportScale: 3,
};

function getBgCss(){
  if(state.bg === 'custom'){
    const c = state.customBg;
    if(c.mode === 'image' && c.imageData) return `center / cover no-repeat url(${c.imageData})`;
    if(c.mode === 'solid') return c.c1;
    return `linear-gradient(${c.angle}deg, ${c.c1}, ${c.c2})`;
  }
  return BACKGROUNDS[state.bg].css;
}

function buildThemeGrid(filter){
  const grid = document.getElementById('themeGrid');
  grid.innerHTML = '';
  const q = (filter || '').trim().toLowerCase();
  const entries = Object.entries(THEMES).filter(([key, th]) => !q || th.label.toLowerCase().includes(q));
  if(entries.length === 0){
    grid.innerHTML = '<div class="theme-empty">No themes match “' + escapeHtml(filter) + '”</div>';
    return;
  }
  entries.forEach(([key, th])=>{
    const el = document.createElement('div');
    el.className = 'theme-swatch' + (key===state.theme ? ' active':'');
    el.dataset.key = key;
    el.style.background = th.bg;
    el.innerHTML = `<div class="dots">${th.dots.map(c=>`<span style="background:${c}"></span>`).join('')}</div><div class="name" style="color:${th.text}">${th.label}</div>`;
    el.addEventListener('click', ()=>{ state.theme = key; buildThemeGrid(document.getElementById('themeSearch').value); render(); });
    grid.appendChild(el);
  });
}

function buildBgGrid(){
  const grid = document.getElementById('bgGrid');
  grid.innerHTML = '';
  BACKGROUNDS.forEach((bg, idx)=>{
    const el = document.createElement('div');
    el.className = 'bg-swatch' + (state.bg===idx ? ' active':'');
    el.style.background = bg.css;
    el.title = bg.label;
    el.addEventListener('click', ()=>{
      state.bg = idx;
      document.getElementById('customBgPanel').style.display = 'none';
      buildBgGrid(); render();
    });
    grid.appendChild(el);
  });

  // custom tile, always last
  const custom = document.createElement('div');
  custom.className = 'bg-swatch custom-tile' + (state.bg==='custom' ? ' active':'');
  custom.title = 'Custom background';
  if(state.bg === 'custom'){
    custom.style.background = getBgCss();
    custom.textContent = '';
  } else {
    custom.textContent = '+';
  }
  custom.addEventListener('click', ()=>{
    state.bg = 'custom';
    document.getElementById('customBgPanel').style.display = 'block';
    buildBgGrid(); render();
  });
  grid.appendChild(custom);
}

function render(){
  const theme = THEMES[state.theme];
  const code = document.getElementById('codeInput').value;
  const lang = state.lang;

  // stage background
  const stage = document.getElementById('exportStage');
  stage.style.background = getBgCss();
  stage.style.setProperty('--pad', state.padding + 'px');
  stage.style.padding = state.padding + 'px';

  // noise overlay
  document.getElementById('noiseOverlay').style.opacity = state.noise ? 0.35 : 0;

  // card
  const card = document.getElementById('card');
  card.style.background = theme.bg;
  card.style.borderRadius = state.roundedCorners ? '14px' : '0px';
  card.style.boxShadow = SHADOWS[state.shadow] || SHADOWS.medium;

  // titlebar
  const titlebar = document.getElementById('titlebar');
  titlebar.style.background = theme.chrome;
  titlebar.style.display = (state.showChrome || state.showFname) ? 'flex' : 'none';
  titlebar.querySelector('.dots').style.visibility = state.showChrome ? 'visible' : 'hidden';
  titlebar.querySelectorAll('.dots span').forEach((s,idx)=>{ s.style.background = theme.dots[idx]; });
  const fnameEl = document.getElementById('titlebarFname');
  fnameEl.style.display = state.showFname ? 'block' : 'none';
  fnameEl.style.color = theme.text;
  fnameEl.style.fontFamily = FONT_MAP[state.fontFamily];
  fnameEl.textContent = document.getElementById('filenameInput').value || 'untitled';

  // code body
  const codeBody = document.getElementById('codeBody');
  codeBody.style.fontFamily = FONT_MAP[state.fontFamily];
  codeBody.style.fontSize = state.fontSize + 'px';
  codeBody.style.padding = '4px 24px 26px 24px';
  codeBody.style.color = theme.text;
  codeBody.style.setProperty('--lh', state.lineHeight + 'em');

  const highlightSet = parseHighlightRanges(state.highlightLines);
  const contentHtml = highlightToHtml(code, lang, theme, highlightSet);
  document.getElementById('codeContent').innerHTML = contentHtml;

  const lineCount = code.split('\n').length;
  const lineNumbers = document.getElementById('lineNumbers');
  lineNumbers.style.display = state.showLines ? 'block' : 'none';
  lineNumbers.style.color = theme.lineNum;
  lineNumbers.innerHTML = Array.from({length: lineCount}, (_,i)=>`<div>${i+1}</div>`).join('');

  // watermark
  const wm = document.getElementById('watermark');
  wm.style.display = state.showWatermark ? 'block' : 'none';
  wm.style.color = theme.text;
  wm.textContent = state.watermarkText || 'Codeship';
}

/* ============================================================
   WIRE UP CONTROLS
   ============================================================ */
document.getElementById('codeInput').addEventListener('input', render);
document.getElementById('langSelect').addEventListener('change', e=>{ state.lang = e.target.value; render(); });
document.getElementById('filenameInput').addEventListener('input', render);

document.getElementById('themeSearch').addEventListener('input', e=> buildThemeGrid(e.target.value));

document.getElementById('fontSelect').addEventListener('change', e=>{ state.fontFamily = e.target.value; render(); });
document.getElementById('fontSize').addEventListener('input', e=>{
  state.fontSize = +e.target.value;
  document.getElementById('fontSizeVal').textContent = state.fontSize+'px';
  render();
});
document.getElementById('lineHeight').addEventListener('input', e=>{
  state.lineHeight = +e.target.value;
  document.getElementById('lineHeightVal').textContent = state.lineHeight.toFixed(2);
  render();
});
document.getElementById('padRange').addEventListener('input', e=>{
  state.padding = +e.target.value;
  document.getElementById('padVal').textContent = state.padding+'px';
  render();
});
document.getElementById('shadowSelect').addEventListener('change', e=>{ state.shadow = e.target.value; render(); });

document.getElementById('toggleChrome').addEventListener('change', e=>{ state.showChrome = e.target.checked; render(); });
document.getElementById('toggleFname').addEventListener('change', e=>{ state.showFname = e.target.checked; render(); });
document.getElementById('toggleLines').addEventListener('change', e=>{ state.showLines = e.target.checked; render(); });
document.getElementById('toggleRadius').addEventListener('change', e=>{ state.roundedCorners = e.target.checked; render(); });

document.getElementById('highlightInput').addEventListener('input', e=>{ state.highlightLines = e.target.value; render(); });
document.getElementById('toggleNoise').addEventListener('change', e=>{ state.noise = e.target.checked; render(); });
document.getElementById('toggleWatermark').addEventListener('change', e=>{ state.showWatermark = e.target.checked; render(); });
document.getElementById('watermarkInput').addEventListener('input', e=>{ state.watermarkText = e.target.value; render(); });
document.getElementById('scaleSelect').addEventListener('change', e=>{
  state.exportScale = +e.target.value;
  document.getElementById('scaleHint').textContent = state.exportScale + '×';
});

// ---- custom background controls ----
const customBgPanel = document.getElementById('customBgPanel');
const bgGradientControls = document.getElementById('bgGradientControls');
const bgSolidControls = document.getElementById('bgSolidControls');
const bgImageControls = document.getElementById('bgImageControls');

document.getElementById('bgModeSeg').addEventListener('click', e=>{
  const btn = e.target.closest('.seg-btn');
  if(!btn) return;
  const mode = btn.dataset.mode;
  state.customBg.mode = mode;
  state.bg = 'custom';
  document.querySelectorAll('#bgModeSeg .seg-btn').forEach(b=> b.classList.toggle('active', b===btn));
  bgGradientControls.style.display = mode==='gradient' ? 'block' : 'none';
  bgSolidControls.style.display = mode==='solid' ? 'block' : 'none';
  bgImageControls.style.display = mode==='image' ? 'block' : 'none';
  buildBgGrid(); render();
});

document.getElementById('bgColor1').addEventListener('input', e=>{
  state.customBg.c1 = e.target.value; state.bg = 'custom';
  buildBgGrid(); render();
});
document.getElementById('bgColor2').addEventListener('input', e=>{
  state.customBg.c2 = e.target.value; state.bg = 'custom';
  buildBgGrid(); render();
});
document.getElementById('bgAngle').addEventListener('input', e=>{
  state.customBg.angle = +e.target.value;
  document.getElementById('bgAngleVal').textContent = state.customBg.angle + '°';
  state.bg = 'custom';
  buildBgGrid(); render();
});
document.getElementById('bgColorSolid').addEventListener('input', e=>{
  state.customBg.c1 = e.target.value; state.customBg.mode = 'solid'; state.bg = 'custom';
  buildBgGrid(); render();
});
document.getElementById('bgImageUpload').addEventListener('change', e=>{
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    state.customBg.imageData = reader.result;
    state.customBg.mode = 'image';
    state.bg = 'custom';
    buildBgGrid(); render();
  };
  reader.readAsDataURL(file);
});

// ---- randomize ----
document.getElementById('randomizeBtn').addEventListener('click', ()=>{
  const keys = Object.keys(THEMES);
  state.theme = keys[Math.floor(Math.random()*keys.length)];
  state.bg = Math.floor(Math.random()*BACKGROUNDS.length);
  document.getElementById('customBgPanel').style.display = 'none';
  document.getElementById('themeSearch').value = '';
  buildThemeGrid();
  buildBgGrid();
  render();
});

// ---- export helpers ----
async function renderCanvas(scale){
  const stage = document.getElementById('exportStage');
  return html2canvas(stage, {
    scale: scale,
    backgroundColor: null,
    useCORS: true,
    logging: false
  });
}

document.getElementById('downloadBtn').addEventListener('click', async ()=>{
  const btn = document.getElementById('downloadBtn');
  const original = btn.textContent;
  btn.textContent = 'Rendering...';
  btn.disabled = true;
  try{
    const canvas = await renderCanvas(state.exportScale);
    const link = document.createElement('a');
    const fname = (document.getElementById('filenameInput').value || 'code').replace(/\.[^.]+$/, '');
    link.download = `${fname}-codeship.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch(err){
    console.error(err);
    alert('Something went wrong generating the image. Please try again.');
  } finally {
    btn.textContent = original;
    btn.disabled = false;
  }
});

document.getElementById('copyBtn').addEventListener('click', async ()=>{
  const btn = document.getElementById('copyBtn');
  const original = btn.textContent;
  btn.textContent = 'Copying...';
  btn.disabled = true;
  try{
    const canvas = await renderCanvas(state.exportScale);
    if(!navigator.clipboard || !window.ClipboardItem){
      throw new Error('Clipboard API unsupported');
    }
    await new Promise((resolve, reject)=>{
      canvas.toBlob(async (blob)=>{
        try{
          await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
          resolve();
        } catch(err){ reject(err); }
      }, 'image/png');
    });
    btn.textContent = 'Copied!';
    setTimeout(()=>{ btn.textContent = original; btn.disabled = false; }, 1400);
  } catch(err){
    console.error(err);
    alert('Copy to clipboard isn\'t supported in this browser. Try Download PNG instead.');
    btn.textContent = original;
    btn.disabled = false;
  }
});

// language <-> filename sync (best effort)
const EXT_MAP = { javascript:'js', typescript:'ts', python:'py', html:'html', css:'css', json:'json', bash:'sh', go:'go', rust:'rs', java:'java', cpp:'cpp', php:'php', ruby:'rb', sql:'sql', yaml:'yaml', plain:'txt' };
document.getElementById('langSelect').addEventListener('change', e=>{
  const ext = EXT_MAP[e.target.value] || 'txt';
  const fnameInput = document.getElementById('filenameInput');
  const base = fnameInput.value.replace(/\.[^.]+$/, '') || 'untitled';
  fnameInput.value = `${base}.${ext}`;
});

buildThemeGrid();
buildBgGrid();
render();