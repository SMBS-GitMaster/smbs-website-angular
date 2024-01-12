export function getIconName(url: string) {
  return url.split('/')[url.split('/').length - 1].split('.')[0];
}
