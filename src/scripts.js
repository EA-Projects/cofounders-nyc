
$(document).ready(function () {
  if ($('#hero.is-homepage').length) {
    // Trigger Animations only con Desktop
    // HERO SECTION 
    let heroLines = gsap.timeline({paused: false, repeat: -1});
    heroLines
    .fromTo("#hero .area-image .lines-group .line",{
      width: '0',
      opacity: .5,
    },{
      width: 'random(10, 50)',
      opacity: 1,
      ease: "power1.inOut",
      stagger: "random(0, 3)",
      duration: "random(1, 3)",
      delay: "random(0, 3)"
    }).to("#hero .area-image .lines-group .line", {
      ease: "power1.inOut",
      width: '0',
      opacity: 0,
      stagger: "random(0, 3)",
      duration: "random(0, 3)",
    })
    let heroPeople = gsap.timeline({paused: false, repeat: -1});
    heroPeople
    .from("#hero .area-image .people-group .people-profile",{
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      duration: .5,
      delay: "random(0, 0.5)",
    }).to("#hero .area-image .people-group .people-profile",{
      delay: 3,
      y: 50,
      opacity: 0,
      ease: "power1.inOut",
      duration: .3,
      stagger: {
        amount: 1,
        from: "random"
      }
    })

    $("#hero .area-image .people-group .people-profile").on("mouseenter", function() {
      heroPeople.pause();
    });
    $("#hero .area-image .people-group .people-profile").on("mouseleave", function() {
      heroPeople.play();
    });
  }
  


  if ($('#register-form').length) {
    $(function () {
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbxNULZFqGAUH9IxyVx5LCJpdqhR7yjVvJpy-YYfIS7h983WGdQwU-svISEtFj0BobHV/exec';
      const form = document.getElementById('register-form');
      form.addEventListener('submit', (e) => {
        $('#register-form').addClass('disabled');
    
        e.preventDefault();
    
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then((response) => {
            $('#success-message').fadeIn();
            $('#register-form').addClass('readonly');
            $('#register-form input.button').val("Submitted");
          })
          .catch((error) => {
            console.error('Error!', error.message);
            $('#success-message').fadeOut();
            $('#register-form').removeClass('readonly');
            $('#register-form input.button').val("Submit Information");
          });
      });
    });
  }


  // Show textarea inputs, when users select "Other" option
  $('input#other-skill').on('click', function(){
    $('#other-skills').removeAttr('disabled').fadeIn();
  });
  
  $('input#other-cofounder-skills').on('click', function(){
    $('#other-cofounder-skills-description').removeAttr('disabled').fadeIn();
  });


    // Show or hide Currently working inputs
  $('input[name="currently-working"]').on('click', function(){
    if ($(this).val() === 'Yes' ){
      $('#currently-working').fadeIn();
    } else{
      $('#currently-working').fadeOut();
    }
  })

  // Show or hide Startup idea inputs
  $('input[name="startup-idea"]').on('click', function(){
    if ($(this).val() === 'Yes, I already have an idea I’m set on and am looking for a co-founder who can help me build it' ){
      $('#startup-idea-description').fadeIn();
    } else{
      $('#startup-idea-description').fadeOut();
    }
  })

  jQuery($ => {
    // Add checkbox value to text field 
    // SKILL RESULTS
    let $checkSkills = $(".skill-group :checkbox").on("change", function() {
      let string = $checkSkills.filter(":checked").map((i, el) => el.value).get().join(", ");
      $("#skill-results").val(string && "" + string);
    });
    // SECTOR RESULTS
    let $checkSectors = $(".sector-group :checkbox").on("change", function() {
      let string = $checkSectors.filter(":checked").map((i, el) => el.value).get().join(", ");
      $("#sector-results").val(string && "" + string);
    });
    // COFOUNDER SKILL RESULTS
    let $checkCofounderSkill = $(".skill-cofounder :checkbox").on("change", function() {
      let string = $checkCofounderSkill.filter(":checked").map((i, el) => el.value).get().join(", ");
      $("#cofounder-skill-results").val(string && "" + string);
    });
  });
  // END WINDOW READY
});