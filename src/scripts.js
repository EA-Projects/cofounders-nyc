
$(document).ready(function () {
  // Toggle accordion states
  $('#detail-event .accordion .card-header').on('click', function(e){
      e.preventDefault();
      $(this).parent().toggleClass('is-active');
  })

  if ($('#register-form').length) {
    $(function () {
      const scriptURL =
        'https://script.google.com/macros/s/AKfycbyC6RUr0dnxDHUJBlBjwHvEjdfjSBDlULdDgZwQ8aEVVPlrclx21lj7adgVMHQUeS1H/exec';
      const form = document.getElementById('register-form');
  
      form.addEventListener('submit', (e) => {
        $('#register-form').addClass('disabled');
  
        // Sending status
        $('#register-form').addClass('readonly');
        $('#register-form input.button').val("Sending Information");
  
        e.preventDefault();
  
        // Crear FormData para incluir archivo y otros campos
        const formData = new FormData(form);
  
        fetch(scriptURL, { method: 'POST', body: formData })
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

  // Show or hide Startup idea inputs
  $('input[name="startup-idea"]').on('click', function(){
    if ($(this).val() === 'Yes, I already have an idea I’m set on and am looking for a co-founder' ){
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

window.addEventListener('LR_UPLOAD_FINISH', (e) => {
  // console.log(e.detail);
  document.getElementById("headshot-url").value = e.detail.data[0].cdnUrl;
});