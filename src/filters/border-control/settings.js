import { addFilter } from "@wordpress/hooks";

function addBorderAttributes(settings, name) {
  // settings is the object used to declare the block
  // name is the name of the block (if you wanted to apply this only certain blocks)

  // append the settings
  settings.attributes.bcBorderStyle = {
    type: "string",
    default: "",
  };

  // (modify any additional settings)

  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "your-plugin-name/border-control/add-border-attributes",
  addBorderAttributes,
);
