import { Component, OnInit } from '@angular/core';
import {LoadcssServices} from "../../../Services/loadcss.services";
import {ShareClass} from "../../../model/Share.Class";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareService} from "../../../Services/Share.Service";
import {Subscription} from "rxjs";
import {CommentClass} from "../../../model/Comment.Class";
import {TokenStorageService} from "../../../Services/token-storage.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {news} from "../../../model/news";
import {CommentDTO} from "../../../dto/commentDTO";


@Component({
  selector: 'app-baiviet-forum',
  templateUrl: './baiviet-forum.component.html',
  styleUrls: ['./baiviet-forum.component.css']
})
export class BaivietForumComponent implements OnInit {
  // @ts-ignore
   id_now: number;//id ng dung dang nhap
  constructor(
    private fb: FormBuilder,
    private  loadcssServices: LoadcssServices, private  accountservice: ShareService,
    private  activatedRouteService: ActivatedRoute, private router: Router,
    private token: TokenStorageService) {
    this.loadcssServices.loaddCss('assets/Client/fontawesome-free-5.15.2-web/css/all.css');
    this.loadcssServices.loaddCss('assets/Client/forum-mockup-master/css/style.css');
    this.loadcssServices.loadScript('assets/Client/CSS/stylesMH.css');
  }

  // @ts-ignore
  public  id: number;
  // @ts-ignore
  public sub: Subscription;
  // @ts-ignore
  private Subscription: Subscription;
  // @ts-ignore
  public shareClasses: ShareClass[];
  public commentlist: CommentClass[] = [];
  public  commentDto : CommentDTO[] = []
  // @ts-ignore
  share: ShareClass;
  // @ts-ignore
  commentForm = new FormGroup({
    content: new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.activatedRouteService.snapshot.params['id'];
    // @ts-ignore
    this.accountservice.getOne(this.id).subscribe(data => {
      this.share = data
      console.log(this.share);
    }, error => console.log(error))
    // @ts-ignore
    this.share = new ShareClass();
    // @ts-ignore
    this.comment = new CommentDTO()
    // @ts-ignore
    this.getAllComment()
  }

  getAllComment() {
    // @ts-ignore
    this.accountservice = this.accountservice.getAllComment(this.id).subscribe(data => {
      this.commentlist = data;
      console.log(data);
      console.log(this.commentlist);
    }, error => {
      console.log(error)
    });
  }
  // @ts-ignore
  comment: CommentDTO;
  onSubmit() {
    //@ts-ignore
    let id_user = JSON.parse(localStorage.getItem("auth-user"));
    this.id_now = id_user['id'];
    this.comment.id_account = this.id_now;
    this.comment.id_share = this.share.idshare
    this.comment.create_date = new Date();
    console.log(this.comment);

     this.accountservice.createComment(this.comment).subscribe(data => {
      console.log(data)
    })
  }
  // postComment() {
  //   // @ts-ignore
  //   this.accountservice = this.accountservice.createComment(this.comment).subscribe(data => {
  //     console.log(data);
  //   })
  // }

}
