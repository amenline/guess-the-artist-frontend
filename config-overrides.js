module.exports = {
    webpack: /* the normal config-overrides.js function */
        (config, env) => {
            // whatever normal config changes you do for compiling your app here
            return config;
        },
    devServer: (configFunction) =>
        (proxy, allowedHost) => {
            // Create the default devServer config by calling configFunction with the 
            // CRA proxy/allowedHost parameters
            const devServerConfig = configFunction(proxy, allowedHost);

            // Set your customisation for the dev server
            devServerConfig.allowedHosts = [
                'https://itunes.apple.com'
            ];
            return devServerConfig;
        }
};