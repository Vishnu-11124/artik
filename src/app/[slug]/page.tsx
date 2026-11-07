import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import React from "react";

const SinglePage = () => {
  const singlePost = {
    id: 1,
    title:
      "The Future of Artificial Intelligence: How It's Changing Our Everyday Lives",
    subtitle:
      "From smarter assistants to creative tools, artificial intelligence is quietly transforming the way we work, learn, and interact with the world.",
    content: `
Artificial intelligence is no longer something we only see in science fiction movies. It has become a part of our everyday lives, helping us make decisions, solve problems, and complete tasks more efficiently.

The Rise of AI in Everyday Life

From personalized recommendations on streaming platforms to voice assistants that answer our questions, AI is working behind the scenes in ways many of us don't even notice. These technologies analyze patterns, understand user behavior, and provide experiences that feel more personal and convenient.

Smartphones, navigation apps, online shopping platforms, and even email services use AI to improve their functionality. What once seemed like advanced technology is now becoming an ordinary part of our daily routines.

Transforming the Way We Work

AI-powered tools are changing workplaces by automating repetitive tasks and helping professionals focus on more meaningful work. Developers use AI assistants to understand code, designers explore creative possibilities, and businesses use intelligent systems to analyze large amounts of information.

However, AI should be viewed as a tool that supports human capabilities rather than completely replacing human creativity, judgment, and problem-solving skills.

Opportunities and Challenges

While artificial intelligence creates exciting opportunities, it also introduces important challenges. Data privacy, misinformation, job displacement, and responsible AI development are issues that deserve serious attention.

As AI continues to evolve, individuals and organizations must learn how to use it responsibly. Understanding its strengths and limitations will become an important skill for the future.

Final Thoughts

The future of artificial intelligence is not just about smarter machines. It is about how people choose to use technology to build a better and more connected world. The real opportunity lies in combining human intelligence with the capabilities of AI.
`,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    userimage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    username: "Alex Morgan",
    date: "November 5, 2026",
    comments: [
      {
        id: 11,
        username: "Sophia Bennett",
        userimage:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
        comment:
          "Great article! I especially agree with the point about using AI to support human creativity rather than replace it.",
        date: "November 5, 2026",
      },
      {
        id: 12,
        username: "Daniel Carter",
        userimage:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
        comment:
          "AI is already changing how I approach my daily work. It's amazing how much time these tools can save.",
        date: "November 5, 2026",
      },
      {
        id: 13,
        username: "Emma Wilson",
        userimage:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
        comment:
          "The privacy concerns are important. I hope companies focus more on responsible AI development.",
        date: "November 6, 2026",
      },
      {
        id: 14,
        username: "Noah Anderson",
        userimage:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
        comment:
          "I would love to see a follow-up article discussing how beginners can start learning about artificial intelligence.",
        date: "November 6, 2026",
      },
      {
        id: 15,
        username: "Olivia James",
        userimage:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200",
        comment:
          "A very balanced perspective on AI. Technology is most powerful when we use it thoughtfully.",
        date: "November 7, 2026",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
        {/* Post Header */}
        <section className="grid grid-cols-1 items-center gap-8 border-b border-border pb-10 md:grid-cols-2 lg:gap-12 lg:pb-14">
          {/* Title and Author */}
          <div className="flex flex-col">
            <span className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The Journal
            </span>

            <h1 className="font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {singlePost.title}
            </h1>

            <div className="mt-7 flex items-center gap-3">
              <img
                src={singlePost.userimage}
                alt={singlePost.username}
                className="size-11 rounded-full object-cover"
              />

              <div>
                <p className="text-sm font-semibold text-foreground">
                  {singlePost.username}
                </p>
                <p className="mt-0.5 text-xs text-muted">{singlePost.date}</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <img
              src={singlePost.image}
              alt={singlePost.title}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </section>

        {/* Article and Sidebar */}
        <section className="grid grid-cols-1 items-start gap-10 pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-12 lg:pt-12">
          {/* Article Content */}
          <div className="min-w-0">
            <article>
              <h2 className="mb-6 font-display text-xl leading-relaxed text-primary sm:text-2xl">
                {singlePost.subtitle}
              </h2>

              <div className="whitespace-pre-line text-sm leading-8 text-muted sm:text-base sm:leading-9">
                {singlePost.content}
              </div>
            </article>

            {/* Comments Section */}
            <section className="mt-14 border-t border-border pt-8 sm:mt-16">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Join the Conversation
                  </p>
                  <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                    Comments
                  </h2>
                </div>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {singlePost.comments.length}
                </span>
              </div>

              {/* Add Comment */}
              <div className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                <textarea
                  placeholder="Share your thoughts..."
                  rows={3}
                  className="w-full resize-none bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                />

                <div className="mt-3 flex justify-end border-t border-border pt-3">
                  <button
                    type="button"
                    className="rounded-lg bg-primary px-5 py-2.5 text-xs font-semibold text-[#F5EBD0] transition-colors duration-300 hover:bg-primary-hover"
                  >
                    Add Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="mt-6 flex flex-col divide-y divide-border">
                {singlePost.comments.map((comment) => (
                  <Comments key={comment.id} comment={comment} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="min-w-0 lg:sticky lg:top-24">
            <Menu />
          </aside>
        </section>
      </div>
    </main>
  );
};

export default SinglePage;
