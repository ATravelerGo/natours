import {defineConfig} from 'vite'


defineConfig({
    plugins:[],

    build:{
        rollupOptions:{
            input:{
                main:'index.html'
            },
            output:{
                assetFileNames:"[hash].[name].[ext]",
            }
        },
        outDir:"dist",
        assetsDir:"assets",
        emptyOutDir:true
    }





})