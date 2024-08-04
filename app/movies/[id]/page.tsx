import { Suspense } from "react";
import MovieInfo from "../../component/movie-info";
import MovieVideos from "../../component/movie-videos";

// async function getMovie(id: string) {
//   return await fetch(`${API_URL}/${id}`).then((response) => response.json());
// }
// async function getVideos(id: string) {
//   return await fetch(`${API_URL}/${id}/videos`).then((response) =>
//     response.json()
//   );
// }

export default async function MovieDetails({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <Suspense fallback={<p>Loading Movie Info</p>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<p>Loading Movie Videos</p>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
