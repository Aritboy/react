// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import {getAllPostIds, getPostData} from "../../../lib/posts";

type Data = {
  name: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const postData = await getPostData(getAllPostIds()[1].params.id);
  const postData = req.body;

  res.status(200).json({ name: postData })
  // res.redirect(307, '/')
}
