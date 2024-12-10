import { Component, input } from '@angular/core';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../../infrastructure/services/albums.service';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  album = input<AlbumResponse>();
  showCommentBox = false;
  stars = Array(5).fill(0);
  rating = 0;
  comment = '';

  constructor(readonly albumsService: AlbumsService) {}

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/no-album-cover.jpg';
  }

  openComment() {
    this.showCommentBox = true;
  }

  rateAlbum(star: number) {
    this.rating = star;
  }

  cancelComment() {
    this.comment = '';
    this.showCommentBox = false;
    this.rating = 0;
  }

  submitComment() {
    if (this.comment.trim()) {
      this.albumsService
        .addAlbumComment(this.album()?.id ?? 0, {
          description: this.comment,
          rating: this.rating,
          collector: { id: 1 },
        })
        .then(() => {
          alert('Comentario enviado con exito.');
          this.showCommentBox = false;
          this.comment = '';
          this.rating = 0;
        })
        .catch(() => {
          alert('Error al enviar el comentario.');
        });
    } else {
      alert('El comentario no puede estar vacío.');
    }
  }
}
