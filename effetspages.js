/* ANIMATION TITRE (NICO) */
var canvas = document.getElementById('canvas')
, context = canvas.getContext('2d')
, img = new Image()
, w
, h
, offset
, glitchInterval;

img.src = 'GhostwildersTitre.png';
img.onload = function() {
init();
  window.onresize = init;
};

var init = function() {
  clearInterval(glitchInterval);
  canvas.width = w = window.innerWidth;
  offset = w * .1;
  canvas.height = h = (175 * ((w - (offset * 2)) / img.width));
  glitchInterval = setInterval(function() {
      clear();
      context.drawImage(img, 0, 40, img.width, 175, offset, 0, w - (offset * 2), h);
      setTimeout(glitchImg, randInt(250, 1000));
  }, 500);
};

var clear = function() {
  context.rect(0, 0, w, h);
  context.fillStyle = '#070707';
  context.fill();
};

var glitchImg = function() {
  for (var i = 0; i < randInt(1, 13); i++) {
      var x = Math.random() * w;
      var y = Math.random() * h;
      var spliceWidth = w - x;
      var spliceHeight = randInt(5, h / 3);
      context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
  }
};

var randInt = function(a, b) {
  return (Math.random() * (b - a) + a);
};

/* ANIMATION POLTERGEIST (NICO) */
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages2")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages2")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages2")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg2")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages3")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages3")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages3")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg3")[0].style.display = "none";
});

/* ANIMATION CREATURES (NICO) */
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages4")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages4")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages4")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg4")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages5")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages5")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages5")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg5")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages6")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages6")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages6")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg6")[0].style.display = "none";
});

/* ANIMATION POSSESSION (NICO) */
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[0].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages7")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages7")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages7")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[0].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg7")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[1].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages8")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages8")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages8")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[1].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg8")[0].style.display = "none";
});

document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { transform: "scale(3.50)", },
    { transform: "scale(1)", }
  ], {
    fill: 'forwards',
    duration: 500,
  }
  );
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { opacity: "0.4", },
    { opacity: "1", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginLeft: "33%", },
    { marginLeft: 0, }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("imgptg1b")[2].animate([
    { marginBottom: "-442px", },
    { marginBottom: "-300px", }
  ], {
    fill: 'forwards',
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages9")[0].style.display = "initial";
});
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages9")[0].animate([
    { opacity: "0", },
    { opacity: "0", }
  ], {
    duration: 500,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("descriptionpages9")[0].animate([
    { opacity: "0", },
    { opacity: "1", }
  ], {
    delay: 500,
    fill: 'forwards',
    duration: 200,
  });
},)
document.getElementsByClassName("imgptg1b")[2].addEventListener("click", ()=>{
  document.getElementsByClassName("soustitrepagesimg9")[0].style.display = "none";
});