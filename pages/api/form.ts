import type { NextApiRequest, NextApiResponse } from "next";

const form = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@") || email.trim() === "") {
      res.status(422).json({ message: "Please provide a valid email address" });
      return;
    }
    res.status(201).json({ message: "Successfully Subscribed!" });
  }
};

export default form;
