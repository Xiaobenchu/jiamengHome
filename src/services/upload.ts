import { request } from '../utils/api';

export function getUploadToken(uploadType: string) {
  return request('/upload/token', 'post', { uploadType });
}

export function getCoverPicture(url: string) {
  return request('/upload/video_thumb', 'post', { url });
}
