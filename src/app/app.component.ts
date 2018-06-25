import { Component, OnInit } from '@angular/core';

import { Album } from './types/album';
import { Photo } from './types/photo';
import { User } from './types/user';

@Component({
  selector: 'my-app',
  template: `
  <div class="page">
    <div class="page-header"> 
      <h1>{{name}}</h1> 
      <div class="breadcrumb" *ngIf="page !== userList" (click)="toUserList()">To User List</div> 
      <div class="clearIt"></div>
    </div>

    <div class="user-list" *ngIf="page == userList">
      <div *ngFor="let user of users">
        <div class="user card" style="" (click)="openAlbum(user.id)">
          <div class="user-card header">
            <span class="name" [title]="user.name">{{user.name}}</span>
          </div>
          <div class="user-body">
            <span>{{user.email}}</span>
            <span>{{user.phone}}</span>
            <span>{{user.website}}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="album-list" *ngIf="page == albumList">
      <div *ngFor="let album of albums;">
        <div class="album card">
          <div class="album-card header">
            <span class="name" [title]="album.title">{{album.title}}</span>
          </div>
          <img *ngIf="album.thumbnail" [src]="album.thumbnail" />
        </div>
      </div>
    </div>
  </div>`
})
export class AppComponent  { 
  private name: string;
  private users: Array<User>;
  private photos: Array<Photo>;
  private albums: Array<Album>;
  private page: string;
  private readonly userList: string = "User";
  private readonly albumList: string = "Album";
  private readonly photoList: string = "Photo";

  constructor () {
    this.name = "User List"
    this.users = new Array<User>();
    this.page = this.userList;
  }

  //Initialize the users
  ngOnInit () {
    //Retrieve Users
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      for(var i = 0; i < json.length; i++){
        var user = new User(json[i]);
        this.users.push(user);
      }
    });
  }

  private toUserList(): void {
    this.page = this.userList;
  }

  //Open the album list of an individual user
  private openAlbum(userId: number): void {

    //Retrieve albums
    this.name = "Album List"
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${userId}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.albums = new Array<Album>();
      this.page = this.albumList;
      for(var i = 0; i < json.length; i++){
        var album = new Album(json[i]);
        this.albums.push(album);
      }
      console.log(this.albums);

      this.albums.forEach((album) => {
        setTimeout(() => {
          //Get first photo thumbnail
          fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${album.id}`)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if(json[0] != undefined) {
              var photo = new Photo(json[0]);
              console.log(album.id);
              console.log(photo.thumbnailUrl);
              album.setThumbnail(photo.thumbnailUrl);
              console.log(album);
            }
          });
        },0)
      })
    });
  }
}
