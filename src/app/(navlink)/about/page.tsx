import React from "react";

const About = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-5 py-16 lg:px-8 lg:py-24">
      {/* Header */}
      <section className="mb-12 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          About Artik
        </p>

        <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Every voice has a story to tell.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
          Artik is a space where creativity meets storytelling. A place to
          discover ideas, share experiences, and explore different perspectives
          through the power of words.
        </p>
      </section>

      {/* About content */}
      <section className="mx-auto max-w-3xl border-t border-border pt-10">
        <h2 className="mb-4 font-display text-2xl text-foreground sm:text-3xl">
          Our Story
        </h2>

        <div className="space-y-5 text-sm leading-8 text-muted sm:text-base">
          <p>
            We believe every story matters. Whether it is a personal experience,
            a creative thought, or a fresh perspective, every voice deserves a
            place to be heard.
          </p>

          <p>
            Artik was created to bring readers and writers together in one
            simple space. From technology and lifestyle to travel, business, and
            creativity, we make it easy to explore topics that inspire curiosity
            and meaningful conversations.
          </p>

          <p>
            Our goal is simple: encourage people to write, inspire others, and
            make knowledge and creativity accessible to everyone.
          </p>
        </div>
      </section>

      {/* Closing statement */}
      <section className="mt-14 rounded-2xl bg-surface px-6 py-10 text-center sm:px-12 sm:py-14">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">
          Your thoughts. Your stories. Your Artik.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
          Start sharing what inspires you. You never know whose perspective
          might change because of your story.
        </p>
      </section>
    </main>
  );
};

export default About;
