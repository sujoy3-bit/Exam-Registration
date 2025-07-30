const SignupEmail = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Registration Details</title>
</head>
<body style="margin: 0; padding: 0; background-color: #eef2f7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
    
    <div style="background-color: #0052cc; color: #ffffff; padding: 20px 30px;">
      <h2 style="margin: 0;">🎓 Amrita University</h2>
      <p style="margin: 5px 0 0; font-size: 14px;">Empowering Knowledge. Building Future.</p>
    </div>
    
    <div style="padding: 30px;">
      <p style="font-size: 16px; color: #333333;">
        Dear <strong>{{firstName}} {{lastName}}</strong>,
      </p>
      
      <p style="font-size: 15px; color: #444444;">
        Congratulations! Your registration at <strong>Amrita University</strong> has been successfully completed. Below are your login credentials:
      </p>
      
      <table style="width: 100%; margin-top: 20px; border-collapse: collapse; font-size: 15px;">
        <tr style="background-color: #f4f6fb;">
          <td style="padding: 12px; font-weight: bold; color: #333;">Registration Number</td>
          <td style="padding: 12px; color: #333;">{{registrationNumber}}</td>
        </tr>
        <tr style="background-color: #e9edf5;">
          <td style="padding: 12px; font-weight: bold; color: #333;">Password</td>
          <td style="padding: 12px; color: #333;">{{password}}</td>
        </tr>
      </table>

      <p style="margin-top: 25px; background: #fff7e6; padding: 12px 16px; border-left: 4px solid #ffaa00; color: #6b4e00; font-size: 14px; border-radius: 4px;">
        ⚠️ <strong>Important:</strong> Please do not share your registration number or password with anyone. These credentials are used to securely log in to the student portal.
      </p>

      <p style="margin-top: 30px; color: #444;">
        At Amrita University, we provide the best academic environment for our students to thrive. We're excited to have you on this journey with us.
      </p>

      <p style="color: #444;">If you have any questions, feel free to contact our support team at <a href="mailto:support@Amritauniversity.edu" style="color: #0052cc;">support@Amritauniversity.edu</a>.</p>

      <p style="margin-top: 30px; color: #333;">
        Best Regards,<br />
        <strong>Amrita University Admissions Team</strong>
      </p>
    </div>
    
    <div style="background-color: #f0f4f8; padding: 16px 30px; font-size: 12px; text-align: center; color: #666;">
      This is an automated message. Please do not reply to this email.
    </div>
  </div>
</body>
</html>

`

module.exports = {SignupEmail}