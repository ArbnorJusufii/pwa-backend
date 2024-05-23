'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { ActionMeta, SingleValue, components } from 'react-select';
import { INavigation } from '@/types/INavigation';
import { useAppDispatch, useAppSelector } from '@/store/index';
import { ICustomSelectItem } from '@/types/ICustomSelectItem';
import { updateLanguage } from '@/store/slices/settings';
import { ELanguages } from '@/enums/ELanguages';
import ListItem from './ListItem';
import { useRouter } from 'next/navigation';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

interface IProps {
  items: INavigation[];
  languageSelector?: boolean;
  className?: string;
}

const List: React.FC<IProps> = ({
  items,
  className,
  languageSelector = false,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { language } = useAppSelector((store) => store.settings);
  const [languages] = useState<ICustomSelectItem[]>([
    {
      value: ELanguages.ENGLISH,
      label: 'English',
    },
    {
      value: ELanguages.POTTUGUESE,
      label: 'Portuguese',
    },
  ]);

  const navigationItems = useMemo(() => {
    return items;
  }, [items]);

  const onLanguageSelectorChange = (
    newValue: SingleValue<ICustomSelectItem>,
    actionMeta: ActionMeta<ICustomSelectItem>
  ) => {
    dispatch(
      updateLanguage(
        newValue ? (newValue.value as ELanguages) : ELanguages.ENGLISH
      )
    );
  };

  // const onCustomCompanyBranchSelectorItemsChange = (
  //   newValue: SingleValue<ICustomSelectItem>,
  //   actionMeta: ActionMeta<ICustomSelectItem>
  // ) => {
  //   Cookies.set(
  //     COOKIE_COMPANY_BRANCH,
  //     JSON.stringify(newValue ? newValue.value : ''),
  //     {
  //       secure: true,
  //     }
  //   );

  //   router.refresh();
  // };

  // const CustomControl = ({ props, children }: any) => {
  //   return (
  //     <div
  //       {...props}
  //       className="flex items-center text-gray-100 font-semibold text-base group  gap-x-3 rounded-md p-2  leading-6"
  //     >
  //       <BuildingOffice2Icon height={20} width={20} /> {children}
  //     </div>
  //   );
  // };

  const CustomControl = ({ children, ...props }: any) => {
    return (
      <components.Control
        {...props}
        className="flex relative items-center text-gray-100 font-semibold text-base group  gap-x-3 rounded-md p-2  leading-6"
      >
        <BuildingOffice2Icon height={20} width={20} /> {children}
        {/* <Changes id="changes" numberOfChanges={3} style="absolute right-12" /> */}
      </components.Control>
    );
  };

  return (
    <ul role="list" className={className ? className : '-mx-2 space-y-1'}>
      {navigationItems &&
        navigationItems.map((item: INavigation, index: number) => {
            return <ListItem key={index} item={item} />;
        })}
      {/* {languageSelector && languages.length > 0 && (
        <li className="lg:min-w-[200px]">
          <CustomSelect
            isInSidebar={true}
            isClearable={false}
            name="roles"
            options={languages}
            defaultValue={languages.find((el) => el.value === language)}
            onChange={onLanguageSelectorChange}
          />
        </li>
      )} */}
      <button />
    </ul>
  );
};

export default List;
