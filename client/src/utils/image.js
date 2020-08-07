export const formatterUrlImage = (url) => {
    const suffix = 'http://';
    return url.startsWith(suffix) ?  url : suffix + url
};
