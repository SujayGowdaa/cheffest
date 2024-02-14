import { Link } from 'react-router-dom';

export default function Developer() {
  return (
    <div className=' max-w-max w-full bg-White border-t-[1px] border-Grey/40 fixed bottom-0'>
      <div className='text-[8px] flex flex-wrap justify-center items-center gap-x-24 gap-y-0 px-2 py-1 sm:justify-between sm:px-10 md:px-24 '>
        <div>
          <span className=' text-Grey'>Designed and Developed: </span>{' '}
          <span className=' font-semibold underline hover:text-Orange'>
            <Link
              to='https://www.linkedin.com/in/sujaygowda/'
              target='_blank'
              rel='noreferrer'
            >
              SUJAY GOWDA
            </Link>
          </span>
        </div>
        <span className=' text-Grey'>Last Updated | 14 02 2024</span>
      </div>
    </div>
  );
}
