import { Injectable, HttpException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AircraftService {
  private readonly baseUrl = process.env.AIRCRAFT_SERVICE_URL || 'http://localhost:3001';

  constructor(private readonly httpService: HttpService) {}

  async findAll(status?: string) {
    const params = status ? { status } : {};
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/aircraft`, { params }),
    );
    return data;
  }

  async findOne(id: string) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(`${this.baseUrl}/aircraft/${id}`),
      );
      return data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data?.message || 'Aircraft not found',
        error.response?.status || 404,
      );
    }
  }

  async create(body: any) {
    const { data } = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/aircraft`, body),
    );
    return data;
  }

  async update(id: string, body: any) {
    const { data } = await firstValueFrom(
      this.httpService.put(`${this.baseUrl}/aircraft/${id}`, body),
    );
    return data;
  }

  async remove(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/aircraft/${id}`),
    );
    return data;
  }
}
