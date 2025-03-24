import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Walk from '../../../types/walk';
import { BackButtonComponent } from '../../components/back-button/back-button.component';

@Component({
	selector: 'app-walk-detail',
	imports: [BackButtonComponent],
	templateUrl: './walk-detail.component.html',
	styleUrl: './walk-detail.component.scss'
})
export class WalkDetailComponent {
	public walk: Walk = new Walk();
	constructor(private route: ActivatedRoute) {}

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
