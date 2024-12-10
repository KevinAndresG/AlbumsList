import { Component, input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AlbumsService } from '../../infrastructure/services/albums.service';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './album-form.component.html',
  styleUrl: './album-form.component.scss',
})
export class AlbumFormComponent implements OnInit {
  albumForm: FormGroup = new FormGroup({});
  genres = ['Classical', 'Salsa', 'Rock', 'Folk'];
  labels = ['Sony Music', 'Discos Fuentes', 'Elektra', 'Fania Records'];
  isEditing = input<boolean>(false);
  albumId = input<number | null>(null);
  constructor(
    readonly fb: FormBuilder,
    readonly albumsService: AlbumsService,
    readonly router: Router
  ) {
    this.albumForm = this.fb.group({
      name: ['', Validators.required],
      cover: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      releaseDate: ['', Validators.required],
      description: [''],
      genre: ['', Validators.required],
      recordLabel: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.loadAlbumData(this.albumId() ?? 0);
  }

  onSubmit(): void {
    if (this.albumForm.valid) {
      if (this.isEditing()) {
        this.albumsService.updateAlbum(
          this.albumId() ?? 0,
          this.albumForm.value
        );
        this.albumForm.reset();
      } else {
        this.albumsService.createAlbum(this.albumForm.value);
        this.albumForm.reset();
      }
      this.router.navigate(['albums-list']);
    }
  }

  loadAlbumData(id: number) {
    this.albumsService.getAlbum(id).then((album: AlbumResponse) => {
      if (album) {
        this.albumForm.patchValue(album);
      }
    });
  }
}
