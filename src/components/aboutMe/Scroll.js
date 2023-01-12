/* scroll edits the visible boxes to the boxes which pointer points on */
export function scroll(setBox, pointer){
    /* "active" box is always the box in the center, prev is the one before and next the one after
    prev2 is a the one before before which youn cannot see, same patter for next2 */
    switch(pointer){
        case 1:
            /* in this case it is the first box */
            setBox[0]("active")
            setBox[1]("next")
            setBox[2]("next2")
            setBox[3]("next2")
            setBox[4]("next2")
            setBox[5]("next2")
            break;
        case 2:
            /* in this case its the second one and so on... */
            setBox[0]("prev")
            setBox[1]("active")
            setBox[2]("next")
            setBox[3]("next2")
            setBox[4]("next2")
            setBox[5]("next2")
            break;
        case 3:
            setBox[0]("prev2")
            setBox[1]("prev")
            setBox[2]("active")
            setBox[3]("next")
            setBox[4]("next2")
            setBox[5]("next2")
            break;
        case 4:
            setBox[0]("prev2")
            setBox[1]("prev2")
            setBox[2]("prev")
            setBox[3]("active")
            setBox[4]("next")
            setBox[5]("next2")
            break;
        case 5:
            setBox[0]("prev2")
            setBox[1]("prev2")
            setBox[2]("prev2")
            setBox[3]("prev")
            setBox[4]("active")
            setBox[5]("next")
            break;
        case 6:
            setBox[0]("prev2")
            setBox[1]("prev2")
            setBox[2]("prev2")
            setBox[3]("prev2")
            setBox[4]("prev")
            setBox[5]("active")
            break;
        }
}