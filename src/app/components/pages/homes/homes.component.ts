import { Component, OnInit } from '@angular/core';
import { VideoI } from 'src/app/models/youtube.model';

import Swal from 'sweetalert2';

import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  videos: VideoI[] = [];

  constructor(private ytSvc: YoutubeService) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.ytSvc.getVideos()
      .subscribe(res => {
        this.videos.push(...res);
      })
  }

  mostrarVideo(video: VideoI) {
    Swal.fire({
      html: `
        <h4>${video.title}</h4>
        <hr/>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/${video.resourceId.videoId}"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      `
    })
    
  }

}
