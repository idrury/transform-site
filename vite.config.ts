import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    /**
     * Build only — this is what makes prerendering work.
     *
     * Prerendering renders the routes in Node, and many deps here are
     * CommonJS. Imported under Node's ESM loader they yield a namespace
     * object instead of the real export: "gsap.registerPlugin is not a
     * function", "BeatLoader not found", "Element type is invalid ... but
     * got: object". Bundling them into the server build lets Vite fix the
     * interop.
     *
     * Must not apply in dev: the dev SSR module runner needs packages like
     * react/jsx-dev-runtime and react-transition-group left external, and
     * inlining them fails with "module is not defined".
     */
    noExternal: command === "build" ? true : undefined,
  },
}));
