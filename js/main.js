let blocks = document.querySelectorAll(`.box-xo .blocks`);
let x_numeric = document.querySelectorAll(`.header .ab .x_numeric .number`)[0];
let o_numeric = document.querySelectorAll(`.header .ab .o_numeric .number`)[0];
let relowd = document.querySelectorAll(`.header .ab .return`)[0];
let numberCalcBlock = 8;
let blockEvent = true;
let f_vs_work = false;
let resolve_x = 0;
let resolve_o = 0;

function ranking() {
  let numberIndex = 0;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].dataset.numberIndex = null;
    if (blocks[i].innerText == ``) {
      blocks[i].dataset.numberIndex = numberIndex++;
    }
  }
}
ranking()

function animation(...data) {
  let time = 0;
  for (let i = 0; i < data.length; i++) {
    data[i].style.transition = `0.3s all`
    setTimeout(() => {
      data[i].style.backgroundColor = `rgb(42 189 20)`;
    }, time += 200);
  }
}

function packing() {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener(`click`, (e) => {
      if (blocks[i].innerText.length > 0 || blockEvent == false) {
        e.preventDefault()
      } else {
        e.target.innerText = `x`;
        numberCalcBlock -= 1;
        blockEvent = false;
        ranking();
      if (
        blocks[0].innerText == `x` &&
        blocks[1].innerText == `x` &&
        blocks[2].innerText == `x`
      ) {
        animation(
          blocks[0],
          blocks[1],
          blocks[2]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[3].innerText == `x` &&
        blocks[4].innerText == `x` &&
        blocks[5].innerText == `x`
      ) {
        animation(
          blocks[3],
          blocks[4],
          blocks[5]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[6].innerText == `x` &&
        blocks[7].innerText == `x` &&
        blocks[8].innerText == `x`
      ) {
        animation(
          blocks[6],
          blocks[7],
          blocks[8]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[0].innerText == `x` &&
        blocks[3].innerText == `x` &&
        blocks[6].innerText == `x`
      ) {
        animation(
          blocks[0],
          blocks[3],
          blocks[6]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[1].innerText == `x` &&
        blocks[4].innerText == `x` &&
        blocks[7].innerText == `x`
      ) {
        animation(
          blocks[1],
          blocks[4],
          blocks[7]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[2].innerText == `x` &&
        blocks[5].innerText == `x` &&
        blocks[8].innerText == `x`
      ) {
        animation(
          blocks[2],
          blocks[5],
          blocks[8]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[0].innerText == `x` &&
        blocks[4].innerText == `x` &&
        blocks[8].innerText == `x`
      ) {
        animation(
          blocks[0],
          blocks[4],
          blocks[8]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else if (
        blocks[2].innerText == `x` &&
        blocks[4].innerText == `x` &&
        blocks[6].innerText == `x`
      ) {
        animation(
          blocks[2],
          blocks[4],
          blocks[6]
        )
        f_vs_work = false;
        resolve_x += 1;
        x_numeric.innerText = resolve_x;
      } else {
        f_vs_work = true;
      }
        function vs() {
            let random = Math.random();
            let backNumber = Math.trunc(random * numberCalcBlock);
              for (let i = 0; i < blocks.length; i++) {
                if (blocks[i].dataset.numberIndex == backNumber) {
                  blocks[i].innerText = `o`;
                  blocks[i].style.color = `black`;
                  blockEvent = true;
                }
              }
              numberCalcBlock -= 1;
              ranking();
              if (
                blocks[0].innerText == `o` &&
                blocks[1].innerText == `o` &&
                blocks[2].innerText == `o`
              ) {
                animation(
                  blocks[0],
                  blocks[1],
                  blocks[2]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[3].innerText == `o` &&
                blocks[4].innerText == `o` &&
                blocks[5].innerText == `o`
              ) {
                animation(
                  blocks[3],
                  blocks[4],
                  blocks[5]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[6].innerText == `o` &&
                blocks[7].innerText == `o` &&
                blocks[8].innerText == `o`
              ) {
                animation(
                  blocks[6],
                  blocks[7],
                  blocks[8]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[0].innerText == `o` &&
                blocks[3].innerText == `o` &&
                blocks[6].innerText == `o`
              ) {
                animation(
                  blocks[0],
                  blocks[3],
                  blocks[6]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[1].innerText == `o` &&
                blocks[4].innerText == `o` &&
                blocks[7].innerText == `o`
              ) {
                animation(
                  blocks[1],
                  blocks[4],
                  blocks[7]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[2].innerText == `o` &&
                blocks[5].innerText == `o` &&
                blocks[8].innerText == `o`
              ) {
                animation(
                  blocks[2],
                  blocks[5],
                  blocks[8]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[0].innerText == `o` &&
                blocks[4].innerText == `o` &&
                blocks[8].innerText == `o`
              ) {
                animation(
                  blocks[0],
                  blocks[4],
                  blocks[8]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              } else if (
                blocks[2].innerText == `o` &&
                blocks[4].innerText == `o` &&
                blocks[6].innerText == `o`
              ) {
                animation(
                  blocks[2],
                  blocks[4],
                  blocks[6]
                )
                blockEvent = false;
                resolve_o += 1;
                o_numeric.innerText = resolve_o;
              }
        }
        if (f_vs_work === true) {
          setTimeout(() => {
            vs()
          }, 800);
        }
      }
    })
  }
}
packing()

relowd.addEventListener(`click`, () => {
  numberCalcBlock = 8;
  blockEvent = true;
  f_vs_work = false;
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].innerText = ``;
    blocks[i].removeAttribute(`style`)
  }
  ranking()
})