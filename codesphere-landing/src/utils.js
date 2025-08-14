// utils.js

// Navigation menu items
export const navMenuItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" }
];

/**
 * Check if a given path is the active page
 * @param {string} currentPath - current location.pathname
 * @param {string} targetPath - menu item's path
 * @returns {boolean}
 */
export const isActivePath = (currentPath, targetPath) => {
  return currentPath === targetPath;
};
