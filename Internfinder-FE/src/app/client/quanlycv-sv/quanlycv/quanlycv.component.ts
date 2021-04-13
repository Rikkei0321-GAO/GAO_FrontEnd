import { Component, OnInit } from '@angular/core';
import {Cv} from "../../../model/cv";
import {CvService} from "../../../Services/cv.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-quanlycv',
  templateUrl: './quanlycv.component.html',
  styleUrls: ['./quanlycv.component.css']
})
export class QuanlycvComponent implements OnInit {
  // @ts-ignore
  public cv: Cv[];
  // @ts-ignore
  public editcv: Cv;
  // @ts-ignore
  public deletecv: Cv;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.getCv();
  }
  public getCv(): void {
    this.cvService.getCv().subscribe(
      (response: Cv[]) => {
        this.cv = response;
        console.log(this.cv);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddCv(addForm: NgForm): void {
    // @ts-ignore
    document.getElementById('add-cv-form').click();
    this.cvService.addCv(addForm.value).subscribe(
      (response: Cv) => {
        console.log(response);
        this.getCv();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public onUpdateCv(cv: Cv): void {
    this.cvService.updateCv(cv).subscribe(
      (response: Cv) => {
        console.log(response);
        this.getCv();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCv(id: number): void {
    this.cvService.deleteCv(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCv();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchCv(key: string): void {
    console.log(key);
    const results: Cv[] = [];
    for (const cvsv of this.cv) {
      if (cvsv.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
        || cvsv.email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(cvsv);
      }
    }
    this.cv = results;
    if (results.length === 0 || !key) {
      this.getCv();
    }
  }

  public onOpenModal(cv: Cv, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editcv = cv;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deletecv = cv;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }


}
