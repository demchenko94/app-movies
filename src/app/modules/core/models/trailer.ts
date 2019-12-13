export interface Trailer {
    title: string,
    idIMDB: string,
    description: string;
    videoURL: string,
    duration: string,
    qualities: VideoTrailer[];

}

export interface VideoTrailer {
  quality: string;
  videoURL: string;
}
