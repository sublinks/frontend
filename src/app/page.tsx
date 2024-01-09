import React from 'react';

import sublinksClient from '@/utils/client';

import { GetPostsResponse } from 'sublinks-js-client';
import Feed from '@/components/front-page-feed';
import * as testData from '../../test-data.json';

const page = async () => {
  // @todo: Allow test data when in non-docker dev env
  // as Sublinks Core doesn't yet handle all post features
  const posts = process.env.SUBLINKS_API_BASE_URL ? await sublinksClient().getPosts()
    : JSON.stringify(testData) as unknown as GetPostsResponse;
  return (
    <div>
      <Feed posts={posts} />
    </div>
  );
};

export default page;
