import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  ResumeIcon
} from '../icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mx-auto bg-dark-2 w-full'>
      <div className='p-4 md:py-8 px-16'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Link href='/' className='flex items-center pt-3 brightness-150 text-light-3/75' style={{ fontFamily: 'Crenzo', filter: 'blur(1px)' }}>
            <span className='self-center text-3xl font-semibold whitespace-nowrap'>BW</span>
          </Link>

          <ul className='flex flex-wrap items-center mb-6 sm:mb-0 gap-14'>
            <li><Link href='#'>
              <GitHubIcon size='2em' />
            </Link></li>
            <li><Link href='#'>
              <LinkedInIcon size='2em' />
            </Link></li>
            <li><Link href='#'>
              <ResumeIcon size='2em' />
            </Link></li>
            <li><Link href='#'>
              <MailIcon size='2em' />
            </Link></li>
          </ul>
        </div>

        <span className='block text-sm sm:text-center text-light-1 pt-6 pb-2'>
          <Link href='/' className='hover:underline'>Brad White</Link> {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
