import IconBase from './IconBase';

const HTMLIcon = ({ size }: { size: number }) => (
  <IconBase color='bg-[#E44D26]' text='HTML5'>
    <svg
      width={size} height={size}
      viewBox='0 0 128 128'
      className='group-hover:text-[#E44D26]'
    >
      <path fill='currentColor' d='M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z'></path>
    </svg>
  </IconBase>
);

export default HTMLIcon;
