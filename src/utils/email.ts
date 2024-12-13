import emailjs from '@emailjs/browser';

// EmailJS credentials
const PUBLIC_KEY = 'Wa3XCXB0ylCwU5XR8';
const SERVICE_ID = 'service_z9lvdxf';
const TEMPLATE_ID = 'template_xw8zn68';

// Initialize EmailJS with your public key
emailjs.init(PUBLIC_KEY);

interface EmailParams {
  form_type?: string;
  partnerName?: string;
  clientName?: string;
  companyName?: string;
  position?: string;
  email?: string;
  phone?: string;
  rolesNeeded?: string;
  notes?: string;
  [key: string]: string | undefined;
}

export const sendEmail = async (templateParams: EmailParams) => {
  try {
    console.log('Sending email with params:', templateParams);
    
    // Create a form element for EmailJS
    const form = document.createElement('form');
    Object.keys(templateParams).forEach(key => {
      if (key === 'notes' || key === 'rolesNeeded') {
        // Use textarea for longer text fields
        const textarea = document.createElement('textarea');
        textarea.name = key;
        textarea.value = templateParams[key] || '';
        form.appendChild(textarea);
      } else {
        const input = document.createElement('input');
        input.name = key;
        input.value = templateParams[key] || '';
        form.appendChild(input);
      }
    });

    const response = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      form,
      PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error: any) {
    console.error('Detailed error:', {
      message: error.message,
      name: error.name,
      stack: error.stack,
      error
    });
    throw error;
  }
};
