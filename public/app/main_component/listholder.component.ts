import { Component, OnInit } from '@angular/core';
import { Repo } from './Repo';
import { RepoService } from './listholder.service';


@Component({
    moduleId: module.id,
    selector: 'view-holder',
    providers: [RepoService],
    templateUrl: './listholder.template.html'
})
export class Listholder {

    constructor(private repoService: RepoService) { }

    templ: Repo[] = [];

    repos1: Repo[] = [];
    repos2: Repo[] = [];
    errorMessage = '';

    fillData(start: number, end: number, listId: number) {
        for (let i = start; i < end; i += 100) {
            this.repoService.getHeroes(start)
                .subscribe(
                repos => this.templ = repos,
                error => this.errorMessage = <any>error,
                () => this.CompleteValidCall(listId));
        }
    }

    CompleteValidCall(id: number) {
        if (id == 1) {
            this.repos1 = this.repos1.concat(this.templ);
        }
        else {
            this.repos2 = this.repos2.concat(this.templ);
        }

    }
}
