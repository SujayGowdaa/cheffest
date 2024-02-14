import Banner from '../Features/Banner';
import Filter from '../Features/Filter';
import Meals from '../Features/Meals/Meals';

export default function Home() {
  return (
    <main className=' flex flex-col justify-center items-center'>
      <Banner />
      <Filter />
      <Meals />
    </main>
  );
}
