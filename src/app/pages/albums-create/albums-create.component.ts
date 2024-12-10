import { Component, OnInit } from '@angular/core';
import { AlbumFormComponent } from '../../components/album-form/album-form.component';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../infrastructure/services/albums.service';

@Component({
  selector: 'app-albums-create',
  standalone: true,
  imports: [AlbumFormComponent],
  templateUrl: './albums-create.component.html',
  styleUrl: './albums-create.component.scss',
})
export class AlbumsCreateComponent implements OnInit {
  isEditing = false;
  albumId: number | null = null;

  constructor(
    readonly route: ActivatedRoute,
    readonly albumService: AlbumsService
  ) {}
  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id') ?? null);
    if (this.albumId) {
      this.isEditing = true;
    }
  }
}
