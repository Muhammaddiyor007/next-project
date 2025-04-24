import axios from 'axios';
import Link from 'next/link';

async function getData(resource) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
  return res.data;
}

export default async function ResourcePage({ params }) {
  const { resource } = params;
  const items = await getData(resource);

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize mb-4">{resource}</h1>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.id}>
            <Link href={`/${resource}/${item.id}`} className="text-blue-600 hover:underline">
              {item.title || item.name || item.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
