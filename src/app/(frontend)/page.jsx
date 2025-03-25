export default async function Home() {
  const cars = await getCars();
  return (
    <main className="text-center text-4xl">
      {cars.map((item, index) => (
        <div key={`car_${index}`}>{item.name}</div>
      ))}
    </main>
  );
}

async function getCars() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars`);
  const { docs: cars } = await res.json();
  return cars;
}
