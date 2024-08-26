import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuillPopupComponent } from './components/quill-popup/quill-popup.component';
import { QuillComponent } from './components/quill/quill.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:AppComponent},
    {path:'quill',component:QuillComponent},
    {path:'quill-popup',component:QuillPopupComponent}
];
