/* here we have all items which the changeable boxID so that it will change is style when button is clicked */
export function getItems(box){

    /* if the box state is active, the text id at the boxes position will also be active*/
    const text = [];
    for(let i = 0; i < box.length; i++){
      if(box[i] == "active"){
        text[i] = "activeText"
      }else{
        text[i] = "inActiveText"
      }
    }

    const items = [
        {
            id: 1,
            imgsrc: "img/goldenGate.jpg",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[0],
            textId: text[0]
        },
        {
            id: 2,
            imgsrc: "img/newYork.jpg",
            imgalt: "picture of the New York Skyline",
            text: "I like Traveling",
            className: "itemBox",
            boxID: box[1],
            textId: text[1]
        },
        {
            id: 3,
            imgsrc: "img/sarntheinQuadrat.jpg",
            imgalt: "picture of Sarnthein",
            text: "Im from Sarnthein",
            className: "itemBox",
            boxID: box[2],
            textId: text[2]
        },
        {
            id: 4,
            imgsrc: "img/gym.png",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[3],
            textId: text[3]
        },
        {
            id: 5,
            imgsrc: "img/volleyball.jpg",
            imgalt: "picture of me playing volleyball",
            text: "I like Sport",
            className: "itemBox",
            boxID: box[4],
            textId: text[4]
        }
    ]

    return items;
}