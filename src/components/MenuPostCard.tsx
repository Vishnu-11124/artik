import React from "react";
import { MenuPostProps } from "./Menu";
import Link from "next/link";

interface MenuPostCardProps {
  post: MenuPostProps;
  isImage?: boolean;
}

const MenuPostCard = ({ post, isImage }: MenuPostCardProps) => {
  return (
    <article
      className={`group ${
        isImage ? "flex items-center gap-4" : "flex gap-3 py-4 first:pt-0"
      }`}
    >
      {/* Image - Only for Editor's Pick */}
      {isImage && post.image && (
        <Link
          href={`/posts/${post.id}`}
          className="relative block size-20 shrink-0 overflow-hidden rounded-full"
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      )}

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Link
          href={`/posts/${post.id}`}
          className="mb-1 w-fit text-[10px] font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-hover"
        >
          {post.category}
        </Link>

        <Link href={`/posts/${post.id}`}>
          <h3 className="font-display text-base leading-snug text-foreground transition-colors duration-300 group-hover:text-primary">
            {post.title}
          </h3>
        </Link>

        {/* Author and Date */}
        <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[10px] text-muted">
          <span>{post.author}</span>
          <span className="h-1 w-1 rounded-full bg-muted/50" />
          <time dateTime={post.date.toISOString()}>
            {post.date.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
};

export default MenuPostCard;
