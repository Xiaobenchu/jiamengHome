import { httpRequest } from '@/utils/api';
import { ReportInterface } from '@/jmlib/types/report';

export async function getReportById(id: string): Promise<ReportInterface> {
  return httpRequest(`/reports/${id}`, 'get');
}
