# Small Business Site App Template

This is a template that can be used for small businesses to deploy a site very quickly.
This template is best serviced by small businesses who want to work with someone to manage their
website presence, but do not want to use a WYSIWYG site-builder

*NOTE: THIS REPOSITORY IS UNDER ACTIVE DEVELOPMENT. CONTRIBUTIONS ARE WELCOME*

## Usage

### Development

```bash
# install dependencies
npm i

# run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Site management

[Deploying git repositories from Vercel](https://vercel.com/docs/deployments/git)

### Deployment

```bash
# Commit git changes
git add -A
git commit -m "This is my commit message"
git push -u origin main
```

After push, the site should be triggered to deploy via Vercel


## Environment variables

- Rename .env.template to .env.local
- Generate a Sendgrid API key with at least "Send Mail" permissions
- Add your Sendgrid API key to .env.local
- In Vercel (or wherever), add the same environment variables as environment secrets. *NOTE: all secrets should always only be available server-side*


## Styling

Some info on styling options

### Fonts

See the comments at the top of app/layout.tsx on how to change the fonts
```jsx
// Using local font
import localFont from "next/font/local";

const fontSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const fontMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const fonts = [fontSans, fontMono];

// ...

// Or using font from google
import { Inter } from 'next/font/google';

const font = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const fonts = [font];

// ...

// Return root <body> with fonts loaded
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        //className={`${fonts.map(font => font.variable).join(' ')} antialiased`} // For local fonts
        className={`${fonts.map(font => font.className).join(' ')} antialiased`} // For fonts from google
      >
        {children}
      </body>
    </html>
  );
}
```

## Further resources

- [Vercel docs](https://vercel.com/docs)
- [NextJS docs](https://nextjs.org/docs)

## TODO

- Content Managment System
- Styling
- Email for arbitrary addresses