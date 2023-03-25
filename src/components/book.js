const books = [
    "cereal13", "CSAPP", "fu_chu_li_shi", "out_of_control", "the_razor's_edge", "out_of_control", "art_of_watching_films"
]
const title = [
    "谷物13：成为自己", "Computer Systems: A Programmer's Perspective (3rd Edition)", "浮出历史地表", "Out of Control", "The Razor's Edge", "Art of Watching Films"
]

export class book {
    constructor(x) {
        this.bookName = books[x];
        this.bookCover = require("../assets/" + books[x] + ".jpg");
        this.bookPrice = 100;
        this.bookDescription = "This is the description";
        this.title = title[x];
    }
}