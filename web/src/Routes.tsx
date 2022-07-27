// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import { LandingPageLayout } from './layouts/LandingPageLayout'
import { LegalLayout } from './layouts/LegalLayout/LegalLayout'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage'
import TermsAndConditionsPage from './pages/TermsAndConditionsPage/TermsAndConditionsPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/article/{slug}" page={IndividualArticlePage} name="article" />
      <Route path="/articles" page={ArticlesPage} name="articles" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      {/* legal pages */}
      <Set wrap={LegalLayout}>
        <Route path="/terms-and-conditions" page={TermsAndConditionsPage} name="termsAndConditions" />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" />
      </Set>
      {/* landing page */}
      <Set wrap={LandingPageLayout}>
        <Route path="/" page={LandingPage} name="landing" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
