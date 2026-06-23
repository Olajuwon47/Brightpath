// Update your NavItem type definition in your types file (e.g., @/types/index.ts)

export interface DropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}