export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jQWVLGO9dN69u4okJ9ykJW9X2q28zEc5&q=${category}&limit=9`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
