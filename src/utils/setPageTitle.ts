export const setPageTitle = (title: string): string => {
  const gettitleDocument = (document.title = title);

  return gettitleDocument;
};
