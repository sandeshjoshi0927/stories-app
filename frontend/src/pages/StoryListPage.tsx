import StoriesList from "../StoriesList";
import stories from "../data/content";

export function StoryListPage() {
  return (
    <>
      <StoriesList stories={stories} />
    </>
  );
}
