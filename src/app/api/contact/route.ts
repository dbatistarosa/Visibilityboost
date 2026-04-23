import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { fname, lname, email, phone, business, industry, challenge } = await req.json()

  try {
    await resend.emails.send({
      from: 'VisibilityBoost <onboarding@resend.dev>',
      to: 'Dbatistarosa89@gmail.com',
      subject: `New Free Audit Request — ${business}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#080f1e">New Free Audit Request</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#555;font-weight:bold;width:180px">Name</td><td style="padding:8px 0">${fname} ${lname}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-weight:bold">Email</td><td style="padding:8px 0">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-weight:bold">Phone</td><td style="padding:8px 0">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-weight:bold">Business</td><td style="padding:8px 0">${business}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-weight:bold">Industry</td><td style="padding:8px 0">${industry || 'Not specified'}</td></tr>
            <tr><td style="padding:8px 0;color:#555;font-weight:bold;vertical-align:top">Marketing Challenge</td><td style="padding:8px 0">${challenge || 'Not provided'}</td></tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 })
  }
}
