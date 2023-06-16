import React, { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "../icons"

export const NotificationButton = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="cursor-pointer outline-none">
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <Icons.bell className="h-5 w-5" />
        </div>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95"
        enterTo="transform scale-100"
        leave="transition ease-in duration=75"
        leaveFrom="transform scale-100"
        leaveTo="transform scale-95"
      >
        <Popover.Panel className="absolute -right-16 z-50 mt-2 w-screen max-w-xs rounded border-card bg-card shadow-md sm:right-4 sm:max-w-sm">
          <div className="relative p-3">
            <div className="flex w-full items-center justify-between">
              <p className="font-medium ">Notifications</p>
              <a className="text-sm" href="#">
               Marquer comme lue
              </a>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 overflow-hidden">
              <div className="flex">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                  <Icons.checkIcon  className="h-4 w-4 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium ">Titre de la notification</p>
                  <p className="truncate text-sm ">
                    Test de notification pour design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                  <Icons.checkIcon  className="h-4 w-4 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium ">Titre de la notification</p>
                  <p className="truncate text-sm ">
                    Test de notification pour design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                  <Icons.checkIcon  className="h-4 w-4 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium ">Titre de la notification</p>
                  <p className="truncate text-sm ">
                    Test de notification pour design
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-200">
                  <Icons.checkIcon  className="h-4 w-4 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="font-medium ">Titre de la notification</p>
                  <p className="truncate text-sm ">
                    Test de notification pour design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
