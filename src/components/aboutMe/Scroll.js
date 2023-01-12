/* scroll edits the visible boxes to the boxes which pointer points on */
export function scroll(box, pointer){
    /* here pointer is 1 which means the first box is the active box which is the box in the center */
    if(pointer == 1){
        box[0].current.id = "active"
        box[1].current.id = "next"
        box[2].current.id = "next2"
        box[3].current.id = "next2"
        box[4].current.id = "next2"
        box[5].current.id = "next2"
    /* here pointer is 2 which means active box is now the second one */
    }else if(pointer == 2){
        box[0].current.id = "prev"
        box[1].current.id = "active"
        box[2].current.id = "next"
        box[3].current.id = "next2"
        box[4].current.id = "next2"
        box[5].current.id = "next2"
    }else if(pointer == 3){
        box[0].current.id = "prev2"
        box[1].current.id = "prev"
        box[2].current.id = "active"
        box[3].current.id = "next"
        box[4].current.id = "next2"
        box[5].current.id = "next2"
    }else if(pointer == 4){
        box[0].current.id = "prev2"
        box[1].current.id = "prev2"
        box[2].current.id = "prev"
        box[3].current.id = "active"
        box[4].current.id = "next"
        box[5].current.id = "next2"
    }else if(pointer == 5){
        box[0].current.id = "prev2"
        box[1].current.id = "prev2"
        box[2].current.id = "prev2"
        box[3].current.id = "prev"
        box[4].current.id = "active"
        box[5].current.id = "next"
    }else if(pointer == 6){
        box[0].current.id = "prev2"
        box[1].current.id = "prev2"
        box[2].current.id = "prev2"
        box[3].current.id = "prev2"
        box[4].current.id = "prev"
        box[5].current.id = "active"
    }
}