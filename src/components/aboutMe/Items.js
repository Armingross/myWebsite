/* here we have all items which the changeable boxID so that it will change is style when button is clicked */
export function getItems(box){
    const items = [
        {
            id: 1,
            imgsrc: "img/goldenGate.jpg",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[0],
            textId: "inActiveText"
        },
        {
            id: 2,
            imgsrc: "img/newYork.jpg",
            imgalt: "picture of the New York Skyline",
            text: "I like Traveling",
            className: "itemBox",
            boxID: box[1],
            textId: "inActiveText"
        },
        {
            id: 3,
            imgsrc: "img/sarntheinQuadrat.jpg",
            imgalt: "picture of Sarnthein",
            text: "Im from Sarnthein",
            className: "itemBox",
            boxID: box[2],
            textId: "activeText"
        },
        {
            id: 4,
            imgsrc: "img/gym.png",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[3],
            textId: "inActiveText"
        },
        {
            id: 5,
            imgsrc: "img/volleyball.jpg",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[4],
            textId: "inActiveText"
        }
    ]

    return items;
}