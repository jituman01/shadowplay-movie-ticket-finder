export const fetchMovies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
  const data = res.json();
  return data || [];
}
export const nowStreaming = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nowStreaming`);
  const data = res.json();
  return data || [];
}