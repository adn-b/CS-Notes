# Notes for FullStackSocialMediaApp
## https://www.youtube.com/watch?v=_W3R2VwRyF4
## TIMESTAMP 2:15:12

## Setup
- Used vite to build the project environment, "npm create vite@latest" then selected React and Typescript, then ran "npm install" to install dependencies
- Installed tailwindcss with "npm install -D tailwindcss postcss autoprefixer" and initalised it with "npx tailwindcss init -p"
- Then installed tailwindcss-animate with "npm install -D tailwindcss-animate".
- Copied files for ./tailwind.config.js and ./src/globals.css from https://gist.github.com/adrianhajdin/4d2500bf5af601bbd9f4f596298d33ac, which created some default tailwind styles in globals.css, and created the general configuration.

## React Router
- Then started on routes. Routing in React using "React Router" is essentially a way to create a structure for your web page, by connecting subdomains to pages.
- \<Routes\> can be used to wrap \<Route\> tags, which contain a "path" and "element" parameter, which set the subdomain and attach it to a functional component.
- To structure this document, "main.tsx" is used to inject the "App" component into the html page. It uses "BrowserRouter" which is a React Router component used to sync the UI with the URL, refreshing the content without reloading the page.
- Within "App.tsx", I set up the routes, using nested \<Route\> tags.
- I essentially have two folders, _auth and _root, with _auth being the login/authentication forms/pages, and _root being the home page, with an index.tsx file that exports Home.tsx as the default export.
- Within _auth, I have SigninForm.tsx and SignupForm.tsx in ./src/_auth/forms, and AuthLayout.tsx in ./src/_auth. Essentially the AuthLayout.tsx file will switch between either the sign-in or sign-up form, depending on which the user selects, and allows for quick responsive switching without having to refresh the page.  
- I have a similar setup inside _root, where RootLayout.tsx reloads the content dynamically as the user switches between pages.

![](routes.png)

- I then installed ShadCN by following the instructions at https://ui.shadcn.com/docs/installation/vite.
- Installed a button with npx shadcn-ui@latest add button. Follow same template for any other components

