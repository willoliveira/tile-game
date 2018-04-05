import { Component } from "./Component";
import { Transform } from "./Transform";

export class GameComponent extends Component {

	public name: string = 'GameComponent';
	public id: string; // TODO: Gera um hash automático depois talvez

	private _components: Array<Component> = [ ]; // TODO: Tentar assim por enquanto

	constructor(public transform: Transform) {
		super();

		this.addComponent(this.transform as Component);
	}

	get components() {
		return this._components;
	}

	public addComponent(component: GameComponent|Component) {
		component.parent = this;
		this._components.push(component);
	}

	public getComponent(type: any) {
		return this._components.find((c:any) => c.constructor.name === type);
	}

	public getComponents(type: any) {
		return this._components.filter((c:any) => c.constructor.name === type);
	}
}