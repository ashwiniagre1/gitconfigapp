/**
 * Created by: 
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Tempcheck } from './../../models/tempcheck.model'
@Component(
{
	selector: 'tempcheck',
	templateUrl: 'tempcheck.component.html'
})
export class TempcheckComponent implements OnInit
{
	
	tempcheck: Tempcheck;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.tempcheck = new Tempcheck();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

