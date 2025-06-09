// utils/get-ip-location.ts
export async function getVisitorData() {
  const ipRes = await fetch("https://api.ipify.org?format=json");
  const { ip } = await ipRes.json();

  const locationRes = await fetch(`https://ipapi.co/${ip}/json/`);
  const location = await locationRes.json();

  return { ip, location };
}
