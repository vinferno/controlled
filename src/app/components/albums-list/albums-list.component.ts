import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';


@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.scss']
})
export class AlbumsListComponent implements OnInit {

  constructor(
    public albumService: AlbumsService,
  ) { }

  ngOnInit(): void {
  }

  get albums() {
    return this.albumService.albums;
  }
}
