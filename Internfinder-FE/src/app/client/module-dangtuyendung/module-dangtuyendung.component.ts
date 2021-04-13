import {Component, Input, OnInit} from '@angular/core';
import {LoadcssServices} from "../../Services/loadcss.services";
import {ActivatedRoute, Router} from "@angular/router";
import {news} from "../../module/news";
import {baidangservice} from "../../Services/baidangservice.service";
import {Category} from "../../module/category";
import {TimkiemService} from "../../Services/timkiem.service";

@Component({
  selector: 'app-module-dangtuyendung',
  templateUrl: './module-dangtuyendung.component.html',
  styleUrls: ['./module-dangtuyendung.component.css'],
  providers:[baidangservice]
})
export class ModuleDangtuyendungComponent implements OnInit {
  constructor(private  loadcssServices: LoadcssServices, private route: ActivatedRoute, private router: Router,
              private newServiceService: baidangservice) {

    this.loadcssServices.loaddCss('assets/Client/minhhoang/bootstrap.css');
    this.loadcssServices.loaddCss('assets/Client/CCS/stylesMH.css');
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');

  }

  // @ts-ignore
  addBaidang: news;
  // @ts-ignore
  private idCata:string;
  ngOnInit(): void {
    // @ts-ignore
    this.addBaidang = new news();
    // @ts-ignore
    this.newServiceService.getIdCategory().subscribe(item=>{
      this.lisstnganh=item;
    })
  }

  add() {
    // @ts-ignore
    this.addBaidang.account_role_id_role="2";
    // @ts-ignore
    this.addBaidang.account_idAccount=1;
    console.log("hang ve: "+ this.addBaidang);
    this.newServiceService.addNews(this.addBaidang)
      .subscribe(
        response => {
          console.log(this.addBaidang.title);
          this.router.navigate(['/list']);
        },
        (error: any) => {
          console.log(error);
        });
  }

  onSubmit() {
    console.log(this.addBaidang);
    this.add();
  }

  lisstnganh: Category[]=[];
  // @ts-ignore
  public onOptionsSelected(event) {
    // @ts-ignore
    const value = event.target.value;
    this.idCata = value;
    console.log(value);
  }
}
