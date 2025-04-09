import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `${t("Terms of Service")} - UI Prompt Explorer`;
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
          
          <h1 className="text-3xl font-bold mb-6">{t("Terms of Service")}</h1>
          
          <div className="prose dark:prose-invert">
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using UI Prompt Explorer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Description of Service</h2>
            <p>
              UI Prompt Explorer provides a platform for browsing, downloading, and using UI themes for various applications. The themes available on our platform are provided "as is" and "as available."
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">3. User Accounts</h2>
            <p>
              Some features of our service may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
            <p>
              All content on UI Prompt Explorer, including but not limited to themes, designs, text, graphics, logos, and software, is the property of UI Prompt Explorer or its content suppliers and is protected by international copyright laws.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">5. User Conduct</h2>
            <p>
              You agree not to use UI Prompt Explorer for any unlawful purpose or in any way that could damage, disable, or impair the service. You may not attempt to gain unauthorized access to any part of the service or any systems or networks connected to UI Prompt Explorer.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">6. Limitation of Liability</h2>
            <p>
              UI Prompt Explorer shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or use of or inability to access or use the service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify users of any changes by updating the date at the top of this page. Your continued use of UI Prompt Explorer after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at support@doodleui-themes.com.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService; 