import {getScore} from "./Bowlling";


test("getScore 0,0,0,0,0,0,0,0 should return 0", () => {
    expect(getScore(0,0,0,0,0,0,0,0)).toBe(0);
})


test("getScore 2,3,6,5,8,1,3,2 should return 0", () => {
    expect(getScore(2,3,6,5,8,1,3,2)).toBe(30);
})


test("getScore 2,3,1,6,4,8,2,3,2 should return 0", () => {
    expect(getScore(2,3,6,4,1,8,2,3,2,0,10,1,2)).toBe(46);
})
