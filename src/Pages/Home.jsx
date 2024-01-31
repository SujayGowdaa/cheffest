import Banner from "../Features/Banner";
import Filter from "../Features/Filter";
import Meals from "../Features/Meals/Meals";
import Cart from "../Features/Cart/Cart";

export default function Home() {
  return (
    <main className="parent">
      {/* <Banner /> */}
      <Filter />
      <Meals />
      <Cart />
    </main>
  );
}
