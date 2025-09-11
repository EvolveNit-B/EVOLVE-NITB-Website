import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";


export async function POST(request) {
  const { name, email, message, subject } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_TO,
      subject: `New Contact Form Submission from ${name} Subject : ${subject}`,
      html: `
        <div style="display: flex; align-items: center; justify-content: center;">
          <div style="background-color: #0a0a0a; width: 70%; height: fit-content; border-radius: 0.5rem; margin: auto; overflow: hidden;">
            <div style="display: flex; height: 20%; width: 100%; align-items: center; justify-content: center; background-color: #16a34a;">
              <img src="https://res.cloudinary.com/dov3p4t9c/image/upload/fl_preserve_transparency/v1754423554/Evolve_Logo_m9pdve.jpg?_s=public-apps" alt="Evolve" style="width: 33.333333%;" />
            </div>
            <div style="font-size: 1rem; padding: 1rem; color: #ffffff;">
              <h2 style="font-size: 2.25rem; font-weight: 700; color: #fafafa;">New Contact Form Submission</h2>
              <p style="padding-top: 1rem; color: #86efac;">Contact Details:</p>
              <ul style="margin-top: 0.5rem; color: #e5e5e5;">
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Message:</strong> ${message}</li>
              </ul>
              <p style="margin-top: 2rem; font-size: 0.875rem; color: #d4d4d4;">This is an automated notification from the Evolve website contact form.</p>
              <hr style="margin-top: 0.5rem; margin-bottom: 0.5rem; color: #86efac;" />
              <div style="font-size: 0.875rem; color: #d4d4d4;">© 2025 Evolve Initiative. All rights reserved.</div>
            </div>
          </div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Evolve NITB",
      html: `
        <div style="display: flex; align-items: center; justify-content: center;">
    <div style="background-color: #0a0a0a; width: 70%; height: fit-content; border-radius: 0.5rem; margin: auto; overflow: hidden;">
        <div style="display: flex; height: 20%; width: 100%; align-items: center; justify-content: center; background-color: #16a34a;">
            <img src="https://res.cloudinary.com/dov3p4t9c/image/upload/fl_preserve_transparency/v1754423554/Evolve_Logo_m9pdve.jpg?_s=public-apps" alt="Evolve" style="width: 33.333333%;" />
        </div>
        <div style="font-size: 1rem; padding: 1rem; color: #ffffff;">
            <h2 style="font-size: 2.25rem; font-weight: 700; color: #fafafa;">Thank You for Reaching Out!</h2>
            <p style="padding-top: 1rem; color: #86efac;">Hi ${name},</p>
            <p style="margin-top: 0.5rem; text-indent: 3.5rem; color: #e5e5e5;">Thank you for contacting us at <strong>Evolve</strong>. We’ve received your message and our team will get back to you as soon as possible.</p>
            <p style="color: #e5e5e5;">Whether you’re interested in EV innovation, upcoming events, or future collaborations, we’re excited to connect with you!</p>
            <p style="color: #e5e5e5;">In the meantime, feel free to explore more about us on our website or follow us on social media.</p>
            <p style="margin-top: 4rem; font-size: 0.875rem; color: #d4d4d4;">
                Best regards,<br />
                Team Evolve ⚡
            </p>
            <div style="display: flex; gap: 0.5rem; padding-top: 0.5rem;">
                <a href="https://www.instagram.com/evolve_nitb/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" style="height: 1rem; width: 1rem;">
                        <path fill="#fff" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/evolve-nit-bhopal/posts/?feedView=all">
                    <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" style="height: 1rem; width: 1rem;">
                        <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" />
                    </svg>
                </a>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" style="height: 1.15625rem; width: 1.15625rem;">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                </a>
            </div>
            <hr style="margin-top: 0.5rem; margin-bottom: 0.5rem; color: #86efac;" />
            <div style="font-size: 0.875rem; color: #d4d4d4;">You’re receiving this email because you contacted us via our website. © 2025 Evolve Initiative. All rights reserved.</div>
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
