$(document).ready((function(){gsap.timeline({paused:!1,repeat:-1}).fromTo("#hero .area-image .lines-group .line",{width:"0",opacity:.5},{width:"random(10, 50)",opacity:1,ease:"power1.inOut",stagger:"random(0, 3)",duration:"random(1, 3)",delay:"random(0, 3)"}).to("#hero .area-image .lines-group .line",{ease:"power1.inOut",width:"0",opacity:0,stagger:"random(0, 3)",duration:"random(0, 3)"});let e=gsap.timeline({paused:!1,repeat:-1});e.from("#hero .area-image .people-group .people-profile",{y:50,opacity:0,ease:"power1.inOut",duration:.5,delay:"random(0, 0.5)"}).to("#hero .area-image .people-group .people-profile",{delay:3,y:50,opacity:0,ease:"power1.inOut",duration:.3,stagger:{amount:1,from:"random"}}),$("#hero .area-image .people-group .people-profile").on("mouseenter",(function(){e.pause()})),$("#hero .area-image .people-group .people-profile").on("mouseleave",(function(){e.play()})),$("#register-form").length&&$((function(){const e=document.getElementById("register-form");e.addEventListener("submit",(o=>{$("#register-form").addClass("disabled"),o.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbxNULZFqGAUH9IxyVx5LCJpdqhR7yjVvJpy-YYfIS7h983WGdQwU-svISEtFj0BobHV/exec",{method:"POST",body:new FormData(e)}).then((e=>{$("#success-message").fadeIn(),$("#register-form").addClass("readonly"),$("#register-form input.button").val("Submitted")})).catch((e=>{console.error("Error!",e.message),$("#success-message").fadeOut(),$("#register-form").removeClass("readonly"),$("#register-form input.button").val("Submit Information")}))}))})),$("input#other-skill").on("click",(function(){$("#other-skills").removeAttr("disabled").fadeIn()})),$("input#other-cofounder-skills").on("click",(function(){$("#other-cofounder-skills-description").removeAttr("disabled").fadeIn()})),$('input[name="currently-working"]').on("click",(function(){"Yes"===$(this).val()?$("#currently-working").fadeIn():$("#currently-working").fadeOut()})),$('input[name="startup-idea"]').on("click",(function(){"Yes, I already have an idea I’m set on and am looking for a co-founder who can help me build it"===$(this).val()?$("#startup-idea-description").fadeIn():$("#startup-idea-description").fadeOut()})),jQuery((e=>{let o=e(".skill-group :checkbox").on("change",(function(){let r=o.filter(":checked").map(((e,o)=>o.value)).get().join(", ");e("#skill-results").val(r&&""+r)})),r=e(".sector-group :checkbox").on("change",(function(){let o=r.filter(":checked").map(((e,o)=>o.value)).get().join(", ");e("#sector-results").val(o&&""+o)})),t=e(".skill-cofounder :checkbox").on("change",(function(){let o=t.filter(":checked").map(((e,o)=>o.value)).get().join(", ");e("#cofounder-skill-results").val(o&&""+o)}))}))}));