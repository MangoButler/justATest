import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact Us</h1>
      <ul className='px-2 py-2'>
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
      <h2 className="text-3xl mt-4">Something else</h2>
    </div>
  );
}

export default ContactPage;
