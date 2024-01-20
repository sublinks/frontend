'use client';

import React, { useEffect, useState } from 'react';

import PostFeed from '@/components/post-feed';
import sublinksClient from '@/utils/client';

import {
  GetPostsResponse, GetSiteResponse, ListingType, SortType
} from 'sublinks-js-client';
import PostFeedOptions from '@/components/post-feed-sort';
import * as testData from '../../../test-data.json';
import Sidebar from '../sidebar';

interface FeedProps {
  posts: GetPostsResponse,
  site: GetSiteResponse
}

const Feed = ({ posts, site }: FeedProps) => {
  const [postFeed, setPostFeed] = useState<GetPostsResponse>(posts);
  const [siteResponse] = useState<GetSiteResponse>(site);

  // @todo: Set this to the users default feed type
  const [postFeedType, setPostFeedType] = useState<ListingType>();
  const [postFeedSort, setPostFeedSort] = useState<SortType>();

  // @todo: Allow test data when in non-docker dev env
  // as Sublinks Core doesn't yet handle all post features
  useEffect(() => {
    async function getPosts() {
      setPostFeed(process.env.NEXT_PUBLIC_SUBLINKS_API_BASE_URL ? await sublinksClient().getPosts({
        type_: postFeedType,
        sort: postFeedSort
      }) : testData as unknown as GetPostsResponse);
    }
    getPosts();
  }, [postFeedSort, postFeedType]);

  return (
    <div className="relative">
      <div className="float-none md:float-right relative ">
        <Sidebar site={siteResponse.site_view.site} admins={siteResponse.admins} />
      </div>
      <div className="mb-16 ml-4">
        <PostFeedOptions
          currentType={postFeedType}
          onSortChange={setPostFeedSort}
          onTypeChange={setPostFeedType}
          currentSort={postFeedSort}
        />
      </div>
      <div className="flex">
        <PostFeed data={postFeed.posts} />
      </div>

    </div>
  );
};

export default Feed;
