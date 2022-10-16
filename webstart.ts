const release = (await(await fetch("https://api.github.com/repos/owaisalhashimi/webstart/releases/latest")).json());
const zip_url = release.zipball_url;
const file = await Deno.open("webstart.zip", { create: true, write: true });
const resp = await fetch(zip_url);
resp.body?.pipeTo(file.writable);