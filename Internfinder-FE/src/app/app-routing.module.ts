import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuanlytaikhoanIndexComponent} from './admin/quanlytaikhoan/quanlytaikhoan-index/quanlytaikhoan-index.component';
import {QuanlytaikhoanCreateComponent} from './admin/quanlytaikhoan/quanlytaikhoan-create/quanlytaikhoan-create.component';
import {QuanlytaikhoanEditComponent} from './admin/quanlytaikhoan/quanlytaikhoan-edit/quanlytaikhoan-edit.component';
import {QuanlybaidangIndexComponent} from './admin/quanlybaidang/quanlybaidang-index/quanlybaidang-index.component';
import {QuanlybaidangCreateComponent} from './admin/quanlybaidang/quanlybaidang-create/quanlybaidang-create.component';
import {QuanlymaucvIndexComponent} from './admin/quanlymau-cv/quanlymaucv-index/quanlymaucv-index.component';
import {QuanlymaucvCreateComponent} from './admin/quanlymau-cv/quanlymaucv-create/quanlymaucv-create.component';
import {QuanlymaucvDetailComponent} from './admin/quanlymau-cv/quanlymaucv-detail/quanlymaucv-detail.component';
import {ModuleCreateCvComponent} from './client/module-create-cv/module-create-cv.component';
import {PageComponent} from './client/page/page.component';
import {AdminComponent} from './admin/admin.component';
import {ClientComponent} from './client/client.component';
import {QuanlybaidangEditComponent} from './admin/quanlybaidang/quanlybaidang-edit/quanlybaidang-edit.component';
import {LoginComponent} from './login/login.component';
import {AdminLoginComponent} from './login/admin-login/admin-login.component';
import {ClientLoginComponent} from './login/client-login/client-login.component';
import {DangkysinhvienComponent} from './login/dangkysinhvien/dangkysinhvien.component';
import {DangkyNTTComponent} from './login/dangky-ntt/dangky-ntt.component';
import {CKEditorModule} from "ckeditor4-angular";
import {TrangchuForumComponent} from "./client/module-forum/trangchu-forum/trangchu-forum.component";
import {BaivietForumComponent} from "./client/module-forum/baiviet-forum/baiviet-forum.component";
import {DangbaivietForumComponent} from "./client/module-forum/dangbaiviet-forum/dangbaiviet-forum.component";
import {ModuleDangtuyendungComponent} from "./client/module-dangtuyendung/module-dangtuyendung.component";
import {ModuleXemvcNtdComponent} from "./client/module-xemvc-ntd/module-xemvc-ntd.component";
import {QuanlythongtinTaikhoanComponent} from "./client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan/quanlythongtin-taikhoan.component";
import {ModuleTimkiemTrangchuComponent} from "./client/module-timkiem-trangchu/module-timkiem-trangchu.component";
import {PapeBaidangtuyenComponent} from "./client/pape-baidangtuyen/pape-baidangtuyen.component";
import {QuanlybaichiaseIndexComponent} from "./admin/quanlybaichiase/quanlybaichiase-index/quanlybaichiase-index.component";
import {QuanlybaichiaseCreateComponent} from "./admin/quanlybaichiase/quanlybaichiase-create/quanlybaichiase-create.component";
import {QuanlybaichiaseEditComponent} from "./admin/quanlybaichiase/quanlybaichiase-edit/quanlybaichiase-edit.component";
import {QuanlybinhluanIndexComponent} from "./admin/quanlybinhluan/quanlybinhluan-index/quanlybinhluan-index.component";
import {QuanlybinhluanDetailsComponent} from "./admin/quanlybinhluan/quanlybinhluan-details/quanlybinhluan-details.component";
import {QuanlythongtinTaikhoanEditComponent} from "./client/Quanlythongtin-taikhoanall/quanlythongtin-taikhoan-edit/quanlythongtin-taikhoan-edit.component";
import {AdminAuthService} from "./_services/admin.service";
import {CustomerAuthService} from "./_services/customer.service";
import {QuanlybaidangtuyenNvdComponent} from "./client/quanlybaidang-nvd-mrdat/quanlybaidangtuyen-nvd/quanlybaidangtuyen-nvd.component";
import {QuanlybaidangNvdMrdatDetailsComponent} from "./client/quanlybaidang-nvd-mrdat/quanlybaidang-nvd-mrdat-details/quanlybaidang-nvd-mrdat-details.component";

const routes: Routes = [

  {   path: 'admin', component: AdminComponent, canActivate:[AdminAuthService], children :
      [
        {path: 'quanlytaikhoan/index', component: QuanlytaikhoanIndexComponent},
        {path: 'quanlytaikhoan/create', component: QuanlytaikhoanCreateComponent},
        {path: 'quanlytaikhoan/edit/:id', component: QuanlytaikhoanEditComponent},
        //
        {path: 'quanlybaidang/index', component: QuanlybaidangIndexComponent},
        {path: 'quanlybaidang/create/:id', component: QuanlybaidangCreateComponent},
        {path: 'quanlybaidang/edit/:id', component: QuanlybaidangEditComponent },
        //
        {path: 'quanlymaucv/index', component: QuanlymaucvIndexComponent},
        {path: 'quanlymaucv/create', component: QuanlymaucvCreateComponent},
        {path: 'quanlymaucv/detail', component: QuanlymaucvDetailComponent},
        //
        {path: 'quanlybaichiase/index', component: QuanlybaichiaseIndexComponent},
        {path: 'quanlybaichiase/create', component: QuanlybaichiaseCreateComponent},
        {path: 'quanlybaichiase/edit/:id', component: QuanlybaichiaseEditComponent},
        //
        {path:'quanlybinhluan/index', component: QuanlybinhluanIndexComponent},
        {path: 'quanlybinhluan/details/:id', component: QuanlybinhluanDetailsComponent}
      ]
  },
  {
    path: '', component: ClientComponent, children :
      [
        {path: '', component: PageComponent},
        {path: 'create_cv', component: ModuleCreateCvComponent  },
        {path: 'forum', component: TrangchuForumComponent, canActivate:[CustomerAuthService]},
        {path: 'forum/index/:id', component: BaivietForumComponent,canActivate:[CustomerAuthService]},
        {path: 'dangbaichiase', component: DangbaivietForumComponent, canActivate:[CustomerAuthService]},
        {path: 'dangtuyendung', component: ModuleDangtuyendungComponent},
        {path: 'xemcv-ntd', component: ModuleXemvcNtdComponent},
        {path: 'profile/:id', component: QuanlythongtinTaikhoanComponent, canActivate:[CustomerAuthService]},
        {path: 'profile/edit/:id', component: QuanlythongtinTaikhoanEditComponent, canActivate:[CustomerAuthService]},
        {path: 'quanlybaidangtuyen', component: QuanlybaidangtuyenNvdComponent, canActivate:[CustomerAuthService]},
        {path: 'quanlybaidangtuyen/details/:id', component: QuanlybaidangNvdMrdatDetailsComponent, canActivate:[CustomerAuthService]},
        {path: 'timkiem-trangchu', component: ModuleTimkiemTrangchuComponent},
        {path: 'xembaidangtuyen', component: PapeBaidangtuyenComponent},

      ]
  },
  {
    path: 'login', component: LoginComponent, children :
      [
        {path: 'dangnhap/admin', component: AdminLoginComponent  },
        {path: 'dangnhap/client', component: ClientLoginComponent},
        {path: 'dangky/sinhvien', component: DangkysinhvienComponent},
        {path: 'dangky/nhatuyendung', component: DangkyNTTComponent},

      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CKEditorModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
