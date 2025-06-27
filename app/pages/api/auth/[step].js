// pages/api/auth/[step].js

import axios from "axios";
import qs from "qs";

export default async function handler(req, res) {
  const { step } = req.query;

  if (step === "redirect") {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/business.manage&access_type=offline&prompt=consent`;
    res.redirect(url);
  } else if (step === "callback") {
    const { code } = req.query;
    const url = "https://oauth2.googleapis.com/token";
    const values = {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: "authorization_code",
    };

    try {
      const response = await axios.post(url, qs.stringify(values), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      // Redirect to home with a token or handle token storage differently as needed
      res.redirect(`/?token=${response.data.access_token}`);
    } catch (error) {
      console.error("Failed to exchange token:", error);
      res.status(500).json({ error: "Failed to exchange token" });
    }
  }
}
