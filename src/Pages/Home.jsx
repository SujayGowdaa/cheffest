import Banner from '../Features/Banner';
import Filter from '../Features/Filter';
import Meals from '../Features/Meals/Meals';

export default function Home() {
  return (
    <main className=' relative max-w-max'>
      <Banner />
      <Filter />
      <Meals />
    </main>
  );
}
