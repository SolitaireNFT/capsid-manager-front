/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api': {
      // 要代理的地址
      // target: 'http://172.100.3.188:9091/',
      // target: 'http://127.0.0.1:8008/',
      // target: 'https://staging-manager-api.capsid.one/',
      // 配置了这个可以从 http 代理到 https
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
} as Record<string, unknown>;
