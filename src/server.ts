import "dotenv/config";
import app from "./index.js";

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});