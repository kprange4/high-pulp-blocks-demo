import React from "react";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";

export default function BlockSettings({attributes, setAttributes}) {

	return (
		<InspectorControls>
			<PanelColorSettings
				title="Colors"
				colorSettings={[
					{
						value: attributes.cardColor,
						onChange: cardColor => setAttributes({cardColor}),
						label: 'Card Color',
					},
					{
						value: attributes.headingColor,
						onChange: headingColor => setAttributes({headingColor}),
						label: 'Heading Color',
					},
					{
						value: attributes.textColor,
						onChange: textColor => setAttributes({textColor}),
						label: 'Text Color',
					},
				]}
			/>
		</InspectorControls>
	)
}
