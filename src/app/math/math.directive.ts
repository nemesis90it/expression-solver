import {Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MathServiceImpl} from './math.service';
import {Subject} from 'rxjs';
import {take, takeUntil} from 'rxjs/operators';


@Directive({
  selector: '[mathText]'
})
export class MathDirective implements OnInit, OnChanges, OnDestroy {
  private alive$ = new Subject<boolean>();

  @Input()
  private mathText: string;
  private readonly _el: HTMLElement;

  constructor(private service: MathServiceImpl,
              private el: ElementRef) {
    this._el = el.nativeElement as HTMLElement;
  }

  private subscribe() {
    this.service
      .ready()
      .pipe(
        take(1),
        takeUntil(this.alive$)
      ).subscribe(res => {
      this.service.render(this._el, this.mathText);
    });
  }

  ngOnInit(): void {
    this.subscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.subscribe();
  }

  ngOnDestroy(): void {
    this.alive$.next(false);
  }
}
