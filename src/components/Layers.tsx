import React, { Component } from 'react'
import Layer from '../image-processing/Layer';
import LayerData from './LayerData';
import '../styles/layers.css'

type Props = {
	layers: Layer[],
	position: { x: number, y: number } | undefined
	selectedLayer: number,
	editedLayer?: number,
	onSelected: (index: number) => void,
	onEdit: (index: number) => void
}
type State = {}

export default class Layers extends Component<Props, State>
{
	public constructor(props: Props) {
		super(props);

		this.state = {};

		this.selected = this.selected.bind(this);
		this.edit = this.edit.bind(this);
	}

	private selected(layer: Layer) {
		this.props.onSelected(this.props.layers.indexOf(layer));
	}

	private edit(layer: Layer) {
		this.props.onEdit(this.props.layers.indexOf(layer));
	}

	public render() {
		return (
			<div className='layers'>
				<div className='preview-data'>
					{this.props.layers.map((layer, key) =>
						<LayerData
							key={key}
							layer={layer}
							position={this.props.position}
							isSelected={key == this.props.selectedLayer}
							isDisabled={!!(this.props.editedLayer && key != this.props.editedLayer)}
							onSelected={this.selected}
							onEdit={this.edit} />)}
				</div>
			</div>
		);
	}
}