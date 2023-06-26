$(document).ready(() => {
    let currentStep = 1;
  
    $('#nextBtn').click(() => {
      currentStep++;
      showStep(currentStep);
    });
  
    $('#prevBtn').click(() => {
      currentStep--;
      showStep(currentStep);
    });
  
    const showStep = (step) => {
      $('#step1').hide();
      $('#step2').hide();
      $('#step3').hide();
      $('#editBtn').hide();
  
      if (step === 1) {
        $('#step1').show();
        $('#prevBtn').hide();
      } else if (step === 2) {
        $('#step2').show();
        $('#prevBtn').show();
      } else if (step === 3) {
        $('#step3').show();
        $('#nextBtn').hide();
        $('#editBtn').show();
      }
    };
  
    $('#editBtn').click(() => {
      // Perform any action you want when the "Start Editing" button is clicked
      // For example, you can redirect to the editing page or trigger a function to enable editing mode
      // Replace the alert with your desired action
      alert('Editing mode activated!');
    });
  });