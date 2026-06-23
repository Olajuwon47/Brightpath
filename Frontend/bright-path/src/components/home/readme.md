# How to Work Here

## 1. Create a Section for the Homepage

- Build each section of the Figma homepage design in the `home/` directory.
- Ensure that each section is properly exported in the `home/index.ts` file for easy imports and organization.

## 2. Manage Text Content Separately

- Store **all text content** for the homepage in `Home_content/page.tsx`.
- Export the content from `Home_content/page.tsx` and import it into the relevant homepage sections via `home/index.ts`.
- This ensures easier updates and centralized control of homepage text content.
