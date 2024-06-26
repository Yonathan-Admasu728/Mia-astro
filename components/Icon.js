// components/Icon.js
const icons = {
    cosmic: <svg>...</svg>,
    planet: <svg>...</svg>,
    house: <svg>...</svg>,
    // Add more icons here
  };
  
  export default function Icon({ name, ...props }) {
    return icons[name] || null;
  }