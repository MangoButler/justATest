import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <ul>
        <li>
          <Link href={"/"} className="text-xl text-blue-500 inline-block mt-8">
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="text-xl text-blue-500 inline-block mt-8"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={"/info"}
            className="text-xl text-blue-500 inline-block mt-8"
          >
            Info
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
