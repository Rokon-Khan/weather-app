import Weather from "./components/Weather";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-center text-white mt-10">
        Weather App With Next.js
      </h1>
      <Weather />
    </div>
  );
}
