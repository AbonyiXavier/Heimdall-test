import app from "./index";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
