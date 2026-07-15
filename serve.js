const http = require('http');
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const mime = {'.html':'text/html','.js':'application/javascript','.json':'application/json','.css':'text/css','.svg':'image/svg+xml','.pdf':'application/pdf','.png':'image/png','.jpg':'image/jpeg'};
http.createServer((req,res)=>{
  let u = req.url.split('?')[0];
  if (u === '/') u = '/finanzas2026.html';
  let p = path.join(dir, u);
  p = path.normalize(p);
  if (!p.startsWith(dir)) { res.writeHead(403); res.end('403'); return; }
  try {
    if (!fs.existsSync(p)) { res.writeHead(404); res.end('404'); return; }
    const ext = path.extname(p);
    res.writeHead(200, {'Content-Type': mime[ext]||'text/plain','Access-Control-Allow-Origin':'*','Cache-Control':'no-cache'});
    fs.createReadStream(p).pipe(res);
  } catch(e) { res.writeHead(500); res.end('500'); }
}).listen(8000, '0.0.0.0', ()=>console.log('Server on :8000'));
