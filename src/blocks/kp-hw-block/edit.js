/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

import {RichText, PlainText, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
export default function Edit({attributes, setAttributes}) {
	return (
		<div {...useBlockProps()}>
			<div className="wp-block-kp-plugin-skill">
				<div className="skill-icon">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => setAttributes({'iconURL': media.sizes.thumbnail.url})}
							allowedTypes={ ['image'] }
							render={ ( { open } ) => (
								<img onClick={open} src={attributes.iconURL} alt="Choose image"/>
							)}
						/>
					</MediaUploadCheck>
				</div>
				<div className="text">
					<RichText className="skill-name"
							  tagName="p"
							  placeholder="Write skill name here."
							  value={attributes.name}
							  onChange={value => setAttributes({name: value})}
					/>
					<p className="skill-category">Skill Category</p>
					<RichText className="skill-name"
							  tagName="p"
							  placeholder="Write skill category here."
							  value={attributes.category}
							  onChange={value => setAttributes({category: value})}
					/>
				</div>
			</div>
		</div>
	);
}
