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

import { RichText, PlainText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import StarRating from "../../components/StarRating";
import BlockSettings from "./BlockSettings";

//export default function Edit(props) {
// props = {attributes: {...}, setAttributes: function()...
export default function Edit({attributes, setAttributes}) {
	// react (JSX) translates kabob-case to camelCase
	/**
	 * Style overrides for the block
	 * @type CSSProperties
	 */
	const divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}
	return (
	<div { ...useBlockProps() } style={divStyles}>
		<BlockSettings
			attributes={attributes}
			setAttributes={setAttributes}
		/>
		<StarRating
			rating={attributes.stars}
			setRating={stars => setAttributes({stars: parseInt(stars)})}
		/>
		<RichText className="quote"
				  tagName="div"
				  placeholder="Write testimonial here."
				  // value={props.attributes.quote}
				  value={attributes.quote}
				  onChange={value => setAttributes({quote: value})}
		/>
		<div className="quote-profile">
			<div className="photo">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes({'avatarURL': media.sizes.thumbnail.url})}
						allowedTypes={ ['image'] }
						render={ ( { open } ) => (
							<img onClick={open} src={attributes.avatarURL} alt="Choose image"/>
						)}
					/>
				</MediaUploadCheck>
			</div>
			<div className="text">
				<PlainText className="author"
						   value={attributes.author}
						   // onChange={value => setAttributes({author: value})}
						   onChange={author => setAttributes({author})}
				/>
				<p className="location">Point Place, WI</p>
			</div>
		</div>
	</div>
	);
}
