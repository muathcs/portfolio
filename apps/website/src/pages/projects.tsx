import Head from 'next/head';

import {InferGetStaticPropsType} from 'next/types';
import Header from '~/components/Header';

import LunchboxGrid from '~/lunchbox/core/LunchboxGrid';

import LunchboxItemLinkGitHubProject from '~/lunchbox/prebuilt/LunchboxItemLinkGitHubProject';
import NavLinks from '~/components/NavLinks';
import Image from 'next/image';

export async function getStaticProps() {
  return {props: {}};
}

export default function HomePage({}: InferGetStaticPropsType<
  typeof getStaticProps
>) {
  return (
    <div className="">
      <Head>
        <title>Muath Homepage</title>
      </Head>
      <Header rightContents={<NavLinks />} />
      <h1 className="sr-only">Muath&apos;s Projects</h1>
      <div className="flex flex-col gap-y-12  ">
        <section className="grid gap-y-6 h-full">
          <h2 className="sr-only">Projects</h2>
          <LunchboxGrid>
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              title="Digital E-Commerce Store"
              repoName="ReserverIt.git"
              description="I developed a digital e-commerce store enabling users to buy and sell a variety of digital products, such as templates, icons, and UI designs. The technology stack includes NEXT.js for both the front-end and back-end, with PostgreSQL serving as the database. File uploads are efficiently managed using UploadThing, while Zod is employed for robust server-side validation. The application is styled with Tailwind CSS, ensuring a modern and responsive design. Additionally, Stripe Custom Accounts are integrated to securely handle payments between buyers and sellers, streamlining the transaction process. This project showcases a comprehensive digital marketplace with secure payment handling and a user-friendly interface."
              live="https://reserver-it.vercel.app/"
              image={
                <Image
                  alt="Tech Interview Handbook"
                  className="object-contain group-hover:scale-105 transition"
                  width={200}
                  height={200}
                  src="/img/kart.avif"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              title="Celebrity Personalised messages Platform"
              repoName="video-streaming-platform.git"
              description="Book a shoutout from your favourite celeb\n I developed a Cameo clone utilizing the following technologies: Front-end with React, Back-end using Node.js/Express, PostgreSQL for the database, Firebase for authentication, and a Python/PyTorch-based AI recommender system. Key features include a comprehensive notification system to keep users informed about updates and interactions, an AI-powered recommender system that suggests content based on user preferences and behavior, and a robust refund system to manage cancellations and disputes efficiently. This project demonstrates a full-stack implementation with advanced functionality like real-time notifications and personalized recommendations."
              live="https://vid-stream-cl.onrender.com/"
              image={
                <Image
                  alt="Tech Interview Handbook"
                  className="object-contain group-hover:scale-105 transition"
                  width={200}
                  height={200}
                  src="/img/hikaya-logo.svg"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              repoName="NextJS-FinanceApp"
              title="FinanceApp"
              description="Finance app made with Next JS and firebase to help you track your expenses "
              live="https://next-js-finance-app-blush.vercel.app/"
              image={
                <img
                  alt="Docusaurus"
                  className="object-contain -rotate-3 group-hover:rotate-6 transition"
                  src="/img/dollar.avif"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              repoName="twitter-clone"
              title="Twitter Clone Type-Script and Mongodb"
              description=""
              live="https://twitter-clone-client-v76u.onrender.com/"
              image={
                <img
                  alt="Front End Interview Handbook"
                  className="object-contain group-hover:-translate-y-2 transition"
                  src="/img/twitter.webp"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              rows={4}
              cols={8}
              username="muathcs"
              repoName="saas-One"
              live="https://qtink.com"
              title="Qtink Cognitive ability testing site"
              description="A website to test your cognitive ability compared to other users using bell curve"
            />
          </LunchboxGrid>
        </section>
      </div>
    </div>
  );
}
