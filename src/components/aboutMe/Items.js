/* here we have all items which the changeable boxID so that it will change is style when button is clicked */
export function getItems(box){
    /* this array is for the for loop which is for text style */
    const boxArr = [box.box1, box.box2, box.box3, box.box4, box.box5, box.box6]

    const items = [
        {
            id: 1,
            imgsrc: "img/sarnthein.jpg",
            imgalt: "picture of Sarnthein",
            text: "I'm from Sarnthein..",
            boxID: box.box1,
        },
        {
            id: 2,
            videosrc: "video/Sarnthein.mp4#svgView(preserveAspectRatio(none))",
            imgalt: "video of zooming in on europe to Sarnthein",
            text: "...which is Located",
            text2: "in Northern Italy",
            boxID: box.box2,
            page2: true
        },
        {
            id: 3,
            imgsrc: "img/jakobsSpitze.jpg",
            imgalt: "picture of the cross on the Jakobs Spitze",
            text: "I like hiking...",
            boxID: box.box3,
        },
        {
            id: 4,
            imgsrc: "img/goldenGate.jpg",
            imgalt: "Picture of me in front of the Golden Gate Bridge",
            text: "...traveling...",
            boxID: box.box4,
        },
        {
            id: 5,
            imgsrc: "img/volleyball.jpg",
            imgalt: "picture of me playing volleyball",
            text: "...doing sports...",
            boxID: box.box5,
        },
        {
            id: 6,
            imgsrc: "img/programming.jpg",
            imgalt: "picture of me Programming",
            text: "& programming",
            boxID: box.box6,
        }
    ]

    return items;
}