/* scroll edits the visible boxes to the boxes which pointer points on */
export function scroll(setBox, pointer){
    /* here pointer is 1 which means the first box is the active box which is the box in the center */
    if(pointer == 1){
        setBox[0]("active")
        setBox[1]("next")
        setBox[2]("next2")
        setBox[3]("next2")
        setBox[4]("next2")
        setBox[5]("next2")
    /* here pointer is 2 which means active box is now the second one */
    }else if(pointer == 2){
        setBox[0]("prev")
        setBox[1]("active")
        setBox[2]("next")
        setBox[3]("next2")
        setBox[4]("next2")
        setBox[5]("next2")
    }else if(pointer == 3){
        setBox[0]("prev2")
        setBox[1]("prev")
        setBox[2]("active")
        setBox[3]("next")
        setBox[4]("next2")
        setBox[5]("next2")
    }else if(pointer == 4){
        setBox[0]("prev2")
        setBox[1]("prev2")
        setBox[2]("prev")
        setBox[3]("active")
        setBox[4]("next")
        setBox[5]("next2")
    }else if(pointer == 5){
        setBox[0]("prev2")
        setBox[1]("prev2")
        setBox[2]("prev2")
        setBox[3]("prev")
        setBox[4]("active")
        setBox[5]("next")
    }else if(pointer == 6){
        setBox[0]("prev2")
        setBox[1]("prev2")
        setBox[2]("prev2")
        setBox[3]("prev2")
        setBox[4]("prev")
        setBox[5]("active")
    }
}