'use client';
import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Tooltip } from 'primereact/tooltip';
import React, { useCallback, useState } from 'react';

interface IProps {
  id?: string;
  name?: string;
  text?: string;
  image?: string;
}

const Avatar: React.FC<IProps> = ({
  id,
  name,
  text,
  image = '/images/avataaars.svg',
}) => {
  const [showNameToolTip, setShowNameToolTip] = useState<boolean>(false);
  const [showEmailToolTip, setShowEmailToolTip] = useState<boolean>(false);

  const checkIfNameHasEllipsisActive = useCallback((e: HTMLDivElement) => {
    if (e && e.firstChild) {
      const span = e.firstChild as HTMLSpanElement;

      setShowNameToolTip(e.offsetWidth < span.offsetWidth);
    }
  }, []);

  const checkIfEmailHasEllipsisActive = useCallback((e: HTMLDivElement) => {
    if (e && e.firstChild) {
      const span = e.firstChild as HTMLSpanElement;

      setShowEmailToolTip(e.offsetWidth < span.offsetWidth);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="relative group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-8 w-8 rounded-full bg-gray-800"
          src={image}
          alt="Avatar Image"
          height={32}
          width={32}
        />
        {id && (
          <Link
            href={`/users/edit/${id}`}
            className="absolute w-full h-full flex justify-center items-center top-0 right-0 text-white px-1 py-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <div className="text-white  cursor-pointer">
              <PencilIcon className="h-3 w-3" />
            </div>
          </Link>
        )}
      </div>

      {name || text ? (
        <div className="flex flex-col min-w-[170px] max-w-[170px]">
          {name && (
            <div
              ref={checkIfNameHasEllipsisActive}
              className="inline-block whitespace-nowrap overflow-hidden text-ellipsis w-full"
            >
              <span
                id="avatar-name"
                aria-hidden="true"
                className=" text-sm font-semibold leading-6 text-white"
              >
                {name}
              </span>
              {showNameToolTip && (
                <Tooltip
                  target={`#avatar-name`}
                  content={name}
                  position={'top'}
                  showDelay={300}
                  hideDelay={300}
                />
              )}
            </div>
          )}

          {text && (
            <div
              ref={checkIfEmailHasEllipsisActive}
              className="inline-block whitespace-nowrap overflow-hidden text-ellipsis w-full"
            >
              <span
                id="avatar-text"
                aria-hidden="true"
                className=" text-xs text-normal leading-6 text-gray-100"
              >
                {text}
              </span>
              {showEmailToolTip && (
                <Tooltip
                  target={`#avatar-text`}
                  content={text}
                  position={'top'}
                  showDelay={300}
                  hideDelay={300}
                />
              )}
            </div>
          )}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Avatar;
