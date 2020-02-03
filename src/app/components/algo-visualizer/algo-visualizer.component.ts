import { Component, OnInit } from "@angular/core";
import { getMergeSortAnimations } from "../../util/mergesortutil";
import { getBubbleSortAnimations } from "../../util/bubblesort";
import * as _ from "lodash";
@Component({
  selector: "app-algo-visualizer",
  templateUrl: "./algo-visualizer.component.html",
  styleUrls: ["./algo-visualizer.component.css"]
})
export class AlgoVisualizerComponent implements OnInit {
  animationSpeed = 8;
  primaryColor = "olivedrab";
  SecondaryColor = "crimson";
  inputArr = [];
  sortFunction = this.mergeSort;
  arrayLength = (window.screen.width - 80) / 12;

  constructor() {}

  ngOnInit() {
    this.inputArr = [];
    this.sortFunction = this.mergeSort;
    this.animationSpeed = 8;
    this.arrayLength = (window.screen.width - 80) / 12;
    for (let i = 1; i <= this.arrayLength; i++) {
      this.inputArr.push(this.randomNumBetweenInterval(10, 500));
    }
  }
  randomNumBetweenInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  mergeSort() {
    let arrayToSort = _.cloneDeep(this.inputArr);
    const animations = getMergeSortAnimations(arrayToSort);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barIndex1, barIndex2] = animations[i];
        const barStyle1 = arrayBars[barIndex1]["style"];
        const barStyle2 = arrayBars[barIndex2]["style"];
        const color = i % 3 === 0 ? this.SecondaryColor : this.primaryColor;
        setTimeout(() => {
          barStyle1.backgroundColor = color;
          barStyle2.backgroundColor = color;
        }, i * this.animationSpeed);
      } else {
        setTimeout(() => {
          const [barIndex1, newHeight] = animations[i];
          const barStyle1 = arrayBars[barIndex1]["style"];
          barStyle1.height = `${newHeight}px`;
        }, i * this.animationSpeed);
      }
    }
  }
  bubbleSort() {
    let arrayToSort = _.cloneDeep(this.inputArr);
    const animations = getBubbleSortAnimations(arrayToSort);
    console.log(animations);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barIndex1, barIndex2] = animations[i];
        const barStyle1 = arrayBars[barIndex1]["style"];
        const barStyle2 = arrayBars[barIndex2]["style"];
        const color = i % 4 === 0 ? this.SecondaryColor : this.primaryColor;
        setTimeout(() => {
          barStyle1.backgroundColor = color;
          barStyle2.backgroundColor = color;
        }, i * this.animationSpeed);
      } else {
        setTimeout(() => {
          const [barIndex1, newHeight] = animations[i];
          const barStyle1 = arrayBars[barIndex1]["style"];
          barStyle1.height = `${newHeight}px`;
        }, i * this.animationSpeed);
      }
    }
  }

  onToggleChanged(event) {
    if (event.value == "merge") this.sortFunction = this.mergeSort;
    else if (event.value == "bubble") this.sortFunction = this.bubbleSort;
  }
  changeArraySize(event) {
    this.inputArr = [];
    for (let i = 1; i <= event.value; i++) {
      this.inputArr.push(this.randomNumBetweenInterval(10, 400));
    }
  }
  changeSpeed(event) {
    this.animationSpeed = event.value;
  }
}
