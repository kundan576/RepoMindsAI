
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: ["gratitude-sequel-deceit.ngrok-free.dev"],
  serverExternalPackages: [
    "better-auth",
    "@prisma/client",
    "prisma",
    "pg",
    "@prisma/adapter-pg",
  ],
};

export default nextConfig;
