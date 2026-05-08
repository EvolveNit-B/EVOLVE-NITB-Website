# API Routes

The frontend makes three API calls via Axios. Route handlers live in `src/app/api/` following Next.js App Router conventions (each endpoint is a `route.js` file inside a named folder).

---

## `POST /api/contact-us`

**Called by:** `Contact.jsx` (contact form on the home page)

**Payload**

```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Behavior**
Sends an email notification using Nodemailer with the submitted form data. Returns a success or error response that the frontend uses to show a React Hot Toast notification.

---

## Dependencies Used by API Routes

| Package | Purpose |
|---|---|
| `nodemailer` | SMTP email sending for contact form emails |
| `mongoose` | MongoDB ODM for storing data |
| `jsonwebtoken` | Signing and verifying JWT tokens |

---

## Error Handling

API routes should return standard HTTP status codes:
- `200` — success
- `400` — bad request / missing fields
- `500` — server error

The frontend (`Contact.jsx`) handles both success and error states and displays the appropriate toast message.
