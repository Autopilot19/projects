import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ShareService } from '../share.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: true,
})
export class ListComponent {
     constructor(public _share:ShareService) { }
     delete(){
    this.heroes.pop();
  }

  heroes: any;
  ngOnInit() {
    this._share.getAllHeroes().subscribe(
      (res: any) => {
        this.heroes = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteHero(id: any) {
    this._share.deleteHero(id).subscribe(
      (res) => {
        this.ngOnInit();
      },
      (err) => {
        console.log(err);
      }
    );
  } 
}
