import Link from "next/link";
function EventItem(props) {
  const { id, title, location, date, image } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li key={id}>
      <img src={"/" + image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Link href="exploreLink">Explore Events</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
