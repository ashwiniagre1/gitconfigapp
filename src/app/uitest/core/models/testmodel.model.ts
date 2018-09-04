/**
 * 
 * Date: 03/09/2018	
 */
export class Testmodel
{
	
	private _text: string;
	private _number: string;
	private _check: string;
	private _date: string;
	
	constructor() { 
	}
	
	set text(value: string) {
		this._text = value;
	}
	get text() : string {
		return this._text;
	}
	set number(value: string) {
		this._number = value;
	}
	get number() : string {
		return this._number;
	}
	set check(value: string) {
		this._check = value;
	}
	get check() : string {
		return this._check;
	}
	set date(value: string) {
		this._date = value;
	}
	get date() : string {
		return this._date;
	}
	
}
