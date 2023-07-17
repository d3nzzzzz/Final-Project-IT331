import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flogin',
    loadChildren: () => import('./flogin/flogin.module').then( m => m.FloginPageModule)
  },
  {
    path: '',
    redirectTo: 'flogin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'therapist',
    loadChildren: () => import('./therapist/therapist.module').then( m => m.TherapistPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tlogin',
    loadChildren: () => import('./tlogin/tlogin.module').then( m => m.TloginPageModule)
  },
  {
    path: 'treg',
    loadChildren: () => import('./treg/treg.module').then( m => m.TregPageModule)
  },
  {
    path: 'alogin',
    loadChildren: () => import('./alogin/alogin.module').then( m => m.AloginPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
