export const fetchMovies = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
  const data = await res.json();
  return data || [];
}

export const nowStreaming = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/nowStreaming`);
  const data = await res.json();
  return data || [];
}

export const suggestsMovie = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/suggestsMovie`);
  const data = await res.json();
  return data || [];
}