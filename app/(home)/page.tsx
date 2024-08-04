import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return await fetch(API_URL).then((response) => response.json());
  // const response = await fetch(URL);
  // const json = await response.json();
  // return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id} className="list-none">
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
