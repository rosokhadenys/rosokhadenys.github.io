/** Prefix local public files for Pages; leave external URLs and anchors intact. */
export function publicAsset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return path.startsWith('/') && !path.startsWith('//') ? `${basePath}${path}` : path;
}
