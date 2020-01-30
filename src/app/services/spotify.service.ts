import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[];
  token:string = "BQAlqjfO2LuLzSRu8u60HH_MUphCOgoRN5tJrsszDkgxkcNDfg1Iq2yPH8GSmBLzsUpOsnWmrhCrZONxhf8";

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio listo');
  }

  private getHeaders() : HttpHeaders {
    let headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getArtistas( termino:string ){
    let url = "https://api.spotify.com/v1/search?query=" + termino + "&type=artist&limit=20";
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
                .map( (response:any) => {
                  this.artistas = response.artists.items;
                  return this.artistas;
                });
  
  }

  getArtista( id:string ){
    let url = "https://api.spotify.com/v1/artists/" + id;
    let headers = this.getHeaders();

    return this.http.get(url, { headers })
                .map( artista => {
                  return artista;
                });

  }

  getTop( id:string ){
    let url = "https://api.spotify.com/v1/artists/" + id + "/top-tracks?country=US";
    let headers = this.getHeaders();

    return this.http.get( url, { headers })
              .map( (response:any) => {
                return response.tracks;
              });
  }

}
