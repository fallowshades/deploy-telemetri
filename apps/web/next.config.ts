import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@monorepo/ui"],
   output: "standalone", 
};

export default nextConfig;
