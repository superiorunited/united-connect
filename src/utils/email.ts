import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('Wa3XCXB0ylCwU5XR8');

export const sendEmail = async (templateParams: any) => {
  try {
    console.log('Sending email with params:', templateParams);
    
    // Create a form element for EmailJS
    const form = document.createElement('form');
    Object.keys(templateParams).forEach(key => {
      if (key === 'experience' || key === 'message') {
        // Use textarea for longer text fields
        const textarea = document.createElement('textarea');
        textarea.name = key;
        textarea.value = templateParams[key];
        form.appendChild(textarea);
      } else {
        const input = document.createElement('input');
        input.name = key;
        input.value = templateParams[key];
        form.appendChild(input);
      }
    });

    const response = await emailjs.sendForm(
      'service_z9lvdxf',
      'template_snwepl7',
      form,
      'Wa3XCXB0ylCwU5XR8'
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      error
    });
    throw error;
  }
};
