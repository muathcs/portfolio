import {BsGithub} from 'react-icons/bs';
import {Props as SelfProps} from '../layouts/LunchboxItemLink';
import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxIcon from '../core/LunchboxIcon';
import LunchboxItemLink from '../layouts/LunchboxItemLink';
import clsx from 'clsx';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    username: string;
    repoName: string;
    description?: string;
    noGit?: string;
    live?: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export default function LunchboxItemLinkGitHubProject({
  title: titleProp,
  description,
  username,
  live,
  noGit,
  repoName,
  ...props
}: Props) {
  const {className, cols, rows, ...rest} = props;

  const title = titleProp ?? repoName;
  const subtitle = description;
  const action = (
    <div
      className={clsx(
        'flex gap-1 flex-col md:flex-row   ',
        cols == 8 && 'mt-5',
      )}>
      <a
        href={`https://github.com/${username}/${repoName}`}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'inline-flex px-3 py-1.5 rounded-lg',
          'text-xs text-center font-semibold',
          'transition',
          'text-[#24292f]',
          'border border-[#1f2328]/15',
          'shadow-sm',
          'bg-[#f6f8fa] hover:bg-[#ccccccd3] flex items-center justify-center w-full',
          cols === 8 && 'px-8 py-5',
        )}>
        Github
      </a>
      {!noGit && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={clsx(
            'inline-flex px-3 py-1.5 rounded-lg',
            'text-xs text-center font-semibold',
            'transition',
            'text-[#24292f]',
            'border border-[#1f2328]/15',
            'shadow-sm',
            'cursor-pointer',
            'bg-[#f6f8fa] hover:bg-[#ccccccd3]  w-full',
            cols === 8 && 'px-8 py-5 flex justify-center items-center',
          )}>
          Live
        </a>
      )}
    </div>
  );

  return (
    <LunchboxItemLink
      icon={icon}
      title={title}
      subtitle={subtitle ?? description}
      action={action}
      {...props}
    />
  );
}
