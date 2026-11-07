import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Previous */}
      <button
        type="button"
        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-[#F5EBD0]"
      >
        <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
        Previous
      </button>

      {/* Page Info */}
      <span className="text-xs font-medium text-muted sm:text-sm">
        Page <span className="text-primary">1</span> of 10
      </span>

      {/* Next */}
      <button
        type="button"
        className="group inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-[#F5EBD0] transition-all duration-300 hover:bg-primary-hover"
      >
        Next
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Pagination;
