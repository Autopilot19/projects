import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-add',
  imports: [ FormsModule, CommonModule ],
  standalone: true,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(public _share:ShareService) { } 
  hero={
    name:'',
    power:0,
    
  }
  image:any;
  selectimage(event:any){
    this.image=event.target.files[0];
    
  }


  add(){
    let formData=new FormData();
    formData.append('name',this.hero.name);
    formData.append('power', this.hero.power.toString());
    formData.append('image',this.image);
    
    this._share.CreateHero(formData).subscribe(
      res=>{
          this.hero={
        name:'',
        power:0,
       
      }
    },
      err=>{
        console.log(err);
      }
    )
  
    }
  }

