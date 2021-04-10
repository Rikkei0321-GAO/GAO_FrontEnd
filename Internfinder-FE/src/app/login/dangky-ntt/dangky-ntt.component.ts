import { Component, OnInit } from '@angular/core';
import {Student} from "../../module/Student";
import {StudentserviceService} from "../../Services/studentservice.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dangky-ntt',
  templateUrl: './dangky-ntt.component.html',
  styleUrls: ['./dangky-ntt.component.css']
})
export class DangkyNTTComponent implements OnInit {
  // @ts-ignore
  user: Student;

  constructor(private studenService: StudentserviceService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.user = new Student();
  }
  add()
  {
    this.studenService.create(this.user)
      .subscribe( response =>{
          console.log("Them thanh cong",this.user.full_name)
          this.router.navigate(['/login']);
        },
        error => {
          console.log("Them that bai",error);
        }
      )
  }
  onsubmit()
  {
    this.add();
  }

}
