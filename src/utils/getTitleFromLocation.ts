export const getTitleFromLocation = (location: { pathname: string }) => {
  switch (location.pathname) {
    case '/':
      return 'Flowers';
    case '/about':
      return 'Flowers | About';
    case '/form':
      return 'Flowers | Form';
    default:
      return 'Flowers';
  }
};
