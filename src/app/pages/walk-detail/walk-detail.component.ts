import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import Walk from '../../../types/walk'

@Component({
	selector: 'app-walk-detail',
	imports: [],
	templateUrl: './walk-detail.component.html',
	styleUrl: './walk-detail.component.scss'
})
export class WalkDetailComponent {
	public walk: Walk = new Walk();
	constructor(private route: ActivatedRoute, public location: Location) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			let id: string = params['id'];
			if (!/^\d+$/.test(id)) {
				throw new Error('Invalid id');
			}
			this.walk.fromID(parseInt(id));
		});
	}
}
