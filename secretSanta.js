// const people = ["A", "B", "C", "D", "E", "F"];
const people = [
  "Abhay Kumar",
  "Alejandro Perea",
  "Alfonso Jiménez",
  "Andrei Lescenco",
  "Douglas Finol",
  "Elena Inetskaya",
  "Jonah Goodman",
  "Josep Casanovas",
  "Juanan",
  "Lexi Pemberton",
  "Long Suciu",
  "Matt Riley",
  "Michelle Suggs",
  "Rafael Bacchi",
  "Rohit Sharma",
  "Rude Ayelo",
  "Shivam Malhotra",
];

const pMap = people.reduce((total, curr, idx) => {
  total[curr] = Number(idx);
  return total;
}, {});
// { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 }

const meets = new Array(people.length)
  .fill(null)
  .map(() => new Array(people.length).fill(0));
/**
[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
] 
 */

function generatePairs(arr) {
  if (arr.length <= 1) return [];
  const [person1, ...restPeople] = arr;

  const pairs = [];
  for (person of restPeople) {
    pairs.push([person1, person]);
  }

  return [...pairs, ...generatePairs(arr.slice(1))];
}
/**
[
    [ 'A', 'B' ], [ 'A', 'C' ],
    [ 'A', 'D' ], [ 'A', 'E' ],
    [ 'A', 'F' ], [ 'B', 'C' ],
    [ 'B', 'D' ], [ 'B', 'E' ],
    [ 'B', 'F' ], [ 'C', 'D' ],
    [ 'C', 'E' ], [ 'C', 'F' ],
    [ 'D', 'E' ], [ 'D', 'F' ],
    [ 'E', 'F' ]
]
 */

for (
  let week = 1, peopleArr = people;
  ;
  //week++, peopleArr = [...people.slice(1), people[0]] //
  week++, peopleArr = people.sort(() => Math.random() - 0.5)
) {
  const currentWeekMeets = [];
  for (let [p1, p2] of generatePairs(peopleArr)) {
    // if p1, p2 have not met already
    if (meets[pMap[p1]][pMap[p2]] === 0) {
      // p1 is meeting someone else
      if (meets[pMap[p1]].some((m) => m === week)) continue;
      // p2 is meeting someone else
      if (meets[pMap[p2]].some((m) => m === week)) continue;

      meets[pMap[p1]][pMap[p2]] = week;
      meets[pMap[p2]][pMap[p1]] = week;
      currentWeekMeets.push([p1, p2]);
    }
  }
  //   console.log(meets);
  if (currentWeekMeets.length === 0) break;
  console.log("Week ------->", week);
  console.log(currentWeekMeets);
}
