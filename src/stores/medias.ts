import { detailMedia, MediasResponseObjMedia } from '../api'

let medias: { [key: string]: MediasResponseObjMedia } = {}

export const getMediaDetails = async (mediaId: string) => {
  if (medias[mediaId]) {
    return medias[mediaId]
  }
  const mediaDetails = await detailMedia(mediaId)
  medias[mediaId] = mediaDetails
  return mediaDetails
}