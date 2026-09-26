// Pages supplies its actual base path through the deployment workflow.
// Local/root exports default to /; set NEXT_PUBLIC_BASE_PATH to test a project site.
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
if (basePath && !/^\/[a-zA-Z0-9._-]+$/.test(basePath)) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or a single /repository-name path.');
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
