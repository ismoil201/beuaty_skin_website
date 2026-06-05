const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 4174);
const API_HOST = "cosmetic-server-production.up.railway.app";
const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const STATIC_ROOT = fs.existsSync(path.join(DIST, "index.html")) ? DIST : ROOT;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function resolveFilePath(pathname) {
  const normalized = pathname === "/" ? "/index.html" : pathname;

  if (normalized === "/styles.css") {
    const distStyles = path.join(DIST, "styles.css");
    const publicStyles = path.join(ROOT, "public", "styles.css");
    if (fs.existsSync(distStyles)) return distStyles;
    if (fs.existsSync(publicStyles)) return publicStyles;
  }

  if (normalized.startsWith("/src/")) {
    return path.join(ROOT, normalized);
  }

  return path.join(STATIC_ROOT, normalized);
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const filePath = path.normalize(resolveFilePath(url.pathname));

  const allowedRoots = [STATIC_ROOT, ROOT, path.join(ROOT, "public")];
  if (!allowedRoots.some((root) => filePath.startsWith(root))) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      send(res, 404, "Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, data, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
  });
}

function proxyApi(req, res) {
  const targetPath = req.url;
  const headers = {
    ...req.headers,
    host: API_HOST,
  };
  delete headers.origin;

  const proxyReq = https.request(
    {
      hostname: API_HOST,
      path: targetPath,
      method: req.method,
      headers,
    },
    (proxyRes) => {
      const responseHeaders = {
        ...proxyRes.headers,
        "access-control-allow-origin": "*",
      };
      res.writeHead(proxyRes.statusCode || 502, responseHeaders);
      proxyRes.pipe(res);
    }
  );

  proxyReq.on("error", (error) => {
    console.error(`Proxy error for ${req.method} ${req.url}: ${error.message}`);
    send(res, 502, JSON.stringify({ message: error.message }), {
      "Content-Type": "application/json; charset=utf-8",
    });
  });

  req.pipe(proxyReq);
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    send(res, 204, "", {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Accept",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    });
    return;
  }

  if (req.url.startsWith("/api/") || req.url.startsWith("/events/")) {
    proxyApi(req, res);
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, () => {
  console.log(
    `BEAUTY SKIN KOREA running at http://127.0.0.1:${PORT} (static: ${STATIC_ROOT === DIST ? "dist" : "project root"})`
  );
});
