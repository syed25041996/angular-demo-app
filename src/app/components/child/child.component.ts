import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  //variables

  constructor(){
    console.log('constructor called')
  }

  //decorators
  @Input() genreList !: string[]

  @Output()
  movieEmit: any = new EventEmitter()

  @ContentChild('child')
  childContent !: ElementRef

  @ViewChild('childHook')
  childHook !: ElementRef

  //hooks in the order
  ngOnChanges(changes: SimpleChanges): void {
    //changes for array
    // console.log(changes)
    // console.log(`onchanges function =========> ${this.genreList}`)
    // if (changes['genreList'].currentValue.length > 4) {
    //   alert("Your movie bucket is full")
    // }
  }

  ngOnInit(): void {
    console.log(`oninit function is called`)
  }

  ngDoCheck(): void {
    console.log(`docheck function is called`)
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit is invoked`)
    this.childContent.nativeElement.setAttribute("style",`color:green`)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked is called', this.childContent);
    this.childContent.nativeElement.setAttribute("style",`color:red`)
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit is called `, this.childHook);
    this.childHook.nativeElement.setAttribute("style",`color:blue`)
    
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked is called');
    this.childHook.nativeElement.setAttribute("style",`color:green`)
  }

  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }



  //functions
  onMovie(selectedMovie: any) {
    this.movieEmit.emit(selectedMovie)
  }

  doNothing() {
    //Simply an empty function
  }

}
