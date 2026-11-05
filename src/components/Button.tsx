"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  id: string;
}

const Button = ({ text, id }: ButtonProps) => {
  return (
    <Link
      href={`/post/${id}`}
      className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/20"
    >
      {text}
      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default Button;
