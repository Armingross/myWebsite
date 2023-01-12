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
            imgsrc: "img/sarnthein4to3.jpg",
            imgalt: "picture of Sarnthein",
            text: "I'm from Sarnthein",
            className: "itemBox",
            textId: text[0]
        },
        {
            id: 2,
            videosrc: "video/Sarnthein.mp4#svgView(preserveAspectRatio(none))",
            imgalt: "video of zooming in on europe to Sarnthein",
            text: "Which is Located",
            text2: "in the North",
            text3: "of Italy",
            className: "itemBox",
            textId: text[1],
            page2: true
        },
        {
            id: 3,
            imgsrc: "img/jakobsSpitze.jpg",
            imgalt: "picture of the cross on the Jakobs Spitze",
            text: "I Like Hiking",
            className: "itemBox",
            textId: text[2]
        },
        {
            id: 4,
            imgsrc: "img/goldenGate4to3.jpg",
            imgalt: "Picture of me in front of the Golden Gate Bridge",
            text: "Traveling",
            className: "itemBox",
            textId: text[3]
        },
        {
            id: 5,
            imgsrc: "img/volleyball4to3.jpg",
            imgalt: "picture of me playing volleyball",
            text: "Sport",
            className: "itemBox",
            textId: text[4]
        },
        {
            id: 6,
            imgsrc: "img/volleyball.jpg",
            imgalt: "picture of me Programming",
            text: "and programming",
            className: "itemBox",
            textId: text[5]
        }
    ]

    return items;
}