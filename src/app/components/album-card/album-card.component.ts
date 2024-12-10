import { Component, input } from '@angular/core';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent {
  album = input<AlbumResponse>();

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/no-album-cover.jpg';
  }
}
