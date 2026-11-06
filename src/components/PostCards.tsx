import React from "react";
import { PostDetails } from "./CardList";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface PostCardsProps {
  post: PostDetails;
}

const PostCards = ({ post }: PostCardsProps) => {
  return (
    <article className="group grid grid-cols-[100px_minmax(0,1fr)] gap-3 rounded-xl border border-border bg-surface p-2.5 transition-all duration-300 hover:border-primary/30 hover:shadow-md sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-4 sm:p-3 lg:grid-cols-[150px_minmax(0,1fr)]">
      {" "}
      {/* Image */}
      <Link
        href={`/posts/${post.id}`}
        className="relative aspect-4/3 overflow-hidden rounded-lg"
      >
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      {/* Content */}
      <div className="flex min-w-0 flex-col justify-center">
        {/* Category and Date */}
        <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary sm:text-xs">
            {post.category}
          </span>

          <span className="text-[10px] text-muted sm:text-xs">{post.date}</span>
        </div>

        {/* Title */}
        <Link href={`/posts/${post.id}`}>
          <h3 className="font-display text-sm leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-lg">
            {post.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-4 text-muted sm:text-sm sm:leading-5">
          {post.description}
        </p>

        {/* Read More */}
        <Link
          href={`/posts/${post.id}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-xs font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          Read More
          <FaArrowRight className="text-[10px]" />
        </Link>
      </div>
    </article>
  );
};

export default PostCards;
