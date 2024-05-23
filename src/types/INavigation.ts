import { ENavigationPosition } from '@/enums/ENavigationPosition';

export interface INavigation {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  current: boolean;
  position: ENavigationPosition;
  openNavRight: boolean;
  count?: string;
}
