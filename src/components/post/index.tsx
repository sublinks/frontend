import React from 'react';
import Link from 'next/link';

import { getCommunitySlugFromUrl } from '@/utils/communities';
import {
  Post, Community, PostAggregates
} from 'sublinks-js-client';
import {
  BodyText, BodyTitle, PaleBodyText
} from '../text';
import PostVotes from '../post-votes';
import PostThumbnail from '../post-thumbnail';

interface PostCardProps {
  post: Post;
  community: Community;
  counts: PostAggregates
}

export const PostCard = ({
  post,
  community,
  counts
}: PostCardProps) => {
  const {
    id, body, name: title, thumbnail_url: thumbnailUrl
  } = post;
  const { actor_id: communityUrl } = community;
  const { score } = counts;
  const communitySlug = getCommunitySlugFromUrl(communityUrl);
  const postUrl = `/p/${communitySlug}/${id}`;

  return (
    <div key={id}>
      <div className="flex">
        <div className="flex items-center ml-8">
          <PostVotes points={score} />
        </div>
        <Link href={postUrl} className="w-full group">
          <div className="flex h-100 relative">
            <div className="h-full flex gap-12 px-12 py-6 items-start">
              <div className="h-80 w-80 mt-8 flex flex-shrink-0 relative">
                <PostThumbnail postThumbnailUrl={thumbnailUrl} />
              </div>
              <div className="h-full w-full flex">
                <div className="h-full flex flex-col">
                  <BodyTitle
                    className="text-sm font-semibold line-clamp-2 group-hover:text-brand dark:group-hover:text-brand-dark group-visited:text-gray-500 group-visited:dark:text-gray-400"
                  >
                    {title}

                  </BodyTitle>
                  <div className="mb-8 flex max-md:flex-col">
                    <PaleBodyText className="text-xs">
                      {`Posted to ${communitySlug}`}
                    </PaleBodyText>
                  </div>
                  {body && <BodyText className="text-xs max-md:hidden line-clamp-2 group-visited:text-gray-500 group-visited:dark:text-gray-400">{body}</BodyText>}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="border-b-2 border-secondary dark:border-secondary-dark" />
    </div>
  );
};
