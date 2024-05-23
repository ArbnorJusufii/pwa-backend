"use client";

import React, { Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IUser } from "@/types/IUser";
import { getNotificationPermision } from "@/utils/notifications";
import { useAppDispatch, useAppSelector } from "@/store/index";
import {
  updateNavigationRightOpen,
  updateSidebarOpen,
} from "@/store/slices/navigation";
import Navigation from "./Navigation";
import NavigationRight from "./NavigationRight";
import ArtidalIconSecondary from "../common/svg/ArtidalIconSecondary";
import ArtidalLogo from "../common/svg/ArtidalLogo";

interface IProps {
  user?: IUser;
}

const Sidebar: React.FC<IProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  const { sideBarOpen, navigationRightOpen } = useAppSelector(
    (store: { navigation: any }) => store.navigation
  );

  const ref = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        window.innerWidth > 1024
      ) {
        dispatch(updateNavigationRightOpen(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    getNotificationPermision();
  }, []);

  const dialogClose = (value: boolean) => {
    dispatch(updateSidebarOpen(value));
  };

  return (
    <div ref={ref} className="">
      <Transition.Root show={sideBarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={dialogClose}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white-900/80" />
          </Transition.Child>
          <div className="fixed inset-0 flex bg-white-900">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-0 1flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 z-10 top-0 flex w-14 justify-center pt-5">
                    <button
                      type="button"
                      className="mt-0.5 p-2.5"
                      onClick={() => dispatch(updateSidebarOpen(false))}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="relative h-full w-full overflow-hidden">
                  <div
                    className={`flex absolute overflow-x-hidden h-full transition-all transition-duration-300 ${
                      navigationRightOpen ? "-right-full" : "right-0"
                    } grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 w-full`}
                  >
                    <div className="flex h-auto pt-10 pb-4 w-full shrink-0 items-center gap-[10px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <ArtidalIconSecondary />
                      <ArtidalLogo />
                    </div>
                    <Navigation user={user} />
                  </div>

                  <NavigationRight
                    user={user}
                    className={`absolute h-full w-full pt-8 flex transition-all transition-duration-300  ${
                      navigationRightOpen ? "right-0" : "right-full"
                    } grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 py-6`}
                    isMobile={true}
                  />
                </div>
                {/* {isRightNavActive && <NavigationRight />} */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex fixed">
          <div className="h-screen w-[337px] z-20 hidden grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 lg:flex">
            <div className="flex h-16 shrink-0 items-center gap-[10px] mt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <ArtidalIconSecondary />
              <ArtidalLogo />
            </div>
            <Navigation user={user} />
          </div>

          {/* {isRightNavActive && <NavigationRight />} */}
          <Transition
            show={navigationRightOpen}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <NavigationRight user={user} />
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
