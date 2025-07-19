import { Link } from "react-router-dom";

interface Story {
  name: string;
  title: string;
  content: string[];
}

interface StoriesListProps {
  stories: Story[];
}

export default function StoriesList({ stories }: StoriesListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
      {stories.map((story) => (
        <article
          className="bg-[#1E3E62] text-white p-4 rounded-lg shadow-md flex flex-col gap-y-4"
          key={story.name}
        >
          <h1 className="text-bold text-xl">{story.title}</h1>
          <p className="text-gray-300">
            {story.content[0].substring(0, 100) + " ..."}
          </p>
          <Link
            className="px-3 py-1 bg-[#0B192C] rounded self-start"
            to={`/stories/${story.name}`}
          >
            Read more
          </Link>
        </article>
      ))}
    </section>
  );
}
