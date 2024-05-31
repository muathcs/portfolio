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
    live?: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export default function LunchboxItemLinkGitHubProject({
  title: titleProp,
  description,
  username,
  live,
  repoName,
  ...props
}: Props) {
  const title = titleProp ?? repoName;
  const subtitle = description;
  const action = (
    <div className="flex gap-1">
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
          'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
        )}>
        Github
      </a>
      {/* <a
        href={live}
        target="_blank"
        rel="noreferrer"
        className={clsx(
          'inline-flex px-3 py-1.5 rounded-lg ',
          'text-xs text-center font-semibold',
          'transition',
          'text-[#24292f]',
          'border border-[#1f2328]/15',
          'shadow-sm',
          'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
        )}>
        Live
      </a> */}
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
