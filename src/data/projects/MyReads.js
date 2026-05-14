import { ReadsSearch, ReadsNoResults, ReadsShelves } from "../../assets/img/Projects/MyReads";

/** @type {import('../projectDataShape').ProjectData} */
const MyReads = {
  title: "My Reads",
  projTagline: "React Application",
  projDescription: "This is a simple react application created as part of my Udactiy React Nanodegree certification.\n "
    + "The application allows you to keep tracka of different books you have read, want to read, or are currently reading by \n"
    + "sorting them into their own shelves. To add more books you can click the plus button and search for books to add. "
    + "The books can be changed or removed from the shelves at any time. \n",
  imgUrl: ReadsShelves,
  imageList: [
    {
      image: ReadsShelves,
      imageTitle: "Book Shelves",
    },
    {
      image: ReadsSearch,
      imageTitle: "Search Page"
    },
    {
      image: ReadsNoResults,
      imageTitle: "Book not in library"
    },
  ]
};

export default MyReads;
