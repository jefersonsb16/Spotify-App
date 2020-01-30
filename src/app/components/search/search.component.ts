import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  termino:string = "";

  constructor(
    public spotyService: SpotifyService
  ) {
    
  }

  buscarArtista() {

    if(this.termino.length != 0){
      this.spotyService.getArtistas(this.termino).subscribe( artistas => {
        console.log('Resultado exitoso', artistas);
      });
    }

  }

}
