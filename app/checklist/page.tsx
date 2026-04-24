"use client";

import { useState } from "react";

export default function ChecklistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      industry: formData.get("industry"),
      audience: formData.get("audience"),
      offer: formData.get("offer"),
      timeline: formData.get("timeline"),
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company") || "(not provided)",
      submitted_at: new Date().toISOString()
    };

    console.log("Checklist submission:", data);
    setSubmitted(true);

    setTimeout(() => {
      window.location.href = "https://buy.stripe.com/cNi8wR0wZd8lePh01cbsc00";
    }, 1500);
  };

  const containerStyles = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
    padding: "20px"
  };

  const formContainerStyles = {
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
    padding: "40px"
  };

  const headerStyles = {
    textAlign: "center" as const,
    marginBottom: "30px",
    borderBottom: "2px solid #f0f0f0",
    paddingBottom: "20px"
  };

  const h1Styles = {
    fontSize: "1.8em",
    color: "#10b981",
    marginBottom: "8px"
  };

  const taglineStyles = {
    color: "#666",
    fontSize: "0.95em",
    maxWidth: "500px",
    margin: "0 auto"
  };

  const successMessageStyles = {
    backgroundColor: "#d1fae5",
    color: "#065f46",
    padding: "15px",
    borderLeft: "4px solid #10b981",
    marginBottom: "25px",
    borderRadius: "4px",
    fontSize: "0.9em"
  };

  const systemsBoxStyles = {
    backgroundColor: "#f9fafb",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "25px",
    fontSize: "0.9em",
    color: "#555"
  };

  const formStyles = {
    display: "flex" as const,
    flexDirection: "column" as const,
    gap: "15px"
  };

  const labelStyles = {
    display: "block" as const,
    marginBottom: "5px",
    fontSize: "0.9em",
    fontWeight: "500" as const,
    color: "#333"
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontFamily: "inherit"
  };

  const buttonStyles = {
    backgroundColor: "#10b981",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "1em",
    fontWeight: "600" as const,
    cursor: "pointer",
    transition: "background 0.3s",
    opacity: isSubmitting ? 0.6 : 1
  };

  const footerStyles = {
    marginTop: "30px",
    paddingTop: "30px",
    borderTop: "1px solid #f0f0f0",
    fontSize: "0.85em",
    color: "#666"
  };

  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <header style={headerStyles}>
          <h1 style={h1Styles}>MarketingAI Go-Live Checklist</h1>
          <p style={taglineStyles}>
            Understand what MarketingAI delivers — three working systems, step-by-step. Your personalized checklist:
          </p>
        </header>

        {submitted && (
          <div style={successMessageStyles}>
            ✓ <strong>Checklist submitted!</strong> Redirecting to payment in a moment...
          </div>
        )}

        <div style={systemsBoxStyles}>
          <p><strong>You will receive these three systems:</strong></p>
          <ul style={{ listStyle: "none", padding: "10px 0 0 0", margin: "0" }}>
            <li style={{ marginBottom: "8px" }}>✓ <strong>AI Content Engine:</strong> 30-day LinkedIn calendar + 4 content themes</li>
            <li style={{ marginBottom: "8px" }}>✓ <strong>Outbound Lead Sequence:</strong> Connection template + 2-message DM follow-up</li>
            <li>✓ <strong>Email Nurture Sequence:</strong> 3-email series (intro, value, CTA)</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} style={formStyles}>
          <div>
            <label style={labelStyles}>Industry / Business Type *</label>
            <select name="industry" required style={inputStyles}>
              <option value="">Select your industry</option>
              <option value="Finance">Finance / Mortgage Brokers</option>
              <option value="Legal">Legal / Immigration</option>
              <option value="Health">Allied Health / Wellness</option>
              <option value="Trades">Trades / Contractors</option>
              <option value="Consulting">Consulting / Coaching</option>
              <option value="Services">Professional Services</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label style={labelStyles}>Who is your target customer/audience? *</label>
            <input type="text" name="audience" placeholder="E.g., SME business owners" required style={inputStyles} />
          </div>

          <div>
            <label style={labelStyles}>What do you offer/sell? *</label>
            <input type="text" name="offer" placeholder="E.g., tax advisory" required style={inputStyles} />
          </div>

          <div>
            <label style={labelStyles}>Timeline for implementation *</label>
            <select name="timeline" required style={inputStyles}>
              <option value="">Select timeline</option>
              <option value="ASAP">ASAP (this week)</option>
              <option value="Soon">Soon (this month)</option>
              <option value="Later">Later (next month)</option>
            </select>
          </div>

          <div>
            <label style={labelStyles}>Name *</label>
            <input type="text" name="name" placeholder="Your name" required style={inputStyles} />
          </div>

          <div>
            <label style={labelStyles}>Email *</label>
            <input type="email" name="email" placeholder="your@email.com" required style={inputStyles} />
          </div>

          <div>
            <label style={labelStyles}>Company Name (optional)</label>
            <input type="text" name="company" placeholder="Your company" style={inputStyles} />
          </div>

          <button type="submit" disabled={isSubmitting} style={buttonStyles}>
            {isSubmitting ? "Processing..." : "Submit Checklist → Payment ($149 AUD)"}
          </button>
        </form>

        <footer style={footerStyles}>
          <p><strong>Next step:</strong> After you submit, you will receive a setup confirmation email with:</p>
          <ul style={{ listStyle: "none", padding: "10px 0" }}>
            <li>✓ Your personalised 30-day content calendar.</li>
            <li>✓ Outreach templates for your ICP.</li>
            <li>✓ Email nurture sequence (ready to automate).</li>
            <li>✓ Implementation guide.</li>
          </ul>
          <p style={{ marginTop: "15px" }}>Questions? <a href="https://calendly.com/getmarketingai/30min" style={{ color: "#10b981", textDecoration: "underline" }}>Book a 30-min discovery call</a></p>
        </footer>
      </div>
    </div>
  );
}
