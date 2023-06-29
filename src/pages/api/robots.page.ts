export default function handler(req, res) {
  const uncrawlableRobotsTxt = "User-agent: *\nDisallow: /";
  const crawlableRobotsTxt = "User-agent: *\nAllow: /";

  if(process.env.ENV === "production") {
    return res.send(crawlableRobotsTxt); // Send your `robots.txt content here
  }

  res.send(uncrawlableRobotsTxt); // Send your `robots.txt content here
}
