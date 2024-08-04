import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  return await fetch(`${API_URL}/${id}/videos`).then((response) =>
    response.json()
  );
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className="text-wrap w-screen overflow-hidden flex flex-wrap gap-9 p-9">
      {/* <h6>{JSON.stringify(videos)}</h6> */}
      {videos.map((video) => (
        <iframe
          key={id}
          width="350"
          height="240"
          className="rounded-xl"
          src={`https://www.youtube.com/embed/${video.key}`}
        ></iframe>
      ))}
    </div>
  );
}
