export const asset = (path: string) => {
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
};
