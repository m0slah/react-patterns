interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Presentational({ data }: { data: IPost[] }) {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            UserId: {item.userId}
            <br></br>
            Id:{item.id}
            <br></br>
            Title :{item.title}
            <br></br>
            Body: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
