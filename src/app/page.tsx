import Featured from "@/components/Featured";
import CategoryList from "@/components/CategoryList";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Featured Section */}
      <section className="mx-auto w-full max-w-7xl px-5 pt-8 lg:px-8 lg:pt-12">
        <Featured />
      </section>

      {/* Categories Section */}
      <section className="mx-auto w-full max-w-7xl px-5 py-10 lg:px-8 lg:py-12">
        <CategoryList />
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[2fr_1fr] lg:gap-10">
          <div className="min-w-0">
            <CardList />
          </div>

          <aside className="min-w-0">
            <Menu />
          </aside>
        </div>
      </section>
    </main>
  );
}
