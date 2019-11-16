import React, { Component } from 'react'
import RasterImage from '../lib/RasterImage';

type Props = { source: string }
type State = {}

export default class ImagePreview extends Component<Props, State>
{
	public constructor(props: Props) {
		super(props);

		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<div>
				<img src={this.props.source} style={{ maxHeight: 500, maxWidth: 500 }} />
			</div>
		);
	}
}