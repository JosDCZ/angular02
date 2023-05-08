import { AnimeService } from './../../service/anime.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IAnime } from '@modules/anime/interface/anime';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {
  cards: IAnime[] = [];
  offset: number = 0;

  a!: string | null;

  cardText = new FormControl('');

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    //this.cards = [];
    //this.buscarCards();
  }

  /*onScroll(){
    console.log("scroll infinito");
    this.offset += 50;
    this.buscarCards();
    this.buscarCardsForma2();
  }*/

  onScroll(paraBuscar: string | null) {
    console.log('Scroll infinito');
    this.offset += 5;
    console.log(paraBuscar);
    this.animeService.busquedas(this.a, this.offset);
  }

  buscarCards() {
    this.animeService.getCardsAnime(this.offset).subscribe((res) => {
      console.log(res);
      this.cards = [...this.cards, ...res];
    });
  }

  buscarCardsForma2(nombreCard: string | null = null) {
    this.animeService
      .getCardsAnimeForma2(nombreCard, this.offset)
      .subscribe((res) => {
        console.log(res);
        this.cards = [...this.cards, ...res];
      });
  }

  get resultados() {
    return this.animeService.cards;
  }
}
