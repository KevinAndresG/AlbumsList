import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AlbumsListComponent } from './albums-list.component';
import { AlbumsService } from '../../infrastructure/services/albums.service';
import { ActivatedRoute } from '@angular/router';

describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent;
  let fixture: ComponentFixture<AlbumsListComponent>;
  let albumsServiceSpy: jasmine.SpyObj<AlbumsService>;

  beforeEach(async () => {
    albumsServiceSpy = jasmine.createSpyObj('AlbumsService', ['getAlbums']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: AlbumsService, useValue: albumsServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumsListComponent);
    component = fixture.componentInstance;
  });

  it('should handle empty album list gracefully', async () => {
    spyOn(albumsServiceSpy, 'getAlbums').and.returnValue(Promise.resolve([]));

    component.ngOnInit();
    await fixture.whenStable();

    expect(component.albums.length).toBe(0);
    expect(component.isLoading).toBe(false);
  });

  it('should set albums and isLoading correctly after getAlbums resolves', async () => {
    const mockAlbums = [
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

    spyOn(albumsServiceSpy, 'getAlbums').and.returnValue(
      Promise.resolve(mockAlbums)
    );

    component.ngOnInit();
    await fixture.whenStable();

    expect(component.albums.length).toBe(1);
    expect(component.albums[0]).toEqual(mockAlbums[0]);
    expect(component.isLoading).toBe(false);
  });

  it('should call getAlbums on initialization', async () => {
    const spy = spyOn(component, 'getAlbums').and.callThrough();
    albumsServiceSpy.getAlbums.and.returnValue(Promise.resolve([]));
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
