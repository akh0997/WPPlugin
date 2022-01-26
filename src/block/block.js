/**
 * BLOCK: myblock
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

import { TextControl } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-myblock", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("myblock - CGB Block"), // Block title.
	icon: "shield", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "common", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("myblock — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],
	attributes: {
		button_text: { type: "string", default: "Text" },
		url: { type: "string", default: "#" },
		target_value: { type: "string", default: "_self" },
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ({ attributes, setAttributes }) => {
		// Creates a <p class='wp-block-cgb-block-myblock'></p>.

		const onChangeText = (text) => {
			setAttributes({ button_text: text });
		};

		const onChangeUrl = (url) => {
			setAttributes({ url: url });
		};

		const onChangeTarget = (target) => {
			setAttributes({ target_value: target });
		};
		return (
			<div>
				<InspectorControls key="setting">
					<div id="gutenpride-controls" style={{ padding: "15px" }}>
						<TextControl
							label="Button Text"
							value={attributes.button_text}
							onChange={onChangeText}
						/>

						<TextControl
							label="Button Url"
							value={attributes.url}
							onChange={onChangeUrl}
						/>

						<SelectControl
							label="Select Target"
							value={attributes.target_value}
							options={[
								{ value: null, label: "Select", disabled: true },
								{ label: "New Window ", value: "_top" },
								{ label: "New Tab", value: "_blank" },
								{ label: "Same Tab", value: "_self" },
							]}
							onChange={onChangeTarget}
						/>
					</div>
				</InspectorControls>
				<div className="my-button">
					<a
						href={attributes.url}
						target={attributes.target_value}
						style={{
							border: "solid 2px black",
							padding: "5px 15px",
							textDecoration: "none",
							borderRadius:'5px',
							backgroundColor:'#efefef'
						}}
					>
						{attributes.button_text}
					</a>
				</div>
			</div>
		);
	},
	save: (props) => {

		const {
			attributes
		} = props;
		
		return (
			<div className="my-button">
				<a
					href={attributes.url}
					target={attributes.target_value}
					style={{
						border: "solid 2px black",
						padding: "5px 15px",
						textDecoration: "none",
						borderRadius:'5px',
						backgroundColor:'#efefef'
					}}
				>
					{attributes.button_text}
				</a>
			</div>
		);
	},
});
