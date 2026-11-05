import CategoryCard from "./CategoryCard";

export interface CategoryDetails {
  id: number;
  cname: string;
  image: string;
  bgColor: string;
}

const CategoryList = () => {
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
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-6">
      {/* Section Heading */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Explore Topics
          </p>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Popular Categories
          </h2>
        </div>

        <p className="hidden max-w-xs text-right text-sm leading-6 text-muted sm:block">
          Explore different topics and discover stories that inspire you.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
