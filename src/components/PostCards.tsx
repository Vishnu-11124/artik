import React from "react";
import { PostDetails } from "./CardList";
import Link from "next/link";

interface PostCardsProps {
  post: PostDetails;
}

const PostCards = ({ post }: PostCardsProps) => {
  return (
    <div className="flex gap-2">
      <div>
        <img src={post.image} alt={post.title} />
      </div>
      <div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <span>{post.category}</span>
        <span>{post.date}</span>
        <Link href={`/posts/${post.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default PostCards;
