import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgIf} from "@angular/common";
import {defer, from, mergeMap, reduce, Subject, switchMap, tap} from "rxjs";

function count() {

}

@Component({
    standalone: true,
    imports: [RouterModule, AsyncPipe, NgIf],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'nx-project';
    count = 0

    public def = defer(()=> {
        console.log('e4e4')
       return  '44'
    })


    countr = signal(1);
    countr2 = signal(2);
    doubleCount = computed(() => this.countr() * this.countr2());

    public ob = new Subject();

    public sig = toSignal(this.ob);
    open =false

    public test() {
       this.open =true;
    }
    public test2() {
        this.countr2.set(6)
    }
}
