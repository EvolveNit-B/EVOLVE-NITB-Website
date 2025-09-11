import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";


export async function POST(request) {
  const { email, token } = await request.json();
  console.log(email, token);

  if (!email || !token) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {

    // creating OAuth2Client
    const OAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URI
    );

    // Setting credentials of OAuth2Client
    OAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });


    // getting access token from OAuth2Client
    const accessToken = await OAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER_2,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Test Ride, Registration Successful avail your token",
      html: `
        <div style="display: flex; align-items: center; justify-content: center;">
            <div style="background-color: #0a0a0a; width: 70%; height: fit-content; border-radius: 0.5rem; margin: 0 auto; overflow: hidden;">
    
            <!-- Header with Logo -->
            <div style="display: flex; height: 20%; width: 100%; align-items: center; justify-content: center; background-color: #16a34a;">
            <img src="https://res.cloudinary.com/dov3p4t9c/image/upload/fl_preserve_transparency/v1754423554/Evolve_Logo_m9pdve.jpg?_s=public-apps" alt="Evolve" style="width: 33%;" />
            </div>

            <!-- Content -->
            <div style="color: #ffffff; font-size: 16px; padding: 1rem;">
            <h2 style="font-size: 2.25rem; font-weight: bold; color: #e5e7eb;">Successfully registered!</h2>
            <p style="padding-top: 1rem; color: #d1d5db;">Dear Sir/Ma'am,<br> <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank you for registering for our test ride. We are thrilled to have you on board and look forward to providing you with an exceptional experience.</span>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Here, Is your token number for Test Ride our EV's</p>

            <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; margin-top: 2.5rem; margin-bottom: 2.5rem; text-align: center;">
              <div>
                <span style="font-size: 1.875rem; font-weight: bold; color: #22c55e;">Token: </span>
                <span style="margin-left: 0.5rem; margin-right: 0.5rem; font-size: 1.875rem; font-weight: bold; font-family: monospace;">&nbsp;${token}</span>
              </div>  
            </div>
            
            <!-- Footer Greeting -->
            <p style="margin-top: 4rem; font-size: 0.875rem; color: #9ca3af;">
                Best regards,<br />
                Team Evolve
            </p>

            <!-- Divider -->
            <hr style="margin-top: 0.5rem; margin-bottom: 0.5rem; border-top: 1px solid #86efac;" />

            <!-- Disclaimer -->
            <div style="font-size: 0.875rem; color: #9ca3af;">
                You’re receiving this email because you registered for test ride via our website. © 2025 Evolve Initiative. All rights reserved.
            </div>
            </div>
        </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}