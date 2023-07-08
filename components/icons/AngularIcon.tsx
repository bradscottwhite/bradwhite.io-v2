import IconBase from './IconBase';

const AngularIcon = ({ size }: { size: string }) => (
  <IconBase color='bg-[#C4473A]' text='Angular'>
    <svg
      width={size} height={size}
      viewBox='0 0 128 128'
      className='group-hover:text-[#C4473A]'
    >
      <path fill='currentColor' d='M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082'></path>
    </svg>
  </IconBase>
);

export default AngularIcon;
