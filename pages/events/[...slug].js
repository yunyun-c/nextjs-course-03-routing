import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();

  console.log(router);
  return (
    <div>
      <h1>this is the new blog at {new Date()}</h1>
    </div>
  );
}

export default FilteredEventsPage;
