export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-gray-900">Privacy Policy</h1>
          <p className="text-base text-gray-600 mb-8">Last updated: August 2025</p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">1. Introduction</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Vibe 31 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you enroll in the 
                Vibe 31 Challenge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">2. Information We Collect</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">Name and email address</li>
                <li className="text-base text-gray-700">Discord username (for community access)</li>
                <li className="text-base text-gray-700">Payment information (processed securely through Stripe)</li>
                <li className="text-base text-gray-700">Business information you share during the program</li>
                <li className="text-base text-gray-700">Communication preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">3. How We Use Your Information</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">Provide access to the Vibe 31 Challenge program</li>
                <li className="text-base text-gray-700">Send course materials and updates</li>
                <li className="text-base text-gray-700">Manage your Discord community access</li>
                <li className="text-base text-gray-700">Process payments and send receipts</li>
                <li className="text-base text-gray-700">Respond to your questions and support requests</li>
                <li className="text-base text-gray-700">Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">4. Data Sharing</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">
                  <strong>Service Providers:</strong> Stripe for payment processing, ConvertKit for email delivery, 
                  Discord for community platform
                </li>
                <li className="text-base text-gray-700">
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">5. Data Security</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">6. Your Rights</h2>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-base text-gray-700">Access your personal data</li>
                <li className="text-base text-gray-700">Correct inaccurate data</li>
                <li className="text-base text-gray-700">Request deletion of your data</li>
                <li className="text-base text-gray-700">Opt-out of marketing communications</li>
                <li className="text-base text-gray-700">Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">7. Cookies</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                being sent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">8. Third-Party Links</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">9. Children&apos;s Privacy</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                The Vibe 31 Challenge is not intended for individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">10. Changes to This Policy</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting 
                the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black mb-4 text-gray-900">11. Contact Us</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                If you have questions about this privacy policy, please contact us at:<br />
                Email: privacy@vibe31.com<br />
                Address: Vancouver, BC, Canada
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}