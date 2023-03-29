module.exports = {
    apps : [
        {
            name: "nuxt-front",
            script: "npm",
            args: "run start",
            env: {
                NODE_ENV: "production",
                NUXT_HOST:"127.0.0.1",
                NUXT_PORT:"3000"
            }
        }
    ]
}
