import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu/menu.page';
import { TabsPage } from './tabs/tabs.page';
import { TabsPage as TabsPage2 } from './tabs2/tabs.page';
import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { ContactPage } from './contact/contact.page';
import { PageDetailPage } from './page-detail/page-detail.page';


const routes: Routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'dashboard', component: MenuPage, children: [
        { path: '', redirectTo: '/dashboard/tab1/(home:home)', pathMatch: 'full' },
        { path: 'tab1', component: TabsPage, children: [
            { path: '', redirectTo: '/dashboard/tab1/(home:home)', pathMatch: 'full', },
            { path: 'home',    outlet: 'home',    component: HomePage },
            { path: 'about',   outlet: 'about',   component: AboutPage },
            { path: 'contact', outlet: 'contact', component: ContactPage },
        ]},
        { path: 'tab2', component: TabsPage2, children: [
            { path: '', redirectTo: '/dashboard/tab2/(about:about)', pathMatch: 'full', },
            { path: 'home',    outlet: 'home',    component: HomePage },
            { path: 'about',   outlet: 'about',   component: AboutPage },
            { path: 'contact', outlet: 'contact', component: ContactPage },
        ]},
        { path: 'home',     loadChildren: './home/home.module#HomePageModule' },
        { path: 'list',     loadChildren: './list/list.module#ListPageModule' },
        { path: 'about',    loadChildren: './about/about.module#AboutPageModule' },
        { path: 'contact',  loadChildren: './contact/contact.module#ContactPageModule' },
    ]},
    { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
    { path: 'dashboard/tab1', children: [
        // Page on first router-outlet with /dashboard/tab1/special url
        { path: 'special', loadChildren: './special/special.module#SpecialPageModule' },
    ]},
  { path: 'page-detail/:pid', loadChildren: './page-detail/page-detail.module#PageDetailPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
