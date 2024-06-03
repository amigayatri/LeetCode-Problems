var carFleet = function(target, position, speed) {
    let last;
    let count = 0;
    const getTime = (fleet) => (target - fleet.pos) / fleet.spd;

    for (let i = 0; i < position.length; i++) {
        count++;
        last = { prev: last, pos: position[i], spd: speed[i] };
        let curFleet = last.prev;
        let nextFleet = last;
        while (curFleet) {
            const newFleetTime = getTime(last);
            const curFleetTime = getTime(curFleet);
            if ((last.pos <= curFleet.pos && newFleetTime <= curFleetTime) 
                || (curFleet.pos <= last.pos && curFleetTime <= newFleetTime)) {
                count--;
                nextFleet.prev = curFleet.prev;
                
                if (last.pos < curFleet.pos) {
                    last.pos = curFleet.pos;
                    last.spd = curFleet.spd;
                }
            } else {
                nextFleet = curFleet;
            }
            curFleet = curFleet.prev;
        }
    }
    return count;
};
