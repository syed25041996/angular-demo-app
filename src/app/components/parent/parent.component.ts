import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  // variables
  genre = ["friends","bbt","the office"]

  isChildDestroyed = false;
  
  //decorators
  @ViewChild('movie')
  movie !: ElementRef


 
  destroy() {
     this.isChildDestroyed = true;
  }

  //functions
  onMovieGet(value : any){
    alert(value)
  }

  // onAddCount(value : any){
  //   this.genre.push(value)
  // }

  onAddMovie(){
    // this.genre.push(this.movie.nativeElement.value)
    this.genre = [...this.genre, this.movie.nativeElement.value]
    // console.log(this.genre)
  }
}
