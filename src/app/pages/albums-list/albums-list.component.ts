import { Component, OnInit } from '@angular/core';
import { AlbumCardComponent } from '../../components/album-card/album-card.component';
import { AlbumsService } from '../../infrastructure/services/albums.service';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-albums-list',
  standalone: true,
  imports: [AlbumCardComponent, FormsModule, NzPaginationModule, RouterLink],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss',
})
export class AlbumsListComponent implements OnInit {
  albums: AlbumResponse[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  isLoading = true;
  skeletons = Array(8);
  defaultAlbums: AlbumResponse[] = [
    {
      id: 1,
      name: 'Album 1',
      cover: '',
      releaseDate: '',
      description: '',
      genre: '',
      recordLabel: '',
      tracks: [],
      performers: [],
      comments: [],
    },
  ];

  constructor(readonly albumsService: AlbumsService) {}

  get paginatedAlbums() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.albums.slice(startIndex, startIndex + this.itemsPerPage);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  async getAlbums(): Promise<void> {
    try {
      this.isLoading = true;
      const albums = await this.albumsService.getAlbums();
      this.albums = albums.length > 0 ? albums : this.defaultAlbums;
    } catch (error) {
      console.error('Error fetching albums:', error);
      this.albums = [];
    } finally {
      this.isLoading = false;
    }
  }
}
