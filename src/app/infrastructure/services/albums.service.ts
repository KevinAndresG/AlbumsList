import { Injectable } from '@angular/core';
import axios from 'axios';
import { AlbumRequest, AlbumResponse } from '../models/album.model';
import { AlbumCommentRequest } from '../models/album-comment.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor() {}

  baseUrl = 'http://149.56.23.23:3000';

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

  addAlbumComment(id: number, comment: AlbumCommentRequest) {
    return axios.post(`${this.baseUrl}/albums/${id}/comments`, comment);
  }
}
