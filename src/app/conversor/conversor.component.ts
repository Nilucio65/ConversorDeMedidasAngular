import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {
  num1: number = 0;
  resp: number = 0;
  str1: string = "Cm";
  str2: string = "Cm";

  OnChange(){
    console.log(this.str2);
    console.log(this.str1);
  }

  calcular(){
  console.log(this.str2);
  console.log(this.str1);
    if(this.str1 == this.str2){
      this.resp = 0;
      alert("selecione um valor diferente para conversor");
    }
    else{
      if(this.str1 == "Cm" && this.str2 == "M"){
        this.resp = this.num1 / 100;
      }
      else{
        if(this.str1 == "M" && this.str2 == "Cm"){
          this.resp = this.num1 * 100;
        }
        else{
          if(this.str1 == "Cm" && this.str2 == "Yd"){
            this.resp = this.num1 / 91.44;
          }
          else{
            if(this.str1 == "Yd" && this.str2 == "Cm"){
              this.resp = this.num1 * 91.44;
            }
            else{
              if(this.str1 == "Yd" && this.str2 == "M"){
                this.resp = this.num1 / 1.094;
              }
              else{
                if(this.str1 == "M" && this.str2 == "Yd"){
                  this.resp = this.num1 * 1.094;
                }
              }
            }
          }
        }
      }
    }

  }
}
