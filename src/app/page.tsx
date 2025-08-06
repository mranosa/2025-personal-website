'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import imageProfileMe from '@/images/profile/me.png'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

const person = {
  backgroundImage:
      'https://images.unsplash.com/photo-1587224948307-ea949af1b8a1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  name: 'Ken Ranosa',
  title: 'Full Stack Software Engineer',
  role: 'Admin',
  email: 'ken.ranosa@gmail.com',
  telephone: '+1-202-555-0170',
  imageUrl:
  imageProfileMe,
}

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
        <div>
          <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
            />

            <div className="fixed inset-0 flex">
              <DialogPanel
                  transition
                  className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
              >
                <TransitionChild>
                  <div
                      className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                    </button>
                  </div>
                </TransitionChild>

                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="-mx-2 flex-1 space-y-1">
                      {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                                href={item.href}
                                className={classNames(
                                    item.current
                                        ? 'bg-gray-800 text-white'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                )}
                            >
                              <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                              {item.name}
                            </a>
                          </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </div>
          </Dialog>

          {/* Static sidebar for desktop */}
          <div
              className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
            <nav className="mt-8">
              <ul role="list" className="flex flex-col items-center space-y-1">
                {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                          href={item.href}
                          className={classNames(
                              item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                              'group flex gap-x-3 rounded-md p-3 text-sm/6 font-semibold',
                          )}
                      >
                        <item.icon aria-hidden="true" className="size-6 shrink-0"/>
                        <span className="sr-only">{item.name}</span>
                      </a>
                    </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
              className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-xs sm:px-6 lg:hidden">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6"/>
            </button>
            <div className="flex-1 text-sm/6 font-semibold text-white">Dashboard</div>
          </div>

          <main className="lg:pl-20 bg-gray-100">
            <div className="flex flex-col md:flex-row ">
              <div className="flex-auto border-orange-400 border-2">

                <div className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm m-2 max-w-96">
                  <img alt="" src={person.backgroundImage} className="h-24 w-full rounded-t-lg" />
                  <div className="flex flex-1 flex-col p-8 -mt-25">
                    {/*<img alt="" src={imageProfileMe} className="mx-auto size-32 shrink-0 rounded-full ring-4 ring-white" />*/}
                    <Image
                        src={person.imageUrl}
                        alt=""
                        className="mx-auto size-32 shrink-0 rounded-full ring-4 ring-white"
                        unoptimized
                    />
                    <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                    <dl className="mt-1 flex grow flex-col justify-between">
                      <dt className="sr-only">Title</dt>
                      <dd className="text-sm text-gray-500">{person.title}</dd>
                      <dt className="sr-only">Role</dt>
                      <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
                  {person.role}
                </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="flex w-0 flex-1">
                        <a
                            href={`mailto:${person.email}`}
                            className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                          <EnvelopeIcon aria-hidden="true" className="size-5 text-gray-400" />
                          Email
                        </a>
                      </div>
                      <div className="-ml-px flex w-0 flex-1">
                        <a
                            href={`tel:${person.telephone}`}
                            className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                        >
                          <PhoneIcon aria-hidden="true" className="size-5 text-gray-400" />
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="w-64 flex-auto  border-amber-300 border-2">02</div>
              <div className="w-32 flex-auto border-b-base-200 border-2">03</div>
            </div>
          </main>


          {/*<main className="lg:pl-20">*/}
          {/*  <div className="xl:pl-96 ">*/}
          {/*    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6 border-2">/!* Main area *!/</div>*/}
          {/*  </div>*/}
          {/*</main>*/}

          {/*<aside className="fixed inset-y-0 left-20 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">*/}
          {/*  /!* Secondary column (hidden on smaller screens) *!/*/}
          {/*</aside>*/}
        </div>
      </>
  )
}
