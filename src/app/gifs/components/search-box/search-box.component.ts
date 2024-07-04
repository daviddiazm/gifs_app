import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <div >
    <h5>Buscar:</h5>
    <div class="d-flex ">
      <!-- maneara 1 -->
      <!-- <input type="search"
        placeholder="buscar gif..."
        class="form-control"
        #txtTagInput
        (keyup.enter)="searchTag( txtTagInput.value )"
      > -->

      <!-- manera 2 -->
      <input type="search"
        placeholder="buscar gif..."
        class="form-control"
        #txtTagInput
        (keyup.enter)="searchTag()"
      >
      <button type="submit" class="btn btn-success">Buscar</button>
    </div>

  </div>
  `
})
export class SearchBoxComponent {

  constructor(private gifsService: GifsService ) {}

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef <HTMLInputElement>;


  searchTag() {
    const newTag = this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value = ''
  }
}
