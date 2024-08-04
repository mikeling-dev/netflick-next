import { API_URL } from "../(home)/page";

async function getMovie(id: string) {
  return await fetch(`${API_URL}/${id}`).then((response) => response.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className="text-wrap w-screen overflow-hidden">
      <img src={movie.backdrop_path} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {/* <p> {JSON.stringify(movie)}</p> */}
    </div>
  );
}
