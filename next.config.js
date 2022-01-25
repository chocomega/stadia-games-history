const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_BUILD) {
        return {
            assetPrefix: '/stadia-games-history-www/',
            basePath: '/stadia-games-history-www',
            env: {
                BACKEND_URL: '/stadia-games-history-www'
            }
        }
    }

    return defaultConfig;
}