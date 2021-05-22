import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})

@TimeTracker("user-details")
export class UserDetailsPage implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
    })

    this.id = this.actRoute.snapshot.params['id'];

    this.userService.getUser(this.id).subscribe(data =>{
      console.log(data);
      console.log(data.username);
      this.editForm.patchValue({
        id: this.id,
        username: data.username,
        email: data.email,
        password: data.password,
      })
    })
  }

  

  saveForm(){
    this.userService.updateUser(this.id, this.editForm.value).subscribe(data => {
      console.log("Edit user :" + data);
      this.zone.run(() => this.router.navigate(['user']));
    })
  }


}
