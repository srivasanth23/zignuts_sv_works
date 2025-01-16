const ShortUniqueId = require("short-unique-id");
const URL = require("../models/index");

const handleGenrateNewShortUrl = async (req, res) => {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const uid = new ShortUniqueId();
  const uidWithTimestamp = uid.stamp(10);

  await URL.create({
    shortId: uidWithTimestamp,
    redirectURL: body.url,
    visitHistory: [],
  });
  console.log(uidWithTimestamp);
  return res.json({ id: uidWithTimestamp });
};

module.exports = { handleGenrateNewShortUrl };
