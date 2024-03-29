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
import { InteriorLayout } from './layouts/InteriorLayout'
import { LegalLayout } from './layouts/LegalLayout/LegalLayout'

const Routes = () => {
  return (
    <Router>
      {/* interior pages */}
      <Set wrap={InteriorLayout}>
        <Route path="/support" page={SupportPage} name="support" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/student-discount" page={StudentDiscountPage} name="studentDiscount" />
        <Route path="/articles" page={ArticlesPage} name="articles" />
        <Route path="/article/{slug}" page={IndividualArticlePage} name="individualArticle" />
        <Route path="/livestreams" page={LivestreamsPage} name="livestreams" />
        <Route path="/podcasts" page={PodcastsPage} name="podcasts" />
      </Set>
      {/* login pages */}
      {/*
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      */}
      {/* legal pages */}
      <Set wrap={LegalLayout}>
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
        <Route path="/terms-and-conditions" page={TermsAndConditionsPage} name="termsAndConditions" />
        <Route path="/privacy-policy" page={PrivacyPolicyPage} name="privacyPolicy" />
        <Route path="/money-back" page={MoneyBackPage} name="moneyBack" />
      </Set>
      {/* landing page */}
      <Set wrap={LandingPageLayout}>
        {/* february 2023 - full stack fast track */}
        <Route path="/fast-track-confirm" page={FastTrackConfirmPage} name="fastTrackConfirm" />
        <Route path="/fast-track-replay" page={FastTrackReplayPage} name="fastTrackReplay" />
        <Route path="/fast-track-thanks" page={FastTrackThanksPage} name="fastTrackThanks" />
        <Route path="/fast-track" page={FastTrackPage} name="fastTrack" />

        {/* masterclass - recession proof your career */}
        <Route path="/masterclass" page={MasterclassPage} name="leadMagnet" />
        <Route path="/masterclass-thanks" page={MasterclassThanksPage} name="masterclassThanks" />
        <Route path="/masterclass-confirm" page={MasterclassConfirmPage} name="masterclassConfirm" />
        <Route path="/masterclass-replay" page={MasterclassReplayPage} name="masterclassReplay" />

        {/* course landing page */}
        <Route path="/%20" page={LandingPage} name="landing" />
        <Route path="/" page={LandingPage} name="landing" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
