/* scroll edits the boxes id
and sets them to wherever page the pointer points to and where the boxes should be on that page */
export function scroll(setBox, pointer){
    /* here i implement a  */
    const states = ["prev2", "prev2", "prev2", "prev2", "prev", "active", "next", "next2", "next2", "next2", "next2"]
    let i;
    switch(pointer){
        case 1:
            i = 5;
            break;
        case 2:
            i = 4;
            break;
        case 3:
            i = 3;
            break;
        case 4:
            i = 2;
            break;
        case 5:
            i = 1;
            break;
        case 6:
            i = 0;
            break;
    }

    setBox({
        box1: states[i],
        box2: states[i + 1],
        box3: states[i + 2],
        box4: states[i + 3],
        box5: states[i + 4],
        box6: states[i + 5]
    })    
}