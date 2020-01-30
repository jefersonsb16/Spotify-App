import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  canciones: any = [];

  constructor( 
    private activatedRoute: ActivatedRoute,
    public spotyService: SpotifyService
  ) {

  }

  ngOnInit(){
    this.activatedRoute.params
        .map( params => params['id'] )
        .subscribe( id => {
          console.log(id);

          this.spotyService.getArtista(id)
              .subscribe( (artista:any) => {
                this.artista = artista;
                console.log(artista);
              });

          this.spotyService.getTop(id)
              .subscribe( canciones => {
                this.canciones = canciones;
                console.log(canciones);
              });

        });
  }

}
