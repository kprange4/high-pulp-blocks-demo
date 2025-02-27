import {createHigherOrderComponent} from "@wordpress/compose";
import {Fragment} from "@wordpress/element";
import {InspectorControls, PlainText} from "@wordpress/block-editor";
import {PanelBody, PanelRow, SelectControl} from "@wordpress/components";
import {addFilter} from "@wordpress/hooks";
import React from "react";

// create a wrapper function which will receive the block we are trying to wrap
function blockWrapper(WrappedBlock) {
	// return a React component
	return class extends React.Component {
		render() {
			let {attributes, setAttributes} = this.props;

			let divStyles = {
				borderStyle: attributes.bcBorderStyle || "none",
				borderWidth: "2px",
				borderColor: "black",
				padding: (attributes.bcPadding || 0) + 'px',
			};

			// don't apply styles if there is no border
			if (divStyles.borderStyle === "none") {
				divStyles = {};
			}

			return (
				<Fragment>
					{/* This is panel/toolbar we are adding to each block */}
					<InspectorControls>
						<PanelBody title="Border Controls" initialOpen={false}>
							<PanelRow>
								<SelectControl
									label="Style"
									value={attributes.bcBorderStyle}
									onChange={(bcBorderStyle) => setAttributes({bcBorderStyle})}
									options={[
										{label: "None", value: "none"},
										{label: "Solid", value: "solid"},
										{label: "Dashed", value: "dashed"},
										{label: "Dotted", value: "dotted"},
									]}
								/>
							</PanelRow>
							<PanelRow>
								<label>Padding<br />
								<input type="number"
									value={attributes.bcPadding}
									onChange={e => setAttributes({bcPadding: parseInt(e.target.value)})}
								/> px
								</label>
							</PanelRow>
						</PanelBody>
					</InspectorControls>

					{/* This is a wrapper -- WrappedBlock is the block you are editing/wrapping */}
					<div className="wp-block" style={divStyles}>
						<WrappedBlock {...this.props} />
					</div>
				</Fragment>
			);
		}
	};
}

// Higher Order Components is a pretty high-level concept, but here's a good explanation:
// https://reactjs.org/docs/higher-order-components.html
// Note: this is *similar* to what WordPress does, but WordPress does not provide good documentation for this.
const borderComponent = createHigherOrderComponent(
	blockWrapper,
	"border-control",
);

// register our filter with WordPress
addFilter(
	"editor.BlockEdit",
	"kp/border-control/block-wrapper",
	borderComponent,
);
