/**
 * 
 * Date: 03/09/2018	
 */
export class Tempcheck
{
	
	private _TextInput1: string;
	private _EmailId: string;
	private _CheckBox: boolean;
	private _textInput2: string;
	private _Password: string;
	
	constructor() { 
	}
	
	set TextInput1(value: string) {
		this._TextInput1 = value;
	}
	get TextInput1() : string {
		return this._TextInput1;
	}
	set EmailId(value: string) {
		this._EmailId = value;
	}
	get EmailId() : string {
		return this._EmailId;
	}
	set CheckBox(value: boolean) {
		this._CheckBox = value;
	}
	get CheckBox() : boolean {
		return this._CheckBox;
	}
	set textInput2(value: string) {
		this._textInput2 = value;
	}
	get textInput2() : string {
		return this._textInput2;
	}
	set Password(value: string) {
		this._Password = value;
	}
	get Password() : string {
		return this._Password;
	}
	
}
