import express from 'express';
import 'express-async-error';
import cors from 'cors';
import mongoose from 'mongoose'

const app = express();
const PORT = process.env.PORT || 5000;

// mongoose.connect("mongodb://localhost/your_database_name", {

mongoose.connect(process.env.VITE_I18N_BACKEND_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));