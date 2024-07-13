import express from 'express'
import { defineConfig } from 'vite'
import app from './backend/app'

const proxy = {
    '/api': {} // proxy our /api route to nowhere
}


function expressPlugin() {
    return {
        name: 'express-plugin',
        configureServer(server) {
            server.middlewares.use(app)
        }
    }
}

export default defineConfig({
    plugins: [expressPlugin()]
})
