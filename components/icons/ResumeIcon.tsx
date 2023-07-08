import IconBase from './IconBase';

const ResumeIcon = ({ size }: { size: number }) => (
  <IconBase color='bg-[#3B82F6]' text='Resume'>
    <svg
      width={size} height={size}
      className='group-hover:text-[#3B82F6]'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
    >
      <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z'/><polyline points='14 2 14 8 20 8'/><line x1='16' x2='8' y1='13' y2='13'/><line x1='16' x2='8' y1='17' y2='17'/><line x1='10' x2='8' y1='9' y2='9'/>
    </svg>
  </IconBase>
);

export default ResumeIcon;
