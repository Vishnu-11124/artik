import React from "react";
import Pagination from "./Pagination";
import PostCards from "./PostCards";

export interface PostDetails {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  date: string;
}

const CardList = () => {
  const recentPosts: PostDetails[] = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      description:
        "Explore how artificial intelligence is transforming industries, shaping our daily lives, and creating new possibilities for the future.",
      category: "Technology",
      date: "2026-10-12",
    },
    {
      id: 2,
      title: "Finding Beauty in Everyday Moments",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
      description:
        "Discover how slowing down and appreciating simple moments can bring more happiness, creativity, and meaning into your life.",
      category: "Lifestyle",
      date: "2026-10-15",
    },
    {
      id: 3,
      title: "A Journey Through the Mountains",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      description:
        "Experience the beauty of mountain landscapes and discover why travelling into nature can be one of life's greatest adventures.",
      category: "Travel",
      date: "2026-10-18",
    },
    {
      id: 4,
      title: "Building a Successful Business from Scratch",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
      description:
        "Learn the essential principles of starting a business, overcoming challenges, and turning a simple idea into something meaningful.",
      category: "Business",
      date: "2026-10-21",
    },
    {
      id: 5,
      title: "Small Habits for a Healthier Life",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
      description:
        "Simple daily habits involving exercise, nutrition, and consistency can make a significant difference to your overall well-being.",
      category: "Health & Fitness",
      date: "2026-10-24",
    },
    {
      id: 6,
      title: "Unlocking Your Creative Potential",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
      description:
        "Explore practical ways to overcome creative blocks, develop fresh ideas, and express your imagination with confidence.",
      category: "Creativity",
      date: "2026-10-27",
    },
  ];
  return (
    <div className="flex-5">
      <h1>Recent Posts</h1>
      <div>
        {/* posts */}
        {recentPosts.map((post) => (
          <PostCards key={post.id} post={post} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
