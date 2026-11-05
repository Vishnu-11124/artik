import Link from "next/link";
import type { CategoryDetails } from "./CategoryList";

interface SingleCategoryDetails {
  category: CategoryDetails;
}

const CategoryCard = ({ category }: SingleCategoryDetails) => {
  return (
    <Link
      href={`/category/${category.cname.toLowerCase().replace(/\s+/g, "-")}`}
      style={{ backgroundColor: category.bgColor }}
      className="group relative isolate flex aspect-3/2 overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.cname}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

      <div className="relative mt-auto w-full p-2.5">
        <p className="font-display text-sm text-white transition-transform duration-300 group-hover:translate-x-1 sm:text-base">
          {category.cname}
        </p>

        <div className="mt-1 h-0.5 w-5 rounded-full bg-[#F5EBD0] transition-all duration-300 group-hover:w-8" />
      </div>
    </Link>
  );
};

export default CategoryCard;
