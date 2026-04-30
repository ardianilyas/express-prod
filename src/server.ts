import "dotenv/config";
import app from ".";

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});