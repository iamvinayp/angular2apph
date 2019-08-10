import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'title'
})
export class EmpTitlePipe implements PipeTransform {
	empTitle: string;
	transform(value: string, gender: string): string {
		this.empTitle = (gender.toLowerCase() == 'male' ? 'Mr.'+value : 'Ms.'+value);
		return this.empTitle;
	}
}