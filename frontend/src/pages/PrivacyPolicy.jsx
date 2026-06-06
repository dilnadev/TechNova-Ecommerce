export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-14">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: June 2026</p>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">1. Information We Collect</h2>
            <p>When you use TechNova, we collect information you provide directly such as your name, email address, phone number, and delivery address. We also collect usage data including pages visited, products viewed, and purchase history.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process and fulfil your orders</li>
              <li>To send order confirmations and delivery updates</li>
              <li>To improve our website and product offerings</li>
              <li>To send promotional emails (you can opt out at any time)</li>
              <li>To prevent fraud and ensure account security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">3. Data Storage & Security</h2>
            <p>Your data is stored securely on our servers. We use industry-standard encryption (SSL/TLS) to protect your personal information during transmission. Passwords are hashed and never stored in plain text.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">4. Sharing of Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers (e.g. delivery partners) solely to fulfil your orders. These parties are obligated to keep your information confidential.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">5. Cookies</h2>
            <p>We use cookies to enhance your browsing experience, remember your preferences, and analyse website traffic. You can disable cookies in your browser settings, though some features of the website may not function properly.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at <a href="mailto:support@technova.com" className="text-primary hover:underline">support@technova.com</a>. We will respond within 7 business days.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. TechNova is not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any external sites you visit.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised date. Continued use of the website after changes are made constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-800 mb-2">9. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@technova.com" className="text-primary hover:underline">support@technova.com</a> or call <span className="font-medium">(+91) 3456789563</span>.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
