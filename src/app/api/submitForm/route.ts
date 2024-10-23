import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import path from 'path';

const SPREADSHEET_ID = '1T60ghiLHKZFS6YZtUz99BS5aCtvpzHBEh4vrmG5H-A0'; // Replace with your Google Sheet ID

export async function POST(req: NextRequest) {
  const { name, email } = await req.json(); // Parse the request body

  try {
    // Use the path module to ensure the correct path is resolved
    const keyFilePath = path.join(process.cwd(), 'src/app/api/submitForm/neuzify-15174891dfb7.json');

    // Load the service account credentials
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath, // Path to your JSON file
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const client = await auth.getClient();
    const sheets = google.sheets({ version: 'v4', auth: client as any });

    // Append the form data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:C', // Adjust the range according to your sheet setup
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email]], // Values to append
      },
    });

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
