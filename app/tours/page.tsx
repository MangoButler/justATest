import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  //   console.log(data);
  return data;
};

export default async function ToursPage() {
  const data = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Check out our Tours!</h1>
      {data.map((tour) => {
        return (
          <Link
            href={`/tours/${tour.id}`}
            key={tour.id}
            className="hover:text-blue-400"
          >
            <h2>{tour.name}</h2>
          </Link>
        );
      })}
    </section>
  );
}
