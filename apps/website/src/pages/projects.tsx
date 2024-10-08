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
      <div className="flex flex-col gap-y-12   ">
        <section className="grid gap-y-6 h-full">
          <h2 className="sr-only">Projects</h2>
          <LunchboxGrid>
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              title="Celebrity Personalised messages Platform (please wait 30 seconds for the server to load)"
              repoName="video-streaming-platform.git"
              description="Testing Login email:mm1@gmail.com password:123456 \n I developed a platform where users can book personalized shoutouts from celebrities, inspired by the idea of connecting fans with their favorite public figures in a more personal way. The project uses a modern tech stack: React for the front-end, Node.js/Express for the back-end, PostgreSQL for the database, and Firebase for authentication. It also features an AI-powered recommender system built with Python and PyTorch, suggesting content based on user preferences and behavior. Key features include a comprehensive notification system to keep users updated, and a robust refund system to manage cancellations and disputes efficiently. This project demonstrates full-stack development with advanced features like real-time notifications and personalized recommendations."
              live="https://vid-stream-cl.onrender.com/"
              image={
                <Image
                  alt="Tech Interview Handbook"
                  className="object-contain group-hover:scale-105 transition rounded-lg cursor-pointer"
                  width={400}
                  height={400}
                  src="/img/video-sharing.png"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group "
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
                  className="object-contain group-hover:scale-105 transition cursor-pointer rounded-lg  "
                  width={400}
                  height={500}
                  src="/img/reserveIt.png"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              rows={4}
              cols={8}
              username="muathcs"
              repoName="BlockCahin"
              noGit={true}
              live="https://qtink.com"
              title="Blockchain Simulator in C#"
              description="I built a blockchain application in C# that simulates the core functionalities of a real blockchain. This project models essential blockchain features like block creation, cryptographic hashing, proof-of-work consensus, and transaction validation. It provides a hands-on way to understand how decentralized ledgers work by mimicking the process of adding new blocks to the chain, securing data through cryptography, and achieving consensus across a distributed network. This project showcases my understanding of blockchain principles and my ability to implement complex algorithms in C#."
              image={
                <img
                  alt=""
                  className="object-contain group-hover:scale-105 cursor-pointer transition h-[90%] rounded-lg"
                  src="/img/block-chain.png"
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
              description="I developed a finance tracking app using Next.js and Firebase to help users effectively manage and track their expenses. The app allows users to categorize their spending, set budgets, and view real-time insights into their financial habits. With Firebase for secure authentication and database management, users can easily log in, store their data, and access it across devices."
              live="https://next-js-finance-app-blush.vercel.app/"
              image={
                <img
                  alt="Docusaurus"
                  className="object-contain group-hover:scale-105 transition w-full h-[90%] rounded-lg cursor-pointer "
                  src="/img/finance-page.png"
                />
              }
            />
            <LunchboxItemLinkGitHubProject
              className="group"
              rows={4}
              cols={8}
              username="muathcs"
              repoName="twitter-clone"
              title="Twitter Clone Type-Script and Mongodb (please wait 30 seconds for the server to load)"
              description="I built a Twitter clone primarily to showcase my UI skills, using TypeScript and MongoDB. While it replicates some core features of the popular platform, including real-time posting, user authentication, and a responsive feed, the main focus was on creating a visually appealing and interactive user interface. This project demonstrates my ability to work with modern web technologies and full-stack development, with a particular emphasis on front-end design and user experience. The use of TypeScript ensures robust type safety, while MongoDB provides efficient data storage. Although the server is functional, the project's strength lies in its UI implementation, showcasing my skills in building dynamic, visually engaging applications. (Please allow 30 seconds for the server to load.)"
              live="https://twitter-clone-client-v76u.onrender.com/"
              image={
                <img
                  alt="Front End Interview Handbook"
                  className="object-contain group-hover:scale-105 cursor-pointer transition h-[90%] rounded-lg"
                  src="/img/twitter.webp"
                  width={350}
                />
              }
            />
          </LunchboxGrid>
        </section>
      </div>
    </div>
  );
}
