import { Component, OnInit } from '@angular/core';
import { AlbumDetailCardComponent } from '../../components/album-detail-card/album-detail-card.component';
import { AlbumsService } from '../../infrastructure/services/albums.service';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [AlbumDetailCardComponent, SpinnerComponent],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.scss',
})
export class AlbumDetailComponent implements OnInit {
  album: AlbumResponse | null = null;
  albumId: number | null = null;
  isLoading = true;
  constructor(
    readonly albumsService: AlbumsService,
    readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id') ?? null);
    this.getAlbum(this.albumId);
  }

  getAlbum(id: number | null) {
    if (!id || id === 0) return;
    this.albumsService.getAlbum(id).then((album) => {
      this.isLoading = false;
      this.album = album;
    });
  }
}
