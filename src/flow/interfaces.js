export interface Song {
  id: number,
  title: string,
  duration: number,
  preview: string,
  artist: {
    name: string,
  },
  album: {
    title: string,
    cover_big: string,
  },
}