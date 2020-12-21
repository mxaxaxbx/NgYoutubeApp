import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { YoutubeResponseI } from '../models/youtube.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyCgDmBVlZpBmPu3h6Okhvsx7Cb09ya1Rh0';
  private playListId = 'UUuaPTYj15JSkETGnEseaFFg';
  private nextPageToken = '';

  constructor(private http: HttpClient) {
  }

  getVideos() {
    const url = `${this.youtubeUrl}/playlistItems`;
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10')
      .set('playlistId', this.playListId)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponseI>(url, {params} )
      .pipe(
        map(res => {
          this.nextPageToken = res.nextPageToken;
          return res.items
        }),

        map(items => items.map( video => video.snippet) )
      )

  }
}
