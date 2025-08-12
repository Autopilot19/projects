import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from '../share.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  hero: any;
  id: any;
  constructor(private act: ActivatedRoute, private _share: ShareService, private router:Router) {}
    Update(){
      this._share.updateHero(this.id, this.hero).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['/list']);
        },
        (err) => {
          console.log(err);
        }
      );
    }

    
  ngOnInit() {
    this.id = this.act.snapshot.paramMap.get('id');
    this._share.getHeroById(this.id).subscribe(
      (res: any) => {
        this.hero = res;
      },
      (err) => {  
        console.log(err);
      }
    );
  }
}