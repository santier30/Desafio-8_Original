
const build = (...names) => {
    return names.map((a)=>a.textContent).filter((a)=>a!==" ")
};

const check = (name1, name2,what) => {
    let matchFound = false;
    for (let i of name1) {
      for (let j of name2) {
        if (i.textContent === j.textContent) {
          alert(`Coincidence detected in the ${what}: ${i.textContent}`)
          const color = prompt(`Please enter a color to change it:`);
          if (color) {
            i.style.color = color;
            j.style.color = color;
          }
          matchFound = true;
        }
      }
    }
  
    if (!matchFound) {
      alert("No coincidences found.");
    }
  };

const titleElement = document.getElementsByTagName('title')[0].textContent;
console.log(titleElement);
const oneNames = document.getElementsByClassName('oneNom');
const oneSur = document.getElementsByClassName('oneAp');
const twoNames = document.getElementsByClassName('twoNom');
const twoSur = document.getElementsByClassName('twoAp');

console.log(`-----\n Integrante 1:${build(...oneNames,...oneSur).join(" ")} \n Integrante 2:${build(...twoNames,...twoSur).join(" ")} \n-----`);

check(oneNames,twoNames,"name")

confirm("Check surnames?")?check(oneSur,twoSur,"surname"):"";


