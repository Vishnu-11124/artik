import React from "react";
import MenuPostCard from "./MenuPostCard";
import { CategoryDetails } from "./CategoryList";
import Link from "next/link";

export interface MenuPostProps {
  id: number;
  title: string;
  category: string;
  image?: string;
  author: string;
  date: Date;
}

const Menu = () => {
  const posts: MenuPostProps[] = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      author: "Alex Morgan",
      date: new Date("2026-10-12"),
    },
    {
      id: 2,
      title: "Finding Inspiration in Everyday Life",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
      author: "Sophia Bennett",
      date: new Date("2026-10-15"),
    },
    {
      id: 3,
      title: "Exploring the Beauty of Nature",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      author: "Daniel Carter",
      date: new Date("2026-10-18"),
    },
    {
      id: 4,
      title: "Building a Business from Scratch",
      category: "Business",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      author: "Olivia James",
      date: new Date("2026-10-21"),
    },
    {
      id: 5,
      title: "Simple Habits for a Healthier Life",
      category: "Health & Fitness",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      author: "Ethan Wilson",
      date: new Date("2026-10-24"),
    },
    {
      id: 6,
      title: "Unlocking Your Creative Potential",
      category: "Creativity",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
      author: "Emma Thompson",
      date: new Date("2026-10-27"),
    },
    {
      id: 7,
      title: "Why Learning to Code Matters",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      author: "Noah Anderson",
      date: new Date("2026-10-29"),
    },
    {
      id: 8,
      title: "The Art of Slow Living",
      category: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
      author: "Isabella Rose",
      date: new Date("2026-11-02"),
    },
  ];

  const categories: CategoryDetails[] = [
    {
      id: 1,
      cname: "Technology",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      bgColor: "#E8D8C8",
    },
    {
      id: 2,
      cname: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800",
      bgColor: "#E5DCC5",
    },
    {
      id: 3,
      cname: "Travel",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      bgColor: "#D8E1D2",
    },
    {
      id: 4,
      cname: "Business",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
      bgColor: "#E5D5D0",
    },
    {
      id: 5,
      cname: "Health & Fitness",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      bgColor: "#D9E0D4",
    },
    {
      id: 6,
      cname: "Creativity",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
      bgColor: "#E9D8B9",
    },
  ];
  return (
    <aside className="flex w-full flex-col gap-9">
      {/* Most Popular */}
      <section>
        <div className="mb-5">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            What's Hot
          </p>
          <h2 className="font-display text-2xl text-foreground">
            Most Popular
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-border">
          {posts.slice(0, 4).map((post) => (
            <MenuPostCard post={post} isImage={false} key={post.id} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="rounded-xl border border-border bg-surface p-4 sm:p-5">
        <div className="mb-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Discover by Topics
          </p>
          <h2 className="font-display text-2xl text-foreground">Categories</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              href={`/category/${category.cname.toLowerCase()}`}
              key={category.id}
              className="rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#F5EBD0]"
            >
              {category.cname}
            </Link>
          ))}
        </div>
      </section>

      {/* Editor's Pick */}
      <section>
        <div className="mb-5">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Chosen by the Editor
          </p>
          <h2 className="font-display text-2xl text-foreground">
            Editor's Pick
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {posts.slice(4, 8).map((post) => (
            <MenuPostCard post={post} isImage={true} key={post.id} />
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Menu;
