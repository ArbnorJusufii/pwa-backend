import { ENavigationPosition } from '@/enums/ENavigationPosition';
import { INavigation } from '@/types/INavigation';
import { IUser } from '@/types/IUser';
import {
  HomeIcon,
  UsersIcon,
  Square3Stack3DIcon,
  ClipboardDocumentCheckIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  CogIcon,
  Cog8ToothIcon,
  ChartBarIcon,
  UserCircleIcon,
  MapPinIcon,
  ComputerDesktopIcon,
  UserPlusIcon,
  CurrencyDollarIcon,
  BellIcon,
  CpuChipIcon,
  BuildingStorefrontIcon,
  TagIcon,
  SquaresPlusIcon,
  ChartBarSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

export const userNavigation = [
  { name: 'Your profile', href: '/user/:id' },
  { name: 'Sign out', href: '#' },
];

export const getNavigationItems = (
  segment: string | null,
  href: string,
  user: IUser
): INavigation[] => {
  return [
    {
      name: 'Dashboard',
      href: '/',
      icon: HomeIcon,
      current:
        segment === null ||
        (href.length === 1 && href === '/') ||
        href.includes('organisation') ||
        href.includes('company') ||
        href.includes('branch'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Guest',
      href: '/guest',
      icon: UsersIcon,
      current: href.includes('guest') && !href.includes('branch'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Booking',
      href: '/booking',
      icon: Square3Stack3DIcon,
      current: href.includes('booking'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Service',
      href: '/service',
      icon: ClipboardDocumentCheckIcon,
      current: href.includes('service'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Partner',
      href: '/partner',
      icon: CpuChipIcon,
      current: href.includes('partner'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Ledger',
      href: '/ledger',
      icon: BuildingLibraryIcon,
      current: href.includes('ledger'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    {
      name: 'Report',
      href: '/report',
      icon: ChartBarSquareIcon,
      current: href.includes('report'),
      position: ENavigationPosition.top,
      openNavRight: false,
    },
    // {
    //   name: 'Supplier',
    //   href: '/supplier',
    //   icon: BuildingOffice2Icon,
    //   current: href.includes('supplier'),
    //   position: ENavigationPosition.top,
    //   openNavRight: false,
    //   permission: [
    //     ERoles.OWNER,
    //     ERoles.ARTIDAL_OWNER,
    //     ERoles.SUPER_ADMIN,
    //     ERoles.ADMIN,
    //   ],
    // },
  ];
};

export const getNavigationBottomItems = (
  segment: string | null,
  href: string,
  navigationRightOpen: boolean
): INavigation[] => {
  let isSettingsActive: boolean = false;

  switch (segment) {
    case '(settings)':
      isSettingsActive = true;
      break;

    default:
      isSettingsActive = false;
      break;
  }

  return [
    {
      name: 'Support ',
      href: '/support',
      icon: CogIcon,
      current: href.includes('support'),
      position: ENavigationPosition.bottom,
      openNavRight: false,
    },
    {
      name: 'Settings',
      href: '#',
      icon: Cog8ToothIcon,
      current: isSettingsActive || navigationRightOpen,
      position: ENavigationPosition.bottom,
      openNavRight: false,
    },
  ];
};

export const getNavigationRightItems = (
  href: string,
  user: IUser
): INavigation[] => {
  return [
    {
      name: 'Item',
      href: '/items',
      icon: ChartBarIcon,
      current: href.includes('items'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    {
      name: 'Instuctor',
      href: '/instructor',
      icon: UserCircleIcon,
      current: href.includes('instructor'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    {
      name: 'Spot',
      href: '/spots',
      icon: MapPinIcon,
      current: href.includes('spots'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    {
      name: 'Digital Signage',
      href: '/digital-signage',
      icon: ComputerDesktopIcon,
      current: href.includes('digital-signage'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    {
      name: 'User',
      href: '/users',
      icon: UserPlusIcon,
      current: href.includes('users'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    {
      name: 'Tax',
      href: '/taxes',
      icon: CurrencyDollarIcon,
      current: href.includes('taxes'),
      position: ENavigationPosition.right,
      openNavRight: false,
    },
    // {
    //   name: 'Notifications',
    //   href: '/notifications',
    //   icon: BellIcon,
    //   current: href.includes('notifications'),
    //   position: ENavigationPosition.right,
    //   openNavRight: false,
    //   permission: [
    //     ERoles.OWNER,
    //     ERoles.SUPER_ADMIN,
    //     ERoles.ADMIN,
    //     ERoles.BRANCH_MANAGER,
    //   ],
    // },
    // {
    //   name: 'Diets',
    //   href: '/diets',
    //   icon: BuildingStorefrontIcon,
    //   current: href.includes('diet'),
    //   position: ENavigationPosition.right,
    //   openNavRight: false,
    //   permission: [
    //     ERoles.OWNER,
    //
    //     ERoles.SUPER_ADMIN,
    //     ERoles.ADMIN,
    //   ],
    // },
    // {
    //   name: 'Categories',
    //   href: '/categories',
    //   icon: SquaresPlusIcon,
    //   current: href.includes('categories'),
    //   position: ENavigationPosition.right,
    //   openNavRight: false,
    //   permission: [
    //     ERoles.OWNER,
    //
    //     ERoles.SUPER_ADMIN,
    //     ERoles.ADMIN,
    //   ],
    // },
    // {
    //   name: 'Tags',
    //   href: '/tags',
    //   icon: TagIcon,
    //   current: href.includes('tags'),
    //   position: ENavigationPosition.right,
    //   openNavRight: false,
    //   permission: [
    //     ERoles.OWNER,
    //
    //     ERoles.SUPER_ADMIN,
    //     ERoles.ADMIN,
    //   ],
    // },
  ];
};
