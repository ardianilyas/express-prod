import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const outputDir = path.join(root, ".vercel", "output");
const funcDir = path.join(outputDir, "functions", "api", "index.func");

// Create directory structure
fs.mkdirSync(funcDir, { recursive: true });

// Copy the tsup bundle as the function handler
fs.copyFileSync(
  path.join(root, "dist", "index.cjs"),
  path.join(funcDir, "index.js")
);

// Write function config
fs.writeFileSync(
  path.join(funcDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs20.x",
      handler: "index.js",
      launcherType: "Nodejs",
    },
    null,
    2
  )
);

// Write output config with routes
fs.writeFileSync(
  path.join(outputDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [{ src: "/(.*)", dest: "/api/index" }],
    },
    null,
    2
  )
);

console.log("✅ Vercel Build Output created at .vercel/output/");
