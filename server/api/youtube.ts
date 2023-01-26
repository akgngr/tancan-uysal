export default defineEventHandler( (event) => {
  const query = getQuery(event)
  const data = fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6IIzbXrGQnfjsMKX8i2vWQ&maxResults=24&order=date&pageToken=${query.page}&type=video&key=AIzaSyAWXoaE4ezl8xA2UtfeuFCwhYGRhzpNRyc`)
  .then((response) => response.json())
  .then((data) => data);
  return data
});
