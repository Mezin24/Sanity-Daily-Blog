import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { NavbarProps } from 'sanity';

const StudioNavbar = (props: NavbarProps) => {
  return (
    <div>
      <div className='flex items-center p-2'>
        <Link
          href='/'
          className='capitalize text-[#f7ab0a] flex items-center hover:bg-gray-800 p-2 rounded-md'
        >
          <ArrowUturnLeftIcon className='h-6 w-6 text-[#f7ab0a] mr-2' />
          Go tp website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
};
export default StudioNavbar;
