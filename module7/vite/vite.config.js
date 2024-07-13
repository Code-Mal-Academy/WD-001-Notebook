// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        {
            name: "middleware",
            apply: "serve",
            configureServer(viteDevServer) {
                return () => {

                    viteDevServer.middlewares.use(async (req, res, next) => {
                        if (req.originalUrl.startsWith("/login")) {
                            req.url = "/pages/login/index.html";
                        }

                        if (req.originalUrl.startsWith("/register")) {
                            req.url = "/pages/register/index.html";
                        }

                        next();
                    });
                }
            }
        },

    ]

})