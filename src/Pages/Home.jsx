import Banner from '../Features/Banner';
import Filter from '../Features/Filter';
import Meals from '../Features/Meals/Meals';
import Navbar from '../Features/Navbar/Navbar';
import Cart from '../Features/Cart/Cart';
import UIPositionFixed from '../UI/UIPositionFixed';

export default function Home() {
  return (
    <>
      <UIPositionFixed>
        <Navbar />
        <Cart />
      </UIPositionFixed>
      <main>
        <Banner />
        <Filter />
        <Meals />
      </main>
    </>
  );
}
