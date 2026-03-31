import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class MaintenanceService {
  private readonly baseUrl = process.env.MAINTENANCE_SERVICE_URL || 'http://localhost:3002';

  constructor(private readonly httpService: HttpService) {}

  async findAll(aircraftId?: string, status?: string) {
    const params: Record<string, string> = {};
    if (aircraftId) params.aircraftId = aircraftId;
    if (status) params.status = status;
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/maintenance`, { params }),
    );
    return data;
  }

  async findOne(id: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/maintenance/${id}`),
      );
      return data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data?.message || 'Maintenance record not found',
        error.response?.status || 404,
      );
    }
  }

  async create(body: any) {
    const { data } = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/maintenance`, body),
    );
    return data;
  }

  async update(id: string, body: any) {
    const { data } = await firstValueFrom(
      this.httpService.put(`${this.baseUrl}/maintenance/${id}`, body),
    );
    return data;
  }

  async getUpcoming(aircraftId: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/maintenance/aircraft/${aircraftId}/upcoming`),
    );
    return data;
  }
}
