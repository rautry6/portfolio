import PropTypes from "prop-types";

export const ImageItemShape = PropTypes.shape({
  image: PropTypes.any.isRequired,   // imported asset
  imageTitle: PropTypes.string.isRequired,
});

export const SubheadingShape = PropTypes.shape({
  headerName: PropTypes.string.isRequired,
  textBlurb: PropTypes.arrayOf(PropTypes.string),
  listItems: PropTypes.arrayOf(PropTypes.string),
  videos: PropTypes.arrayOf(PropTypes.any),
});

export const ProjectInfoSectionShape = PropTypes.shape({
  headerName: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string),
  subheadings: PropTypes.arrayOf(SubheadingShape),
});

// The canonical shape every Project_Data_Module must satisfy
export const ProjectDataShape = PropTypes.shape({
  // Required
  title:           PropTypes.string.isRequired,
  projTagline:     PropTypes.string.isRequired,
  projDescription: PropTypes.string.isRequired,
  imgUrl:          PropTypes.any.isRequired,
  // Optional
  imageList:   PropTypes.arrayOf(ImageItemShape),
  buttonLink:  PropTypes.string,
  projectInfo: PropTypes.arrayOf(ProjectInfoSectionShape),
  nav:         PropTypes.string,
});
