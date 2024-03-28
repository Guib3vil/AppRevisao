import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  n1='';
  n2='';
  res=0

  constructor(private alertController: AlertController) {}

  async AlertaDivisaoPorZero() {
    const alert = await this.alertController.create({
      header: 'Ops...',
      message: 'Não é possível dividir por 0',
      buttons: ['OK'],
    });

    await alert.present();
  }

  somar(){
    this.res=parseFloat(this.n1)+parseFloat(this.n2);
  }

  subtrair(){
    this.res=parseFloat(this.n1)-parseFloat(this.n2);
  }

  multiplicar(){
    this.res=parseFloat(this.n1)*parseFloat(this.n2);
  }

  dividir(){
    if (parseFloat(this.n2)==0){
    this.res=0;
    this.AlertaDivisaoPorZero();
    }else{
      this.res=parseFloat(this.n1)/parseFloat(this.n2);
  }}
}
