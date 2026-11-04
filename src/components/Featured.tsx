import React from "react";
import Image from "next/image";
import Button from "./Button";

const Featured = () => {
  const post = {
    id: "1",
    title: "The Art of Finding Inspiration in Everyday Life",
    description:
      "Discover how ordinary moments can become extraordinary sources of creativity and inspiration. Sometimes, the best ideas are hidden in the simplest things.",
    image: "https://images.pexels.com/photos/9630189/pexels-photo-9630189.jpeg",
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
      {/* Featured Content */}
      <div className="grid items-center gap-8 overflow-hidden rounded-2xl border border-border bg-surface p-4 md:grid-cols-2 md:gap-10 md:p-6 lg:p-8">
        {/* Image */}
        <div className="group relative aspect-4/3 overflow-hidden rounded-xl">
          <img
            src={post.image}
            alt={post.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium tracking-wider text-white backdrop-blur-md">
            FEATURED ARTICLE
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center py-3 md:py-6 md:pr-5">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Creativity & Lifestyle
          </p>

          <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base">
            {post.description}
          </p>

          <div className="mt-8">
            <Button text="Read More" id={post.id} />
          </div>

          <div className="mt-8 border-t border-border pt-5">
            <p className="text-xs tracking-wide text-muted">
              Discover stories that inspire your everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
