// import { RootStateOrAny } from 'react-redux';
import { request } from '../utils/api';

export function getFeedbackList() {
  return request('/feedbacks', 'get');
}
export function createFeedback(data: any) {
  return request('/feedbacks', 'post', data);
}
export function feedbackInfo(id: any) {
  return request(`/feedbacks/${id}`, 'get');
}
export function deleteFeedback() {
  return request('/feedbacks', 'delete');
}
