import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
private _photos: Photo [] = [];
  constructor(private http: HttpClient) {
    this.getPhotos();
   }

  get photos (){
    return this._photos;
  }

  getPhotos(){
    this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
      this._photos = data;
      console.log(data);
    })
  }
}
