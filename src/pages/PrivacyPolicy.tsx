import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("Privacy Policy")} - UI Prompt Explorer`;
  }, [t]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="container py-8 max-w-4xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center font-sketch text-doodle-pencil hover:text-doodle-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('notFound.returnHome')}
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-6">{t("Privacy Policy")}</h1>
          
          <div className="prose dark:prose-invert">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how UI Prompt Explorer collects, uses, and discloses your information when you use our service. We respect your privacy and are committed to protecting your personal data.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Information We Collect</h2>
            <p>
              When you use UI Prompt Explorer, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal information you provide directly (name, email address, etc.)</li>
              <li>Usage data (how you interact with our service)</li>
              <li>Device information (browser type, IP address, etc.)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining our service</li>
              <li>Improving and personalizing your experience</li>
              <li>Communicating with you about updates or changes</li>
              <li>Analyzing usage patterns to enhance our service</li>
              <li>Detecting and preventing fraud or abuse</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Data Sharing and Disclosure</h2>
            <p>
              We may share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety or the rights and safety of our users</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to or restrict processing of your information</li>
              <li>The right to data portability</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">7. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at privacy@doodleui-themes.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 