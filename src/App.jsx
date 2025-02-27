"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster, toast } from 'sonner'
import Particles from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Marquee from "@/components/magicui/marquee";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import ShineBorder from "@/components/magicui/shine-border";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import GridPattern from "@/components/magicui/grid-pattern";
import Meteors from "@/components/magicui/meteors";
import { Link, animateScroll as scroll } from "react-scroll";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"


import { DiscordLogoIcon, ArrowRightIcon, CheckIcon, ExclamationTriangleIcon, SketchLogoIcon, Crosshair2Icon, ChatBubbleIcon, BellIcon, PersonIcon, EnvelopeOpenIcon, GlobeIcon, RocketIcon, PlusIcon } from "@radix-ui/react-icons";
import { Croissant, Triangle, TriangleAlert, Moon } from 'lucide-react';


const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="w-screen-minus-40 relative flex flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export default function App() {
  const [isNarrow, setIsNarrow] = useState(false);
  const [isNarrow2, setIsNarrow2] = useState(false);
  const [isNarrow3, setIsNarrow3] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleMediaQueryChange = (e) => {
      setIsNarrow(e.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 584px)');

    const handleMediaQueryChange = (e) => {
      setIsNarrow2(e.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 948px)');

    const handleMediaQueryChange = (e) => {
      setIsNarrow3(e.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="grid h-screen w-full">
        <div className="flex flex-col">
          <header className="fixed w-full top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background/30 px-4 backdrop-blur-lg">
            <h1 className={isNarrow2 ? 'text-xl font-semibold' : 'text-xl font-semibold p-3'}>Siklon Bot</h1>
            <div className={isNarrow2 ? 'ml-auto flex flex-row' : 'ml-auto flex flex-row gap-8'}>
              <div>
                <a href="#features"><Button variant="link">Features</Button></a>
                <a href="#pricing"><Button variant="link">Pricing</Button></a>
                <a href="#reviews"><Button variant="link">Reviews</Button></a>
              </div>
              <a className={isNarrow2 ? 'hidden' : 'block'} target='_blank' href="https://discord.gg/z2XqEpy2YQ"><Button variant="outline" className="ml-auto flex gap-2">Join Discord<DiscordLogoIcon className="ml-1 size-4" /></Button></a>
              <DropdownMenu>
                <DropdownMenuTrigger><Button variant="link" className="ml-auto flex gap-2"><Moon className="size-4" /></Button></DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Light</DropdownMenuItem>
                  <DropdownMenuItem>Dark</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/*<Button variant="outline" className="ml-auto">Login</Button>*/}
            </div>
          </header>
        <Toaster toastOptions={{ classNames: { toast: 'group toast bg-background text-foreground border shadow-lg', title: 'text-white-400', description: 'text-muted-foreground', actionButton: 'bg-primary text-primary-foreground',cancelButton: 'bg-primary text-primary-foreground'},}} />
        <main className="w-full flex-1 gap-4 p-4 pt-57">
          <section id='landing' className="flex h-160 w-full flex-col items-center justify-center bg-background gap-10">
            <div className='flex gap-5 flex-col items-center'>
              <a href="#features"><div className={cn("group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",)}>
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <p className='text-xs'>✨ Discover all features</p>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div></a>
              <span className={isNarrow ? 'whitespace-pre-wrap bg-gradient-to-br from-black to-gray-400/100 bg-clip-text text-center text-[9vw] font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 max-w-6xl' : 'whitespace-pre-wrap bg-gradient-to-br from-black to-gray-400/100 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 max-w-6xl'}>
              Siklon, the new way to have your own bot
              </span>
            </div>
            <p className='text-center text-2xl font-light text-white text-opacity-55'>The quick and easy way to create and manage your own Discord bot, tailored to all your needs.</p>
            <Button>
              <a href="#pricing"><p>Get started for free</p></a>
              <ArrowRightIcon className="ml-1 size-4" />
            </Button>
            <Particles className="absolute inset-0 pointer-events-none" quantity={100} ease={80} color='#FFFFFF'/>
          </section>
          <section id='features' className={isNarrow ? 'w-screen-minus-40 relative flex h-[230rem] w-full items-center justify-center bg-background gap-10 flex flex-col p-5' : 'w-screen-minus-40 relative flex h-256 w-full items-center justify-center bg-background gap-10 flex flex-col p-5'}>
            <div className='pointer-events-none absolute mt-[300px] h-[1000px] flex w-full flex-col items-center justify-center overflow-hidden'>
              <Meteors number={20} />
            </div>
          <div className='flex flex-col items-center'>
              <h2 className='font-bold text-lg'>Features</h2>
              <h1 className='text-center font-bold antialiased text-6xl'>What all you need for your bot</h1>
            </div>
          <BentoGrid className="lg:grid-rows-3 lg:grid-cols-5 p-0">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          </section>
          <section id='pricing' className={isNarrow3 ? 'w-screen-minus-40 relative flex h-[1400px] w-full items-center justify-center bg-background gap-10 flex flex-col' : 'w-screen-minus-40 relative flex h-160 w-full items-center justify-center bg-background gap-10 flex flex-col'}>
            <div className='pointer-events-none'>
              <GridPattern squares={[ [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], [10, 10], [12, 15], [15, 10], [10, 15], [15, 10], [10, 15], [15, 10], ]} className={cn( "pointer-events-none [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]", "pointer-events-none inset-x-0 inset-y-[-30%] h-[150%] skew-y-12", )} />
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-lg'>Pricing</h2>
              <h1 className='text-center font-bold antialiased text-6xl'>Simple pricing for everyone.</h1>
            </div>
            <div className={isNarrow3 ? 'w-full items-center justify-center flex flex-col gap-10' : 'w-full items-center justify-center flex flex-row gap-10'}>

              <Card className={isNarrow2 ? 'w-full text-center text-2xl capitalize p-0' : 'w-96 text-center text-2xl capitalize p-0'}>
                <div className='h-96 flex flex-col gap-5'>
                  <CardHeader>
                    <p>Basic</p>
                    <CardDescription>A basic plan for startups and individual users</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-7">
                    <div className="flex items-end gap-1">
                      <CardTitle>0,50€</CardTitle>
                      <CardDescription>/month</CardDescription>
                    </div>
                    <a className='w-full' target='_blank' href="https://discord.gg/z2XqEpy2YQ"><Button className="w-full">Subscribe</Button></a>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>+5 AI asks / day</p>
                    </div>
                  </CardFooter>
                </div>
              </Card>
              <ShineBorder className={isNarrow2 ? 'pointer-events-none w-full text-center text-2xl capitalize p-0' : 'pointer-events-none w-96 text-center text-2xl capitalize p-0'} color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
              <Card className={isNarrow2 ? 'w-full p-0' : 'w-full p-0'}>
                <div className='h-96 flex flex-col gap-5'>
                  <CardHeader>
                    <p>Premium</p>
                    <CardDescription>A premium plan for growing businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-7">
                    <div className="flex items-end gap-1">
                      <CardTitle>1€</CardTitle>
                      <CardDescription>/month</CardDescription>
                    </div>
                    <a className='w-full pointer-events-auto' target='_blank' href="https://discord.gg/z2XqEpy2YQ"><Button className="w-full">Subscribe</Button></a>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>Level message</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>+3 AI ask / server / day</p>
                    </div>
                  </CardFooter>
                </div>
              </Card>
              </ShineBorder>
              <Card className={isNarrow2 ? 'w-full text-center text-2xl capitalize p-0' : 'w-96 text-center text-2xl capitalize p-0'}>
                <div className='h-96 flex flex-col gap-5'>
                  <CardHeader>
                    <p>Custom</p>
                    <CardDescription>An enterprise plan with advanced features for large organizations</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-7">
                    <div className="flex items-end gap-1">
                      <CardTitle>1,50€</CardTitle>
                      <CardDescription>/month</CardDescription>
                    </div>
                    <a className='w-full' target='_blank' href="https://discord.gg/z2XqEpy2YQ"><Button className="w-full">Subscribe</Button></a>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start">
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>Level message</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>Profil bot</p>
                    </div>
                    <div className='flex items-center gap-2 text-sm'>
                      <CheckIcon className="ml-1 size-4" />
                      <p className=''>+5 AI ask / server / day</p>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </div>


          </section>
          <section id='reviews' className='w-screen-minus-40 relative flex h-160 w-full flex-col items-center justify-center bg-backgroud gap-10'>
            <div className='flex flex-col items-center'>
              <h2 className='font-bold text-lg'>Reviews</h2>
              <h1 className='text-center font-bold antialiased text-6xl'>What people are saying</h1>
            </div>
            <MarqueeDemo></MarqueeDemo>
          </section>
          <footer className="bg-background py-12">
            <div className="container grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-lg font-semibold">Siklon Inc</span>
                </div>
                <p className="text-muted-foreground">&copy; 2024 Siklon. All rights reserved.</p>
                <p className="text-muted-foreground">
                  Siklon is the perfect bot that you need.
                </p>
              </div>
              <div className="grid gap-4">
              </div>
              <div className="grid gap-4">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <div className="grid gap-2">
                  <a href="#landing" className="text-muted-foreground hover:underline" prefetch={false}>
                    Home
                  </a>
                  <a href="#features" className="text-muted-foreground hover:underline" prefetch={false}>
                    Features
                  </a>
                  <a href="#pricing" className="text-muted-foreground hover:underline" prefetch={false}>
                    Pricing
                  </a>
                  <a href="#reviews" className="text-muted-foreground hover:underline" prefetch={false}>
                    Reviews
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
        
      </div>
    </div>
    </ThemeProvider>
  )
}


const features = [
  {
    Icon: Crosshair2Icon,
    name: "Anti raid",
    description: "It can protect your server automatically",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    fonctionality: `<ul><li>&#8226; /black-list (Black-list a person)</li><li>&#8226; /black-list-search (View the black-list)</li><li>&#8226; /snipe (See a deleted message)</li><li>&#8226; /config (Bot logs)</li><li>&#8226; !info (View all activated/deactivated anti-raid functions)</li><li>&#8226; !anti-r (on/off) (Enable/Disable anti-join)</li><li>&#8226; !anti-m (on/off) (Enable/Disable forbidden word filter)</li><li>&#8226; !anti-e (on/off) (Enable/Disable anti everyone/here)</li><li>&#8226; !anti-i (on/off) (Enable/Disable discord/external link filter)</li></ul>`
  },
  {
    Icon: ChatBubbleIcon,
    name: "Flax AI",
    description: "Ask anything to the AI",
    href: "/",
    cta: "Learn more",
    background: (
      <div className="h-full w-full">
        {/*<img src='../public/test.png' className="absolute inset-0 h-full w-full object-cover opacity-20" />*/}
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 p-0",
    fonctionality: `<ul><li>&#8226; /config (set-chat)</li><li>&#8226; !IA-info (Information about the AI)</li></ul>`,
  },
  {
    Icon: GlobeIcon,
    name: "General",
    description: "Supports 8+ useful commands",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    fonctionality: `<ul><li>&#8226; !ping (Bot latency)</li><li>&#8226; !ai-info (Information about Flax AI)</li><li>&#8226; /bot-infos (Information about Siklon)</li><li>&#8226; /help (Displays this menu)</li><li>&#8226; /embed (Custom embed)</li><li>&#8226; /config (change the prefix)</li><li>&#8226; /premium (View premium commands)</li><li>&#8226; /config (change the language)</li></ul>`,
  },
  {
    Icon: PersonIcon,
    name: "Join - Leave",
    description: "Create your channel to see who joins and leaves",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    fonctionality: `<ul><li>&#8226; /config (Set join channel)</li><li>&#8226; /config (Set join message)</li><li>&#8226; /config (Set leave channel)</li><li>&#8226; /config (Set leave message)</li><li>&#8226; /auto-role (assign a role on arrival)</li></ul>`
  },
  {
    Icon: ExclamationTriangleIcon,
    name: "Moderation",
    description: "Use simple commands to moderate your server",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    fonctionality: `<ul><li>&#8226; /ban (Ban a user)</li><li>&#8226; /kick (Kick a user)</li><li>&#8226; /clear (Clear messages)</li><li>&#8226; /warn (Warn a member)</li><li>&#8226; /config (Warn punishments)</li><li>&#8226; check-warn &lt;@user&gt;/nothing (Check warns)</li><li>&#8226; !un-warn &lt;@user&gt; &lt;1/2/3&gt;</li></ul>`
  },
  {
    Icon: EnvelopeOpenIcon,
    name: "Tickets",
    description: "Approach your community with these features",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-6 lg:row-start-1 lg:row-end-2",
    fonctionality: `<ul><li>&#8226; !ticket (Send the ticket message)</li><li>&#8226; /config (Set-ticket)</li></ul>`
  },
  {
    Icon: SketchLogoIcon,
    name: "Economy",
    description: "An advanced economy behind Siklon",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    fonctionality: `<ul><li>&#8226; /pfc (Play rock-paper-scissors with me)</li><li>&#8226; !dé (Play dice with me)</li><li>&#8226; !mine (Mine coins!)</li><li>&#8226; !mineG (Receive your mining rewards)</li><li>&#8226; !daily (Receive your daily coins)</li><li>&#8226; !bank (View your pocket money)</li><li>&#8226; !casino (View economy commands)</li></ul>`
  },
  {
    Icon: PlusIcon,
    name: "Other",
    description: "Other tools to enjoy",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-4 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    fonctionality: `<ul><li>&#8226; /suggestion (send a suggestion)</li><li>&#8226; /config (set a suggestion channel)</li><li>&#8226; /dm (Send a private message to a member)</li><li>&#8226; /vote (Vote for Siklon on top.gg)</li></ul>`
  },
  {
    Icon: RocketIcon,
    name: "Levels",
    description: "Boost your community with a leveling system",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-5 lg:col-end-5 lg:row-start-2 lg:row-end-4",
    fonctionality: `<ul><li>&#8226; !rank @user (View your rank or others')</li><li>&#8226; /config (config-Level)</li></ul>`
  },
];




function CodeModel(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.5L5.5 6L2 10M7 11.5H12.5" stroke="#F8F9FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
}

function CornerDownLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 10 4 15 9 20" />
      <path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </svg>
  )
}

function MicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>

  )
}

function CopyIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy h-4 w-4"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
  )
}