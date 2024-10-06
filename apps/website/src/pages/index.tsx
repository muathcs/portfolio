import Head from 'next/head';

import {InferGetStaticPropsType} from 'next/types';
import {compareDesc} from 'date-fns';
import {allPosts} from 'contentlayer/generated';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import {BsMeta} from 'react-icons/bs';
import GrabIcon from '~/icons/GrabIcon';
import LunchboxIcon from '~/lunchbox/core/LunchboxIcon';

import LunchboxItemLinkGitHub from '~/lunchbox/prebuilt/LunchboxItemLinkGitHub';
import LunchboxItemLinkTwitter from '~/lunchbox/prebuilt/LunchboxItemLinkTwitter';
import LunchboxItemLinkFacebook from '~/lunchbox/prebuilt/LunchboxItemLinkFacebook';
import LunchboxItemLinkInstagram from '~/lunchbox/prebuilt/LunchboxItemLinkInstagram';
import LunchboxItemJobPosition from '~/lunchbox/layouts/LunchboxItemJobPosition';
import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import Container from '~/components/Container';
import NavLinks from '~/components/NavLinks';
import LunchboxItemLinkYouTube from '~/lunchbox/prebuilt/LunchboxItemLinkYouTube';
import LunchboxPlaygroundJobPosition from '~/lunchbox/playground/LunchboxPlaygroundJobPosition';

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return {props: {posts}};
}

export default function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="flex flex-col gap-y-12 b">
      <Head>
        <title>Muath Homepage</title>
      </Head>
      <Header rightContents={<NavLinks />} />
      <section className="grid gap-y-6">
        <h2 className="sr-only tracking-tight font-bold text-4xl">About</h2>
        <p className="text-zinc-800 col-span-3">
          I'm a dedicated Software Engineer with over a year of professional
          experience and more than four years of programming expertise. I have
          built and contributed to large-scale projects, including a
          video-sharing platform, using technologies like React, TypeScript,
          Node.js, Express, and PostgreSQL. I specialize in writing clean,
          well-tested, production-ready code and have experience with modern
          tools like Jest, CronJobs, and Stripe integration.
          <br />
          <br />
          In addition to my core expertise, my work spans a wide range of
          impactful projects. I have developed a blockchain simulator, gaining
          valuable insights into how blockchain technology operates. My
          experience in AI and machine learning includes building a heart
          disease detection system and an image classifier, applying advanced
          algorithms to tackle challenging real-world problems.
          <br />
          <br />I also worked as a software engineer intern at a private health
          clinic, where I implemented RESTful APIs using Node.js and optimized
          PostgreSQL queries, improving data retrieval speed by 50% and system
          performance by 25%. I developed a real-time notification system with
          WebSockets, reducing stock outs by 30%, and built internal tools with
          React and Node.js to streamline administrative workflows.
          Additionally, I created custom Express middleware for secure access
          and designed unit tests with Jest, which improved code reliability and
          reduced bugs in production by 20%.
        </p>
      </section>
      <section className="grid gap-y-6">
        <h2 className="tracking-tight font-bold text-xl">Find Me Online</h2>
        <LunchboxGrid>
          <LunchboxItemLinkGitHub rows={1} cols={4} username="muathcs" />
          <LunchboxItemLinkTwitter rows={1} cols={4} username="muathcsx" />
          {/* <LunchboxItemLinkYouTube
            rows={1}
            cols={4}
            username="code with mimo"
          /> */}
        </LunchboxGrid>
      </section>
    </div>
  );
}
