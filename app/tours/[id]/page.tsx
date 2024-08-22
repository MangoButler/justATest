import mapsImg from "@/public/images/map.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTour = async (id: string) => {
  console.log('##############Building the Page########################');
  try {
    const response = await fetch(url);
    const data: Tour[] = await response.json();
    const tour = data.find((tour) => tour.id === id);
    // console.log(tour);
    return tour;
  } catch (error) {
    return false;
  }
};

export default async function TourPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const tour = await fetchTour(id);
  if (!tour) {
    return <h1>Something went wrong, try again!</h1>;
  }
  return (
    <div>
      <h1 className="text-4xl">{tour?.name || "This tour does not exits"}</h1>
      <section className="flex gap-x-4 mt-4 px-8">
        <div>
          <Image
            src={mapsImg}
            alt="maps"
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
            priority
          />
          <h3>Local Image</h3>
        </div>
        <div>
          <Image
            src={tour.image}
            alt="maps"
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
            priority
          />
          <h3>Remote Image</h3>
        </div>
      </section>
    </div>
  );
}
