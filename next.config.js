/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "udemy-test",
        mongodb_password: "dgoJkT4NEaFb6YJO",
        mongodb_cluster_name: "cluster0",
        mongodb_database: "apeach-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "udemy-test",
      mongodb_password: "dgoJkT4NEaFb6YJO",
      mongodb_cluster_name: "cluster0",
      mongodb_database: "apeach-blog",
    },
  };
};
