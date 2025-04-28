import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})

export class SenhasService {
  public nome: string = '';
  public cpf: string = '';
  public telefone: string = '';
  public inputNovaSenha: string = '';
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public senhasArray: any = [];
  somaGeral() { this.senhasGeral++; this.senhasTotal++; }
  somaPrior() { this.senhasPrior++; this.senhasTotal++; }
  somaExame() { this.senhasExame++; this.senhasTotal++; }


  dadosArmazenados: { nome: string; cpf: string; telefone: string }[] = [];

  async armazenarDados() {

   if (this.nome == '') {
      
      if (this.nome.length == 0) {

        const alert = await this.alertController.create({
          message: 'Veja e preencha os campos corretamente',

        });
        await alert.present();
      }
    } else if (this.cpf == '') {


      if (this.cpf.length == 0) {

        const alert = await this.alertController.create({
          message: 'Veja e preencha os campos corretamente',

        });
        await alert.present();
      }
    }

    else if (this.telefone == '') {

      if (this.telefone.length == 0) {

        const alert = await this.alertController.create({
          message: 'Veja e preencha os campos corretamente',

        });
        await alert.present();
      }

    }  else if (this.nome && this.cpf && this.telefone != '') {
      this.dadosArmazenados.push({
        nome: this.nome,
        cpf: this.cpf,
        telefone: this.telefone,
      });

      this.nome = '';
      this.cpf = '';
      this.telefone = '';
      const alert = await this.alertController.create({
        message: 'Cadastro com Sucesso!',

      });
      
      await alert.present();


    } 
  }


  novaSenha(tipoSenha: string = '') {
    if (tipoSenha == 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SG'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SP.push(this.inputNovaSenha);

    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        new Date().getMonth().toString().padStart(2, '0') +
        new Date().getDay().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        (this.senhasArray['SP'].length + 1).toString().padStart(2, '0');
      this.senhasArray.SE.push(this.inputNovaSenha);

    }



  }
  constructor(private alertController: AlertController) {

    console.log(this.senhasArray)

  }



}
