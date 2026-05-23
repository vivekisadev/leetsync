const { PrismaClient } = require('@prisma/client');
const { TwitterApi } = require('twitter-api-v2');

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({ include: { accounts: true } });
  if (users.length === 0) return console.log("No users.");
  const user = users[0];

  console.log("Found user:", user.email);

  const twitterAccount = user.accounts.find(a => a.provider === 'twitter');
  const linkedinAccount = user.accounts.find(a => a.provider === 'linkedin');

  if (twitterAccount) {
    console.log("Twitter token:", twitterAccount.oauth_token ? "Exists" : "Missing");
    try {
      const client = new TwitterApi({
        appKey: process.env.TWITTER_CLIENT_ID || "",
        appSecret: process.env.TWITTER_CLIENT_SECRET || "",
        accessToken: twitterAccount.oauth_token,
        accessSecret: twitterAccount.oauth_token_secret,
      });
      // Just check credentials
      const me = await client.v2.me();
      console.log("Twitter Auth Success:", me.data.username);
    } catch (e) {
      console.error("Twitter Auth Error:", e?.data || e.message || e);
    }
  } else {
    console.log("No Twitter account linked.");
  }

  if (linkedinAccount) {
    console.log("LinkedIn token:", linkedinAccount.access_token ? "Exists" : "Missing");
    try {
      const res = await fetch("https://api.linkedin.com/v2/userinfo", {
        headers: { Authorization: `Bearer ${linkedinAccount.access_token}` }
      });
      const data = await res.json();
      console.log("LinkedIn Auth:", res.status, data);
    } catch (e) {
      console.error("LinkedIn Auth Error:", e);
    }
  } else {
    console.log("No LinkedIn account linked.");
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
