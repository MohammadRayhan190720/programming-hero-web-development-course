const laptop = {
  brand : 'hp',
  prize : 80000,
  model : 'pc335',
  hardhare : ['processor','keyboard', 'mouse' , 'speaker'],
  software : {
    typeing : "bijoy-52",
    windows : "version-12",
    browser : "opera mini",
    camera : {
      isFrontCamera : true,
      backCamera : '48 megapixels',
      quality : "best",
      lens : 'sony-1258'
    }

  }
}

const keys = Object.keys(laptop);
console.log(keys);

const values = Object.values(laptop);
console.log(values);

let sounds = laptop.hardhare[3];
sounds = "Soundbox";
console.log(sounds);

let browser1 = laptop.software.browser;
browser1 = "Crome-browser"
console.log(browser1);

let lens = laptop.software.camera.lens;
lens = "vivo dj-4i"
console.log(lens);

delete laptop.software.camera;

console.log(laptop);