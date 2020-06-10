import { resultContent } from "../../../data/resultContent";
import { personalities } from "../../../data/personalities";

/* 
does the scoring after the test is done
creates a reusultObject
*/
export class Score {
  constructor(testresult) {
    this.testresult = testresult;
    this.result = this.createResultObjekt(this.doTheScoring());
  }
  //has the map for scoring and returns the personality type
  doTheScoring() {
    //matrices for scoring
    let type = "";
    let con1 = [0, 7, 14];
    let con2 = [1, 2, 8, 9, 15, 16];
    let con3 = [3, 4, 10, 11, 17, 18];
    let con4 = [5, 6, 12, 13, 19];
    type += this.getLetter(con1, "E", "I");
    type += this.getLetter(con2, "S", "N");
    type += this.getLetter(con3, "T", "F");
    type += this.getLetter(con4, "J", "P");
    return type;
  }
  //returns the letters for the type and add percentages to the new result object
  getLetter(condition, letter1, letter2) {
    let cache = [];
    let a = 0;
    let b = 0;
    let ratio = 0;
    condition.forEach((element) => cache.push(this.testresult[element]));
    a = cache.filter((element) => element === "a").length;
    b = cache.filter((element) => element === "b").length;

    if (a > b) {
      ratio = Math.floor(100 - (b / (a + b)) * 100);
      resultContent[letter1].percentage_1 = ratio;
      resultContent[letter1].percentage_2 = 100 - ratio;
      return letter1;
    }
    if (a < b) {
      ratio = Math.floor(100 - (a / (a + b)) * 100);
      resultContent[letter2].percentage_1 = 100 - ratio;
      resultContent[letter2].percentage_2 = ratio;
      return letter2;
    }
    if (a === b) {
      ratio = Math.floor(100 - (a / (a + b)) * 100);
      resultContent[letter1].percentage_1 = ratio + 1;
      resultContent[letter1].percentage_2 = 100 - ratio - 1;
      return letter1;
    }
  }
  // creates a new result object based on the data from personalities and resultContent
  createResultObjekt(type) {
    let result = new Object();
    result.label = [];
    result.body = [];
    let letters = type.split("");

    for (let personality in personalities) {
      if (personalities[personality].title === type) {
        result.imgPath_s = personalities[personality].img_s;
        result.imgPath_l = personalities[personality].img_l;
        result.label.push({
          Name: personalities[personality].caption,
        });
        result.label.push({ Type: type });
      }
    }

    for (let letter in letters) {
      for (let key in resultContent) {
        if (key === letters[letter]) {
          result.body.push(resultContent[key]);
        }
      }
    }
    return result;
  }
  get getResultObj() {
    return this.result;
  }
}
