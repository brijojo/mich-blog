export const server = (env: Record<string, string>) => {
    return {
        prot: env.VITE_PROT,
        open: env.VITE_OPEN,
        overlay: {
            warning: false,
            error: false,
        },
        proxy: {
            '/api': {
                target: env.VITE_API_URL,
                changeOrigin: true,
                ws: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    };
}
export const preview = (env: Record<string, string>)=>{
    return {
        port: env.VITE_PROT + 1000,
        open: env.VITE_OPEN,
        proxy: {
            '/api': {
                target: env.VITE_API_URL,
                changeOrigin: true,
                ws: true,
                rewrite: (path: string)=>path.replace(/^\/api/, '/')
            }
        }
    }
}