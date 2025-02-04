export default async function fetchTrails() {
  const response = await fetch("http://localhost:8080/trails");
  return await response.json();
}
