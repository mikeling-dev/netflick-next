export default function Loading() {
  return (
    <div className="w-screen flex items-center justify-center flex-center h-screen">
      <div className="animate-spin w-40 h-40">
        <div
          className="h-full w-full border-4 border-t-purple-500
             border-b-purple-700 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
}
