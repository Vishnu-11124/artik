import React from "react";
interface CommentProps {
  comment: {
    id: number;
    username: string;
    userimage: string;
    comment: string;
    date: string;
  };
}

const Comments = ({ comment }: CommentProps) => {
  return (
    <article className="flex gap-3 py-5 first:pt-0">
      {/* User Image */}
      <img
        src={comment.userimage}
        alt={comment.username}
        className="size-10 shrink-0 rounded-full object-cover sm:size-11"
      />

      {/* Comment Content */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-sm font-semibold text-foreground">
            {comment.username}
          </h3>

          <span className="text-[10px] text-muted sm:text-xs">
            {comment.date}
          </span>
        </div>

        <p className="mt-2 text-sm leading-6 text-muted">{comment.comment}</p>
      </div>
    </article>
  );
};

export default Comments;
