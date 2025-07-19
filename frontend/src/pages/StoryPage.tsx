import { Link, useParams } from "react-router-dom";
import stories from "../data/content";

export default function StoryPage() {
  const { name } = useParams();

  const story = stories.find((story) => story.name === name)!;

  return (
    <>
      <Link to="/stories">Go Back</Link>
      <h1 className="text-2xl font-bold">{story.title}</h1>

      <section className="flex flex-col gap-4 mt-4 lg:max-w-3xl lg:mx-auto">
        {story.content.map((str) => (
          <p key={str} className="text-gray-300">
            {str}
          </p>
        ))}
      </section>
    </>
  );
}
