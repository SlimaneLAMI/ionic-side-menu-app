import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  hide = true;
  
  users: Array<User> = new Array<User>();
  // users: User[] = [];

  userForm = this.formBuilder.group({
    id: [null],
    username: [''],
    email: [''],
    password: ['']
  })

  constructor(
    private userService: UserService, 
    private toast: ToastController, 
    private formBuilder: FormBuilder, 
    private alertController : AlertController
    ) { }

  ngOnInit(): void {    
    this.reloadData();
  }
  reloadData() {    
    this.userService.getAllUsers().subscribe(data => {
    this.users = data;
    });
  }

  delUser(id: any) {
    this.userService.deleteUser(id).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Un user supprimé',
        duration: 3000
      });
      toast.present();
      this.reloadData();
    })
  }

  saveUser() {
    this.userService.addUser(this.userForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Un user ajouté',
        duration: 3000
      });
      toast.present();
      this.reloadData();
      this.userForm.reset();
      this.afficherAdd();
    })    
  }

  async handleButtonClick(id: number) {
    const alert = await this.alertController.create({
      header: 'Suppression',
      message: 'Etes-vous sûr de supprimer ce user ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Oui',
          cssClass: 'secondary',
          handler: () => {
            this.delUser(id)
          }
        }
      ]
    });
    await alert.present();
  }

  afficherAdd(){
    this.hide = !this.hide; 
  }
  
}
