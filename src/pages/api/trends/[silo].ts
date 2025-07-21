import type { NextApiRequest, NextApiResponse } from 'next';
import Parser from 'rss-parser';

const feeds: Record<string, string[]> = {
  cloud: ['https://techcrunch.com/tag/cloud/feed/', 'https://www.zdnet.com/topic/cloud/rss.xml'],
  iterra: ['https://www.truckinginfo.com/rss'],
  cybersecurity: ['https://www.csoonline.com/index.rss'],
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { silo } = req.query;
  const parser = new Parser();
  const sources = feeds[silo as string] || [];

  const items = await Promise.all(sources.map(async (url) => {
    const feed = await parser.parseURL(url);
    return feed.items.slice(0, 3);
  }));

  res.status(200).json(items.flat());
}
