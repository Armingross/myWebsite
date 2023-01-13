/* scroll edits the visible boxes to the boxes which pointer points on */
export function scroll(setBox, pointer, setBgcolor){
    /* "active" box is always the box in the center, prev is the one before and next the one after
    prev2 is a the one before before which youn cannot see, same patter for next2 */
    switch(pointer){
        case 1:
            /* in this case it is the first box */
            setBox({
                box1: "active",
                box2: "next",
                box3: "next2",
                box4: "next2",
                box5: "next2",
                box6: "next2"
            })
            setBgcolor("rgba(2, 31, 86, 0.765)")
            break;
        case 2:
            /* in this case its the second one and so on... */
            setBox({
                box1: "prev",
                box2: "active",
                box3: "next",
                box4: "next2",
                box5: "next2",
                box6: "next2"
            })
            setBgcolor("green")
            break;
        case 3:
            setBox({
                box1: "prev2",
                box2: "prev",
                box3: "active",
                box4: "next",
                box5: "next2",
                box6: "next2"
            })
            setBgcolor("blue")
            break;
        case 4:
            setBox({
                box1: "prev2",
                box2: "prev2",
                box3: "prev",
                box4: "active",
                box5: "next",
                box6: "next2"
            })
            setBgcolor("blue")
            break;
        case 5:
            setBox({
                box1: "prev2",
                box2: "prev2",
                box3: "prev2",
                box4: "prev",
                box5: "active",
                box6: "next"
            })
            setBgcolor("yellow")
            break;
        case 6:
            setBox({
                box1: "prev2",
                box2: "prev2",
                box3: "prev2",
                box4: "prev2",
                box5: "prev",
                box6: "active"
            })
            setBgcolor("orange")
            break;
        }
}