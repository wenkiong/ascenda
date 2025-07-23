// src/routes/index.tsx
import { Link } from 'react-router-dom';

const pages = import.meta.glob('./*/index.tsx', { eager: true });

export default function Homepage() {
  const links = Object.keys(pages).map((path) => {
    const route = path.replace('./', '/').replace('/index.tsx', '');
    const name = route
      .split('/')
      .pop()
      ?.replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize

    return {
      path: route,
      label: name || route,
    };
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl text-cloudburst-500 font-bold mb-4">Ascenda Design Index</h1>
      <ul className="space-y-2">
        {links.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className="text-blue-600 underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}