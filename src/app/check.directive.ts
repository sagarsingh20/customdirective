import { Directive, ElementRef, OnInit, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appCheck]'
})
export class CheckDirective implements OnInit{
 
  @Input() defaultValue: any;

  constructor(private eRef: ElementRef ) { }
  
  ngOnInit () {
   this.eRef.nativeElement.value=this.defaultValue;
  }

  @HostListener('keyup') onkeyup(){
    console.log(this.eRef.nativeElement.value)
     
  }
 
}
