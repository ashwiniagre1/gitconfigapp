
import {Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TempcheckComponent } from './components/tempcheck/tempcheck.component';
import { VerComponent } from './components/ver/ver.component';
import { BlankuiComponent } from './components/blankui/blankui.component';
import { TestComponent } from './components/test/test.component';
import { TestmodelComponent } from './components/testmodel/testmodel.component';
export const ROUTES: Routes = [
{
	    path: 'login', component: LoginComponent
},
{
	    path: 'tempcheck', component: TempcheckComponent
},
{
	    path: 'ver', component: VerComponent
},
{
	    path: 'blankui', component: BlankuiComponent
},
{
	    path: 'test', component: TestComponent
},
{
	    path: 'testmodel', component: TestmodelComponent
},
];

