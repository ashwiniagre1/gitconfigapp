/**
 * Created by: 
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Testmodel } from './../../models/testmodel.model'
@Component(
{
	selector: 'testmodel',
	templateUrl: 'testmodel.component.html'
})
export class TestmodelComponent implements OnInit
{
	
	testmodel: Testmodel;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.testmodel = new Testmodel();
		
	}
	ngOnInit()
	{
	}
	
	onClick_btn(eventData:any)
	{ 
		this.router.navigate(['uitest/core/login']);
		
	} 
	
	
}

