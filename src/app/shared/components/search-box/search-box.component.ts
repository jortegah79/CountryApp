import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',

  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private debouncer:Subject<string>=new Subject();
private debouncerSuscription?:Subscription;

  @Input()
  placeholder:string="";
  @Input()
  initialValue:string="";

  @Output()
  onValue:EventEmitter<string>=new EventEmitter();

  @Output()
  onDebounce:EventEmitter<string>=new EventEmitter();

  ngOnDestroy(): void {
console.log(`destruido`);
this.debouncerSuscription?.unsubscribe();
  }

  ngOnInit(): void {

  this.debouncerSuscription= this.debouncer
   .pipe(
    debounceTime(300)
   )
   .subscribe(value=>this.onDebounce.emit(value));
  }


   emitValue(text:string):void{
    this.onValue.emit(text);
  }

  onKeyPress(searchTerm:string) {
    this.debouncer.next(searchTerm)
//console.log(searchTerm)
  }

}
