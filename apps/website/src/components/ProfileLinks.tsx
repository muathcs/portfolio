import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsMedium,
  BsStackOverflow,
} from 'react-icons/bs';

const internetProfiles = {
  github: {
    label: 'GitHub',
    icon: BsGithub,
    href: 'https://github.com/muathcs',
  },
  linkedin: {
    label: 'LinkedIn',
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/muath-k-416bbb2a6/',
  },
  twitter: {
    label: 'Twitter',
    icon: BsTwitter,
    href: 'https://x.com/muathio',
  },
  stackoverflow: {
    label: 'StackOverflow',
    icon: BsStackOverflow,
    href: 'https://stackoverflow.com/users/20284541/muathcs',
  },
};

export default function ProfileLinks() {
  return (
    <div className="text-sm flex flex-wrap gap-x-4">
      {Object.values(internetProfiles).map(({label, icon: Icon, href}) => (
        <a
          aria-label={label}
          className="text-zinc-400 hover:text-zinc-500 transition-colors"
          href={href}
          key={href}
          rel="noreferrer noopener"
          target="_blank">
          <Icon className="h-5 w-5 " />
        </a>
      ))}
    </div>
  );
}
