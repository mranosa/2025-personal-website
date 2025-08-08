import {ComponentPropsWithoutRef, ComponentType} from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import avatar from '@/images/profile/me.png'

function MailIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          {...props}
      >
        <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
  )
}

function BriefcaseIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          {...props}
      >
        <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
  )
}

function ArrowDownIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
      <Card as="article">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow as="time" dateTime={article.date} decorate>
          zup
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
  )
}

interface Testimonial {
    from: string,
    message: string,
    position: string,
    company: string,
}



function Testimonial({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card as="article">
            {/*<Card.Title href={`/articles/${article.slug}`}>*/}
            <Card.Title href="#">
                {testimonial.from}
            </Card.Title>
            <Card.Eyebrow decorate>
                {testimonial.position}
            </Card.Eyebrow>
            <Card.Description>{testimonial.message}</Card.Description>
            <Card.Cta>Read article</Card.Cta>
        </Card>
    )
}

function SocialLink({
                      icon: Icon,
                      ...props
                    }: ComponentPropsWithoutRef<typeof Link> & {
  icon: ComponentType<{ className?: string }>
}) {
  return (
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
  )
}

function Newsletter() {
  return (
      <form
          action="/thank-you"
          className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified when I publish something new, and unsubscribe at any time.
        </p>
        <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
          />
        </span>
          <Button type="submit" className="ml-4 flex-none">
            Join
          </Button>
        </div>
      </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  const startLabel =
      typeof role.start === 'string' ? role.start : role.start.label
    const startDate =
      typeof role.start === 'string' ? role.start : role.start.dateTime

    const endLabel = typeof role.end === 'string' ? role.end : role.end.label
    const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </dl>
      </li>
  )
}

function Resume() {
    const resume: Array<Role> = [
    {
      company: 'Planetaria',
      title: 'CEO',
      logo: logoPlanetaria,
      start: '2019',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Airbnb',
      title: 'Product Designer',
      logo: logoAirbnb,
      start: '2014',
      end: '2019',
    },
    {
      company: 'Facebook',
      title: 'iOS Software Engineer',
      logo: logoFacebook,
      start: '2011',
      end: '2014',
    },
    {
      company: 'Starbucks',
      title: 'Shift Supervisor',
      logo: logoStarbucks,
      start: '2008',
      end: '2011',
    },
    {
        company: 'Airbnb',
        title: 'Product Designer',
        logo: logoAirbnb,
        start: '2014',
        end: '2019',
    },
    {
        company: 'Facebook',
        title: 'iOS Software Engineer',
        logo: logoFacebook,
        start: '2011',
        end: '2014',
    },
    {
        company: 'Starbucks',
        title: 'Shift Supervisor',
        logo: logoStarbucks,
        start: '2008',
        end: '2011',
    },
    {
        company: 'Airbnb',
        title: 'Product Designer',
        logo: logoAirbnb,
        start: '2014',
        end: '2019',
    },
    {
        company: 'Facebook',
        title: 'iOS Software Engineer',
        logo: logoFacebook,
        start: '2011',
        end: '2014',
    },
    {
        company: 'Starbucks',
        title: 'Shift Supervisor',
        logo: logoStarbucks,
        start: '2008',
        end: '2011',
    },
    {
        company: 'Starbucks',
        title: 'Shift Supervisor',
        logo: logoStarbucks,
        start: '2008',
        end: '2011',
    },
  ]

  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
              <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Button href="#" variant="secondary" className="group mt-6 w-full">
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </div>
  )
}

function Recommendations() {
    const testimonials = [
        {
            id: 1,
            person: { name: 'Eduardo Benz', href: '#' },
            imageUrl:
                'https://media.licdn.com/dms/image/v2/D560BAQGdwOyAxh0__Q/company-logo_100_100/B56ZedtayCHQAQ-/0/1750697618876/goformative_logo?e=1757548800&v=beta&t=9u1NX6Svhq6bfNbQPYRiiItfWlp5w4bHmtr4OEjzK9k',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam.',
            position: 'Software Engineer',
            company: 'Newsela',
        },
        {
            id: 4,
            person: { name: 'Jason Meyers', href: '#' },
            imageUrl:
                'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
            position: 'Software Engineer',
            company: 'Newsela',
        },
    ]

    const reviews = {
        average: 4,
        totalCount: 1624,
        counts: [
            { rating: 5, count: 1019 },
            { rating: 4, count: 162 },
            { rating: 3, count: 97 },
            { rating: 2, count: 199 },
            { rating: 1, count: 147 },
        ],
        featured: [
            {
                id: 1,
                rating: 5,
                content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
                author: 'Emily Selman',
                avatarSrc:
                    'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
            },
            {
                id: 2,
                rating: 5,
                content: `
        <p>Before getting the Ruck Snack, I struggled my whole life with pulverized snacks, endless crumbs, and other heartbreaking snack catastrophes. Now, I can stow my snacks with confidence and style!</p>
      `,
                author: 'Hector Gibbons',
                avatarSrc:
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
            },
        ],
    }

    return (
        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">

            {/*<h3 className="text-xl font-bold tracking-tight text-zinc-800 mb-8">*/}
            {/*    Recommendations*/}
            {/*</h3>*/}

            <div className="flex items-center justify-between text-zinc-800 px-0 mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Testimonials</h2>
                <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                    See all testimonials
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>

            <div className="-my-12 divide-y divide-gray-200">
                {reviews.featured.map((review) => (
                    <div key={review.id} className="py-12">
                        <div className="flex items-center">
                            <img alt={`${review.author}.`} src={review.avatarSrc} className="size-12 rounded-full" />
                            <div className="ml-4">
                                <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                                {/*<div className="mt-1 flex items-center">*/}
                                {/*    {[0, 1, 2, 3, 4].map((rating) => (*/}
                                {/*        <StarIcon*/}
                                {/*            key={rating}*/}
                                {/*            aria-hidden="true"*/}
                                {/*            className={classNames(*/}
                                {/*                review.rating > rating ? 'text-yellow-400' : 'text-gray-300',*/}
                                {/*                'size-5 shrink-0',*/}
                                {/*            )}*/}
                                {/*        />*/}
                                {/*    ))}*/}
                                {/*</div>*/}
                                {/*<p className="sr-only">{review.rating} out of 5 stars</p>*/}
                            </div>
                        </div>

                        <div
                            dangerouslySetInnerHTML={{ __html: review.content }}
                            className="mt-4 space-y-6 text-base text-gray-600 italic"
                        />
                    </div>
                ))}
            </div>

            {/*<div className="mt-4 sm:mt-0">*/}
            {/*    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
            {/*        View invoice*/}
            {/*        <span aria-hidden="true"> &rarr;</span>*/}
            {/*    </a>*/}
            {/*</div>*/}

        </div>
    )
}

function Photos() {
    const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
              <div
                  key={image.src}
                  className={clsx(
                      'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
                      rotations[imageIndex % rotations.length],
                  )}
              >
                <Image
                    src={image}
                    alt=""
                    sizes="(min-width: 640px) 18rem, 11rem"
                    className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
          ))}
        </div>
      </div>
  )
}

export default async function Home() {


    const testimonials: Testimonial[] = [
        {
            from: 'from',
            message: 'message',
            position: 'position',
            company: 'company',
        },
        {
            from: 'from',
            message: 'message',
            position: 'position',
            company: 'company',
        },
        {
            from: 'from',
            message: 'message',
            position: 'position',
            company: 'company',
        },
        {
            from: 'from',
            message: 'message',
            position: 'position',
            company: 'company',
        },
    ]

  return (
      <>

          {/*<Container className="mt-24 md:mt-28">*/}

            <Container className="mt-12 md:mt-14">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-8">
                      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                          Hello! How can I help?
                      </h1>
                      <div className="gap-4 text-center">
                          <Image
                              src={avatar}
                              alt=""
                              className="mx-auto size-32 shrink-0 rounded-full ring-4 ring-white"
                              unoptimized
                          />
                          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                              I’m Ken, a <strong>Software Engineer</strong> based in <strong>Makati City, Philippines</strong>.
                          </p>
                          <div className="mt-2 flex gap-6 justify-center-safe">
                              {/*<SocialLink href="#" aria-label="Follow on X" icon={XIcon} />*/}
                              <SocialLink
                                  href="#"
                                  aria-label="Follow on Instagram"
                                  icon={InstagramIcon}
                              />
                              <SocialLink
                                  href="#"
                                  aria-label="Follow on GitHub"
                                  icon={GitHubIcon}
                              />
                              <SocialLink
                                  href="#"
                                  aria-label="Follow on LinkedIn"
                                  icon={LinkedInIcon}
                              />
                          </div>
                      </div>


                      <Recommendations />
                  </div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                      <Resume />
                      {/*<Newsletter />*/}
                  </div>
              </div>
          </Container>

        {/*<Photos />*/}
        {/*<Container className="mt-24 md:mt-28">*/}
        {/*  <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">*/}
        {/*    <div className="flex flex-col gap-16">*/}
        {/*      {testimonials.map((testimonial, idx) => (*/}
        {/*          <Testimonial key={idx} testimonial={testimonial} />*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*    <div className="space-y-10 lg:pl-16 xl:pl-24">*/}
        {/*      <Newsletter />*/}
        {/*      <Resume />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}
      </>
  )
}
