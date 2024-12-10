import { Component, input } from '@angular/core';
import { AlbumResponse } from '../../infrastructure/models/album.model';
import { DatePipe } from '@angular/common';
import { BackButtonComponent } from '../back-button/back-button.component';

@Component({
  selector: 'app-album-detail-card',
  standalone: true,
  imports: [DatePipe, BackButtonComponent],
  templateUrl: './album-detail-card.component.html',
  styleUrl: './album-detail-card.component.scss',
})
export class AlbumDetailCardComponent {
  album = input<AlbumResponse | null>();
}
