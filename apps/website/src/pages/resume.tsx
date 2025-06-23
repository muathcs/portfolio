import Head from 'next/head';

import {InferGetStaticPropsType} from 'next/types';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import {BsMeta} from 'react-icons/bs';
import GrabIcon from '~/icons/GrabIcon';
import LunchboxIcon from '~/lunchbox/core/LunchboxIcon';

import LunchboxItemJobPosition from '~/lunchbox/layouts/LunchboxItemJobPosition';
import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import Container from '~/components/Container';
import NavLinks from '~/components/NavLinks';
import Link from 'next/link';

export async function getStaticProps() {
  return {props: {}};
}

export default function HomePage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div>
      <Head>
        <title>Muath Homepage</title>
      </Head>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Muath Resume</h1>
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-bold text-xl">About</h2>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-bold text-xl">Experience</h2>
          <LunchboxGrid>
            <LunchboxItemJobPosition
              icon={
                <LunchboxIcon
                  className="text-blue-500 shadow"
                  icon={GrabIcon}
                />
              }
              className="cursor-pointer"
              company="Customer Loyalty Platform"
              description={
                <ul className="list-disc">
                  <li>
                    Led development of modern web interface using React,
                    TypeScript, Tailwind CSS, and Framer Motion for small
                    merchants.
                  </li>
                  <li>
                    Built library of 15+ reusable React components and custom
                    hooks, accelerating development by 40%.
                  </li>

                  <li>
                    Developed responsive dashboards with interactive charts and
                    real-time API connections.
                  </li>
                </ul>
              }
              jobTitle="Frontend Developer"
              start={'July-2024'}
              end={'Present'}
              rows={2}
              cols={4}
            />
            <LunchboxItemJobPosition
              icon={
                <LunchboxIcon
                  className="text-blue-500 shadow"
                  icon={GrabIcon}
                />
              }
              className="cursor-pointer"
              company="Sabratha Private Clinic"
              description={
                <ul className="list-disc">
                  <li>
                    Developed interactive Next.js dashboard with real-time
                    performance metrics and data visualizations.
                  </li>
                  <li>
                    Built dynamic, responsive UI with React and Tailwind CSS,
                    incorporating charts and seamless backend integration.
                  </li>
                  <li>
                    Created robust client-side logic for alerts and
                    notifications using WebSockets for instant operational
                    responses.
                  </li>
                </ul>
              }
              jobTitle="Software Engineer"
              start={'June-2023'}
              end={'May-2024'}
              rows={2}
              cols={4}
            />
          </LunchboxGrid>
        </section>
        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-bold text-xl">Projects</h2>
          <div>
            <ul className="list-disc pl-4">
              {[
                {
                  year: 2025,
                  title: 'Customer Loyalty Platform',
                  href: 'https://www.tajmee.com/',
                  description: (
                    <>
                      A platform for small merchants to manage loyalty programs
                      and drive customer engagement
                    </>
                  ),
                },
                {
                  year: 2024,
                  title: 'Celebrity Personalised Messages Platform',
                  href: 'https://github.com/muathcs/video-streaming-platform',
                  description: (
                    <>
                      A platform to connect Fans With their favourite Celebrity
                      both mobile and website
                    </>
                  ),
                },
                {
                  year: 2024,
                  title: 'Flex',
                  href: 'https://github.com/muathcs/react-native-flex',
                  description: <>A React native excercise app</>,
                },

                {
                  year: 2024,
                  title: 'Digital Goods market place',
                  href: 'https://github.com/muathcs/nextjs-e-commerce',
                  description: (
                    <>
                      NextJS e-commerce for selling digital goods built using
                      TypeScript and Postgres
                    </>
                  ),
                },
                {
                  year: 2024,
                  title: 'Blockchain simulator',
                  href: 'https://github.com/muathcs/BlockCahin',
                  description: (
                    <>
                      I built a blockchain application in C# that simulates the
                      core functionalities of a real blockchain
                    </>
                  ),
                },
                {
                  year: 2024,
                  title: 'Super Market',
                  href: 'https://github.com/muathcs/cSharp-SuperMarket-CRUD',
                  description: <>CRUD super market app using C# .Net 8</>,
                },
                {
                  year: 2023,
                  title: 'Twitter Clone',
                  href: 'https://github.com/muathcs/twitter-clone',
                  description: <>Twitter Clone using TypeScript and MongoDB</>,
                },

                {
                  year: 2023,
                  title: 'DevJob',
                  href: 'https://github.com/muathcs/DevJobs',
                  description: (
                    <>
                      Full stack job posting site, using TypeScript and MongoDB
                    </>
                  ),
                },
                {
                  year: 2023,
                  title: 'React Social ',
                  href: 'https://github.com/muathcs/React-Socials',
                  description: <>Social media app built with React using MUI</>,
                },
                {
                  year: 2023,
                  title: 'Todo App ',
                  href: 'https://github.com/muathcs/PERN-Todo',
                  description: (
                    <>
                      Good old Todo app, but full stack using Postgres and
                      Typescript
                    </>
                  ),
                },
                {
                  year: 2022,
                  title: 'Pomodor Clock',
                  href: 'https://github.com/muathcs/pomodorClock',
                  description: (
                    <>First React App, a Pomodor clock to track your work CSS</>
                  ),
                },

                {
                  year: 2022,
                  title: 'Drone Game ',
                  href: 'https://github.com/muathcs/drone-sim',
                  description: <>Drone game in Java</>,
                },
                {
                  year: 2022,
                  title: 'Drums Simulator',
                  href: 'https://github.com/muathcs/drums',
                  description: <>Drums simulator in Vanilla Javascript</>,
                },
                {
                  year: 2022,
                  title: 'Cards shuffler',
                  href: 'https://github.com/muathcs/cards',
                  description: (
                    <>
                      C++ app to shuffle cards, using algorithms like merge sort
                      and bubble sort.
                    </>
                  ),
                },
              ].map(({year, title, href, description}) => (
                <li key={href}>
                  <span className="text-zinc-400">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600 font-medium"
                    href={href}
                    target="_blank"
                    rel="noreferrer">
                    {title}
                  </Link>
                  : <span className="text-zinc-500">{description}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-y-4">
          <h2 className="tracking-tight font-bold text-xl">Leadership</h2>
          <div>
            <ul className="list-disc pl-4">
              {[
                {
                  year: 2024,
                  title: (
                    <>
                      Lead a group in developing a Virtual Reality Game in
                      C#/Unity
                    </>
                  ),
                  href: 'https://www.facebook.com/khangtoh/videos/oa.936011683431143/10156518641565835/?type=3&theater&ifg=1',
                },
                {
                  year: 2023,
                  title: (
                    <>
                      Organized and led study groups to help peers understand
                      complex computer science topics.
                    </>
                  ),
                  href: 'https://www.slideshare.net/AllThingsOpen/painless-open-source-documentation-with-docusaurus',
                },
                {
                  year: 2022,
                  title: (
                    <>Lectured First Yr Computer Science Students on Git</>
                  ),
                  href: 'https://www.youtube.com/watch?v=QcGJsf6mgZE',
                },
              ].map(({year, title, href}) => (
                <li>
                  <span className="text-zinc-400">{year}</span> —{' '}
                  <Link
                    className="text-zinc-500 hover:underline hover:text-zinc-600"
                    href={href}
                    target="_blank"
                    rel="noreferrer">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
