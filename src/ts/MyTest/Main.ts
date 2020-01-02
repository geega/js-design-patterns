export class Main {

	private isFix: boolean = false;
	test(): void {
		console.log('Main', 'test', 112);
	}

	private fix(): void {
		this.isFix = true;
		console.trace('Fix');
	}
}