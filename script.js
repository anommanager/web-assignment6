$(document).ready(function () {
  console.log("jQuery is ready!");
});

$(function () {
  $("#changeText").click(function () {
    $("#greeting").text("[REMOVED]");
  });

  let dark = false;
  $("#changeTheme").click(function () {
    dark = !dark;
    if (dark) {
      $("body").css("color", "white");
      $("body").css("background-color", "black");
    } else {
      $("body").css("color", "black");
      $("body").css("background-color", "white");
    }
  });

  $("#hideBtn").click(function () {
    $("#status, #funFacts").hide();
  });
  $("#showBtn").click(function () {
    $("#status, #funFacts").show();
  });
  $("#toggleBtn").click(function () {
    $("#status, #funFacts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $(".gallery-img").fadeIn();
  });
  $("#fadeOutBtn").click(function () {
    $(".gallery-img").fadeOut();
  });
  $("#fadeToggleBtn").click(function () {
    $(".gallery-img").fadeToggle();
  });

  $(".panel-title").click(function () {
    $(this).next(".panel").slideToggle();
  });

  function getSkill() {
    const skill = $("#skillInput").val().trim();

    if (skill === "") {
      alert("please enter a skill!");
      return null;
    }

    return skill;
  }

  function makeSkillItem(skill) {
    const level = Math.floor(Math.random() * 51) + 40;
    const width = skillsShown ? level + "%" : 0;
    const $li = $("<li class='skill-item'></li>").text(skill);
    $li.append(
      $("<div class='bar-container'></div>").append(
        $("<div class='bar'></div>").data("level", level).css("width", width),
      ),
    );
    return $li;
  }

  $("#addSkillBtn").click(function () {
    const skill = getSkill();

    if (skill) {
      $("#skill-list").append(makeSkillItem(skill));
      clearInput();
    }
  });

  function clearInput() {
    $("#skillInput").val("").focus();
  }

  $("#prependSkillBtn").click(function () {
    const skill = getSkill();

    if (skill) {
      $("#skill-list").prepend(makeSkillItem(skill));
      clearInput();
    }
  });

  $("#removeSkillBtn").click(function () {
    $("#skill-list li").last().remove();
  });

  $("#changeLinkBtn").click(function () {
    $(".link")
      .attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .text("My LinkedIn");
    $(this).text("Link changed!");
  });

  $("#nameInput").on("input", function () {
    $("#namePreview").text($(this).val());
  });

  $("#emailInput").on("input", function () {
    $("#emailPreview").text($(this).val());
  });

  let skillsShown = false;

  $("#animateSkillsBtn").click(function () {
    if (!skillsShown) {
      $(".bar").each(function () {
        const level = $(this).data("level");
        $(this)
          .stop()
          .animate({ width: level + "%" }, 1000);
      });
      $(this).text("Reset Skills");
    } else {
      $(".bar").stop().animate({ width: 0 }, 800);
      $(this).text("Animate My Skills");
    }
    skillsShown = !skillsShown;
  });
});
