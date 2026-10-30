import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

const Home = () => {
  return (
    <div>
      <Featured />
      <CategoryList />

      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default Home;
