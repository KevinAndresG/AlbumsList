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

  getAlbums() {
    this.albumsService.getAlbums().then((albums: AlbumResponse[]) => {
      this.albums = albums;
      this.isLoading = false;
    });
  }
}
