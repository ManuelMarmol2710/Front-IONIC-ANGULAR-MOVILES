import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'home-bloc',
    loadChildren: () => import('./home-bloc/home-bloc.module').then( m => m.HomeBlocPageModule)
  },
  {
    path: 'home-note',
    loadChildren: () => import('./home-note/home-note.module').then( m => m.HomeNotePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'deleteprofile',
    loadChildren: () => import('./deleteprofile/deleteprofile.module').then( m => m.DeleteprofilePageModule)
  },
  {
    path: 'ver-notas',
    loadChildren: () => import('./ver-notas/ver-notas.module').then( m => m.VerNotasPageModule)
  },
  {
    path: 'ver-collections',
    loadChildren: () => import('./ver-collections/ver-collections.module').then( m => m.VerCollectionsPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
