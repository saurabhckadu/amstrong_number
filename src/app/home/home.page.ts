import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  number=0
  amstrongNumber:number
  upperNumber:number
  lowerNumber:number
  flag = 0
  executionTime:any
  constructor(private toastController:ToastController) {
  }

  async findAmstrongNumber() {
    let t0 = performance.now()
    if(this.number !=0){
    for (let i = this.number; ; i++) {
      let numberOfDigits = i.toString().length;
      let sum = 0;

      // create a temporary variable
      let temp = i;

      while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = Math.floor(temp / 10)
      }

      if (sum == i) {
        this.upperNumber = i
        break;
      }
    }
    if (this.number == this.upperNumber) {
      this.flag = 1
      this.amstrongNumber= this.upperNumber
    }
    else {
      this.flag = 2
      for (let i = this.number; ; i--) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;

        while (temp > 0) {

          let remainder = temp % 10;

          sum += remainder ** numberOfDigits;
          temp = Math.floor(temp / 10)
        }

        if (sum == i) {
          this.lowerNumber = i
          break;
        }
      }
    }
    var t1 = performance.now()
    this.executionTime= t1 - t0+ " milliseconds."
  }
  else{
    const toast = await this.toastController.create({
      message: 'Please enter some value.',
      duration: 2000
    });
    toast.present();
  }
  }
  resetValue(){
    this.flag=0
    this.number=0
  }
}
