import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();

// const configuration = new Configuration({
//   apikey: process.env.OPENAI_API_KEY,
// });

const groqApi = process.env.GROQ_API_KEY;

const app = express();
app.use(cors()); // what does cors do?
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from CodeX!",
  });
});

app.post("/", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const response = await await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqApi}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
          ],
          temperature: 0,
          max_tokens: 3000,
          top_p: 1,
          frequency_penalty: 0.5,
          presence_penalty: 0,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    if (data.error) {
      console.error("Groq API Error:", data.error.message);
      return res.status(500).json({ error: data.error.message });
    }

    res.status(200).send({
      bot: data.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error });
  }
});

app.listen(5000, () =>
  console.log("Server is running on port http://localhost:5000")
);
