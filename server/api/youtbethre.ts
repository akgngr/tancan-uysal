export default defineEventHandler((event) => {
  const data = $fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC6IIzbXrGQnfjsMKX8i2vWQ&maxResults=3&order=date&type=video&key=AIzaSyAWXoaE4ezl8xA2UtfeuFCwhYGRhzpNRyc')
  .then((response: any) => response.json())
  .then((data: any) => data);
  return data
});
