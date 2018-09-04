/**
 * Created by: 
 * Date: 03/09/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Ver } from './../../models/ver.model'
@Component(
{
	selector: 'ver',
	templateUrl: 'ver.component.html'
})
export class VerComponent implements OnInit
{
	
	ver: Ver;
	
	successMsgData:any[]=[];
	
	constructor( private router: Router)
	{
		this.ver = new Ver();
		
	}
	ngOnInit()
	{
	}
	
	
	
}

