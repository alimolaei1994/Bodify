# Genetics Fitness Social App UI

This is a code bundle for Genetics Fitness Social App UI. The original project is available at https://www.figma.com/design/XFoTuOLkXGnOqBhff9VAnY/Genetics-Fitness-Social-App-UI.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deployment

- **Vercel**: the `vercel.json` file configures Vercel to run `npm run build`, deploy the contents of the `build` directory, and fall back to `index.html` for SPA-style routing.
- **Netlify**: the `netlify.toml` file mirrors the same build settings, and `public/_redirects` ensures that client-side routing works when directly accessing deep links.
