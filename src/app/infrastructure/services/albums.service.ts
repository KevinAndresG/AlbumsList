import { Injectable } from '@angular/core';
import axios from 'axios';
import { AlbumRequest, AlbumResponse } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor() {}

  baseUrl = 'https://backvynils-q6yc.onrender.com';

  async getAlbums(): Promise<AlbumResponse[]> {
    const response = await axios.get(`${this.baseUrl}/albums`);
    return response.data;
  }

  async getAlbum(id: number): Promise<AlbumResponse> {
    const response = await axios.get(`${this.baseUrl}/albums/${id}`);
    return response.data;
  }

  createAlbum(album: AlbumRequest) {
    return axios.post(`${this.baseUrl}/albums`, album);
  }

  updateAlbum(id: number, album: AlbumRequest) {
    if (id === null || id === 0) return 'Invalid ID';
    return axios.put(`${this.baseUrl}/albums/${id}`, album);
  }

  deleteAlbum(id: string) {
    return axios.delete(`${this.baseUrl}/albums/${id}`);
  }

  addAlbumComment(id: string, comment: any) {
    return axios.put(`${this.baseUrl}/albums/${id}/comments`, comment);
  }
}
