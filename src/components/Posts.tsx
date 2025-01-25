interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts({ data }: { data: IPost[] }) {
  return (
    <div>
      <ul>
        {data.map((post: IPost) => (
          <li key={`item-${post.id}`}>
            <span>{post.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
