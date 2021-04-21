import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShareClass} from "../model/Share.Class";
import {CommentClass} from "../model/Comment.Class";
import {AccountClass} from "../model/Account.class";
import {TokenStorageService} from "./token-storage.service";
import {CommentDTO} from "../dto/commentDTO";


@Injectable({
  providedIn: 'root'
})
export  class ShareService{
  get ShareClass(): ShareClass[] {
    return this._Accountlist;
  }

  set ShareClass(value: ShareClass[]) {
    this._Accountlist = value;
  }
  baseURL ='http://localhost:8080/dangbaichiase';
  httpOptions: any;
  constructor(private  httpClient: HttpClient, token:TokenStorageService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` + token.getToken() })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  getOne(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${'http://localhost:8080/dangbaichiase'}/${id}`,this.httpOptions);
  }

  getAll():Observable<any>{
    return this.httpClient.get<ShareClass[]>(this.baseURL + '/index',this.httpOptions)
  }
  getAllComment(idshare: number):Observable<any>{
    return this.httpClient.get<CommentClass[]>(`${'http://localhost:8080/comment'}/${idshare}`, this.httpOptions)
  }
  createComment(data: any) :Observable<any>{
    return  this.httpClient.post( 'http://localhost:8080/comment/create-comment', data, this.httpOptions )
  }
  private _CommentDTO: CommentDTO[] = []

  private _Commentlist: CommentClass[] = []

  get CommentClass(): CommentClass[] {
    return this._Commentlist;
  }

  get CommentDTO(): CommentDTO[] {
    return this._CommentDTO;
  }

  set CommentDTO(value: CommentDTO[]) {
    this._CommentDTO = value;
  }

  set CommentClass(value: CommentClass[]) {
    this._Commentlist = value;
  }

  private _Accountlist : ShareClass[]= [];
}
