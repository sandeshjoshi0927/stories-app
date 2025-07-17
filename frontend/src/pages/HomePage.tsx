import express from "../assets/express.png";
import mongoDB from "../assets/mongoDB.png";
import react from "../assets/react.png";
import node from "../assets/node.svg";

export function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold ">Welcome to the Stories App</h1>
      <p className="mt-4">
        This is a simple application to manage and share stories.
      </p>
      <p className="mt-2">Use the navigation bar to explore the app.</p>

      <section className="grid grid-cols-2 place-items-center md:grid-cols-4 gap-4 mt-8">
        <figure className="w-36 mx-auto my-4">
          <img src={mongoDB} alt="mongodb" />
        </figure>
        <figure className="w-36 mx-auto my-4">
          <img src={express} alt="express" />
        </figure>
        <figure className="w-36 mx-auto my-4">
          <img src={react} alt="react" />
        </figure>
        <figure className="w-36 mx-auto my-4">
          <img src={node} alt="node" />
        </figure>
      </section>
    </div>
  );
}
