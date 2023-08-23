import {Component, computed, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {RouterModule} from '@angular/router';
import {toSignal} from "@angular/core/rxjs-interop";
import {AsyncPipe, NgIf} from "@angular/common";
import {defer, from, mergeMap, reduce, Subject, switchMap, tap} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

function count() {

}

@Component({
    standalone: true,
    imports: [RouterModule, AsyncPipe, NgIf, HttpClientModule],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public title = 'nx-project';
    public count = 0
    public ob = new Subject();
    public sig = toSignal(this.ob);
    open = false

    count1 = signal(1);
    count2 = signal(2);
    doubleCount = computed(() => this.count1() * this.count2());

    constructor(private readonly http: HttpClient) {
    }


    public test() {
        this.http.get('http://localhost:3000/api/get-data').subscribe(data=>console.log(data))
    }

}
