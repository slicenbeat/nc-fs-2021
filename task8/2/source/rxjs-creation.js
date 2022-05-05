import { filter, map } from "rxjs/operators";

import { from, fromEvent, interval, Observable, of, scan, merge } from "rxjs";

export function sample1() {
  const observable = new Observable((subscriber) => {
    for (let i = 1; i <= 100; i++) {
      subscriber.next(i);
    }
  });
  observable.subscribe((x) => {
    for (let i = 2; i <= x; i++) {
      if (x % i === 0 && i != x) break;
      else if (i != x) continue;
      else console.log(x);
    }
  });
  observable.unsubscribe();
}

export function sample2() {
  const stream$ = new Observable((observer) => {
    observer.next(5);
    observer.next(4);
    observer.next(3);
    observer.next(2);
    observer.next(1);
    observer.next(new Error("Завершился с ошибкой…"));
    observer.complete();
  });

  const subscription = stream$.subscribe({
    next: (v) => alert(v),
    error: (e) => alert(e),
    complete: () => alert("Просто завершился"),
  });
  subscription.unsubscribe();
}

export function sample3() {
  const first = fromEvent(document.getElementById("btn-1"), "click");
  const second = fromEvent(document.getElementById("btn-2"), "click");
  const third = fromEvent(document.getElementById("btn-3"), "click");

  function rand() {
    return Math.floor(Math.random() * 256);
  }

  const mergeStream$ = merge(first, second, third);

  mergeStream$.subscribe(
    () =>
      (document.body.style.backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`)
  );
}
