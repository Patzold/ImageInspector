import React, { Component } from 'react'
import Layer from '../image-processing/Layer';

type Props = {
	layer: Layer,
	x: number,
	y: number,
	selected: (layer: Layer) => void
}
type State = {}


export default class LayerData extends Component<Props, State>
{
	public constructor(props: Props)
	{
		super(props);

		this.state = {};

		this.selected = this.selected.bind(this);
	}

	private selected() {
		this.props.selected(this.props.layer);
	}

	public render() {
		return (
			<div className='layer-data' onClick={this.selected}>
				<div className='layer-name'>{this.props.layer.shader.name}</div>
				{this.getValues()}
			</div>
		);
	}

	private getValues() {
		const value = this.props.layer.getValue(this.props.x, this.props.y)

		if (value.r == value.g && value.g == value.b)
			return this.getSingleValue(value.r);
		else
			return this.getThreeValues(value.r, value.g, value.b);
	}

	private getSingleValue(value: number) {
		return (
			<div className='layer-values'>
				{this.getValue(value)}
			</div>
		)
	}

	private getThreeValues(r: number, g: number, b: number) {
		return (
			<div className='layer-values'>
				{this.getValue(r)}
				{this.getValue(g)}
				{this.getValue(b)}
			</div>
		)
	}

	private getValue(value: number) {
		return <div className='layer-value'>{value}</div>
	}
}