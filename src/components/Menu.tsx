import React, { Component } from 'react'
import '../styles/Menu.css'
import { ImageSelector } from './ImageSelector';
import RasterImage from '../lib/RasterImage';

type Props = {
	imageSelected: (image: RasterImage) => void,
	toggleFullView: () => void
}
type State = {}

export default class Menu extends Component<Props, State>
{
	public render() {
		return (
			<div className='menu'>
				<ImageSelector selected={this.props.imageSelected} />
				<div>Load layers</div>
				<div>Save layers</div>
				<button onClick={this.props.toggleFullView} />
			</div>
		);
	}
}