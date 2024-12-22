// utility functions
export const getImageUrl = (path) => {
    // construct the absolute path
    return new URL(`assets/${path}`, import.meta.url).href;
    // taking a relative path and base url  - make it easier to import images
};