# EmailJS Setup Guide

## Steps to Configure EmailJS

### 1. Create an EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account

### 2. Add Email Service
- Go to "Email Services" in your dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the instructions to connect your email
- Note down your **Service ID**

### 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use these template variables in your email template:
  - `{{user_name}}` - Sender's name
  - `{{user_email}}` - Sender's email
  - `{{message}}` - Message content
- Example template:
  ```
  Subject: New Contact Form Message from {{user_name}}
  
  You have received a new message from your portfolio contact form:
  
  Name: {{user_name}}
  Email: {{user_email}}
  
  Message:
  {{message}}
  ```
- Save the template and note down your **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "General"
- Find your **Public Key** (also called User ID)

### 5. Update Contact.js
Open `src/components/Contact.js` and replace these values:
```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### 6. Test Your Form
- Run your app: `npm start`
- Go to the Contact section
- Fill out the form and click "Send Message"
- Check your email inbox for the message

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio websites

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for error messages
- Verify your email service is properly connected in EmailJS dashboard
- Check spam folder if emails aren't arriving
