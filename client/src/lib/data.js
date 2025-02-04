export default async function fetchTrails() {
  const response = await fetch(
    "https://react-full-stack-app-server-g31g.onrender.com/trails"
  );
  return await response.json();
}
