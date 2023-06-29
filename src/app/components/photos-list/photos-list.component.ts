import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {

  constructor( private photosService: PhotosService) { }

  ngOnInit(): void {
  }

  get photos() {
    return this.photosService.photos;
  }
}
