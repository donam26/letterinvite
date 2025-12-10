const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwJmv7lC9ib3IUOZW65k7Fn_yvTD2v3zlyNq9mtDB6AViPM1agYZmR4XshdY1lPuvBZ/exec'

export async function submitToGoogleSheet(formData) {
  try {
    const response = await fetch(GOOGLE_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    
    // no-cors mode không trả về response body, nhưng nếu không có lỗi thì coi như thành công
    return { success: true }
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error)
    return { success: false, error: error.message }
  }
}
