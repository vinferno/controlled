import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  public albums: Album[]=[];

constructor(private http:HttpClient) {
  this.getAlbums();
}


getAlbums(){
  this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums').
  subscribe((data)=>{
    this.albums=data;
    console.log(data);
  })
}

}
