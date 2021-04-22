const chat = $(".chat");
const director = $(".director-container");

var slaam = new Audio('slaam.m4a');
var kefak = new Audio('kefak.m4a');
var mnWen1 = new Audio('mnwain1.m4a');
var mnWen2 = new Audio('mnwain2.m4a');
var sakeen = new Audio('sakin.m4a');
var alasm = new Audio('shoAsmk.m4a');

if (annyang) {
  annyang.addCallback(
    "resultMatch",
    function (userSaid, commandText, phrases) {
      console.log("Correct");
      console.log(userSaid);
      console.log(phrases);
    }
  );

  annyang.addCallback(
    "resultNoMatch",
    function (userSaid, commandText, phrases) {
      console.log("wrong");
      console.log(userSaid);
      console.log(phrases);
    }
  );

  annyang.start({ autoRestart: false });
  annyang.start({ autoRestart: false, continuous: false });
  annyang.setLanguage("ar-JO");
  slaam.play();
  annyang.addCommands({
    اهلين: () => {
      chat.append('<div class="msg user"> أهلين </div>');
      director.html("");
      setTimeout(() => {
        kefak.play();
        chat.append('<div class="msg bot"> كيف حالك؟ </div>');
      }, 2000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>تمام</span> <span>الحمدلله</span><span>عايشين</span></div>'
        );
      }, 2000);
    },
    وعليكمالسلام: () => {
      chat.append('<div class="msg user"> وعليكم السلام </div>');
      director.html("");
      setTimeout(() => {
        kefak.play();
        chat.append('<div class="msg bot"> كيف حالك؟ </div>');
      }, 2000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>تمام</span> <span>الحمدلله</span><span>عايشين</span></div>'
        );
      }, 2000);
    }
  });
  annyang.addCommands({
    تمام: () => {
      chat.append('<div class="msg user">تمام </div>');
      director.html("");

      setTimeout(() => {
        alasm.play();
        chat.append('<div class="msg bot"> شو أسمك </div>');
      }, 3000);
    },
    عايشين: () => {
      chat.append('<div class="msg user"> عايشين </div>');
      director.html("");

      setTimeout(() => {
        alasm.play();
        chat.append('<div class="msg bot"> شو أسمك </div>');
      }, 3000);
    },
    الحمدلله: () => {
      chat.append('<div class="msg user"> الحمدلله </div>');
      director.html("");

      setTimeout(() => {
        alasm.play();
        chat.append('<div class="msg bot"> شو أسمك </div>');
      }, 3000);
    }
  });

  annyang.addCommands({
    خالد: () => {
      chat.append('<div class="msg user">خالد </div>');
      director.html("");
      setTimeout(() => {
        mnWen1.play();
        chat.append('<div class="msg bot"> يا هلا أتشرفنا, من وين أنت؟ </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>شمال</span> <span>مركز</span><span>جنوب</span></div>'
        );
      }, 3000);
    },
    محمود: () => {
      chat.append('<div class="msg user"> محمود </div>');
      director.html("");
      setTimeout(() => {
        mnWen1.play();
        chat.append('<div class="msg bot"> يا هلا أتشرفنا, من وين أنت؟ </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>شمال</span> <span>مركز</span><span>جنوب</span></div>'
        );
      }, 3000);
    },
    ينيف: () => {
      chat.append('<div class="msg user"> ينيف </div>');
      director.html("");
      setTimeout(() => {
        mnWen1.play();
        chat.append('<div class="msg bot"> يا هلا أتشرفنا, من وين أنت؟ </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>شمال</span> <span>مركز</span><span>جنوب</span></div>'
        );
      }, 3000);
    }
  });
  annyang.addCommands({
    شمال: () => {
      chat.append('<div class="msg user">الشمال </div>');
      director.html("");
      setTimeout(() => {
        mnWen2.play();
        chat.append('<div class="msg bot"> من وين من الشمال؟ </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>طمره</span><span>حيفا</span></div>'
        );
      }, 2000);
      annyang.addCommands({
        حيفا: () => {
          chat.append('<div class="msg user">حيفا </div>');
          director.html("");

          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        },
        طمره: () => {
          chat.append('<div class="msg user"> طمره </div>');
          director.html("");
          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        }
      });
      $("#skitt-toggle-button").hide();
    },
    مركز: () => {
      chat.append('<div class="msg user"> مركز </div>');
      director.html("");
      setTimeout(() => {
        mnWen2.play();
        chat.append('<div class="msg bot"> من وين من المركز؟ </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>تل أبيب</span> <span>القدس</span>'
        );
      }, 2000);
      annyang.addCommands({
        تلابيب: () => {
          chat.append('<div class="msg user"> تل أبيب </div>');
          director.html("");

          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        },
        القدس: () => {
          chat.append('<div class="msg user"> القدس </div>');
          director.html("");

          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        }
      });
      $("#skitt-toggle-button").hide();
    },
    جنوب: () => {
      chat.append('<div class="msg user"> الجنوب </div>');
      director.html("");
      setTimeout(() => {
        mnWen2.play();
        chat.append('<div class="msg bot"> من وين من الحنوب </div>');
      }, 3000);
      setTimeout(() => {
        director.html(
          '<div class="msg director">אנא הקליטו... <br> אפשרויות: <span>بيرالسبع</span> <span>رهط</span><span>النقب</span></div>'
        );
      }, 2000);
      annyang.addCommands({
        بيرالسبع: () => {
          chat.append('<div class="msg user">بيرالسبع </div>');
          director.html("");

         setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        },
        رهط: () => {
          chat.append('<div class="msg user"> رهط </div>');
          director.html("");

          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        },
        النقب: () => {
          chat.append('<div class="msg user"> النقب </div>');
          director.html("");

          setTimeout(() => {
            sakeen.play();
            chat.append('<div class="msg bot"> دار خالي ساكنين هناك </div>');
          }, 3000);
        }
      });
      $("#skitt-toggle-button").hide();
    }
  });

  SpeechKITT.annyang();
  SpeechKITT.setStylesheet(
    "https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat-pumpkin.css"
  );
  SpeechKITT.vroom();
}
$("#skitt-listening-text").hide();