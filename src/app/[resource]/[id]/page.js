import axios from 'axios';

async function getItem(resource, id) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}/${id}`);
  return res.data;
}

export default async function DetailPage({ params }) {
  const { resource, id } = params;
  const item = await getItem(resource, id);

  if (resource === 'users') {
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
        <p><strong>Username:</strong> {item.username}</p>
        <p><strong>Email:</strong> {item.email}</p>
        <p><strong>Phone:</strong> {item.phone}</p>
        <p><strong>Website:</strong> {item.website}</p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>{item.address.street}, {item.address.suite}</p>
          <p>{item.address.city}, {item.address.zipcode}</p>
          <p>Geo: {item.address.geo.lat}, {item.address.geo.lng}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Company</h2>
          <p><strong>Name:</strong> {item.company.name}</p>
          <p><strong>CatchPhrase:</strong> {item.company.catchPhrase}</p>
          <p><strong>BS:</strong> {item.company.bs}</p>
        </div>
      </div>
    );
  }

  if (resource === 'posts') {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
        <p className="mb-4 text-gray-700">{item.body}</p>
        <p className="text-sm text-gray-500">Post ID: {item.id} | User ID: {item.userId}</p>
      </div>
    );
  }

  if (resource === 'comments') {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{item.name}</h1>
        <p><strong>Email:</strong> {item.email}</p>
        <p className="mt-2">{item.body}</p>
        <p className="text-sm text-gray-500 mt-4">Comment ID: {item.id} | Post ID: {item.postId}</p>
      </div>
    );
  }

  if (resource === 'albums') {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Album: {item.title}</h1>
        <p className="text-sm text-gray-500">Album ID: {item.id} | User ID: {item.userId}</p>
      </div>
    );
  }

  if (resource === 'todos') {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{item.title}</h1>
        <p><strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}</p>
        <p className="text-sm text-gray-500 mt-2">Todo ID: {item.id} | User ID: {item.userId}</p>
      </div>
    );
  }

  if (resource === 'photos') {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">{item.title}</h1>
        <img
          src={item.url}
          alt={item.title}
          className="w-full max-w-md rounded shadow mb-4"
        />
        <p className="text-sm text-gray-500">Photo ID: {item.id} | Album ID: {item.albumId}</p>
        <p className="mt-2">
          <strong>Thumbnail:</strong><br />
          <img src={item.thumbnailUrl} alt="Thumbnail" className="mt-1 border rounded" />
        </p>
      </div>
    );
  }
  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{item.title || item.name || item.email}</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">{JSON.stringify(item, null, 2)}</pre>
    </div>
  );
}
