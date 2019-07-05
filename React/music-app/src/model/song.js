export class Song {
  constructor(id, mId, name, img, duration, url, singer) {
    this.id = id;
    this.mId = mId;
    this.name = name;
    this.img = img;
    this.duration = duration;
    this.url = url;
    this.singer = singer;
  }
}

export function createSong(data) {
  return new Song (
    data.songid,
    data.singmid,
    data.songname,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.songmid}.jpg?max_age=2592000`,
    data.interval,
    '',
    data.singer.map(sing => sing.name).join('/')
  )
}