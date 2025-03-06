/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import './editor.scss';
import metadata from'./block.json';
import BlockSettings from "./BlockSettings";
import ServerSideRender from '@wordpress/server-side-render';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	return (
		<div {...useBlockProps()}>
			<BlockSettings attributes={attributes} setAttributes={setAttributes} />
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src="https://2.gravatar.com/avatar/ea8b076b398ee48b71cfaecf898c582b?s=250&d=mm&r=g"/>
					</div>
					<div className="flip-card-back" style={{backgroundColor: attributes.cardColor}}>
						<h3 className="name" style={{color: attributes.headingColor}}>Red Forman</h3>
						<div className="position" style={{color: attributes.textColor}}>Manager</div>
						<div className="bio" style={{color: attributes.textColor}}>
							<p>If I Was A Bird, I’d Fly Into A Ceiling Fan.</p>
						</div>
					</div>
				</div>
			</div>
			<ServerSideRender
				block={metadata.name}
				attributes={attributes}
			/>
		</div>
	);
}
